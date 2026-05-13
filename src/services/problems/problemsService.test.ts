import { beforeEach, describe, expect, it, vi } from 'vitest';

import { apiClient } from '../api/apiClient';

import { problemsService } from './problemsService';

import type { ProblemDetail, ProblemListResponse } from './problemsService.types';

vi.mock('../api/apiClient', () => ({
  apiClient: {
    get: vi.fn(),
  },
}));

describe('problemsService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getProblems', () => {
    it('should fetch problems with default pagination params', async () => {
      const mockResponse: { data: ProblemListResponse } = {
        data: {
          data: [],
          meta: {
            page: 1,
            pageSize: 20,
            total: 0,
            totalPages: 0,
          },
        },
      };

      vi.mocked(apiClient.get).mockResolvedValue(mockResponse);

      await problemsService.getProblems();

      expect(apiClient.get).toHaveBeenCalledWith('/problems?page=1&pageSize=20', undefined);
    });

    it('should build query string with all filters', async () => {
      const mockResponse: { data: ProblemListResponse } = {
        data: {
          data: [],
          meta: {
            page: 2,
            pageSize: 10,
            total: 1,
            totalPages: 1,
          },
        },
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

      vi.mocked(apiClient.get).mockResolvedValue({
        data: mockProblem,
      });

      const result = await problemsService.getProblemById(1);

      expect(apiClient.get).toHaveBeenCalledWith('/problems/1', undefined);

      expect(result).toEqual(mockProblem);
    });

    it('should throw ApiError when problem is not found', async () => {
      const apiError = {
        status: 404,
        code: 'NOT_FOUND',
        message: 'Problem not found',
      };

      vi.mocked(apiClient.get).mockRejectedValue(apiError);

      await expect(problemsService.getProblemById(999)).rejects.toEqual(apiError);
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
  });

  describe('getStats', () => {
    it('should forward request config for SSR cookie support', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({
        data: {
          total: 100,
          solved: 25,
          attempted: 40,
        },
      });

      const config = {
        headers: {
          cookie: 'auth_token=test-token',
        },
      };

      await problemsService.getStats(config);

      expect(apiClient.get).toHaveBeenCalledWith('/problems/stats', config);
    });
  });
});
