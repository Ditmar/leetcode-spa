import type { ReactNode } from 'react';

export type AlertSeverity = 'info' | 'success' | 'warning' | 'error';

export interface AlertStylesVariants {
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  descriptionColor: string;
}

export interface AlertProps {
  severity?: AlertSeverity;
  title: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}
