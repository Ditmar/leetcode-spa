import { ReactNode } from 'react';

export interface MenuBadgeProps {
  label: string;
  icon?: ReactNode;
  variant?: 'default' | 'color';
}
