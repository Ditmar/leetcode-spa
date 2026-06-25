import type { ContestDetail } from '../../../services/contests/contestsService.types';

export interface ContestPageProps {
  activeContests: ContestDetail[];
  upcomingContests: ContestDetail[];
  pastContests: ContestDetail[];
}
