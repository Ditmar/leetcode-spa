import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from 'react';

import { problemListTokens } from '../../style-library/theme/theme';

import { STATUS_COLOR_MAP, DIFFICULTY_COLOR_MAP } from './ProblemList.constants';

import type { ProblemDifficulty, ProblemStatus, UseProblemListReturn } from './ProblemList.types';
import type { SvgIconProps } from '@mui/material';

const STATUS_ICON_MAP: Record<ProblemStatus, React.ComponentType<SvgIconProps>> = {
  solved: CheckCircleOutlineIcon,
  attempted: RemoveCircleOutlineIcon,
  unsolved: RadioButtonUncheckedIcon,
} as const;

const STATUS_ARIA_LABEL: Record<ProblemStatus, string> = {
  solved: 'Solved',
  attempted: 'Attempted',
  unsolved: 'Unsolved',
} as const;

export function useProblemList(selectedProblemId: number): UseProblemListReturn {
  const iconSx = { fontSize: `${problemListTokens.dimensions.statusIconSize}px` };

  const getStatusIcon = React.useCallback((status: ProblemStatus): React.ReactElement => {
    const IconComponent = STATUS_ICON_MAP[status];
    const color = STATUS_COLOR_MAP[status];
    const ariaLabel = STATUS_ARIA_LABEL[status];

    return React.createElement(IconComponent, {
      color,
      sx: iconSx,
      'aria-label': ariaLabel,
    });
  }, []);

  const getDifficultyColor = React.useCallback(
    (difficulty: ProblemDifficulty): 'success' | 'warning' | 'error' =>
      DIFFICULTY_COLOR_MAP[difficulty],
    []
  );

  const isSelected = React.useCallback(
    (id: number): boolean => id === selectedProblemId,
    [selectedProblemId]
  );

  return { getStatusIcon, getDifficultyColor, isSelected };
}
