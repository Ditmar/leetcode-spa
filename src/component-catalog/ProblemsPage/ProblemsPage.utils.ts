import type { Difficulty, ProblemStatus } from './ProblemsPage.types';
import type { ChipProps } from '@mui/material/Chip';

export function getDifficultyChipColor(difficulty: Difficulty): ChipProps['color'] {
  switch (difficulty) {
    case 'Easy':
      return 'success';
    case 'Medium':
      return 'warning';
    case 'Hard':
      return 'error';
    default:
      return 'default';
  }
}

export type StatusIconName = 'CheckCircleOutline' | 'RemoveCircleOutline' | 'RadioButtonUnchecked';

export function getStatusIconName(status: ProblemStatus): StatusIconName {
  switch (status) {
    case 'solved':
      return 'CheckCircleOutline';
    case 'attempted':
      return 'RemoveCircleOutline';
    case 'unsolved':
    default:
      return 'RadioButtonUnchecked';
  }
}

export function getStatusIconColor(status: ProblemStatus): 'success' | 'warning' | 'disabled' {
  switch (status) {
    case 'solved':
      return 'success';
    case 'attempted':
      return 'warning';
    case 'unsolved':
    default:
      return 'disabled';
  }
}

export function formatAcceptance(rate: number): string {
  return `${rate.toFixed(1)}%`;
}
