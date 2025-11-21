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
  small: { height: 56.2, width: 287.6, padding: [4, 18], fontSize: 12.64, borderRadius: 8.84 },
  medium: { height: 68.75, width: 349.35, padding: [16, 21], fontSize: 15, borderRadius: 10.4 },
  large: { height: 81.3, width: 411.1, padding: [8, 25], fontSize: 18.27, borderRadius: 12 },
} as const;
