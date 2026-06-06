import { DIFFICULTY_COLOR_MAP } from './ProblemList.constants';

import type { ProblemDifficulty } from './ProblemList.types';

export const getDifficultyChipColor = (difficulty: ProblemDifficulty): string => {
  return DIFFICULTY_COLOR_MAP[difficulty] || '#8c8c8c';
};
