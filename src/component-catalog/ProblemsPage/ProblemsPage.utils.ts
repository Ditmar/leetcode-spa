import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import type { Difficulty, ProblemStatus } from './ProblemsPage.types';
import type { SvgIconComponent } from '@mui/icons-material';
import type { ChipProps } from '@mui/material/Chip';

export function getDifficultyChipColor(difficulty: Difficulty): ChipProps['color'] {
  const map: Record<Difficulty, ChipProps['color']> = {
    Easy: 'success',
    Medium: 'warning',
    Hard: 'error',
  };
  return map[difficulty] ?? 'default';
}

export interface StatusIconConfig {
  Icon: SvgIconComponent;
  color: 'success' | 'warning' | 'disabled';
}

export function getStatusIconConfig(status: ProblemStatus): StatusIconConfig {
  const map: Record<ProblemStatus, StatusIconConfig> = {
    solved: { Icon: CheckCircleOutlineIcon, color: 'success' },
    attempted: { Icon: RemoveCircleOutlineIcon, color: 'warning' },
    unsolved: { Icon: RadioButtonUncheckedIcon, color: 'disabled' },
  };
  return map[status];
}

export function formatAcceptance(rate: number): string {
  return `${rate.toFixed(1)}%`;
}
