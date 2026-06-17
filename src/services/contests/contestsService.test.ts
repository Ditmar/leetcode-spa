import { beforeEach, describe, expect, it, vi } from 'vitest';

import { apiClient } from '../api/apiClient';

import { contestsService } from './contestsService';

import type {
  Contest,
  ContestDetail,
  ContestListResponse,
  LeaderboardEntry,
  LeaderboardResponse,
} from './contestsService.types';
import type { ApiError, ApiResponse } from '../api/apiClient';

vi.mock('../api/apiClient', () => ({
  apiClient: {
    get: vi.fn(),
    post: vi.fn(),
    delete: vi.fn(),
  },
}));

const mockedGet = vi.mocked(apiClient.get);
const mockedPost = vi.mocked(apiClient.post);
const mockedDelete = vi.mocked(apiClient.delete);

const defaultMeta = {
  totalCount: 1,
  currentPage: 1,
  pageCount: 1,
  perPage: 10,
};

function createApiResponse<T>(data: T, meta?: ApiResponse<T>['meta']): ApiResponse<T> {
  return {
    data,
    ...(meta ? { meta } : {}),
  };
}

function createApiError(overrides: Partial<ApiError> = {}): ApiError {
  return {
    status: 500,
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Unexpected server error',
    ...overrides,
  };
}

function createContest(overrides: Partial<Contest> = {}): Contest {
  return {
    id: 1,
    title: 'Weekly Contest 1',
    description: 'Contest description',
    status: 'upcoming',
    startTime: '2026-05-10T10:00:00.000Z',
    endTime: '2026-05-10T12:00:00.000Z',
    participantsCount: 0,
    ...overrides,
  };
}

function createContestDetail(overrides: Partial<ContestDetail> = {}): ContestDetail {
  return {
    ...createContest(),
    problems: [],
    ...overrides,
  };
}

function createLeaderboardEntry(overrides: Partial<LeaderboardEntry> = {}): LeaderboardEntry {
  return {
    rank: 1,
    userId: 'user-1',
    username: 'alice',
    avatarUrl: 'https://example.com/avatar.png',
    score: 400,
    finishTime: '2026-05-10T11:30:00.000Z',
    ...overrides,
  };
}

function parseRequestPath(path: string): { pathname: string; params: URLSearchParams } {
  const [pathname, queryString = ''] = path.split('?');

  return {
    pathname,
    params: new URLSearchParams(queryString),
  };
}

