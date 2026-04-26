import type { DialogProps as MuiDialogProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface DialogProps extends Omit<MuiDialogProps, 'title'> {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  showCloseButton?: boolean;
  persistent?: boolean;
}
