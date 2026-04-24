import { styled, Box } from '@mui/material';

import { AVATAR_SIZES, AVATAR_VARIANTS } from './Avatar.constants';

import type { AvatarStylesProps } from './Avatar.types';

export const StyledAvatar = styled(Box, {
  shouldForwardProp: (prop) => !['$size', '$variant'].includes(prop as string),
})<AvatarStylesProps>(({ $size = 'md', $variant = 'default' }) => {
  const sizeConfig = AVATAR_SIZES[$size];
  const colorConfig = AVATAR_VARIANTS[$variant];
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    userSelect: 'none',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
    width: `${sizeConfig.width}px`,
    height: `${sizeConfig.height}px`,
    fontSize: `${sizeConfig.fontSize}px`,
    backgroundColor: colorConfig.bg,
    color: colorConfig.color,
  };
});
