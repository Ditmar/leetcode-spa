import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { apiClient, isApiError, setAuthToken } from './apiClient';

import type { ApiError, ApiResponse } from './apiClient.types';

const BASE = '/api';

function mockFetchOk<T>(data: T, meta?: ApiResponse<T>['meta']) {
  return vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => ({ data, ...(meta ? { meta } : {}) }),
  });
}

function mockFetchError(status: number, statusText: string, body?: Record<string, unknown>) {
  return vi.fn().mockResolvedValue({
    ok: false,
    status,
    statusText,
    json: async () =>
      body ?? { code: statusText.toUpperCase().replace(/ /g, '_'), message: statusText },
  });
}

// ---------------------------------------------------------------------------
// Setup / teardown
// ---------------------------------------------------------------------------

beforeEach(() => {
  setAuthToken(null);
  localStorage.clear();
  // Clear auth_token cookie
  document.cookie = 'auth_token=; Max-Age=0';
});

afterEach(() => {
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// GET
// ---------------------------------------------------------------------------

describe('apiClient.get', () => {
  it('returns the parsed ApiResponse on success', async () => {
    const payload = { id: 1, title: 'Two Sum' };
    vi.stubGlobal('fetch', mockFetchOk(payload));

    const result = await apiClient.get<typeof payload>('/problems/1');

    expect(result.data).toEqual(payload);
  });

  it('calls fetch with the correct full URL and GET method', async () => {
    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems');

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(`${BASE}/problems`);
    expect(init.method).toBe('GET');
  });

  it('does NOT set Content-Type on GET requests', async () => {
    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems');

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['Content-Type']).toBeUndefined();
  });

  it('sets credentials: include in browser context', async () => {
    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems');

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(init.credentials).toBe('include');
  });

  it('merges additional headers from RequestConfig', async () => {
    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems', { headers: { 'X-Custom': 'value' } });

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['X-Custom']).toBe('value');
  });

  it('allows overriding credentials via RequestConfig', async () => {
    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems', { credentials: 'same-origin' });

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(init.credentials).toBe('same-origin');
  });
});

// ---------------------------------------------------------------------------
// POST
// ---------------------------------------------------------------------------

describe('apiClient.post', () => {
  it('returns the parsed ApiResponse on success', async () => {
    const created = { id: 99, slug: 'new-problem' };
    vi.stubGlobal('fetch', mockFetchOk(created));

    const result = await apiClient.post<typeof created>('/problems', { title: 'New' });

    expect(result.data).toEqual(created);
  });

  it('serialises the body as JSON and sets Content-Type', async () => {
    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    const body = { title: 'Two Sum', difficulty: 'Easy' };
    await apiClient.post('/problems', body);

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;

    expect(init.method).toBe('POST');
    expect(headers['Content-Type']).toBe('application/json');
    expect(init.body).toBe(JSON.stringify(body));
  });
});

// ---------------------------------------------------------------------------
// PUT / PATCH / DELETE — method propagation
// ---------------------------------------------------------------------------

describe('apiClient method propagation', () => {
  it.each([
    ['put', 'PUT'],
    ['patch', 'PATCH'],
  ] as const)('%s sends the correct HTTP method with a body', async (method, expected) => {
    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient[method]('/problems/1', { difficulty: 'Hard' });

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(init.method).toBe(expected);
  });

  it('delete sends DELETE without a body', async () => {
    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.delete('/problems/1');

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(init.method).toBe('DELETE');
    expect(init.body).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// 4xx error normalisation
// ---------------------------------------------------------------------------

describe('4xx error normalisation', () => {
  it('throws a normalised ApiError for a 404 response', async () => {
    vi.stubGlobal(
      'fetch',
      mockFetchError(404, 'Not Found', { code: 'NOT_FOUND', message: 'Problem not found' })
    );

    await expect(apiClient.get('/problems/999')).rejects.toMatchObject({
      status: 404,
      code: 'NOT_FOUND',
      message: 'Problem not found',
    });
  });

  it('throws a normalised ApiError for a 401 response', async () => {
    vi.stubGlobal(
      'fetch',
      mockFetchError(401, 'Unauthorized', { code: 'UNAUTHORIZED', message: 'Token expired' })
    );

    await expect(apiClient.get('/me')).rejects.toMatchObject({
      status: 401,
      code: 'UNAUTHORIZED',
    });
  });

  it('falls back to statusToCode when the body has no code field', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 403,
        statusText: 'Forbidden',
        json: async () => ({ message: 'Access denied' }),
      })
    );

    await expect(apiClient.get('/admin')).rejects.toMatchObject({
      status: 403,
      code: 'FORBIDDEN',
      message: 'Access denied',
    });
  });
});

