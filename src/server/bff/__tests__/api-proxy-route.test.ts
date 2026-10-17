// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { createApiProxyRoute } from '../infrastructure/composition/create-api-proxy-route';
import { AUTH_COOKIE_NAMES } from '../infrastructure/cookies/auth-cookie-options';

import { FakeAstroCookies } from './support/fake-astro-cookies';

import type { BffConfig } from '../infrastructure/config/bff-config';
import type { APIContext } from 'astro';

const { ACCESS, REFRESH } = AUTH_COOKIE_NAMES;
const SITE = 'http://localhost:4321';
const API = 'http://api.test/api';

const config: BffConfig = {
  apiBaseUrl: API,
  upstreamTimeoutMs: 200,
  maxBodyBytes: 64,
  allowedOrigins: [],
  isProduction: false,
};

type FetchMock = ReturnType<typeof vi.fn<typeof fetch>>;

function json(status: number, body: unknown, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}

/** Calls the route like Astro would. */
async function call(
  route: ReturnType<typeof createApiProxyRoute>,
  path: string,
  init: RequestInit = {},
  cookies = new FakeAstroCookies()
) {
  const request = new Request(`${SITE}${path}`, init);
  const ctx = { request, cookies, url: new URL(request.url) } as unknown as APIContext;
  const response = (await route(ctx)) as Response;
  return { response, cookies };
}

function upstreamCalls(fetchMock: FetchMock) {
  return fetchMock.mock.calls.map(([input, init]) => ({
    url: String(input),
    method: init?.method,
    headers: new Headers(init?.headers),
    body: init?.body,
  }));
}

