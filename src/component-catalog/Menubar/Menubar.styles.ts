import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, ListItemButton, Menu, MenuItem } from '@mui/material';


export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  boxShadow: 'none',
  padding: theme.spacing(3),
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  minHeight: 'auto',
}));

export const MenuItemsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  gap: theme.spacing(0.5),
  paddingLeft: theme.spacing(0.5),
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  backgroundColor: 'var(--background)',
  boxShadow: '0 1px 2px var(--border)',
}));

export const MenuButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: 'var(--foreground)',
  backgroundColor: 'transparent',
  padding: theme.spacing(0.5, 1),
  borderRadius: 'var(--radius-sm)',
  minWidth: 'auto',
  border: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: 'var(--accent)',
  },
  '&.active': {
    backgroundColor: 'var(--muted)',
  },
  '& .MuiButton-startIcon': {
    margin: 0,
    marginRight: theme.spacing(0.5),
  },
}));

export const HamburgerButton = styled(IconButton)(({ theme }) => ({
  minWidth: theme.spacing(5.5),
  minHeight: theme.spacing(5.5),
  color: 'var(--foreground)',
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: theme.spacing(32),
    padding: theme.spacing(2),
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
  },
}));

export const MobileListItem = styled(ListItemButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 'var(--radius)',
  marginBottom: theme.spacing(1),
  minHeight: theme.spacing(5.5),
  color: 'var(--foreground)',
  '&:hover': {
    backgroundColor: 'var(--accent)',
  },
  '&.active': {
    backgroundColor: 'var(--muted)',
  },
}));

export const SubmenuContainer = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));


export const StyledMenu = styled(Menu)(() => ({
  '& .MuiPaper-root': {
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
  },
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
  '&:hover': {
    backgroundColor: 'var(--accent)',
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(1),
}));