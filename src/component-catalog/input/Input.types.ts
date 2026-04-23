import type { TextFieldProps } from '@mui/material';
import type { InputTypes, InputVariants } from './Input.constants';
import type { ReactNode } from 'react';

export interface InputProps extends Omit<TextFieldProps, 'type' | 'variant'> {
  type?: InputTypes;
  variant?: InputVariants;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  /**
  * Shortcut for inputProps.maxLength
  */
  maxLength?: number;
  showCharacterCount?: boolean;
  readOnly?: boolean;
}
