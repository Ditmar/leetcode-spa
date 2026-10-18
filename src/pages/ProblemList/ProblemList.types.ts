export type ProblemStatus = 'solved' | 'attempted' | 'unsolved';
export type ProblemDifficulty = 'Easy' | 'Medium' | 'Hard';
import type { ApiError } from '../../services/api/apiClient.types';

export interface Problem {
  id: number;
  title: string;
  difficulty: ProblemDifficulty;
  acceptanceRate?: number;
  status: ProblemStatus;
}

export interface ProblemListProps {
  problems: Problem[];
  selectedProblemId?: number;
  onSelectProblem: (id: number) => void;
  loading?: boolean;
  error?: ApiError | null;
  onRetry?: () => void;
}
export interface UseProblemListReturn {
  getStatusIcon: (status: ProblemStatus) => React.ReactElement;
  getDifficultyColor: (difficulty: ProblemDifficulty) => 'success' | 'warning' | 'error';
  isSelected: (id: number) => boolean;
}
