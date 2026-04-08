import { styled, AppBar, Toolbar, List, ListItemButton, Drawer, Box } from '@mui/material';

import {
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
  Z_INDEX_STACK,
  TOUCH_TARGET_MIN,
  NAV_COLORS,
} from './NavigationMenu.constants';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  height: 57,
  backgroundColor: NAV_COLORS.BACKGROUND,
  color: theme.palette.common.white,
  boxShadow: theme.shadows[8],
  borderBottom: `1px solid ${NAV_COLORS.BORDER}`,
  zIndex: Z_INDEX_STACK.APPBAR,
  transition: theme.transitions.create(['top', 'box-shadow'], {
    duration: ANIMATION_DURATIONS.STANDARD,
    easing: ANIMATION_EASING,
  }),
  overflowX: 'hidden',
  overflowY: 'hidden',
  scrollbarWidth: 'none' as const,
  msOverflowStyle: 'none' as const,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: 57,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  gap: 0,
  minHeight: 'auto',
  flexWrap: 'nowrap',
  overflowX: 'hidden',
  overflowY: 'hidden',
  scrollbarWidth: 'none' as const,
  msOverflowStyle: 'none' as const,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const StyledDesktopNav = styled(List)(({ theme }) => ({
  display: 'none',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 0,
  flexWrap: 'nowrap',
  overflowX: 'hidden',
  overflowY: 'hidden',
  scrollbarWidth: 'none' as const,
  msOverflowStyle: 'none' as const,
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledNavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flex: 1,
  gap: theme.spacing(1),
  flexWrap: 'nowrap',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  position: 'relative',
  minHeight: TOUCH_TARGET_MIN,
  minWidth: 'auto',
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 0,
  fontSize: theme.typography.body2.fontSize ?? '0.875rem',
  fontWeight: 500,
  letterSpacing: theme.spacing(0.05),
  lineHeight: 1.4,
  color: '#D1D5DC',

  transition: theme.transitions.create(['color'], {
    duration: ANIMATION_DURATIONS.SHORT,
    easing: ANIMATION_EASING,
  }),

  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
  },

  '&[aria-current="page"]': {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    fontWeight: 600,

    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.common.white,
    },
  },

  '&.Mui-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0.5, 1.5),
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 256,
    backgroundColor: NAV_COLORS.BACKGROUND,
    color: theme.palette.common.white,
    zIndex: Z_INDEX_STACK.DRAWER,
    transition: theme.transitions.create('width', {
      duration: ANIMATION_DURATIONS.STANDARD,
      easing: ANIMATION_EASING,
    }),
    overflowY: 'hidden',
    scrollbarWidth: 'none' as const,
    msOverflowStyle: 'none' as const,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const StyledMobileNav = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(0),
  backgroundColor: NAV_COLORS.BACKGROUND,

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export {
  StyledAppBar,
  StyledToolbar,
  StyledDesktopNav,
  StyledListItemButton,
  StyledDrawer,
  StyledMobileNav,
  StyledNavContainer,
};
