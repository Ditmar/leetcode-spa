import type { ButtonVariant, ButtonSize, ButtonShape } from './Button.types';

export const BUTTON_VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
} as const;

export const BUTTON_SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export const BUTTON_SHAPES = {
  rounded: 'rounded',
  square: 'square',
  pill: 'pill',
} as const;

export const SIZE_CONFIGS = {
  small: { height: 32, minWidth: 64, paddingScale: [0.75, 2], fontSizeRem: 0.8125 },
  medium: { height: 40, minWidth: 72, paddingScale: [1, 2.5], fontSizeRem: 0.875 },
  large: { height: 48, minWidth: 80, paddingScale: [1.25, 3], fontSizeRem: 1 },
} as const;

export const SHAPE_CONFIGS = {
  rounded: 20,
  square: 4,
  pill: 24,
} as const;

export const DEFAULT_PROPS = {
  variant: 'primary' as ButtonVariant,
  size: 'medium' as ButtonSize,
  shape: 'rounded' as ButtonShape,
  loading: false,
  fullWidth: false,
  disabled: false,
} as const;

export const VARIANT_COLORS = {
  primary: {
    main: 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)',
    light: '#bb86fc',
    hover: 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)',
    active: '#9e09d9ff',
    border: 'none',
    color: '#fff',
  },
  secondary: {
    main: 'transparent',
    light: '#d7a8e6ff',
    border: '1px solid #B23DEA',
    hover: '#d6ade9ff',
    active: '#ecb0f2ff',
    color: '#B33DEB',
  },
} as const;
