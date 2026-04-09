import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import type { ReactNode } from 'react';

export interface CheckboxProps extends MuiCheckboxProps {
  label?: ReactNode;
  helperText?: string;
  error?: boolean;
}
