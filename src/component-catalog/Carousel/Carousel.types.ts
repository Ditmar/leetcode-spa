import type { BoxProps } from '@mui/material';

export interface CarouselProps extends BoxProps {
  children: React.ReactNode[] | React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
}
