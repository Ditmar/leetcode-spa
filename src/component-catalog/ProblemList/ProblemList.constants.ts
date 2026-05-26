import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import type { ProblemDifficulty } from './ProblemList.types';

export const STATUS_ICON_MAP = {
  solved: CheckCircleOutlineIcon,
  attempted: RemoveCircleOutlineIcon,
  unsolved: RadioButtonUncheckedIcon,
} as const;

export const STATUS_COLOR_MAP = {
  solved: 'success',
  attempted: 'warning',
  unsolved: 'neutral',
} as const;

export const DIFFICULTY_COLOR_MAP: Record<ProblemDifficulty, string> = {
  Easy: '#2db55d',
  Medium: '#feb800',
  Hard: '#ef4743',
};
