import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  CARD_BORDER_RADIUS,
  CARD_DEFAULT_HEIGHT,
  CARD_DEFAULT_WIDTH,
  OVERLAY_HEIGHT,
  OVERLAY_GRADIENT,
  OVERLAY_BLUR,
} from './TestCard.constants';

export const StyledCard = styled(Card)(() => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: CARD_BORDER_RADIUS,
  display: 'flex',
  flexDirection: 'column',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: CARD_DEFAULT_WIDTH,
  height: CARD_DEFAULT_HEIGHT,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

export const StyledOverlay = styled('div')(() => ({
  position: 'absolute',
  bottom: 0,
  width: CARD_DEFAULT_WIDTH,
  height: OVERLAY_HEIGHT,
  background: OVERLAY_GRADIENT,
  backdropFilter: `blur(${OVERLAY_BLUR})`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  color: '#fff',
  borderBottomLeftRadius: CARD_BORDER_RADIUS,
  borderBottomRightRadius: CARD_BORDER_RADIUS,
}));

export const Title = styled('div')(() => ({
  maxWidth: `calc(${CARD_DEFAULT_WIDTH} * 0.70)`,
  height: '21px',
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '100%',
  color: '#fff',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: '20px',
  marginLeft: '10px',
}));

export const Text = styled('div')(() => ({
  maxWidth: `calc(${CARD_DEFAULT_WIDTH} * 0.70)`,
  height: '19px',
  backgroundColor: 'rgba(0,0,0,1)',
  borderRadius: '3px',
  padding: '2px 6px',
  color: '#fff',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: '5px',
  marginLeft: '10px',
}));
