export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type ContestStatus = 'active' | 'upcoming' | 'past';

export interface Contest {
  id: number;
  title: string;
  description?: string;
  status: ContestStatus;
  startTime: string; // ISO 8601
  endTime: string; // ISO 8601
  participantCount?: number;
}

export interface ContestFilters {
  status?: ContestStatus;
  page?: number;
  pageSize?: number;
}

export interface ContestProblem {
  id: number;
  title: string;
  difficulty: Difficulty;
  score: number;
}

export interface ContestDetail extends Contest {
  problems: ContestProblem[];
  isRegistered?: boolean; // only present when request is authenticated
  userRank?: number; // only present when contest is past and user participated
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatarUrl?: string;
  score: number;
  finishTime?: string; // ISO 8601 — absent (undefined) when the user has not finished
}

export interface ContestListResponse {
  data: Contest[];
  meta?: {
    totalCount?: number;
    pageCount?: number;
    currentPage?: number;
    perPage?: number;
  };
}

export interface LeaderboardResponse {
  data: LeaderboardEntry[];
  meta?: {
    totalCount?: number;
    pageCount?: number;
    currentPage?: number;
    perPage?: number;
  };
}