// ---------------------------------------------------------------------------
// 5xx error normalisation
// ---------------------------------------------------------------------------

describe('5xx error normalisation', () => {
  it('throws a normalised ApiError for a 500 response', async () => {
    vi.stubGlobal(
      'fetch',
      mockFetchError(500, 'Internal Server Error', {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Something went wrong',
      })
    );

    await expect(apiClient.get('/problems')).rejects.toMatchObject({
      status: 500,
      code: 'INTERNAL_SERVER_ERROR',
    });
  });

  it('uses statusText fallback when error body cannot be parsed as JSON', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 502,
        statusText: 'Bad Gateway',
        json: async () => {
          throw new SyntaxError('Unexpected token');
        },
      })
    );

    await expect(apiClient.get('/problems')).rejects.toMatchObject({
      status: 502,
      code: 'UNKNOWN_ERROR', // 502 not in statusToCode map → UNKNOWN_ERROR
      message: 'Bad Gateway',
    });
  });
});

// ---------------------------------------------------------------------------
// Network errors (fetch throws)
// ---------------------------------------------------------------------------

describe('network errors', () => {
  it('throws a normalised ApiError when fetch rejects with a TypeError', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));

    await expect(apiClient.get('/problems')).rejects.toMatchObject({
      status: 500,
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Failed to fetch',
    });
  });

  it('throws a normalised ApiError with status 0 when the request is aborted', async () => {
    const controller = new AbortController();
    const abortError = new DOMException('The user aborted a request.', 'AbortError');

    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(abortError));
    controller.abort();

    await expect(apiClient.get('/problems', { signal: controller.signal })).rejects.toMatchObject({
      status: 0,
      code: 'UNKNOWN_ERROR',
      message: 'Request was aborted',
    });
  });
});

// ---------------------------------------------------------------------------
// JSON parse failure on 200 response
// ---------------------------------------------------------------------------

describe('JSON parse failure', () => {
  it('throws ApiError with code PARSE_ERROR when a 200 body is not valid JSON', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => {
          throw new SyntaxError('Unexpected token < in JSON');
        },
      })
    );

    await expect(apiClient.get('/problems')).rejects.toMatchObject({
      status: 500,
      code: 'PARSE_ERROR',
    });
  });
});

// ---------------------------------------------------------------------------
// Authentication
// ---------------------------------------------------------------------------

describe('authentication', () => {
  it('sends no Authorization header when no token source is available', async () => {
    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems');

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['Authorization']).toBeUndefined();
  });

  it('injects Authorization: Bearer when token is set via setAuthToken', async () => {
    setAuthToken('module-token');

    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems');

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['Authorization']).toBe('Bearer module-token');
  });

  it('reads the token from localStorage when setAuthToken has not been called', async () => {
    localStorage.setItem('auth_token', 'storage-token');

    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems');

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['Authorization']).toBe('Bearer storage-token');
  });

  it('reads the token from a cookie when localStorage has no token', async () => {
    document.cookie = 'auth_token=cookie-token';

    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems');

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['Authorization']).toBe('Bearer cookie-token');
  });

  it('prefers setAuthToken over localStorage and cookie', async () => {
    setAuthToken('module-token');
    localStorage.setItem('auth_token', 'storage-token');
    document.cookie = 'auth_token=cookie-token';

    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems');

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['Authorization']).toBe('Bearer module-token');
  });

  it('prefers localStorage over cookie when both are present', async () => {
    localStorage.setItem('auth_token', 'storage-token');
    document.cookie = 'auth_token=cookie-token';

    const fetchMock = mockFetchOk({});
    vi.stubGlobal('fetch', fetchMock);

    await apiClient.get('/problems');

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['Authorization']).toBe('Bearer storage-token');
  });
});

// ---------------------------------------------------------------------------
// isApiError type guard
// ---------------------------------------------------------------------------

describe('isApiError', () => {
  it('returns true for an instance of Error', () => {
    expect(isApiError(new Error('oops'))).toBe(true);
  });

  it('returns true for a TypeError (subclass of Error)', () => {
    expect(isApiError(new TypeError('bad type'))).toBe(true);
  });

  it('returns false for a plain ApiError-shaped object (not an Error instance)', () => {
    const err: ApiError = { status: 404, code: 'NOT_FOUND', message: 'Not found' };
    expect(isApiError(err)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isApiError(null)).toBe(false);
  });

  it('returns false for a string', () => {
    expect(isApiError('error')).toBe(false);
  });
});
