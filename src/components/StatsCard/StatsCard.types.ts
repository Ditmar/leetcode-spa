import type { ReactNode } from 'react';
import type { CardProps } from '@mui/material';

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
  animated?: boolean;
}
