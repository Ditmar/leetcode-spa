import { styled } from '@mui/material/styles';

import type { Theme } from '@mui/material/styles';

const toSp = (theme: Theme, px: number) => theme.spacing(px / 8);

export const CardContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: toSp(theme, 187),
  height: toSp(theme, 307),
  borderRadius: toSp(theme, 12),
  backgroundColor: theme.palette.backgroundCard,
  boxShadow: theme.shadows[3],
  overflow: 'hidden',
  padding: 0,

  [theme.breakpoints.down('sm')]: {
    zoom: 0.688,
  },

  [theme.breakpoints.down(350)]: {
    zoom: 0.688,
  },
}));

export const IconWrapper = styled('div')<{ top: number; left: number }>(({ theme, top, left }) => ({
  position: 'absolute',
  top: toSp(theme, top),
  left: toSp(theme, left),
  width: toSp(theme, 48),
  height: toSp(theme, 48),
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: toSp(theme, 10),
  backgroundColor: theme.palette.backgroundIcon,
}));

export const InnerIconBox = styled('div')(() => ({
  width: 28,
  height: 28,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const IconImg = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  display: 'block',
}));

export const TextBlock = styled('div')<{ top: number; left: number }>(({ theme, top, left }) => ({
  position: 'absolute',
  top: toSp(theme, top),
  left: toSp(theme, left),
  width: toSp(theme, 98.459),
  height: toSp(theme, 43),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const ValueBox = styled('div')(({ theme }) => ({
  width: toSp(theme, 51.667),
  height: toSp(theme, 31),
  fontFamily: theme.typography.numbers?.fontFamily,
  fontSize: theme.typography.numbers?.fontSize,
  fontWeight: theme.typography.numbers?.fontWeight,
  lineHeight: theme.typography.numbers?.lineHeight,
  color: theme.palette.statsNumbers,
  display: 'flex',
  alignItems: 'center',
}));

export const LabelBox = styled('div')(({ theme }) => ({
  width: toSp(theme, 98.459),
  height: toSp(theme, 12),
  fontFamily: theme.typography.texts?.fontFamily,
  fontSize: theme.typography.texts?.fontSize,
  fontWeight: theme.typography.texts?.fontWeight,
  lineHeight: theme.typography.texts?.lineHeight,
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.statsLabel,
}));
