import { DIFFICULTY_CHIP_COLOR_MAP } from './ProblemDetail.constants';

import type { ProblemDifficulty } from './ProblemDetail.types';
import type { ChipProps } from '@mui/material/Chip';

export const getDifficultyChipColor = (difficulty: ProblemDifficulty): ChipProps['color'] =>
  DIFFICULTY_CHIP_COLOR_MAP[difficulty];
