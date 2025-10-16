import type { SxProps, Theme } from '@mui/material';
import {
  CARD_DEFAULT_WIDTH,
  CARD_DEFAULT_HEIGHT,
  CARD_BORDER_RADIUS,
  CARD_GAP,
  TEXT_HEIGHT,
  LOGO_MAX_SIZE,
  CARD_PADDING,
} from './TestCard.constants';

export const cardSx = (layout: 'horizontal' | 'vertical'): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: layout === 'horizontal' ? 'row' : 'column',
  alignItems: layout === 'horizontal' ? 'center' : 'stretch',
  justifyContent: 'flex-start',
  gap: CARD_GAP,
  borderRadius: CARD_BORDER_RADIUS,
  width: layout === 'horizontal' ? 'auto' : CARD_DEFAULT_WIDTH,
  height: layout === 'horizontal' ? 'auto' : CARD_DEFAULT_HEIGHT,
  overflow: 'hidden',
  position: 'relative',
});

export const logoSx = (layout: 'horizontal' | 'vertical'): SxProps<Theme> =>
  layout === 'horizontal'
    ? {
        flexShrink: 0,
        width: LOGO_MAX_SIZE,
        height: '100%',
        maxHeight: LOGO_MAX_SIZE,
        objectFit: 'cover',
      }
    : {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
      };

export const contentSx = (layout: 'horizontal' | 'vertical'): SxProps<Theme> =>
  layout === 'horizontal'
    ? {
        flex: 1,
        padding: CARD_PADDING,
        boxSizing: 'border-box',
      }
    : {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: TEXT_HEIGHT,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        backdropFilter: 'blur(5px)',
        color: '#fff',
        padding: CARD_PADDING,
        boxSizing: 'border-box',
        borderBottomLeftRadius: CARD_BORDER_RADIUS,
        borderBottomRightRadius: CARD_BORDER_RADIUS,
      };
