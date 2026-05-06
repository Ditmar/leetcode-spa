import { ProgressVariant, ProgressMode } from './Progress.constants';

import type { LinearProgressProps, CircularProgressProps } from '@mui/material';

export type ProgressColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'dark';

interface BaseProgressProps {
  variant?: ProgressVariant;
  mode?: ProgressMode;
  value?: number;
  showLabel?: boolean;
  color?: ProgressColor;
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
