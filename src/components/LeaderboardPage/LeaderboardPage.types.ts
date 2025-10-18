export interface User {
  id: string;
  rank: number;
  avatar?: string;
  fullName: string;
  username: string;
  points: number;
  testsPassed: number;
  isCurrentUser?: boolean;
}

export type SortBy = 'points' | 'testsPassed' | 'recentActivity';
export type TimePeriod = 'all' | 'week' | 'month' | 'year';

export interface LeaderboardFilters {
  search: string;
  sortBy: SortBy;
  timePeriod?: TimePeriod;
  category?: string;
}

export interface LeaderboardState {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
  filters: LeaderboardFilters;
}
