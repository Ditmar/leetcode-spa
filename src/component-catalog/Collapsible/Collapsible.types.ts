import type { BoxProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface CollapsibleProps extends BoxProps {
  title?: string;
  headerSlot?: ReactNode;
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  defaultOpen?: boolean;
}
