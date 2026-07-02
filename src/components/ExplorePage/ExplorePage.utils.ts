import type { ExploreDifficulty } from './ExplorePage.types';
import type { ChipProps } from '@mui/material';

export const getProgressPercent = (progress: number, totalProblems: number) => {
  if (totalProblems <= 0) return 0;

  return Math.round((progress / totalProblems) * 100);
};

export const getDifficultyColor = (difficulty: ExploreDifficulty): ChipProps['color'] => {
  if (difficulty === 'Beginner') return 'success';
  if (difficulty === 'Intermediate') return 'warning';
  if (difficulty === 'Advanced') return 'error';

  return 'default';
};
