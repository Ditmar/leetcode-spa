export const CARD_LAYOUT = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

export type CardLayout = typeof CARD_LAYOUT[keyof typeof CARD_LAYOUT];