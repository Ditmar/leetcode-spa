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

import { alpha } from '../../style-library';
import { navigationMenuTokens } from '../../style-library/theme/theme';

const mergeTokens = (
  base: Record<string, string | number | boolean | Record<string, unknown>>,
  tokens: Record<string, string | number | boolean | Record<string, unknown>> = {}
) => Object.assign({}, tokens, base);

// Centralized scrollbar hiding rule to avoid repetition
const HIDE_SCROLLBAR = { '&::-webkit-scrollbar': { display: 'none' as const } };

const StyledAppBar = styled(AppBar)(({ theme }) =>
  mergeTokens(
    {
      height: navigationMenuTokens.sizes.appBarHeight.medium,
      backgroundColor: navigationMenuTokens.colors.background,
      color: theme.palette.common.white,
      boxShadow: theme.shadows[8],
      borderBottom: `${navigationMenuTokens.borders.width}px solid ${navigationMenuTokens.colors.border}`,
      zIndex: theme.zIndex.appBar,
      transition: theme.transitions.create(['top', 'box-shadow'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }),
      ...HIDE_SCROLLBAR,
    },
    navigationMenuTokens.layout.appBar
  )
);

const StyledToolbar = styled(Toolbar)(({ theme }) =>
  mergeTokens(
    {
      height: navigationMenuTokens.sizes.appBarHeight.medium,
      paddingLeft: theme.spacing(navigationMenuTokens.spacing.toolbarPadding),
      paddingRight: theme.spacing(navigationMenuTokens.spacing.toolbarPadding),
      ...HIDE_SCROLLBAR,
    },
    navigationMenuTokens.layout.toolbar
  )
);

const StyledDesktopNav = styled(List)(({ theme }) => ({
  ...navigationMenuTokens.layout.desktopNav,
  ...HIDE_SCROLLBAR,

  [theme.breakpoints.up('md')]: navigationMenuTokens.layout.desktopNavDesktop,
}));

const StyledNavContainer = styled(Box)(({ theme }) => ({
  ...navigationMenuTokens.layout.navContainer,
  gap: theme.spacing(navigationMenuTokens.spacing.navContainerGap),
  flexWrap: 'nowrap',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  ...navigationMenuTokens.listItem,
  minHeight: theme.spacing(navigationMenuTokens.minTouchTarget),
  padding: theme.spacing(0.75, 1.5),
  letterSpacing: theme.spacing(navigationMenuTokens.spacing.letterSpacing),
  fontSize: theme.typography.body2.fontSize ?? navigationMenuTokens.listItem.fontSize,
  color: navigationMenuTokens.colors.text,

  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeInOut,
  }),

  '&:hover': {
    ...navigationMenuTokens.listItem.hover,
    color: theme.palette.common.white,
  },

  '&[aria-current="page"]': {
    ...navigationMenuTokens.listItem.active,
    color: theme.palette.common.white,

    '&:hover': {
      ...navigationMenuTokens.listItem.hover,
      color: theme.palette.common.white,
    },
  },

  '&.Mui-disabled': navigationMenuTokens.listItem.disabled,

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0.5, 1.5),
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: navigationMenuTokens.sizes.drawerWidth,
    backgroundColor: navigationMenuTokens.colors.background,
    color: theme.palette.common.white,
    zIndex: theme.zIndex.drawer,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    ...navigationMenuTokens.layout.drawer,
    ...navigationMenuTokens.layout.scrollbar,
    ...HIDE_SCROLLBAR,
  },
}));

const StyledMobileNav = styled(List)(({ theme }) => ({
  ...navigationMenuTokens.layout.mobileNav,
  padding: theme.spacing(navigationMenuTokens.spacing.mobileNavPadding),
  backgroundColor: navigationMenuTokens.colors.background,

  [theme.breakpoints.up('md')]: navigationMenuTokens.layout.mobileNavDesktop,
}));

const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: alpha(
    navigationMenuTokens.colors.background,
    navigationMenuTokens.opacity.accordion
  ),
  ...navigationMenuTokens.accordion,
  borderBottom: `${navigationMenuTokens.borders.width}px solid ${alpha(navigationMenuTokens.colors.border, navigationMenuTokens.opacity.border)}`,

  '&:before': navigationMenuTokens.accordion.before,

  '&.Mui-expanded': navigationMenuTokens.accordion.expanded,
}));

const StyledMegaPanel = styled(Paper)(({ theme }) => ({
  backgroundColor: navigationMenuTokens.colors.background,
  boxShadow: theme.shadows[8],
  borderRadius: theme.spacing(navigationMenuTokens.megaPanel.borderRadius),
  padding: theme.spacing(navigationMenuTokens.spacing.megaPanelPadding),
  minWidth: navigationMenuTokens.sizes.megaPanel.minWidth,
  maxWidth: navigationMenuTokens.sizes.megaPanel.maxWidth,
  border: `${navigationMenuTokens.borders.width}px solid ${alpha(navigationMenuTokens.colors.border, navigationMenuTokens.opacity.accordion)}`,
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
