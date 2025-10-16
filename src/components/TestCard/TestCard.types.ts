import type { CardProps } from '@mui/material';
import React from 'react';

export interface TestCardProps extends CardProps {
  layout?: 'horizontal' | 'vertical';
  logo?: string | React.ReactNode;
  description: string;
  // Tipo compatible con CardProps onClick
  onSelect?: React.MouseEventHandler<HTMLDivElement>;
  title: string;
}
