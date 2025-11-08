import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  CARD_BORDER_RADIUS,
  CARD_DEFAULT_HEIGHT,
  CARD_DEFAULT_WIDTH,
  OVERLAY_HEIGHT,
} from './TestCard.constants';

interface StyledCardProps {
  orientation?: 'vertical' | 'horizontal';
}

export const StyledCard = styled(Card)<StyledCardProps>(({ theme, orientation }) => ({
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: CARD_BORDER_RADIUS,
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  height: orientation === 'horizontal' ? CARD_DEFAULT_WIDTH : CARD_DEFAULT_HEIGHT,
  overflow: 'hidden',
  position: 'relative',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  width: orientation === 'horizontal' ? CARD_DEFAULT_HEIGHT : CARD_DEFAULT_WIDTH,

  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'scale(1.02)',
  },
}));

export const StyledOverlay = styled('div')(() => ({
  alignItems: 'center',
  backdropFilter: 'blur(19.41px)',
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.122) 0%, rgba(255, 255, 255, 0) 100%)',
  borderBottomLeftRadius: CARD_BORDER_RADIUS,
  borderBottomRightRadius: CARD_BORDER_RADIUS,
  bottom: 0,
  color: '#fff',
  display: 'flex',
  height: OVERLAY_HEIGHT,
  justifyContent: 'center',
  padding: '0 8px',
  position: 'absolute',
  width: '100%',
}));
