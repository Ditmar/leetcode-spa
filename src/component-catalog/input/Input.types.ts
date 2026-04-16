import type { ReactNode } from 'react';
import type { TextFieldProps } from '@mui/material';

import type { InputTypes, InputVariants } from './Input.constants';


export interface InputProps extends Omit<TextFieldProps, 'type' | 'variant'> {
  type?: InputTypes;
  variant?: InputVariants;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  maxLength?: number;
  showCharacterCount?: boolean;
  readOnly?: boolean;
}
