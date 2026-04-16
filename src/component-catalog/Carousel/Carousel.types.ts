import type { ReactNode } from 'react';

export interface CarouselProps {
  children: ReactNode;
  autoPlay?: boolean;
  interval?: number;
}
