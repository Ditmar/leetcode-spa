import type { ChipProps } from '@mui/material/Chip';

import type { ProblemDifficulty } from './ProblemDetail.types';

export const DIFFICULTY_CHIP_COLOR_MAP: Record<
  ProblemDifficulty,
  ChipProps['color']
> = {
  Easy: 'success',
  Medium: 'warning',
  Hard: 'error',
};
