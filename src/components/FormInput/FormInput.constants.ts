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
  small: { height: '56px', padding: '4px 16px', fontSize: '0.75rem' },
  medium: { height: '81px', padding: '8px 20px', fontSize: '0.875rem' },
  large: { height: '96px', padding: '10px 24px', fontSize: '1rem' },
} as const;

export const COLOR_CONFIGS = {
  borderNormal: '#c5c3c3ff',
  borderFocus: '#B23DEA',
  borderError: '#F44336',
  backgroundFilled: '#F5F5F5',
} as const;
