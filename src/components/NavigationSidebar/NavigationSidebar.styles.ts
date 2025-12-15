import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

export const Root = styled(Box)(({ theme }) => ({
  width: 280,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  padding: theme.spacing(4, 3.5),
  background: 'linear-gradient(180deg, #EAF7F9 0%, #FFFFFF 100%)',
  fontFamily: 'Syne, sans-serif',
}));

export const NavList = styled(List)(({ theme }) => ({
  width: '100%',
  paddingTop: 24,
  paddingLeft: theme.spacing(1),
}));

export const NavItem = styled(ListItemButton)(({ theme }) => ({
  borderRadius: 12,
  marginBottom: 4,
  padding: theme.spacing(1.5, 3),
  textTransform: 'none',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const IconWrap = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: theme.spacing(0.5),
}));

export const Label = styled(ListItemText)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& .MuiListItemText-root': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiListItemText-primary': {
    fontSize: 18,
    fontWeight: 500,
    marginLeft: theme.spacing(0.6),
    lineHeight: '24px',
    display: 'inline-block',
    verticalAlign: 'middle',
    transform: 'translateY(-3px)',
    transition: 'transform 120ms ease',
  },
}));
