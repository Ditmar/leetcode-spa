import type { ButtonVariant, ButtonSize, ButtonShape } from './Button.types';

export const BUTTON_VARIANTS: Record<ButtonVariant, ButtonVariant> = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  error: 'error',
} as const;

export const BUTTON_SIZES: Record<ButtonSize, ButtonSize> = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export const BUTTON_SHAPES: Record<ButtonShape, ButtonShape> = {
  rounded: 'rounded',
  square: 'square',
  pill: 'pill',
} as const;

export const SIZE_CONFIGS = {
  small:  { height: 32, padding: '6px 16px',  fontSize: '0.8125rem', minWidth: 64 },
  medium: { height: 40, padding: '8px 22px',  fontSize: '0.875rem',  minWidth: 64 },
  large:  { height: 48, padding: '10px 28px', fontSize: '0.9375rem', minWidth: 64 },
} as const;

export const SHAPE_CONFIGS = {
  rounded: { borderRadius: '8px'  },
  square:  { borderRadius: '4px'  },
  pill:    { borderRadius: '24px' },
} as const;

export const DEFAULT_PROPS = {
  variant: 'primary' as ButtonVariant,
  size: 'medium' as ButtonSize,
  shape: 'rounded' as ButtonShape,
  loading: false,
  fullWidth: false,
  disabled: false,
} as const;

