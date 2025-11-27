import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { pillTagTokens, typographyTokens } from '../../style-library/theme/theme';

import type { MenuBadgeProps } from './Menu-Badge.types';

export const MenuBadgeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(2.8),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  flex: '0 0 auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
  },
}));

export const LabelText = styled('span', {
  shouldForwardProp: (prop) => prop !== 'variant',
})<Pick<MenuBadgeProps, 'variant'>>(({ theme, variant }) => {
  const isSecondary = variant === 'secondaryText';
  const { menuBadge } = typographyTokens;
  return {
    fontFamily: menuBadge.fontFamily,
    fontWeight: menuBadge.fontWeight,
    fontSize: menuBadge.fontSize,
    lineHeight: menuBadge.lineHeight,
    letterSpacing: menuBadge.letterSpacing,

    color: isSecondary ? 'transparent' : theme.palette.text.primary,
    backgroundImage: isSecondary
      ? `linear-gradient(90deg, ${pillTagTokens.colors.gradientStart}, ${pillTagTokens.colors.gradientEnd})`
      : 'none',
    ...(isSecondary && {
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textFillColor: 'transparent',
    }),

    [theme.breakpoints.down('sm')]: {
      fontFamily: menuBadge.fontFamily,
      fontWeight: menuBadge.fontWeight,
      fontSize: menuBadge.fontSize,
      lineHeight: menuBadge.lineHeight,
      letterSpacing: menuBadge.letterSpacing,
      color: isSecondary ? 'transparent' : theme.palette.text.primary,
      backgroundImage: isSecondary
        ? `linear-gradient(90deg, ${pillTagTokens.colors.gradientStart}, ${pillTagTokens.colors.gradientEnd})`
        : 'none',
      ...(isSecondary && {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      }),
    },
    minWidth: typographyTokens.menuBadge.minWidth,
    minHeight: typographyTokens.menuBadge.minHeight,
  };

});
