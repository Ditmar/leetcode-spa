import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { setAuthToken } from '../api/apiClient';
import { contestsService } from './contestsService';

import type { ApiError } from '../api/apiClient.types';
import type {
  Contest,
  ContestDetail,
  ContestFilters,
  LeaderboardEntry,
} from './contestsService.types';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function mockFetchOk<T>(data: T, meta?: Record<string, unknown>) {
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

const BASE = '/api';

// ---------------------------------------------------------------------------
// Setup / teardown
// ---------------------------------------------------------------------------

beforeEach(() => {
  setAuthToken(null);
  localStorage.clear();
  document.cookie = 'auth_token=; Max-Age=0';
});

afterEach(() => {
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// getContests — default (no filters)
// ---------------------------------------------------------------------------

describe('contestsService.getContests', () => {
  it('returns all contests when called with no filters', async () => {
    const contests: Contest[] = [
      {
        id: 1,
        title: 'Weekly Contest 400',
        status: 'active',
        startTime: '2024-01-01T00:00:00Z',
        endTime: '2024-01-01T02:00:00Z',
      },
      {
        id: 2,
        title: 'Biweekly Contest 200',
        status: 'upcoming',
        startTime: '2024-02-01T00:00:00Z',
        endTime: '2024-02-01T02:00:00Z',
      },
    ];

    vi.stubGlobal('fetch', mockFetchOk(contests));

    const result = await contestsService.getContests();

    expect(result.data).toEqual(contests);
  });

  it('calls GET /contests with no query string when no filters provided', async () => {
    const fetchMock = mockFetchOk([]);
    vi.stubGlobal('fetch', fetchMock);

    await contestsService.getContests();

    const [url] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(`${BASE}/contests`);
  });

  it('returns only active contests when status filter is "active"', async () => {
    const activeContests: Contest[] = [
      {
        id: 1,
        title: 'Weekly Contest 400',
        status: 'active',
        startTime: '2024-01-01T00:00:00Z',
        endTime: '2024-01-01T02:00:00Z',
      },
    ];

    const fetchMock = mockFetchOk(activeContests);
    vi.stubGlobal('fetch', fetchMock);

    const filters: ContestFilters = { status: 'active' };
    const result = await contestsService.getContests(filters);

    expect(result.data).toEqual(activeContests);
    const [url] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('status=active');
  });

  it('passes page and pageSize as query parameters', async () => {
    const fetchMock = mockFetchOk([]);
    vi.stubGlobal('fetch', fetchMock);

    await contestsService.getContests({ page: 2, pageSize: 10 });

    const [url] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('page=2');
    expect(url).toContain('pageSize=10');
  });

  it('includes pagination meta in response', async () => {
    const meta = { totalCount: 50, pageCount: 5, currentPage: 1, perPage: 10 };
    const fetchMock = mockFetchOk([], meta);
    vi.stubGlobal('fetch', fetchMock);

    const result = await contestsService.getContests({ page: 1, pageSize: 10 });

    expect(result.meta).toEqual(meta);
  });

  it('forwards Cookie header when cookieHeader is provided (SSR user context)', async () => {
    const fetchMock = mockFetchOk([]);
    vi.stubGlobal('fetch', fetchMock);

    await contestsService.getContests(undefined, 'session=abc123');

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['Cookie']).toBe('session=abc123');
  });
});

// ---------------------------------------------------------------------------
// getContestById
// ---------------------------------------------------------------------------

describe('contestsService.getContestById', () => {
  it('returns contest detail for a valid id', async () => {
    const detail: ContestDetail = {
      id: 1,
      title: 'Weekly Contest 400',
      status: 'past',
      startTime: '2024-01-01T00:00:00Z',
      endTime: '2024-01-01T02:00:00Z',
      problems: [{ id: 10, title: 'Two Sum', difficulty: 'Easy', score: 100 }],
      isRegistered: true,
      userRank: 42,
    };

    vi.stubGlobal('fetch', mockFetchOk(detail));

    const result = await contestsService.getContestById(1);

    expect(result).toEqual(detail);
  });

  it('calls GET /contests/:id with the correct URL', async () => {
    const fetchMock = mockFetchOk({
      id: 5,
      title: 'Test',
      status: 'upcoming',
      startTime: '',
      endTime: '',
      problems: [],
    });
    vi.stubGlobal('fetch', fetchMock);

    await contestsService.getContestById(5);

    const [url] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(`${BASE}/contests/5`);
  });

  it('throws ApiError with code NOT_FOUND when contest does not exist', async () => {
    vi.stubGlobal(
      'fetch',
      mockFetchError(404, 'Not Found', { code: 'NOT_FOUND', message: 'Contest not found' })
    );

    await expect(contestsService.getContestById(999)).rejects.toMatchObject({
      status: 404,
      code: 'NOT_FOUND',
      message: 'Contest not found',
    });
  });

  it('includes isRegistered field when cookie header is forwarded', async () => {
    const detail: ContestDetail = {
      id: 1,
      title: 'Weekly Contest 400',
      status: 'active',
      startTime: '2024-01-01T00:00:00Z',
      endTime: '2024-01-01T02:00:00Z',
      problems: [],
      isRegistered: true,
    };

    const fetchMock = mockFetchOk(detail);
    vi.stubGlobal('fetch', fetchMock);

    const result = await contestsService.getContestById(1, 'session=abc123');

    expect(result.isRegistered).toBe(true);
    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['Cookie']).toBe('session=abc123');
  });
});

// ---------------------------------------------------------------------------
// getLeaderboard
// ---------------------------------------------------------------------------

describe('contestsService.getLeaderboard', () => {
  it('returns leaderboard entries with correct types', async () => {
    const entries: LeaderboardEntry[] = [
      { rank: 1, userId: 'u1', username: 'alice', score: 300, finishTime: '2024-01-01T01:30:00Z' },
      { rank: 2, userId: 'u2', username: 'bob', score: 250, finishTime: '2024-01-01T01:45:00Z' },
      { rank: 3, userId: 'u3', username: 'charlie', score: 200 },
    ];

    vi.stubGlobal('fetch', mockFetchOk(entries));

    const result = await contestsService.getLeaderboard(1);

    expect(result.data).toEqual(entries);
  });

  it('calls GET /contests/:id/leaderboard with the correct URL', async () => {
    const fetchMock = mockFetchOk([]);
    vi.stubGlobal('fetch', fetchMock);

    await contestsService.getLeaderboard(7);

    const [url] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(`${BASE}/contests/7/leaderboard`);
  });

  it('passes page query parameter for paginated leaderboard', async () => {
    const meta = { totalCount: 200, pageCount: 10, currentPage: 2, perPage: 20 };
    const fetchMock = mockFetchOk([], meta);
    vi.stubGlobal('fetch', fetchMock);

    const result = await contestsService.getLeaderboard(1, 2);

    const [url] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('page=2');
    expect(result.meta).toEqual(meta);
  });

  it('does not append page query param when page is not provided', async () => {
    const fetchMock = mockFetchOk([]);
    vi.stubGlobal('fetch', fetchMock);

    await contestsService.getLeaderboard(1);

    const [url] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).not.toContain('page=');
  });
});

