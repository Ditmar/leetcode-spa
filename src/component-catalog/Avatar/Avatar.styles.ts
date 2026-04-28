import { styled, Box } from '@mui/material';

import { AVATAR_SIZES, type AvatarSizeType } from './Avatar.constants';

import type { AvatarStylesProps } from './Avatar.types';

export const StyledAvatar = styled(Box, {
  shouldForwardProp: (prop) => !['$size', '$variant'].includes(prop as string),
})<AvatarStylesProps>(({ theme, $size = 'md', $variant = 'default' }) => {
  const sizeConfig = AVATAR_SIZES[$size as AvatarSizeType];

  const getThemeColors = () => {
    switch ($variant) {
      case 'primary':
        return {
          bg: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        };
      case 'success':
        return {
          bg: theme.palette.success.main,
          color: theme.palette.success.contrastText,
        };
      case 'default':
      default:
        return {
          bg: theme.palette.action.selected,
          color: theme.palette.text.primary,
        };
    }
  };

  const colors = getThemeColors();

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

    backgroundColor: colors.bg,
    color: colors.color,
  };
});
