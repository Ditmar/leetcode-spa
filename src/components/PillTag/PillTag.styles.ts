import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

import { getPillTagTokens } from './PillTag.constants';

import type { PillTagVariant } from './PillTag.constants';
import type { ChipProps } from '@mui/material/Chip';

interface PillTagStyledProps extends ChipProps {
  pillVariant?: PillTagVariant;
}

export const PillTagStyled = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'pillVariant',
})<PillTagStyledProps>(({ theme, pillVariant = 'primary' as PillTagVariant }) => {
  const tokens = getPillTagTokens(theme);
  const mobileDimensions = tokens.dimensions[pillVariant].mobile;
  const tabletDimensions = tokens.dimensions[pillVariant].tablet;
  const desktopDimensions = tokens.dimensions[pillVariant].desktop;
  const shadows = tokens.shadows[pillVariant];
  const getBorderRadius = (dims: typeof mobileDimensions) => {
    const radius = dims.borderRadius;
    if (pillVariant === 'primary') {
      return `${radius} 0px ${radius} ${radius}`;
    }
    return `${radius} ${radius} ${radius} 0px`;
  };
  const getPadding = (dims: typeof mobileDimensions) => {
    const paddingV = dims.padding.vertical;
    const paddingH = dims.padding.horizontal;
    return theme.spacing(paddingV, paddingH);
  };

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: tokens.typography.fontFamily,
    fontWeight: tokens.typography.fontWeight,
    fontStyle: 'normal',
    letterSpacing: tokens.typography.letterSpacing,
    textAlign: 'center' as const,
    textTransform: 'none' as const,
    whiteSpace: 'nowrap' as const,
    border: 'none',
    boxSizing: 'border-box' as const,
    backgroundColor: tokens.colors.background,
    color: 'transparent',
    overflow: 'hidden' as const,
    transition: theme.transitions.create(
      ['box-shadow', 'transform', 'width', 'height', 'font-size', 'border-radius', 'padding'],
      {
        duration: tokens.transitions.duration,
        easing: tokens.transitions.easing,
      }
    ),
    width: `${mobileDimensions.width}px`,
    height: `${mobileDimensions.height}px`,
    minHeight: `${mobileDimensions.height}px`,
    fontSize: `${mobileDimensions.fontSize}px`,
    lineHeight: `${mobileDimensions.fontSize * mobileDimensions.lineHeight}px`,
    padding: getPadding(mobileDimensions),
    borderRadius: getBorderRadius(mobileDimensions),
    boxShadow: shadows.default.replace(/(\d+(\.\d+)?)px/g, (match) => {
      const value = parseFloat(match);
      const scaleFactor = pillVariant === 'primary' ? 0.3767 : 0.4358;
      return `${(value * scaleFactor).toFixed(2)}px`;
    }),
    [theme.breakpoints.up('md')]: {
      minWidth: `${tabletDimensions.width}px`,
      height: `${tabletDimensions.height}px`,
      minHeight: `${tabletDimensions.height}px`,
      fontSize: `${tabletDimensions.fontSize}px`,
      lineHeight: `${tabletDimensions.fontSize * tabletDimensions.lineHeight}px`,
      padding: getPadding(tabletDimensions),
      borderRadius: getBorderRadius(tabletDimensions),
      boxShadow: shadows.default.replace(/\d+(\.\d+)?px/g, (match) => {
        const value = parseFloat(match);
        return `${(value * 0.75).toFixed(2)}px`;
      }),
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: `${desktopDimensions.width}px`,
      height: `${desktopDimensions.height}px`,
      minHeight: `${desktopDimensions.height}px`,
      fontSize: `${desktopDimensions.fontSize}px`,
      lineHeight: `${desktopDimensions.fontSize * desktopDimensions.lineHeight}px`,
      padding: getPadding(desktopDimensions),
      borderRadius: getBorderRadius(desktopDimensions),
      boxShadow: shadows.default,
    },
    '& .MuiChip-label': {
      display: 'block',
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      padding: 0,
      lineHeight: 'inherit',
      background: `linear-gradient(180deg, ${tokens.colors.gradientStart} 0%, ${tokens.colors.gradientEnd} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textAlign: 'center',
    },
    '&.MuiChip-root': {
      color: 'transparent',
    },

    '&.MuiChip-clickable': {
      cursor: 'pointer' as const,
      userSelect: 'none' as const,
    },

    '&:hover': {
      transform: `translateY(${tokens.states.hover.translateY}px)`,
      backgroundColor: tokens.colors.background,
      [theme.breakpoints.up('lg')]: {
        boxShadow: shadows.hover,
      },
    },

    '&:active': {
      transform: `scale(${tokens.states.active.scale})`,
      [theme.breakpoints.up('lg')]: {
        boxShadow: shadows.active,
      },
    },

    '&.Mui-disabled': {
      opacity: tokens.states.disabled.opacity,
      pointerEvents: 'none' as const,
      boxShadow: 'none',
    },

    '&:focus-visible': {
      outline: `2px solid ${tokens.colors.gradientStart}`,
      outlineOffset: '2px',
    },
  };
});
