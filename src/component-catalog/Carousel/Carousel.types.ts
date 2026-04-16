import type { BoxProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface CarouselProps extends BoxProps {
  children: ReactNode;
  autoPlay?: boolean;
  interval?: number;
}
