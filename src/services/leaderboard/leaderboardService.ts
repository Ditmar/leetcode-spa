import { apiClient } from '../api/apiClient';

import type { LeaderboardEntry } from './leaderboardService.types';
import type { RequestConfig } from '../api/apiClient.types';

export const createCookieConfig = (cookies?: string): RequestConfig | undefined => {
  if (!cookies) return undefined;
  return { headers: { Cookie: cookies } };
};

export const leaderboardService = {
  getTopUsers: async (cookies?: string): Promise<LeaderboardEntry[]> => {
    const response = await apiClient.get<LeaderboardEntry[]>(
      '/leaderboard',
      createCookieConfig(cookies)
    );
    const sorted = [...response.data].sort((a, b) => b.score - a.score);
    return sorted.map((entry, i) => ({ ...entry, rank: i + 1 }));
  },
};
