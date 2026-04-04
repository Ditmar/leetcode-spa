import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

export interface CheckboxProps extends MuiCheckboxProps {
  label?: React.ReactNode;
  helperText?: string;
  error?: boolean;
}
