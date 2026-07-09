export interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
  solvedCount: number;
  avatar?: string;
}

export interface LeaderboardResponse {
  entries: LeaderboardEntry[];
}
