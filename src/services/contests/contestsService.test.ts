import { beforeEach, describe, expect, it, vi } from 'vitest';

import { apiClient } from '../api/apiClient';

import { contestsService } from './contestsService';

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

describe('contestsService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns contests without filters by default', async () => {
    mockedGet.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          title: 'Weekly Contest 1',
          status: 'active',
          startTime: '2026-05-10T10:00:00.000Z',
          endTime: '2026-05-10T12:00:00.000Z',
        },
      ],
      meta: {
        totalCount: 1,
        currentPage: 1,
        pageCount: 1,
        perPage: 10,
      },
    });

    const result = await contestsService.getContests();

    expect(mockedGet).toHaveBeenCalledWith('/contests', undefined);
    expect(result).toEqual({
      contests: [
        {
          id: 1,
          title: 'Weekly Contest 1',
          status: 'active',
          startTime: '2026-05-10T10:00:00.000Z',
          endTime: '2026-05-10T12:00:00.000Z',
        },
      ],
      meta: {
        totalCount: 1,
        currentPage: 1,
        pageCount: 1,
        perPage: 10,
      },
    });
  });

  it('returns contests using filters and forwards cookie in SSR requests', async () => {
    mockedGet.mockResolvedValueOnce({
      data: {
        contests: [
          {
            id: 2,
            title: 'Weekly Contest 2',
            status: 'active',
            startTime: '2026-05-11T10:00:00.000Z',
            endTime: '2026-05-11T12:00:00.000Z',
          },
        ],
      },
    });

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

    expect(mockedGet).toHaveBeenCalledWith('/contests?status=active&page=2&pageSize=5', {
      headers: {
        Cookie: 'auth_token=test-token',
      },
    });
  });

  it('returns contest detail and forwards cookie in SSR requests', async () => {
    mockedGet.mockResolvedValueOnce({
      data: {
        id: 7,
        title: 'Weekly Contest 7',
        status: 'upcoming',
        startTime: '2026-05-20T10:00:00.000Z',
        endTime: '2026-05-20T12:00:00.000Z',
        isRegistered: true,
        problems: [],
      },
    });

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
    const apiError = {
      status: 404,
      code: 'NOT_FOUND',
      message: 'Contest not found',
    };

    mockedGet.mockRejectedValueOnce(apiError);

    await expect(contestsService.getContestById(999)).rejects.toEqual(apiError);
    expect(mockedGet).toHaveBeenCalledWith('/contests/999', undefined);
  });

  it('joins a contest successfully', async () => {
    mockedGet.mockResolvedValueOnce({
      data: {
        id: 10,
        title: 'Weekly Contest 10',
        status: 'upcoming',
        startTime: '2026-05-25T10:00:00.000Z',
        endTime: '2026-05-25T12:00:00.000Z',
        problems: [],
      },
    });

    mockedPost.mockResolvedValueOnce({
      data: null,
    });

    await expect(contestsService.joinContest(10)).resolves.toBeUndefined();
    expect(mockedGet).toHaveBeenCalledWith('/contests/10', undefined);
    expect(mockedPost).toHaveBeenCalledWith('/contests/10/register', null);
  });

  it('throws when contest is closed in joinContest', async () => {
    mockedGet.mockResolvedValueOnce({
      data: {
        id: 11,
        title: 'Weekly Contest 11',
        status: 'active',
        startTime: '2026-05-10T10:00:00.000Z',
        endTime: '2026-05-10T12:00:00.000Z',
        problems: [],
      },
    });

    await expect(contestsService.joinContest(11)).rejects.toEqual({
      status: 409,
      code: 'CONTEST_CLOSED',
      message: 'Contest is not open for registration',
    });
    expect(mockedPost).not.toHaveBeenCalled();
  });

  it('throws when user is already registered in joinContest', async () => {
    mockedGet.mockResolvedValueOnce({
      data: {
        id: 10,
        title: 'Weekly Contest 10',
        status: 'upcoming',
        startTime: '2026-05-25T10:00:00.000Z',
        endTime: '2026-05-25T12:00:00.000Z',
        problems: [],
      },
    });

    const apiError = {
      status: 409,
      code: 'ALREADY_REGISTERED',
      message: 'User already registered',
    };

    mockedPost.mockRejectedValueOnce(apiError);

    await expect(contestsService.joinContest(10)).rejects.toEqual(apiError);
    expect(mockedPost).toHaveBeenCalledWith('/contests/10/register', null);
  });

  it('returns leaderboard entries with pagination metadata', async () => {
    mockedGet.mockResolvedValueOnce({
      data: [
        {
          rank: 1,
          userId: 'user-1',
          username: 'alice',
          avatarUrl: 'https://example.com/avatar.png',
          score: 400,
          finishTime: '2026-05-10T11:30:00.000Z',
        },
      ],
      meta: {
        totalCount: 20,
        currentPage: 2,
        pageCount: 4,
        perPage: 5,
      },
    });

    const result = await contestsService.getLeaderboard(5, 2);

    expect(mockedGet).toHaveBeenCalledWith('/contests/5/leaderboard?page=2', undefined);
    expect(result).toEqual({
      entries: [
        {
          rank: 1,
          userId: 'user-1',
          username: 'alice',
          avatarUrl: 'https://example.com/avatar.png',
          score: 400,
          finishTime: '2026-05-10T11:30:00.000Z',
        },
      ],
      meta: {
        totalCount: 20,
        currentPage: 2,
        pageCount: 4,
        perPage: 5,
      },
    });
  });

  it('leaves a contest successfully', async () => {
    mockedGet.mockResolvedValueOnce({
      data: {
        id: 15,
        title: 'Weekly Contest 15',
        status: 'upcoming',
        startTime: '2026-05-30T10:00:00.000Z',
        endTime: '2026-05-30T12:00:00.000Z',
        problems: [],
      },
    });

    mockedDelete.mockResolvedValueOnce({
      data: null,
    });

    await expect(contestsService.leaveContest(15)).resolves.toBeUndefined();
    expect(mockedGet).toHaveBeenCalledWith('/contests/15', undefined);
    expect(mockedDelete).toHaveBeenCalledWith('/contests/15/register');
  });

  it('throws early when leaveContest is called for a non-upcoming contest', async () => {
    mockedGet.mockResolvedValueOnce({
      data: {
        id: 16,
        title: 'Weekly Contest 16',
        status: 'active',
        startTime: '2026-05-10T10:00:00.000Z',
        endTime: '2026-05-10T12:00:00.000Z',
        problems: [],
      },
    });

    await expect(contestsService.leaveContest(16)).rejects.toEqual({
      status: 409,
      code: 'CONTEST_NOT_UPCOMING',
      message: 'Contest registration can only be cancelled for upcoming contests',
    });
    expect(mockedDelete).not.toHaveBeenCalled();
  });
});
