import type { ReactNode } from 'react';
import type { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

export type BadgeColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

export type BadgeTone =
  | 'default'
  | 'secondary'
  | 'outline'
  | 'destructive'
  | 'success'
  | 'info'
  | 'warning';

export type BadgeDisplay = 'attached' | 'standalone';

export interface BadgeProps
  extends Omit<MuiBadgeProps, 'badgeContent' | 'children' | 'color' | 'anchorOrigin' | 'variant'> {
  badgeContent?: number | string;
  children?: ReactNode;
  color?: BadgeColor;
  tone?: BadgeTone;
  max?: number;
  showZero?: boolean;
  invisible?: boolean;
  variant?: 'standard' | 'dot';
  display?: BadgeDisplay;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
}
