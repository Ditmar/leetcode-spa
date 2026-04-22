export const DIALOG_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;

export type DialogSize = (typeof DIALOG_SIZES)[keyof typeof DIALOG_SIZES];
