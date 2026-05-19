import type { ChipProps } from '@mui/material/Chip';

import { DIFFICULTY_CHIP_COLOR_MAP } from './ProblemDetail.constants';
import type { ProblemDifficulty } from './ProblemDetail.types';

export const getDifficultyChipColor = (
  difficulty: ProblemDifficulty,
): ChipProps['color'] => DIFFICULTY_CHIP_COLOR_MAP[difficulty];
