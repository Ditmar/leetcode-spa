import type { ContestDetail } from '../../services/contests/contestsService.types';

export interface ContestEnrollmentProps {
  contest: ContestDetail;
  onEnroll: (contestId: number) => Promise<void>;
  onStartContest: (contestId: number) => void;
}

export interface ContestCountdownProps {
  startTime: string;
  onExpire?: () => void;
}
