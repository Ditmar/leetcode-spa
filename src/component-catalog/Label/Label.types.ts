import type { InputLabelProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface LabelProps extends InputLabelProps {
  children: ReactNode;
  required?: boolean;
  optional?: boolean;
  tooltip?: string;
  htmlFor?: string;
  error?: boolean;
  disabled?: boolean;
}
