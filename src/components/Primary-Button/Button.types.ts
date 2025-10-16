// Button.types.ts
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded' | 'square' | 'pill';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'color'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  'data-testid'?: string;
  type?: 'button' | 'submit' | 'reset';
}
