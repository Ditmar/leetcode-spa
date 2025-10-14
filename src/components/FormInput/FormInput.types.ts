import type { TextFieldProps } from '@mui/material/TextField';

export type FormInputVariant = 'outlined' | 'filled';
export type FormInputType = 'text' | 'email' | 'password';
export type FormInputSize = 'small' | 'medium' | 'large';

export interface FormInputProps extends Omit<TextFieldProps, 'variant' | 'size'> {
  variant?: FormInputVariant;
  type?: FormInputType;
  size?: FormInputSize;
  placeholder?: string; 
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  disabled?: boolean; 
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; 
  'data-testid'?: string;
}

export interface StyledFormInputProps {
  $variant: FormInputVariant;
  $size: FormInputSize;
  $error: boolean;
  $shape?: keyof typeof SHAPE_CONFIGS;
}
