export type { LeaderboardEntry } from '../../services/leaderboard/leaderboardService.types';

export interface LeaderboardTableProps {
  users: import('../../services/leaderboard/leaderboardService.types').LeaderboardEntry[];
}
