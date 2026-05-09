import { ProgressVariant, ProgressMode } from './Progress.constants';

import type { LinearProgressProps, CircularProgressProps } from '@mui/material';

type MuiProgressColor =
  | NonNullable<LinearProgressProps['color']>
  | NonNullable<CircularProgressProps['color']>;

interface BaseProgressProps {
  variant?: ProgressVariant;
  mode?: ProgressMode;
  value?: number;
  showLabel?: boolean;
  color?: MuiProgressColor;
}

export interface LinearProps
  extends BaseProgressProps,
    Omit<LinearProgressProps, 'variant' | 'color'> {
  variant: ProgressVariant.LINEAR;
}

export interface CircularProps
  extends BaseProgressProps,
    Omit<CircularProgressProps, 'variant' | 'color'> {
  variant: ProgressVariant.CIRCULAR;

  size?: number | string;
  thickness?: number;
}

export type ProgressProps = LinearProps | CircularProps;