// ---------------------------------------------------------------------------
// joinContest
// ---------------------------------------------------------------------------

describe('contestsService.joinContest', () => {
  it('resolves without error on successful registration', async () => {
    vi.stubGlobal('fetch', mockFetchOk(null));

    await expect(contestsService.joinContest(1)).resolves.toBeUndefined();
  });

  it('calls POST /contests/:id/register', async () => {
    const fetchMock = mockFetchOk(null);
    vi.stubGlobal('fetch', fetchMock);

    await contestsService.joinContest(3);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(`${BASE}/contests/3/register`);
    expect(init.method).toBe('POST');
  });

  it('throws ApiError with code CONTEST_CLOSED when contest is not upcoming', async () => {
    vi.stubGlobal(
      'fetch',
      mockFetchError(409, 'Conflict', {
        code: 'CONTEST_CLOSED',
        message: 'Contest is not open for registration',
      })
    );

    await expect(contestsService.joinContest(1)).rejects.toMatchObject({
      code: 'CONTEST_CLOSED',
      message: 'Contest is not open for registration',
    } satisfies Partial<ApiError>);
  });

  it('throws ApiError with code ALREADY_REGISTERED when user already joined', async () => {
    vi.stubGlobal(
      'fetch',
      mockFetchError(409, 'Conflict', {
        code: 'ALREADY_REGISTERED',
        message: 'User already registered for this contest',
      })
    );

    await expect(contestsService.joinContest(1)).rejects.toMatchObject({
      code: 'ALREADY_REGISTERED',
      message: 'User already registered for this contest',
    } satisfies Partial<ApiError>);
  });
});

// ---------------------------------------------------------------------------
// leaveContest
// ---------------------------------------------------------------------------

describe('contestsService.leaveContest', () => {
  it('resolves without error on successful cancellation', async () => {
    vi.stubGlobal('fetch', mockFetchOk(null));

    await expect(contestsService.leaveContest(1)).resolves.toBeUndefined();
  });

  it('calls DELETE /contests/:id/register', async () => {
    const fetchMock = mockFetchOk(null);
    vi.stubGlobal('fetch', fetchMock);

    await contestsService.leaveContest(4);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(`${BASE}/contests/4/register`);
    expect(init.method).toBe('DELETE');
  });

  it('throws ApiError with code CONTEST_CLOSED when trying to leave a non-upcoming contest', async () => {
    vi.stubGlobal(
      'fetch',
      mockFetchError(409, 'Conflict', {
        code: 'CONTEST_CLOSED',
        message: 'Cannot cancel registration for a contest that is not upcoming',
      })
    );

    await expect(contestsService.leaveContest(1)).rejects.toMatchObject({
      code: 'CONTEST_CLOSED',
    } satisfies Partial<ApiError>);
  });
});
