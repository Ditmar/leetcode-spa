import { problemListTokens } from '../../style-library/theme/theme';

import { DIFFICULTY_COLOR_MAP, STATUS_COLOR_MAP } from './ProblemList.constants';

import type { ProblemDifficulty, ProblemStatus } from './ProblemList.types';

export function getDifficultyChipColor(
  difficulty: ProblemDifficulty
): 'success' | 'warning' | 'error' {
  return DIFFICULTY_COLOR_MAP[difficulty];
}

export function getDifficultyTextColor(difficulty: ProblemDifficulty): string {
  const map: Record<ProblemDifficulty, string> = {
    Easy: problemListTokens.colors.easy,
    Medium: problemListTokens.colors.medium,
    Hard: problemListTokens.colors.hard,
  };
  return map[difficulty];
}

export function getStatusIconColor(status: ProblemStatus): 'success' | 'warning' | 'disabled' {
  return STATUS_COLOR_MAP[status];
}

export function formatAcceptanceRate(rate: number): string {
  return `${rate.toFixed(1)}%`;
}
