import type { ButtonShape, ButtonSize } from './Button.types';

export const SIZE_CONFIGS: Record<
  ButtonSize,
  {
    height: number;
    minWidth: number;
    paddingScale: [number, number];
    fontSizeRem: number;
  }
> = {
  small: { height: 4, minWidth: 8, paddingScale: [0.75, 2], fontSizeRem: 0.8125 },
  medium: { height: 5, minWidth: 9, paddingScale: [1, 2.5], fontSizeRem: 0.875 },
  large: { height: 6, minWidth: 10, paddingScale: [1.25, 3], fontSizeRem: 1 },
};

export const SHAPE_CONFIGS: Record<ButtonShape, number> = {
  rounded: 1.5,
  square: 0.5,
  pill: 3,
};
