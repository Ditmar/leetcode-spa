import { styled } from '@mui/material/styles';

import type { PaletteColor } from '@mui/material/styles';

export const CardContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '100%',
  maxWidth: theme.spacing(40),
  boxShadow: theme.shadows[3],
}));

export const StatItem = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  minHeight: theme.spacing(8),
}));

type SafeColorKey = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';

export const IconWrapper = styled('div')(({ theme }) => {
  const softBg = theme.palette.backgroundIcon;
  return {
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: softBg,
    boxShadow: theme.shadows[1],
    flexShrink: 0,
    padding: theme.spacing(1.25),
  };
});

export const StatIcon = styled('div')<{ color?: SafeColorKey }>(({ theme, color = 'primary' }) => {
  const paletteColor = theme.palette[color] as PaletteColor | undefined;
  const resolvedColor = paletteColor?.main ?? theme.palette.text.primary;

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: resolvedColor,
    width: '100%',
    height: '100%',
    '& svg, & img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      fill: resolvedColor,
      stroke: resolvedColor,
      transition: 'transform 0.2s ease',
    },
    '&:hover svg, &:hover img': {
      transform: 'scale(1.08)',
    },
  };
});

export const StatValue = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.numbers.fontFamily,
  fontSize: theme.typography.numbers.fontSize,
  fontWeight: theme.typography.numbers.fontWeight,
  lineHeight: theme.typography.numbers.lineHeight,
  color: theme.palette.text.primary,
}));

export const StatText = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.texts.fontFamily,
  fontSize: theme.typography.texts.fontSize,
  fontWeight: theme.typography.texts.fontWeight,
  lineHeight: theme.typography.texts.lineHeight,
  color: theme.palette.text.secondary,
}));
