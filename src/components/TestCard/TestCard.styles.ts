import {
  CARD_BORDER_RADIUS,
  CARD_DEFAULT_HEIGHT,
  CARD_DEFAULT_WIDTH,
  CARD_GAP,
  CARD_PADDING,
  LOGO_MAX_SIZE,
  TEXT_HEIGHT,
} from './TestCard.constants';

import type { SxProps, Theme } from '@mui/material';

export const cardSx = (layout: 'horizontal' | 'vertical'): SxProps<Theme> => ({
  alignItems: layout === 'horizontal' ? 'center' : 'stretch',
  borderRadius: CARD_BORDER_RADIUS,
  display: 'flex',
  flexDirection: layout === 'horizontal' ? 'row' : 'column',
  gap: CARD_GAP,
  height: layout === 'horizontal' ? 'auto' : CARD_DEFAULT_HEIGHT,
  justifyContent: 'flex-start',
  overflow: 'hidden',
  position: 'relative',
  width: layout === 'horizontal' ? 'auto' : CARD_DEFAULT_WIDTH,
});

export const contentSx = (layout: 'horizontal' | 'vertical'): SxProps<Theme> =>
  layout === 'horizontal'
    ? {
        boxSizing: 'border-box',
        flex: 1,
        padding: CARD_PADDING,
      }
    : {
        backdroFilter: 'blur(5px)',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        borderBottomLeftRadius: CARD_BORDER_RADIUS,
        borderBottomRightRadius: CARD_BORDER_RADIUS,
        boxSizing: 'border-box',
        color: '#fff',
        height: TEXT_HEIGHT,
        left: 0,
        padding: CARD_PADDING,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      };

export const logoSx = (layout: 'horizontal' | 'vertical'): SxProps<Theme> =>
  layout === 'horizontal'
    ? {
        flexShrink: 0,
        height: '100%',
        maxHeight: LOGO_MAX_SIZE,
        maxWidth: LOGO_MAX_SIZE,
        objectFit: 'cover',
        width: LOGO_MAX_SIZE,
      }
    : {
        height: '100%',
        left: 0,
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        width: '100%',
      };