describe('contestsService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns contests without filters by default', async () => {
    const contests = [
      createContest({
        id: 1,
        title: 'Weekly Contest 1',
        status: 'active',
      }),
    ];

    mockedGet.mockResolvedValueOnce(
      createApiResponse<ContestListResponse>(
        {
          contests,
          meta: defaultMeta,
        },
        defaultMeta
      )
    );

    const result = await contestsService.getContests();

    expect(mockedGet).toHaveBeenCalledWith('/contests', undefined);
    expect(result).toEqual({
      contests,
      meta: defaultMeta,
    });
  });

  it('returns contests using filters and forwards cookie in SSR requests', async () => {
    const contests = [
      createContest({
        id: 2,
        title: 'Weekly Contest 2',
        status: 'active',
        startTime: '2026-05-11T10:00:00.000Z',
        endTime: '2026-05-11T12:00:00.000Z',
      }),
    ];

    mockedGet.mockResolvedValueOnce(
      createApiResponse<ContestListResponse>({
        contests,
        meta: defaultMeta,
      })
    );

    await contestsService.getContests(
      {
        status: 'active',
        page: 2,
        pageSize: 5,
      },
      {
        cookie: 'auth_token=test-token',
      }
    );

    const [requestPath, requestConfig] = mockedGet.mock.calls[0] as [
      string,
      { headers: { Cookie: string } } | undefined,
    ];
    const { pathname, params } = parseRequestPath(requestPath);

    expect(pathname).toBe('/contests');
    expect(params.get('status')).toBe('active');
    expect(params.get('page')).toBe('2');
    expect(params.get('pageSize')).toBe('5');
    expect(requestConfig).toEqual({
      headers: {
        Cookie: 'auth_token=test-token',
      },
    });
  });

  it('returns contest detail and forwards cookie in SSR requests', async () => {
    mockedGet.mockResolvedValueOnce(
      createApiResponse<ContestDetail>(
        createContestDetail({
          id: 7,
          title: 'Weekly Contest 7',
          isRegistered: true,
        })
      )
    );

    const result = await contestsService.getContestById(7, {
      cookie: 'auth_token=test-token',
    });

    expect(mockedGet).toHaveBeenCalledWith('/contests/7', {
      headers: {
        Cookie: 'auth_token=test-token',
      },
    });
    expect(result.isRegistered).toBe(true);
  });

  it('throws when getContestById fails', async () => {
    const apiError = createApiError({
      status: 404,
      code: 'NOT_FOUND',
      message: 'Contest not found',
    });

    mockedGet.mockRejectedValueOnce(apiError);

    await expect(contestsService.getContestById(999)).rejects.toEqual(apiError);
    expect(mockedGet).toHaveBeenCalledWith('/contests/999', undefined);
  });

  it('joins a contest successfully', async () => {
    mockedGet.mockResolvedValueOnce(
      createApiResponse<ContestDetail>(
        createContestDetail({
          id: 10,
          title: 'Weekly Contest 10',
          status: 'upcoming',
          startTime: '2026-05-25T10:00:00.000Z',
          endTime: '2026-05-25T12:00:00.000Z',
        })
      )
    );

    mockedPost.mockResolvedValueOnce(createApiResponse<null>(null));

    await expect(contestsService.joinContest(10)).resolves.toBeUndefined();
    expect(mockedGet).toHaveBeenCalledWith('/contests/10', undefined);
    expect(mockedPost).toHaveBeenCalledWith('/contests/10/register', null, undefined);
  });

  it('does not attempt registration when contest detail request fails in joinContest', async () => {
    const apiError = createApiError({
      status: 404,
      code: 'NOT_FOUND',
      message: 'Contest not found',
    });

    mockedGet.mockRejectedValueOnce(apiError);

    await expect(contestsService.joinContest(10)).rejects.toEqual(apiError);
    expect(mockedPost).not.toHaveBeenCalled();
  });

  it('throws when contest is closed in joinContest', async () => {
    mockedGet.mockResolvedValueOnce(
      createApiResponse<ContestDetail>(
        createContestDetail({
          id: 11,
          title: 'Weekly Contest 11',
          status: 'active',
        })
      )
    );

    await expect(contestsService.joinContest(11)).rejects.toEqual({
      status: 409,
      code: 'CONTEST_CLOSED',
      message: 'Contest is not open for registration',
    });
    expect(mockedPost).not.toHaveBeenCalled();
  });

  it('throws when user is already registered in joinContest', async () => {
    mockedGet.mockResolvedValueOnce(
      createApiResponse<ContestDetail>(
        createContestDetail({
          id: 10,
          title: 'Weekly Contest 10',
          status: 'upcoming',
          startTime: '2026-05-25T10:00:00.000Z',
          endTime: '2026-05-25T12:00:00.000Z',
        })
      )
    );

    const apiError = createApiError({
      status: 409,
      code: 'ALREADY_REGISTERED',
      message: 'User already registered',
    });

    mockedPost.mockRejectedValueOnce(apiError);

    await expect(contestsService.joinContest(10)).rejects.toEqual(apiError);
    expect(mockedPost).toHaveBeenCalledWith('/contests/10/register', null, undefined);
  });

  it('returns leaderboard entries with pagination metadata', async () => {
    const entries = [createLeaderboardEntry()];

    mockedGet.mockResolvedValueOnce(
      createApiResponse<LeaderboardResponse>(
        {
          entries,
          meta: {
            totalCount: 20,
            currentPage: 2,
            pageCount: 4,
            perPage: 5,
          },
        },
        {
          totalCount: 20,
          currentPage: 2,
          pageCount: 4,
          perPage: 5,
        }
      )
    );

    const result = await contestsService.getLeaderboard(5, 2);

    const [requestPath] = mockedGet.mock.calls[0] as [string, unknown];
    const { pathname, params } = parseRequestPath(requestPath);

    expect(pathname).toBe('/contests/5/leaderboard');
    expect(params.get('page')).toBe('2');
    expect(result).toEqual({
      entries,
      meta: {
        totalCount: 20,
        currentPage: 2,
        pageCount: 4,
        perPage: 5,
      },
    });
  });

  it('leaves a contest successfully', async () => {
    mockedGet.mockResolvedValueOnce(
      createApiResponse<ContestDetail>(
        createContestDetail({
          id: 15,
          title: 'Weekly Contest 15',
          status: 'upcoming',
          startTime: '2026-05-30T10:00:00.000Z',
          endTime: '2026-05-30T12:00:00.000Z',
        })
      )
    );

    mockedDelete.mockResolvedValueOnce(createApiResponse<null>(null));

    await expect(contestsService.leaveContest(15)).resolves.toBeUndefined();
    expect(mockedGet).toHaveBeenCalledWith('/contests/15', undefined);
    expect(mockedDelete).toHaveBeenCalledWith('/contests/15/register', undefined);
  });

  it('propagates delete API errors in leaveContest', async () => {
    mockedGet.mockResolvedValueOnce(
      createApiResponse<ContestDetail>(
        createContestDetail({
          id: 15,
          title: 'Weekly Contest 15',
          status: 'upcoming',
        })
      )
    );

    const apiError = createApiError({
      status: 500,
      code: 'DELETE_FAILED',
      message: 'Failed to cancel registration',
    });

    mockedDelete.mockRejectedValueOnce(apiError);

    await expect(contestsService.leaveContest(15)).rejects.toEqual(apiError);
    expect(mockedDelete).toHaveBeenCalledWith('/contests/15/register', undefined);
  });

  it('throws early when leaveContest is called for a non-upcoming contest', async () => {
    mockedGet.mockResolvedValueOnce(
      createApiResponse<ContestDetail>(
        createContestDetail({
          id: 16,
          title: 'Weekly Contest 16',
          status: 'active',
        })
      )
    );

    await expect(contestsService.leaveContest(16)).rejects.toEqual({
      status: 409,
      code: 'CONTEST_NOT_UPCOMING',
      message: 'Contest registration can only be cancelled for upcoming contests',
    });
    expect(mockedDelete).not.toHaveBeenCalled();
  });
});
