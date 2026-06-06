import { problemListTokens } from '../../style-library/theme/theme';

import type { ProblemDifficulty, ProblemStatus } from './ProblemList.types';

/**
 * Returns the MUI Chip/icon color prop for a given difficulty level.
 */
export function getDifficultyChipColor(
  difficulty: ProblemDifficulty
): 'success' | 'warning' | 'error' {
  const map: Record<ProblemDifficulty, 'success' | 'warning' | 'error'> = {
    Easy: 'success',
    Medium: 'warning',
    Hard: 'error',
  };
  return map[difficulty];
}

/**
 * Returns the exact hex color for a difficulty label from the design tokens.
 */
export function getDifficultyTextColor(difficulty: ProblemDifficulty): string {
  const map: Record<ProblemDifficulty, string> = {
    Easy: problemListTokens.colors.easy,
    Medium: problemListTokens.colors.medium,
    Hard: problemListTokens.colors.hard,
  };
  return map[difficulty];
}

/**
 * Returns the MUI color prop for a status icon.
 */
export function getStatusIconColor(status: ProblemStatus): 'success' | 'warning' | 'disabled' {
  const map: Record<ProblemStatus, 'success' | 'warning' | 'disabled'> = {
    solved: 'success',
    attempted: 'warning',
    unsolved: 'disabled',
  };
  return map[status];
}

/**
 * Formats an acceptance rate number as a percentage string (e.g. 49.2 → "49.2%").
 */
export function formatAcceptanceRate(rate: number): string {
  return `${rate.toFixed(1)}%`;
}
