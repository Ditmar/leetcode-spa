import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

import { getPillTagTokens } from '../../style-library/types/theme.helpers';

import type { ChipProps } from '@mui/material/Chip';

export type PillTagVariant = 'primary' | 'secondary';

interface PillTagStyledProps extends ChipProps {
  pillVariant?: PillTagVariant;
}

export const PillTagStyled = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'pillVariant',
})<PillTagStyledProps>(({ theme, pillVariant = 'primary' }) => {
  const tokens = getPillTagTokens(theme);
  const mobileDimensions = tokens.dimensions[pillVariant].mobile;
  const tabletDimensions = tokens.dimensions[pillVariant].tablet;
  const desktopDimensions = tokens.dimensions[pillVariant].desktop;
  const shadows = tokens.shadows[pillVariant];
  const getBorderRadius = (dims: typeof mobileDimensions) => {
    const radius = dims.borderRadius;
    if (pillVariant === 'primary') {
      return `${radius} ${radius} ${radius} 0px`;
    }
    return `${radius} ${radius} 0px ${radius}`;
  };

  return {
    fontFamily: tokens.typography.fontFamily,
    fontWeight: tokens.typography.fontWeight,
    fontStyle: 'normal',
    lineHeight: tokens.typography.lineHeight,
    letterSpacing: tokens.typography.letterSpacing,
    textAlign: 'center',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    border: 'none',
    boxSizing: 'border-box',
    backgroundColor: tokens.colors.background,
    color: 'transparent',
    padding: 0,
    transition: theme.transitions.create(
      ['box-shadow', 'transform', 'width', 'height', 'font-size', 'border-radius'],
      {
        duration: tokens.transitions.duration,
        easing: tokens.transitions.easing,
      }
    ),

    [theme.breakpoints.down('sm')]: {
      width: `${mobileDimensions.width}px`,
      height: `${mobileDimensions.height}px`,
      fontSize: `${mobileDimensions.fontSize}px`,
      borderRadius: getBorderRadius(mobileDimensions),
      padding: `${mobileDimensions.padding.vertical}px ${mobileDimensions.padding.horizontal}px`,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: shadows.default.replace(/\d+(\.\d+)?px/g, (match: string) => {
        const value = parseFloat(match);
        return `${(value * 0.376).toFixed(2)}px`;
      }),
    },

    [theme.breakpoints.between('sm', 'lg')]: {
      width: `${tabletDimensions.width}px`,
      height: `${tabletDimensions.height}px`,
      fontSize: `${tabletDimensions.fontSize}px`,
      borderRadius: getBorderRadius(tabletDimensions),
      padding: `${tabletDimensions.padding.vertical}px ${tabletDimensions.padding.horizontal}px`,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: shadows.default.replace(/\d+(\.\d+)?px/g, (match: string) => {
        const value = parseFloat(match);
        return `${(value * 0.75).toFixed(2)}px`;
      }),
    },

    [theme.breakpoints.up('lg')]: {
      width: `${desktopDimensions.width}px`,
      height: `${desktopDimensions.height}px`,
      fontSize: `${desktopDimensions.fontSize}px`,
      borderRadius: getBorderRadius(desktopDimensions),
      padding: `${desktopDimensions.padding.vertical}px ${desktopDimensions.padding.horizontal}px`,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: shadows.default,
    },

    '& .MuiChip-label': {
      display: 'block',
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      lineHeight: tokens.typography.lineHeight,
      padding: 0,
      background: `linear-gradient(180deg, ${tokens.colors.gradientStart} 0%, ${tokens.colors.gradientEnd} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },

    '&.MuiChip-root': {
      color: 'transparent',
    },

    '&.MuiChip-clickable': {
      cursor: 'pointer',
      userSelect: 'none',
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
      pointerEvents: 'none',
      boxShadow: 'none',
    },

    '&:focus-visible': {
      outline: `2px solid ${tokens.colors.gradientStart}`,
      outlineOffset: '2px',
    },
  };
});
