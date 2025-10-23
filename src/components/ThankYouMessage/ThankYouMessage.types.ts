import type { ReactNode } from 'react';

export interface ThankYouMessageProps {
  title?: string;
  message?: string;
  illustration?: string | ReactNode;
  showNotification?: boolean;
  notificationText?: string;
  className?: string;
  'data-testid'?: string;
}
