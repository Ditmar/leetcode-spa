import {
  styled,
  AppBar,
  Toolbar,
  List,
  ListItemButton,
  Drawer,
  Box,
  Accordion,
  Paper,
  Popper,
} from '@mui/material';

import '../../style-library/theme/colors.css';
import { alpha } from '../../style-library';

import { TOUCH_TARGET_MIN, NAV_COLORS } from './NavigationMenu.constants';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  height: 57,
  backgroundColor: NAV_COLORS.BACKGROUND,
  color: theme.palette.common.white,
  boxShadow: theme.shadows[8],
  borderBottom: `1px solid ${NAV_COLORS.BORDER}`,
  zIndex: theme.zIndex.appBar,
  transition: theme.transitions.create(['top', 'box-shadow'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
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
  gap: theme.spacing(0.5),
  flexWrap: 'nowrap',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  position: 'relative',
  minHeight: TOUCH_TARGET_MIN,
  minWidth: 'auto',
  padding: theme.spacing(0.75, 1.5),
  borderRadius: 0,
  fontSize: theme.typography.body2.fontSize ?? '0.875rem',
  fontWeight: 500,
  letterSpacing: theme.spacing(0.05),
  lineHeight: 1.4,
  color: 'var(--navigation-text)',

  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeInOut,
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
    zIndex: theme.zIndex.drawer,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
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

const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: alpha(NAV_COLORS.BACKGROUND, 0.8),
  boxShadow: 'none',
  borderBottom: `1px solid ${alpha(NAV_COLORS.BORDER, 0.5)}`,

  '&:before': {
    display: 'none',
  },

  '&.Mui-expanded': {
    margin: 0,
  },
}));

const StyledMegaPanel = styled(Paper)(({ theme }) => ({
  backgroundColor: NAV_COLORS.BACKGROUND,
  boxShadow: theme.shadows[8],
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(2),
  minWidth: 280,
  maxWidth: 400,
  border: `1px solid ${alpha(NAV_COLORS.BORDER, 0.8)}`,
}));

const StyledFlyoutPopper = styled(Popper)(({ theme }) => ({
  zIndex: theme.zIndex.modal,
}));

export {
  StyledAppBar,
  StyledToolbar,
  StyledDesktopNav,
  StyledListItemButton,
  StyledDrawer,
  StyledMobileNav,
  StyledNavContainer,
  StyledAccordion,
  StyledMegaPanel,
  StyledFlyoutPopper,
};
