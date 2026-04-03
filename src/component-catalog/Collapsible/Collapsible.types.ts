import type { ReactNode } from 'react';

export interface CollapsibleProps {
  title?: string;
  headerSlot?: ReactNode;
  children: ReactNode;
  open?: boolean; 
  onOpenChange?: (isOpen: boolean) => void;
  defaultOpen?: boolean;
}