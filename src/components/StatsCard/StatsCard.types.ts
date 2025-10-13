import type { ReactNode } from 'react';
import type { CardProps } from '@mui/material/Card';

export enum StatsCardVariant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  SECONDARY = 'secondary',
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
}
