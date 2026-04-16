import { styled, Box } from '@mui/material';

import { AVATAR_SIZES, AVATAR_VARIANTS } from './Avatar.constants';
import type { AvatarStylesProps } from './Avatar.types';

export const StyledAvatar = styled(Box, {
  shouldForwardProp: (prop) => !['$size', '$variant'].includes(prop as string),
})<AvatarStylesProps>(({ $size = 'md', $variant = 'default' }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  userSelect: 'none',
  fontWeight: 500,
  transition: 'all 0.2s ease-in-out',

  width: `${AVATAR_SIZES[$size]}px`,
  height: `${AVATAR_SIZES[$size]}px`,

  fontSize:
    $size === 'sm' ? '11px' : $size === 'md' ? '13px' : $size === 'xl' ? '16px' : '14px',

  backgroundColor: AVATAR_VARIANTS[$variant].bg,
  color: AVATAR_VARIANTS[$variant].color,
}));