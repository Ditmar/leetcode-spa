import type { ReactNode } from 'react'; // Obligatorio 'import type'

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: string;
  children?: ReactNode;
  actions?: ReactNode;
  showCloseButton?: boolean;
  persistent?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fullScreen' | false;
  fullScreen?: boolean;
}