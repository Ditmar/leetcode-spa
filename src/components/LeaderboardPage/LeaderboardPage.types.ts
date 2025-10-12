export interface User {
  id: string;
  rank: number;
  avatar: string;
  fullName: string;
  username: string;
  points: number;
  testsPassed: number;
  isCurrentUser?: boolean;
}

export interface LeaderboardFilters {
  search: string;
  sortBy: 'points' | 'testsPassed' | 'recentActivity';
  timePeriod?: 'all' | 'week' | 'month' | 'year';
  category?: string;
}

export interface LeaderboardState {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
  filters: LeaderboardFilters;
}