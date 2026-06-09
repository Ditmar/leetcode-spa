export const CONTEST_STATUSES = ['active', 'upcoming', 'past'] as const;

export type ContestStatus = (typeof CONTEST_STATUSES)[number];

export const CONTEST_DIFFICULTIES = ['easy', 'medium', 'hard'] as const;

export type Difficulty = (typeof CONTEST_DIFFICULTIES)[number];

export type IsoDateTimeString = string;

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
  startTime: IsoDateTimeString;
  endTime: IsoDateTimeString;
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
  finishTime?: IsoDateTimeString;
}

export interface PaginationMeta {
  totalCount: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
}

export interface ContestListResponse {
  contests: Contest[];
  meta: PaginationMeta;
}

export interface LeaderboardResponse {
  entries: LeaderboardEntry[];
  meta: PaginationMeta;
}

export interface ContestRequestOptions {
  cookie?: string;
}
