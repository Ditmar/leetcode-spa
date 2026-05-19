export type ContestStatus = 'active' | 'upcoming' | 'past';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface ContestFilters {
  status?: ContestStatus;
  page?: number;
  pageSize?: number;
}

export interface Contest {
  id: number;
  title: string;
  description?: string;
  status: ContestStatus;
  startTime: string;
  endTime: string;
  participantsCount?: number;
}

export interface ContestProblem {
  id: number;
  title: string;
  difficulty: Difficulty;
  score: number;
}

export interface ContestDetail extends Contest {
  problems: ContestProblem[];
  isRegistered?: boolean;
  userRank?: number;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatarUrl?: string;
  score: number;
  finishTime?: string;
}

export interface PaginationMeta {
  totalCount?: number;
  pageCount?: number;
  currentPage?: number;
  perPage?: number;
}

export interface ContestListResponse {
  contests: Contest[];
  meta?: PaginationMeta;
}

export interface LeaderboardResponse {
  entries: LeaderboardEntry[];
  meta?: PaginationMeta;
}

export interface ContestRequestOptions {
  cookie?: string;
}
