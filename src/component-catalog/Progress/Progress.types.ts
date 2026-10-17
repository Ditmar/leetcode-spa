import { ProgressVariant, ProgressMode } from './Progress.constants';

import type { LinearProgressProps, CircularProgressProps } from '@mui/material';

declare module '@mui/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides {
    dark: true;
  }
}

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    dark: true;
  }
}

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

  size?: never;
  thickness?: never;
}

export interface CircularProps
  extends BaseProgressProps,
    Omit<CircularProgressProps, 'variant' | 'color'> {
  variant: ProgressVariant.CIRCULAR;

  size?: number | string;
  thickness?: number;
}

export type ProgressProps = LinearProps | CircularProps;
