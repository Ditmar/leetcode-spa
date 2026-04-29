import type { InputLabelProps } from '@mui/material/InputLabel';

export interface LabelProps extends Omit<InputLabelProps, 'required'> {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  optional?: boolean;
  error?: boolean;
  disabled?: boolean;
  tooltip?: string;
}
