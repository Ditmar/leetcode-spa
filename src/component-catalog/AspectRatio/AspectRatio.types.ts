import type { BoxProps } from '@mui/material/Box';
import type { ReactNode } from 'react';

export type AspectRatioValue = number | `${number}/${number}` | `${number}:${number}`;

export interface AspectRatioProps extends BoxProps {
  ratio?: AspectRatioValue;
  children?: ReactNode;
}
