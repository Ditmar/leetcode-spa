import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'error';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded' | 'square' | 'pill';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'color'> {
    /** Color variant */
    variant?: ButtonVariant;
    /** Size */
    size?: ButtonSize;
    /** Shape (border radius presets) */
    shape?: ButtonShape;
    /** Loading state */
    loading?: boolean;
    /** Left icon */
    startIcon?: React.ReactNode;
    /** Right icon */
    endIcon?: React.ReactNode;
    /** Take full width */
    fullWidth?: boolean;
    /** Test id */
    'data-testid'?: string;
}

export interface StyledButtonProps {
    $variant: ButtonVariant;
    $size: ButtonSize;
    $shape: ButtonShape;
    $loading: boolean;
    $fullWidth: boolean;
}
