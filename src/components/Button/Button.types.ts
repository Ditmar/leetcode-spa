import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'error';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded' | 'square' | 'pill';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'color'> {
  variant?: ButtonVariant;

  size?: ButtonSize;

  shape?: ButtonShape;

  loading?: boolean;

  startIcon?: React.ReactNode;

  endIcon?: React.ReactNode;

  fullWidth?: boolean;

  'data-testid'?: string;
}

export interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $shape: ButtonShape;
  $loading: boolean;
  $fullWidth: boolean;
}
