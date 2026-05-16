export type ContestStatus = 'active' | 'upcoming' | 'past';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Contest {
  id: string;
  title: string;
  status: ContestStatus;
  difficulty: Difficulty;
  startTime: string;
  duration: string;
  participants: number;
  problemCount: number;
  hasPrize?: boolean;
}

export interface UseContestPageReturn {
  tabValue: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  filteredContests: Contest[];
  loading: boolean;
}