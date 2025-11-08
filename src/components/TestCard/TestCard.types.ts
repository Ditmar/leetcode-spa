import type { CardProps } from '@mui/material';
import type { ReactNode } from 'react';

export type CardOrientation = 'horizontal' | 'vertical';

export interface TestCardProps {
  cardProps?: Omit<CardProps, 'onClick'>;
  description?: string;
  logo: string | ReactNode;
  onSelect?: React.MouseEventHandler<HTMLButtonElement>;
  orientation?: CardOrientation;
  title?: string;
}
