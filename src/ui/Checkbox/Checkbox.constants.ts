export const CHECKBOX_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
} as const;

export type CheckboxSize = (typeof CHECKBOX_SIZES)[keyof typeof CHECKBOX_SIZES];