describe('BFF proxy /api/[...path]', () => {
  let fetchMock: FetchMock;
  let route: ReturnType<typeof createApiProxyRoute>;

  beforeEach(() => {
    fetchMock = vi.fn<typeof fetch>();
    route = createApiProxyRoute({ config, fetchFn: fetchMock, createRequestId: () => 'gen-id' });
  });

  afterEach(() => vi.restoreAllMocks());

  it('forwards an allowed GET with the Bearer token from the cookie', async () => {
    fetchMock.mockResolvedValueOnce(json(200, { data: [1, 2] }));
    const cookies = new FakeAstroCookies({ [ACCESS]: 'at-1', [REFRESH]: 'rt-1' });

    const { response } = await call(route, '/api/courses?page=2', {}, cookies);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ data: [1, 2] });
    const [sent] = upstreamCalls(fetchMock);
    expect(sent.url).toBe(`${API}/courses?page=2`);
    expect(sent.headers.get('authorization')).toBe('Bearer at-1');
  });

  it('never sends browser cookies or a browser Authorization header to the API', async () => {
    fetchMock.mockResolvedValueOnce(json(200, {}));
    const cookies = new FakeAstroCookies({ [ACCESS]: 'at-1' });

    await call(
      route,
      '/api/problems',
      { headers: { Cookie: `${ACCESS}=at-1; other=1`, Authorization: 'Bearer forged' } },
      cookies
    );

    const [sent] = upstreamCalls(fetchMock);
    expect(sent.headers.get('cookie')).toBeNull();
    expect(sent.headers.get('authorization')).toBe('Bearer at-1');
  });

  it('forwards X-Request-Id, or creates one, and returns it to the browser', async () => {
    fetchMock.mockResolvedValue(json(200, {}));

    const withId = await call(route, '/api/problems', { headers: { 'X-Request-Id': 'abc-123' } });
    const withoutId = await call(route, '/api/problems');

    const [first, second] = upstreamCalls(fetchMock);
    expect(first.headers.get('x-request-id')).toBe('abc-123');
    expect(withId.response.headers.get('x-request-id')).toBe('abc-123');
    expect(second.headers.get('x-request-id')).toBe('gen-id');
    expect(withoutId.response.headers.get('x-request-id')).toBe('gen-id');
  });

  it('does not pass Set-Cookie from the API to the browser', async () => {
    fetchMock.mockResolvedValueOnce(json(200, {}, { 'Set-Cookie': 'api=1' }));
    const { response } = await call(route, '/api/problems');
    expect(response.headers.get('set-cookie')).toBeNull();
  });

  it('returns 404 for a path that is not in the allow-list (API is not called)', async () => {
    const { response } = await call(route, '/api/user');
    expect(response.status).toBe(404);
    expect(await response.json()).toMatchObject({ code: 'NOT_FOUND' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns 404 for /api/auth/refresh (only the server may refresh)', async () => {
    const { response } = await call(route, '/api/auth/refresh', {
      method: 'POST',
      headers: { Origin: SITE },
    });
    expect(response.status).toBe(404);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns 403 for a POST from another origin (API is not called)', async () => {
    const { response } = await call(route, '/api/courses/1/enroll', {
      method: 'POST',
      headers: { Origin: 'https://evil.example' },
    });
    expect(response.status).toBe(403);
    expect(await response.json()).toMatchObject({ code: 'FORBIDDEN' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('forwards a same-origin POST with its JSON body', async () => {
    fetchMock.mockResolvedValueOnce(json(201, { ok: true }));
    const body = JSON.stringify({ code: 'x' });

    const { response } = await call(route, '/api/submissions', {
      method: 'POST',
      headers: { Origin: SITE, 'Content-Type': 'application/json' },
      body,
    });

    expect(response.status).toBe(201);
    const [sent] = upstreamCalls(fetchMock);
    expect(sent.method).toBe('POST');
    expect(sent.headers.get('content-type')).toBe('application/json');
    expect(new TextDecoder().decode(sent.body as ArrayBuffer)).toBe(body);
  });

  it('on 401 refreshes once, saves the new cookie and repeats the request', async () => {
    fetchMock
      .mockResolvedValueOnce(json(401, { message: 'expired' }))
      .mockResolvedValueOnce(json(200, { accessToken: 'at-2' }))
      .mockResolvedValueOnce(json(200, { data: 'ok' }));
    const cookies = new FakeAstroCookies({ [ACCESS]: 'at-old', [REFRESH]: 'rt-1' });

    const { response } = await call(route, '/api/courses/me/courses', {}, cookies);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ data: 'ok' });

    const [first, refresh, retry] = upstreamCalls(fetchMock);
    expect(first.headers.get('authorization')).toBe('Bearer at-old');
    expect(refresh.url).toBe(`${API}/auth/refresh`);
    expect(JSON.parse(String(refresh.body))).toEqual({ refreshToken: 'rt-1' });
    expect(retry.headers.get('authorization')).toBe('Bearer at-2');

    expect(cookies.lastWrite(ACCESS)).toMatchObject({
      value: 'at-2',
      options: { httpOnly: true, sameSite: 'lax' },
    });
  });

  it('repeats the request only once even if the API answers 401 again', async () => {
    fetchMock
      .mockResolvedValueOnce(json(401, {}))
      .mockResolvedValueOnce(json(200, { accessToken: 'at-2' }))
      .mockResolvedValueOnce(json(401, { message: 'still no' }));
    const cookies = new FakeAstroCookies({ [ACCESS]: 'at-old', [REFRESH]: 'rt-loop' });

    const { response } = await call(route, '/api/problems', {}, cookies);

    expect(response.status).toBe(401);
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it('parallel requests that get 401 share ONE refresh call', async () => {
    let releaseRefresh!: () => void;
    const refreshGate = new Promise<void>((r) => (releaseRefresh = r));

    fetchMock.mockImplementation(async (input, init) => {
      const url = String(input);
      if (url.endsWith('/auth/refresh')) {
        await refreshGate;
        return json(200, { accessToken: 'at-new' });
      }
      const auth = new Headers(init?.headers).get('authorization');
      return auth === 'Bearer at-new' ? json(200, { url }) : json(401, {});
    });

    const requests = ['/api/problems', '/api/courses', '/api/tests'].map((path) =>
      call(route, path, {}, new FakeAstroCookies({ [ACCESS]: 'at-old', [REFRESH]: 'rt-shared' }))
    );
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(4));
    releaseRefresh();
    const results = await Promise.all(requests);

    expect(results.map((r) => r.response.status)).toEqual([200, 200, 200]);
    const refreshCalls = upstreamCalls(fetchMock).filter((c) => c.url.endsWith('/auth/refresh'));
    expect(refreshCalls).toHaveLength(1);
    results.forEach(({ cookies }) => expect(cookies.get(ACCESS)?.value).toBe('at-new'));
  });

  it('when refresh fails, clears both cookies and returns 401', async () => {
    fetchMock
      .mockResolvedValueOnce(json(401, {}))
      .mockResolvedValueOnce(json(401, { error: 'Refresh token expired' }));
    const cookies = new FakeAstroCookies({ [ACCESS]: 'at-old', [REFRESH]: 'rt-dead' });

    const { response } = await call(route, '/api/problems', {}, cookies);

    expect(response.status).toBe(401);
    expect(await response.json()).toMatchObject({ code: 'UNAUTHORIZED' });
    expect(cookies.lastWrite(ACCESS)).toMatchObject({ deleted: true, options: { path: '/' } });
    expect(cookies.lastWrite(REFRESH)).toMatchObject({ deleted: true, options: { path: '/api' } });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('when the access cookie expired but the refresh cookie exists, refreshes first', async () => {
    fetchMock
      .mockResolvedValueOnce(json(200, { accessToken: 'at-fresh' }))
      .mockResolvedValueOnce(json(200, { data: 'ok' }));
    const cookies = new FakeAstroCookies({ [REFRESH]: 'rt-proactive' });

    const { response } = await call(route, '/api/users/me', {}, cookies);

    expect(response.status).toBe(200);
    const [refresh, sent] = upstreamCalls(fetchMock);
    expect(refresh.url).toBe(`${API}/auth/refresh`);
    expect(sent.headers.get('authorization')).toBe('Bearer at-fresh');
  });

  it('a 401 without a refresh cookie is returned as is (no refresh attempt)', async () => {
    fetchMock.mockResolvedValueOnce(json(401, { message: 'login required' }));
    const { response } = await call(route, '/api/courses/me/courses');
    expect(response.status).toBe(401);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('keeps the cookies when the refresh endpoint has a server error (502)', async () => {
    fetchMock.mockResolvedValueOnce(json(401, {})).mockResolvedValueOnce(json(500, {}));
    const cookies = new FakeAstroCookies({ [ACCESS]: 'at-old', [REFRESH]: 'rt-1' });

    const { response } = await call(route, '/api/problems', {}, cookies);

    expect(response.status).toBe(502);
    expect(cookies.writes).toHaveLength(0);
  });

  it('returns 413 when the body is bigger than the limit', async () => {
    const { response } = await call(route, '/api/submissions', {
      method: 'POST',
      headers: { Origin: SITE, 'Content-Type': 'application/json' },
      body: 'x'.repeat(config.maxBodyBytes + 1),
    });
    expect(response.status).toBe(413);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns 504 when the API does not answer in time', async () => {
    fetchMock.mockImplementation(
      (_input, init) =>
        new Promise((_resolve, reject) => {
          init?.signal?.addEventListener('abort', () => reject(init.signal?.reason));
        })
    );
    const { response } = await call(route, '/api/problems');
    expect(response.status).toBe(504);
    expect(await response.json()).toMatchObject({ code: 'UPSTREAM_TIMEOUT' });
  });

  it('returns 502 when the API cannot be reached', async () => {
    fetchMock.mockRejectedValueOnce(new TypeError('fetch failed'));
    const { response } = await call(route, '/api/problems');
    expect(response.status).toBe(502);
  });
});
