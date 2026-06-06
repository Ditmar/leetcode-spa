import { afterEach, describe, expect, it, vi } from 'vitest';

import { apiClient } from '../api/apiClient';

import { exploreService, updateProgress } from './exploreService';

import type {
  ExploreTopic,
  FiltersMetadata,
  TopicDetail,
  TopicFilters,
  TopicProgress,
} from './exploreService.types';

function mockFetchOk<T>(data: T) {
  return vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => ({ data }),
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

const topic: ExploreTopic = {
  id: 1,
  title: 'Arrays',
  description: 'Practice array fundamentals',
  category: 'Data Structures',
  difficulty: 'Beginner',
  icon: 'array',
  totalProblems: 4,
  progress: 0,
};

const topicDetail: TopicDetail = {
  ...topic,
  progress: 1,
  problems: [
    {
      id: 101,
      title: 'Two Sum',
      difficulty: 'Beginner',
      completed: true,
    },
  ],
};

afterEach(() => {
  vi.restoreAllMocks();
});

describe('exploreService.getTopics', () => {
  it('returns topics without category and unauthenticated progress defaults to 0', async () => {
    const fetchMock = mockFetchOk<ExploreTopic[]>([topic]);
    vi.stubGlobal('fetch', fetchMock);

    const result = await exploreService.getTopics();

    expect(result).toEqual([topic]);
    expect(result[0].progress).toBe(0);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('/api/explore/topics');
    expect(init.method).toBe('GET');
  });

  it('sends optional filters as query parameters', async () => {
    const fetchMock = mockFetchOk<ExploreTopic[]>([topic]);
    vi.stubGlobal('fetch', fetchMock);

    await exploreService.getTopics({ category: 'Data Structures', difficulty: 'Beginner' });

    const [url] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('/api/explore/topics?category=Data+Structures&difficulty=Beginner');
  });

  it('throws BAD_REQUEST before calling the API when category has an invalid type', async () => {
    const fetchMock = mockFetchOk<ExploreTopic[]>([topic]);
    vi.stubGlobal('fetch', fetchMock);

    const invalidFilters = { category: 123 } as unknown as TopicFilters;

    await expect(exploreService.getTopics(invalidFilters)).rejects.toMatchObject({
      status: 400,
      code: 'BAD_REQUEST',
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('throws BAD_REQUEST before calling the API when difficulty is not supported', async () => {
    const fetchMock = mockFetchOk<ExploreTopic[]>([topic]);
    vi.stubGlobal('fetch', fetchMock);

    const invalidFilters = { difficulty: 'Expert' } as unknown as TopicFilters;

    await expect(exploreService.getTopics(invalidFilters)).rejects.toMatchObject({
      status: 400,
      code: 'BAD_REQUEST',
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('exploreService.getTopicById', () => {
  it('forwards cookies and returns per-problem completed status when authenticated', async () => {
    const fetchMock = mockFetchOk<TopicDetail>(topicDetail);
    vi.stubGlobal('fetch', fetchMock);

    const result = await exploreService.getTopicById(1, 'session=abc');

    expect(result.problems[0].completed).toBe(true);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('/api/explore/topics/1');
    expect((init.headers as Record<string, string>).Cookie).toBe('session=abc');
  });

  it('returns progress 0 without auth', async () => {
    const fetchMock = mockFetchOk<TopicDetail>({
      ...topicDetail,
      progress: 0,
      problems: topicDetail.problems.map((problem) => ({ ...problem, completed: false })),
    });
    vi.stubGlobal('fetch', fetchMock);

    const result = await exploreService.getTopicById(1);

    expect(result.progress).toBe(0);
    expect(result.problems[0].completed).toBe(false);
  });
});

describe('exploreService.getFiltersMetadata', () => {
  it('returns categories and difficulties sorted alphabetically', async () => {
    const metadata: FiltersMetadata = {
      categories: ['Trees', 'Arrays', 'Graphs'],
      difficulties: ['Intermediate', 'Advanced', 'Beginner'],
    };
    vi.stubGlobal('fetch', mockFetchOk<FiltersMetadata>(metadata));

    const result = await exploreService.getFiltersMetadata();

    expect(result).toEqual({
      categories: ['Arrays', 'Graphs', 'Trees'],
      difficulties: ['Advanced', 'Beginner', 'Intermediate'],
    });
  });
});

describe('exploreService.updateProgress', () => {
  it('updates completion status using the explicit completed value', async () => {
    const progress: TopicProgress = {
      topicId: 1,
      progress: 0,
      totalProblems: 4,
    };
    const fetchMock = mockFetchOk<TopicProgress>(progress);
    vi.stubGlobal('fetch', fetchMock);

    const result = await updateProgress(1, 101, false);

    expect(result).toEqual(progress);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('/api/explore/topics/1/problems/101');
    expect(init.method).toBe('PATCH');
    expect(init.body).toBe(JSON.stringify({ completed: false }));
  });

  it('throws ApiError with code UNAUTHORIZED without a valid session', async () => {
    vi.stubGlobal(
      'fetch',
      mockFetchError(401, 'Unauthorized', {
        code: 'UNAUTHORIZED',
        message: 'Authentication required',
      })
    );

    await expect(updateProgress(1, 101, true)).rejects.toMatchObject({
      status: 401,
      code: 'UNAUTHORIZED',
    });
  });

  it('wraps unexpected update errors with meaningful feedback', async () => {
    vi.spyOn(apiClient, 'patch').mockRejectedValue('network unavailable');

    await expect(updateProgress(1, 101, true)).rejects.toMatchObject({
      status: 500,
      code: 'UPDATE_PROGRESS_FAILED',
      message: 'Failed to update topic progress',
    });
  });
});
