import type { CardProps, SxProps, Theme } from '@mui/material';
import type { ReactNode } from 'react';
export enum StatsCardVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export enum StatsCardSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface StatsCardProps extends Omit<CardProps, 'variant'> {
  icon: ReactNode;
  value: string | number;
  label: string;
  variant?: StatsCardVariant;
  size?: StatsCardSize;
  iconColor?: string;
  animated?: boolean;
  sx?: SxProps<Theme>;
}
