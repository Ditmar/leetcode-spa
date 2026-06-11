import type { Difficulty, ProblemStatus } from './ProblemsPage.types';
import type { ChipProps } from '@mui/material/Chip';

export function getDifficultyChipColor(difficulty: Difficulty): ChipProps['color'] {
  const map: Record<Difficulty, ChipProps['color']> = {
    Easy: 'success',
    Medium: 'warning',
    Hard: 'error',
  };
  return map[difficulty] ?? 'default';
}

export type StatusIconName = 'CheckCircleOutline' | 'RemoveCircleOutline' | 'RadioButtonUnchecked';

export function getStatusIconName(status: ProblemStatus): StatusIconName {
  const map: Record<ProblemStatus, StatusIconName> = {
    solved: 'CheckCircleOutline',
    attempted: 'RemoveCircleOutline',
    unsolved: 'RadioButtonUnchecked',
  };
  return map[status];
}

export function getStatusIconColor(status: ProblemStatus): 'success' | 'warning' | 'disabled' {
  const map: Record<ProblemStatus, 'success' | 'warning' | 'disabled'> = {
    solved: 'success',
    attempted: 'warning',
    unsolved: 'disabled',
  };
  return map[status];
}

export function formatAcceptance(rate: number): string {
  return `${rate.toFixed(1)}%`;
}
