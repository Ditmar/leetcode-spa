export type LeaderboardUser = {
  id: string;
  rank: number;
  avatarUrl?: string;
  fullName: string;
  username: string;
  points: number;
  testsPassed: number;
  lastActiveAt?: string;
  category?: string;
};

export type LeaderboardState = {
  users: LeaderboardUser[];
  loading: boolean;
  error: string | null;
  filters: {
    search: string;
    sortBy: 'points' | 'tests' | 'recent';
    timeRange: 'all' | '7d' | '30d';
    category?: string | 'all';
  };
};
