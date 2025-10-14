import type { SxProps, Theme } from '@mui/material';
import { CARD_PADDING, CARD_BORDER_RADIUS, CARD_GAP } from './TestCard.constants';

export const cardSx = (
  layout: 'horizontal' | 'vertical' = 'horizontal'
): SxProps<Theme> => ({
  alignItems: 'center',
  borderRadius: CARD_BORDER_RADIUS,
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: layout === 'horizontal' ? 'row' : 'column',
  gap: CARD_GAP,
  justifyContent: 'flex-start',
  maxWidth: 400,
  minHeight: 150,
  minWidth: 280,
  padding: CARD_PADDING,
  width: '100%',
});

export const logoSx: SxProps<Theme> = {
  flexShrink: 0,
  height: 'auto',
  maxHeight: 80,
  maxWidth: 80,
  objectFit: 'contain',
  width: 'auto',
};

export const contentSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 0,
  textAlign: 'left',
};

