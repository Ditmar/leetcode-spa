import type { DialogProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface CustomDialogProps extends DialogProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
  persistent?: boolean;
}