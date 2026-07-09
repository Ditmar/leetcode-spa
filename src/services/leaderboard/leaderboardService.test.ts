import { describe, it, expect, vi, beforeEach } from 'vitest';

import { apiClient } from '../api/apiClient';

import { leaderboardService } from './leaderboardService';

vi.mock('../api/apiClient', () => ({
  apiClient: {
    get: vi.fn(),
  },
}));

const mockEntries = [
  { rank: 1, username: 'alice', score: 9840, solvedCount: 312 },
  { rank: 2, username: 'bob', score: 7200, solvedCount: 210 },
  { rank: 3, username: 'carlos', score: 8750, solvedCount: 274 },
];

describe('leaderboardService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getTopUsers', () => {
    it('returns users sorted by score descending with correct rank', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({ data: mockEntries });

      const result = await leaderboardService.getTopUsers();

      expect(result[0].username).toBe('alice');
      expect(result[0].rank).toBe(1);
      expect(result[0].score).toBe(9840);

      expect(result[1].username).toBe('carlos');
      expect(result[1].rank).toBe(2);

      expect(result[2].username).toBe('bob');
      expect(result[2].rank).toBe(3);
    });

    it('calls the correct endpoint', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({ data: [] });

      await leaderboardService.getTopUsers();

      expect(apiClient.get).toHaveBeenCalledWith('/leaderboard', undefined);
    });

    it('passes cookies when provided', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({ data: [] });

      await leaderboardService.getTopUsers('my-cookie');

      expect(apiClient.get).toHaveBeenCalledWith('/leaderboard', {
        headers: { Cookie: 'my-cookie' },
      });
    });

    it('returns empty array when API returns no data', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({ data: [] });

      const result = await leaderboardService.getTopUsers();

      expect(result).toEqual([]);
    });
  });
});
