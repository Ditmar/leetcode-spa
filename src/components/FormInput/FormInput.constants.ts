import type { FormInputVariant, FormInputType, FormInputSize } from './FormInput.types';

export const FORM_INPUT_VARIANTS: Record<FormInputVariant, FormInputVariant> = {
  outlined: 'outlined',
  filled: 'filled',
} as const;

export const FORM_INPUT_SIZES: Record<FormInputSize, FormInputSize> = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export const FORM_INPUT_TYPES: Record<FormInputType, FormInputType> = {
  text: 'text',
  email: 'email',
  password: 'password',
} as const;

export const DEFAULT_PROPS = {
  variant: 'outlined' as FormInputVariant,
  type: 'text' as FormInputType,
  size: 'medium' as FormInputSize,
  disabled: false,
} as const;

export const SIZE_CONFIGS = {
  small: { height: '3rem', padding: '0.25rem 1rem', fontSize: '0.75rem' },
  medium: { height: '4rem', padding: '0.5rem 1.25rem', fontSize: '0.875rem' },
  large: { height: '6rem', padding: '0.75rem 1.5rem', fontSize: '1rem' },
} as const;
