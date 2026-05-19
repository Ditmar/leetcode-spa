import { beforeEach, describe, expect, it, vi } from 'vitest';

import { problemsService } from './problemsService';

import type { ProblemDetail, ProblemListResponse, ProblemStats } from './problemsService.types';

vi.mock('../api/apiClient', () => ({
  apiClient: {
    get: vi.fn(),
  },
}));

const { apiClient } = await import('../api/apiClient');

describe('problemsService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('buildQueryString (via getProblems)', () => {
    it('should use default page=1 and pageSize=20 when no filters are provided', async () => {
      const mockResponse: { data: ProblemListResponse } = {
        data: { data: [], meta: { page: 1, pageSize: 20, total: 0, totalPages: 0 } },
      };

      vi.mocked(apiClient.get).mockResolvedValue(mockResponse);

      await problemsService.getProblems();

      expect(apiClient.get).toHaveBeenCalledWith('/problems?page=1&pageSize=20', undefined);
    });

    it('should clamp page to minimum 1 when an invalid value is passed', async () => {
      const mockResponse: { data: ProblemListResponse } = {
        data: { data: [], meta: { page: 1, pageSize: 20, total: 0, totalPages: 0 } },
      };

      vi.mocked(apiClient.get).mockResolvedValue(mockResponse);

      await problemsService.getProblems({ page: -5 });

      expect(apiClient.get).toHaveBeenCalledWith(expect.stringContaining('page=1'), undefined);
    });

    it('should clamp pageSize to maximum 100 when an out-of-range value is passed', async () => {
      const mockResponse: { data: ProblemListResponse } = {
        data: { data: [], meta: { page: 1, pageSize: 100, total: 0, totalPages: 0 } },
      };

      vi.mocked(apiClient.get).mockResolvedValue(mockResponse);

      await problemsService.getProblems({ pageSize: 9999 });

      expect(apiClient.get).toHaveBeenCalledWith(
        expect.stringContaining('pageSize=100'),
        undefined
      );
    });
  });

  describe('getProblems', () => {
    it('should fetch problems with default pagination params', async () => {
      const mockResponse: { data: ProblemListResponse } = {
        data: { data: [], meta: { page: 1, pageSize: 20, total: 0, totalPages: 0 } },
      };

      vi.mocked(apiClient.get).mockResolvedValue(mockResponse);

      await problemsService.getProblems();

      expect(apiClient.get).toHaveBeenCalledWith('/problems?page=1&pageSize=20', undefined);
    });

    it('should build query string with all filters', async () => {
      const mockResponse: { data: ProblemListResponse } = {
        data: { data: [], meta: { page: 2, pageSize: 10, total: 1, totalPages: 1 } },
      };

      vi.mocked(apiClient.get).mockResolvedValue(mockResponse);

      await problemsService.getProblems({
        search: 'tree',
        difficulty: 'Easy',
        status: 'solved',
        tag: 'array',
        page: 2,
        pageSize: 10,
      });

      expect(apiClient.get).toHaveBeenCalledWith(
        '/problems?search=tree&difficulty=Easy&status=solved&tag=array&page=2&pageSize=10',
        undefined
      );
    });

    it('should forward request config for SSR cookie support', async () => {
      const mockResponse: { data: ProblemListResponse } = {
        data: { data: [], meta: { page: 1, pageSize: 20, total: 0, totalPages: 0 } },
      };

      vi.mocked(apiClient.get).mockResolvedValue(mockResponse);

      const config = { headers: { cookie: 'auth_token=test-token' } };

      await problemsService.getProblems({}, config);

      expect(apiClient.get).toHaveBeenCalledWith('/problems?page=1&pageSize=20', config);
    });
  });

  describe('getProblemById', () => {
    it('should return a problem when found', async () => {
      const mockProblem: ProblemDetail = {
        id: 1,
        title: 'Two Sum',
        difficulty: 'Easy',
        tags: ['Array', 'Hash Table'],
        description: 'Find two numbers that add up to target.',
        examples: ['Input: [2,7,11,15], target=9'],
        constraints: ['Only one valid answer exists.'],
        starterCode: 'function twoSum() {}',
      };

      vi.mocked(apiClient.get).mockResolvedValue({ data: mockProblem });

      const result = await problemsService.getProblemById(1);

      expect(apiClient.get).toHaveBeenCalledWith('/problems/1', undefined);
      expect(result).toEqual(mockProblem);
    });

    it('should throw ApiError with status 404 when problem is not found', async () => {
      const apiError = {
        status: 404,
        code: 'NOT_FOUND',
        message: 'Problem not found',
      };

      vi.mocked(apiClient.get).mockRejectedValue(apiError);

      await expect(problemsService.getProblemById(999)).rejects.toMatchObject({
        status: 404,
        code: 'NOT_FOUND',
      });
    });
  });

  describe('getTags', () => {
    it('should return deduplicated and sorted tags', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({
        data: ['Tree', 'Array', 'Tree', 'Graph'],
      });

      const result = await problemsService.getTags();

      expect(apiClient.get).toHaveBeenCalledWith('/problems/tags', undefined);
      expect(result).toEqual(['Array', 'Graph', 'Tree']);
    });

    it('should return an empty array when no tags are returned', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({ data: [] });

      const result = await problemsService.getTags();

      expect(result).toEqual([]);
    });
  });

  describe('getStats', () => {
    const mockStats: ProblemStats = { total: 100, solved: 25, attempted: 40 };

    it('should forward a raw cookie string as a request header for SSR auth context', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({ data: mockStats });

      await problemsService.getStats('auth_token=test-token');

      expect(apiClient.get).toHaveBeenCalledWith('/problems/stats', {
        headers: { cookie: 'auth_token=test-token' },
      });
    });

    it('should forward a full RequestConfig object when provided', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({ data: mockStats });

      const config = { headers: { cookie: 'auth_token=test-token' } };

      await problemsService.getStats(config);

      expect(apiClient.get).toHaveBeenCalledWith('/problems/stats', config);
    });

    it('should call the endpoint without auth config when no argument is passed', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({ data: mockStats });

      await problemsService.getStats();

      expect(apiClient.get).toHaveBeenCalledWith('/problems/stats', undefined);
    });
  });
});
