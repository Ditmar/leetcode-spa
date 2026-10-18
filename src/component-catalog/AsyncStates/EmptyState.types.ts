import type { ReactNode } from 'react';

export interface EmptyStateProps {
  /** Optional icon displayed above the title. */
  icon?: ReactNode;
  /** Main message shown to the user. */
  title: string;
  /** Additional explanation displayed below the title. */
  description?: string;
  /** Optional action, such as a button to clear filters. */
  action?: ReactNode;
}
