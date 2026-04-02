import { AppBar, Toolbar, Button, Box, IconButton, Drawer, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Root AppBar (Menubar container)
 * Figma: card-like container
 */
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', // Figma shadow
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
  borderRadius: '14px', // Figma exact
  padding: theme.spacing(3), // 24px
}));

/**
 * Toolbar container
 */
export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 'auto',
  padding: 0,
}));

/**
 * Left section
 */
export const LeftSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

/**
 * Desktop menu container (inner box from Figma)
 */
export const MenuItemsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5), // 4px
  padding: theme.spacing(0.5), // 4px
  border: '1px solid var(--border)',
  borderRadius: '8px',
  backgroundColor: 'var(--background)',
}));

/**
 * Top-level menu button
 * Figma: 28px height, padding 4px 8px, radius 6px
 */
export const MenuButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: 'var(--foreground)',
  padding: theme.spacing(0.5, 1), // 4px 8px
  borderRadius: '6px',
  minWidth: 'auto',
  height: theme.spacing(3.5), // ~28px

  '&:hover': {
    backgroundColor: 'var(--accent)',
  },

  '&.active': {
    backgroundColor: 'var(--muted)',
  },
}));

/**
 * Hamburger button (mobile)
 */
export const HamburgerButton = styled(IconButton)(({ theme }) => ({
  minWidth: theme.spacing(5.5), // 44px
  minHeight: theme.spacing(5.5),
  color: 'var(--foreground)',
}));

/**
 * Drawer
 */
export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: theme.spacing(32),
    padding: theme.spacing(2),
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
  },
}));

/**
 * Mobile item
 */
export const MobileListItem = styled(ListItemButton)(({ theme }) => ({
  borderRadius: 'var(--radius)',
  marginBottom: theme.spacing(1),
  minHeight: theme.spacing(5.5), // 44px tap target
  color: 'var(--foreground)',

  '&:hover': {
    backgroundColor: 'var(--accent)',
  },

  '&.active': {
    backgroundColor: 'var(--muted)',
  },
}));

/**
 * Submenu container
 */
export const SubmenuContainer = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));
