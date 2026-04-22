export const DIALOG_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  FULL_SCREEN: 'fullscreen',
} as const;

export type DialogSize = typeof DIALOG_SIZES[keyof typeof DIALOG_SIZES];