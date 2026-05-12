import { describe, expect, it, vi, beforeEach } from 'vitest';

import { userService } from './userService';

const mockApiResponse = <T>(data: T) => ({ data });

describe('userService', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.stubGlobal('fetch', vi.fn());
  });

  describe('getProfile', () => {
    it('returns current user profile', async () => {
      const profile = {
        id: '1',
        username: 'adrian',
        email: 'adrian@example.com',
        joinedAt: '2024-01-01',
        role: 'user',
        badges: [],
        stats: { totalSolved: 10, acceptanceRate: 100 },
      };

      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => mockApiResponse(profile),
      } as Response);

      const result = await userService.getProfile();
      expect(result.username).toBe('adrian');
      expect(result.id).toBe('1');
    });

    it('returns public profile by id', async () => {
      const profile = {
        id: '2',
        username: 'sofi',
        email: 'sofi@example.com',
        joinedAt: '2024-01-01',
        role: 'user',
        badges: [],
        stats: { totalSolved: 20, acceptanceRate: 100 },
      };

      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => mockApiResponse(profile),
      } as Response);

      const result = await userService.getProfile('2');
      expect(result.username).toBe('sofi');
    });
  });

  describe('getStats', () => {
    it('normalizes heatmap to 365 days', async () => {
      const stats = {
        totalSolved: 10,
        easySolved: 5,
        mediumSolved: 3,
        hardSolved: 2,
        acceptanceRate: 90,
        currentStreak: 5,
        maxStreak: 10,
        submissionHeatmap: [],
        recentSubmissions: [],
      };

      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => mockApiResponse(stats),
      } as Response);

      const result = await userService.getStats();
      expect(result.submissionHeatmap).toHaveLength(365);
      expect(result.submissionHeatmap[0]).toHaveProperty('count', 0);
    });
  });

  describe('validations', () => {
    it('throws when displayName exceeds 50 characters', async () => {
      await expect(
        userService.updateProfile({ displayName: 'a'.repeat(51) })
      ).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
      });
    });

    it('throws when bio exceeds 256 characters', async () => {
      await expect(userService.updateProfile({ bio: 'a'.repeat(257) })).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
      });
    });
  });
});
