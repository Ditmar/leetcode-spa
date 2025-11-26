import Box, { type BoxProps } from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { getSectionNavTokens } from './SectionNav.constants';

import type { ExtendedTheme } from '../../style-library/types/theme.helpers';

export const Title = styled(Typography)(({ theme }: { theme: ExtendedTheme }) => {
  const tokens = getSectionNavTokens(theme);
  const tabletBp =
    theme.customBreakpoints?.tablet ?? '@media (min-width: 768px) and (max-width: 1023px)';
  const mobileBp = theme.customBreakpoints?.mobile ?? '@media (max-width: 767px)';
  return {
    ...theme.typography.title,
    fontFamily: '"Syne", sans-serif',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: tokens.typography.titleFontSize.desktop,
    color: tokens.colors.text,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(5.5),
    paddingLeft: theme.spacing(2.5),
    userSelect: 'none',
    textShadow: theme.customShadows.z4,
    textAlign: 'left',
    zIndex: 2,
    position: 'relative',
    [tabletBp]: {
      fontSize: tokens.typography.titleFontSize.tablet,
      marginTop: theme.spacing(4),
      paddingLeft: theme.spacing(2),
    },
    [mobileBp]: {
      fontSize: tokens.typography.titleFontSize.mobile,
      marginTop: theme.spacing(3),
      paddingLeft: theme.spacing(1.5),
    },
  };
});
const parseSize = (v: number | string | undefined) => {
  if (!v) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
};

export const Root = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'bottomSpacing',
})<
  BoxProps & {
    bottomSpacing?: string | number;
  }
>(({ theme, bottomSpacing }: { theme: ExtendedTheme; bottomSpacing?: string | number }) => {
  const tokens = getSectionNavTokens(theme);
  const tabletBp =
    theme.customBreakpoints?.tablet ?? '@media (min-width: 768px) and (max-width: 1023px)';
  const mobileBp = theme.customBreakpoints?.mobile ?? '@media (max-width: 767px)';
  return {
    background: tokens.colors.background,
    color: tokens.colors.text,
    fontFamily: '"Syne", sans-serif',
    borderRadius: '20px 0 20px 20px',
    paddingTop: theme.spacing(1.5),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingBottom: bottomSpacing ? parseSize(bottomSpacing) : theme.spacing(1.5),
    width: `${tokens.dimensions.navWidth.desktop}px`,
    minWidth: `${tokens.dimensions.navWidth.desktop}px`,
    overflow: 'visible',
    [tabletBp]: {
      width: `${tokens.dimensions.navWidth.tablet}px`,
      minWidth: `${tokens.dimensions.navWidth.tablet}px`,
      paddingLeft: theme.spacing(1.25),
      paddingRight: theme.spacing(1.25),
    },
    [mobileBp]: {
      width: `${tokens.dimensions.navWidth.mobile}px`,
      minWidth: `${tokens.dimensions.navWidth.mobile}px`,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      borderRadius: '16px 0 16px 16px',
    },
  };
});

export const StyledList = styled(List)(({ theme }: { theme: ExtendedTheme }) => {
  const tabletBp =
    theme.customBreakpoints?.tablet ?? '@media (min-width: 768px) and (max-width: 1023px)';
  const mobileBp = theme.customBreakpoints?.mobile ?? '@media (max-width: 767px)';

  return {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    overflowY: 'visible',
    overflowX: 'hidden',
    flexWrap: 'nowrap',
    marginLeft: `calc(-${theme.spacing(1.5)})`,
    marginRight: `calc(-${theme.spacing(1.5)})`,
    width: `calc(100% + ${theme.spacing(3)})`,
    [tabletBp]: {
      marginLeft: `calc(-${theme.spacing(1.25)})`,
      marginRight: `calc(-${theme.spacing(1.25)})`,
      width: `calc(100% + ${theme.spacing(2.5)})`,
    },
    [mobileBp]: {
      marginLeft: `calc(-${theme.spacing(1)})`,
      marginRight: `calc(-${theme.spacing(1)})`,
      width: `calc(100% + ${theme.spacing(2)})`,
    },
  };
});

export const StyledItemButton = styled(ListItemButton)(({ theme }: { theme: ExtendedTheme }) => {
  const tokens = getSectionNavTokens(theme);
  const ITEM_HEIGHT = `${tokens.dimensions.itemHeight.desktop}px`;
  const tabletBp =
    theme.customBreakpoints?.tablet ?? '@media (min-width: 768px) and (max-width: 1023px)';
  const mobileBp = theme.customBreakpoints?.mobile ?? '@media (max-width: 767px)';

  return {
    color: tokens.colors.text,
    borderRadius: 0,
    padding: theme.spacing(1, 2),
    marginBottom: 0,
    width: '100%',
    boxSizing: 'border-box',
    height: ITEM_HEIGHT,
    minHeight: ITEM_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    textAlign: 'left',
    fontFamily: '"Syne", sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: tokens.typography.itemFontSize.desktop,
    '& .MuiListItemText-primary': {
      ...theme.typography.body1,
      fontFamily: '"Syne", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: tokens.typography.itemFontSize.desktop,
      color: 'inherit',
      lineHeight: ITEM_HEIGHT,
    },
    '& .MuiListItemText-root': {
      margin: 0,
      paddingLeft: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      borderRadius: 0,
      '& .MuiListItemText-primary': {
        background: `linear-gradient(60deg, ${tokens.colors.gradientStart}, ${tokens.colors.gradientEnd})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      },
    },
    '&.Mui-selected:hover': {
      backgroundColor: tokens.colors.hoverBackground,
      color: tokens.colors.text,
      boxShadow: 'none',
      transform: 'none',
      borderRadius: 0,
      transition: theme.transitions.create(['background-color'], {
        duration: theme.transitions.duration.shorter,
      }),
      '& .MuiListItemText-primary': {
        background: 'none',
        WebkitBackgroundClip: 'none',
        WebkitTextFillColor: tokens.colors.text,
        backgroundClip: 'none',
        color: tokens.colors.text,
      },
    },
    '&:not(.Mui-selected):hover': {
      backgroundColor: tokens.colors.hoverBackground,
      color: tokens.colors.text,
      boxShadow: 'none',
      transform: 'none',
      borderRadius: 0,
      transition: theme.transitions.create(['background-color'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
    [tabletBp]: {
      height: `${tokens.dimensions.itemHeight.tablet}px`,
      minHeight: `${tokens.dimensions.itemHeight.tablet}px`,
      fontSize: tokens.typography.itemFontSize.tablet,
      '& .MuiListItemText-primary': {
        fontSize: tokens.typography.itemFontSize.tablet,
        lineHeight: `${tokens.dimensions.itemHeight.tablet}px`,
      },
      '& .MuiListItemText-root': {
        paddingLeft: theme.spacing(1.5),
      },
    },
    [mobileBp]: {
      height: `${tokens.dimensions.itemHeight.mobile}px`,
      minHeight: `${tokens.dimensions.itemHeight.mobile}px`,
      padding: theme.spacing(0.5, 1.5),
      fontSize: tokens.typography.itemFontSize.mobile,
      '& .MuiListItemText-primary': {
        fontSize: tokens.typography.itemFontSize.mobile,
        lineHeight: `${tokens.dimensions.itemHeight.mobile}px`,
      },
      '& .MuiListItemText-root': {
        paddingLeft: theme.spacing(1),
      },
    },
  };
});
