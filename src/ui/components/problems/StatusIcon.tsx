import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { STATUS_COLOR_MAP } from '../../../pages/ProblemList/ProblemList.constants';
import { problemListTokens } from '../../../style-library/theme/theme';

import type { ProblemStatus } from '../../../services/problems/problemsService.types';
import type { SvgIconProps } from '@mui/material';
import type { ComponentType } from 'react';

const STATUS_ICON: Record<ProblemStatus, ComponentType<SvgIconProps>> = {
  solved: CheckCircleOutlineIcon,
  attempted: RemoveCircleOutlineIcon,
  unsolved: RadioButtonUncheckedIcon,
};

const STATUS_LABEL: Record<ProblemStatus, string> = {
  solved: 'Solved',
  attempted: 'Attempted',
  unsolved: 'Unsolved',
};

export interface StatusIconProps {
  status: ProblemStatus;
}

/** Icon that shows if the user solved, attempted or did not try a problem. */
export function StatusIcon({ status }: StatusIconProps) {
  const Icon = STATUS_ICON[status];

  return (
    <Icon
      color={STATUS_COLOR_MAP[status]}
      sx={{ fontSize: `${problemListTokens.dimensions.statusIconSize}px` }}
      aria-label={STATUS_LABEL[status]}
    />
  );
}
