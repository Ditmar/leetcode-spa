import type { SxProps, Theme, CardProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface StatsCardProps extends Omit<CardProps, 'children'> {
  icon?: ReactNode;
  value: string | number;
  label: string;
  sx?: SxProps<Theme>;
}
