import type { ReactNode } from 'react';
import type { BoxProps } from '@mui/material';

export interface CarouselProps extends BoxProps {
  children: ReactNode;
  autoPlay?: boolean;
  interval?: number;
}