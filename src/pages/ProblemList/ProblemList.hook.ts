import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from 'react';

import { problemListTokens } from '../../style-library/theme/theme';

import { getDifficultyChipColor, getStatusIconColor } from './ProblemList.utils';

import type { ProblemDifficulty, ProblemStatus, UseProblemListReturn } from './ProblemList.types';

export function useProblemList(selectedProblemId: number): UseProblemListReturn {
  const iconSx = { fontSize: `${problemListTokens.dimensions.statusIconSize}px` };

  const getStatusIcon = React.useCallback((status: ProblemStatus): React.ReactElement => {
    const color = getStatusIconColor(status);

    if (status === 'solved') {
      return React.createElement(CheckCircleOutlineIcon, {
        color,
        sx: iconSx,
        'aria-label': 'Solved',
      });
    }
    if (status === 'attempted') {
      return React.createElement(RemoveCircleOutlineIcon, {
        color,
        sx: iconSx,
        'aria-label': 'Attempted',
      });
    }
    return React.createElement(RadioButtonUncheckedIcon, {
      color,
      sx: iconSx,
      'aria-label': 'Unsolved',
    });
  }, []);

  const getDifficultyColor = React.useCallback(
    (difficulty: ProblemDifficulty): 'success' | 'warning' | 'error' =>
      getDifficultyChipColor(difficulty),
    []
  );

  const isSelected = React.useCallback(
    (id: number): boolean => id === selectedProblemId,
    [selectedProblemId]
  );

  return { getStatusIcon, getDifficultyColor, isSelected };
}
