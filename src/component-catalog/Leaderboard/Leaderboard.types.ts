export interface LeaderboardUser {
  rank: number;
  username: string;
  score: number;
  solvedCount: number;
  avatar?: string;
}

export interface LeaderboardTableProps {
  users: LeaderboardUser[];
}
