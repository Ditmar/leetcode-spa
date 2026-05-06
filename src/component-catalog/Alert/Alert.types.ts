import type { BoxProps } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

export type AlertSeverity = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends Omit<BoxProps, 'title' | 'children'> {
  severity?: AlertSeverity;
  title: string;
  children?: ReactNode;
  icon?: ReactElement;
}

export interface AlertStylesVariants {
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  descriptionColor: string;
}
