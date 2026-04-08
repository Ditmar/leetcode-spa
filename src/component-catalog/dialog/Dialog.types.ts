import type { ReactNode } from 'react'; // Añade la palabra 'type'

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: string;
  children?: ReactNode;
  actions?: ReactNode;
  showCloseButton?: boolean;
  persistent?: boolean;
  // Actualiza esta línea para incluir 'fullScreen' como opción de texto
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fullScreen' | false; 
  fullScreen?: boolean;
}