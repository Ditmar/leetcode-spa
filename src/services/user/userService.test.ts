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
    it('throws when updateProfile payload is empty', async () => {
      await expect(userService.updateProfile({})).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
        message: 'Payload cannot be empty.',
      });
    });

    it('throws when updatePreferences payload is empty', async () => {
      await expect(userService.updatePreferences({})).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
        message: 'Payload cannot be empty.',
      });
    });

    it('throws when defaultLanguage selection is invalid', async () => {
      await expect(
        userService.updatePreferences({ defaultLanguage: 'ruby' as unknown as 'javascript' })
      ).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
        message: 'Invalid language selection.',
      });
    });

    it('throws when deleteAccount confirmationPassword is only whitespaces', async () => {
      await expect(
        userService.deleteAccount({ confirmationPassword: '     ' })
      ).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
        message: 'Confirmation password is required for account deletion.',
      });
    });

    it('throws when deleteAccount confirmationPassword is below 6 characters', async () => {
      await expect(
        userService.deleteAccount({ confirmationPassword: '12345' })
      ).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
        message: 'Confirmation password must be at least 6 characters long.',
      });
    });

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

    it('throws when editorFontSize is below 12 or above 24', async () => {
      await expect(userService.updatePreferences({ editorFontSize: 11 })).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
      });
      await expect(userService.updatePreferences({ editorFontSize: 25 })).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
      });
    });

    it('throws when theme selection is invalid', async () => {
      await expect(
        userService.updatePreferences({ theme: 'invalid-theme' as unknown as 'light' })
      ).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
      });
    });

    it('throws when editorTabSize is not 2 or 4', async () => {
      await expect(
        userService.updatePreferences({ editorTabSize: 3 as unknown as 2 })
      ).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
      });
    });

    it('throws when avatar file format is not allowed', async () => {
      const invalidFile = new File([''], 'malicious.exe', { type: 'application/x-msdownload' });
      await expect(userService.uploadAvatar(invalidFile)).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
      });
    });

    it('throws when avatar file size exceeds 2MB', async () => {
      const heavyPayload = 'a'.repeat(2 * 1024 * 1024 + 1);
      const largeFile = new File([heavyPayload], 'avatar.png', { type: 'image/png' });
      await expect(userService.uploadAvatar(largeFile)).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
      });
    });

    it('throws when deleteAccount is missing confirmationPassword', async () => {
      await expect(userService.deleteAccount({ confirmationPassword: '' })).rejects.toMatchObject({
        code: 'VALIDATION_ERROR',
      });
    });
  });
});
