import type { ReactNode } from 'react';
import type { DialogProps as MuiDialogProps } from '@mui/material';

export interface DialogProps
  extends Omit<MuiDialogProps, 'title' | 'maxWidth'> {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  showCloseButton?: boolean;
  persistent?: boolean;

  maxWidth?: MuiDialogProps['maxWidth'] | 'fullScreen';
}