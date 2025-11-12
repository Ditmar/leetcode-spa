import { IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { theme } from '../../style-library';

import type { StyledAvatarMenuProps } from './AvatarMenu.types';

export const AvatarMenuRoot = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== '$fullWidth' && prop !== '$isOpen',
})<StyledAvatarMenuProps>((props) => {
  const isDarkMode = (theme.palette.mode = 'dark');
  return {
    borderRadius: props.theme.shape.borderRadius,
    padding: props.theme.spacing(1),
    width: props.$fullWidth ? '100%' : 'auto',
    justifyContent: props.$fullWidth ? 'flex-end' : 'center',
    display: 'flex',
    '&:hover': {
      backgroundColor: isDarkMode ? theme.palette.action.focus : theme.palette.action.hover,
    },
  };
});

export const AvatarContainer = styled('div')<{
  $fullWidth?: boolean;
}>(({ theme, $fullWidth }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.125),
  position: 'relative',
  width: $fullWidth ? '100%' : 'auto',
  justifyContent: $fullWidth ? 'flex-end' : 'center',
}));

export const UsernameText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightMedium,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const ArrowWrapper = styled('div')(({ theme }) => ({
  width: theme.spacing(2),
  height: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const TriangleIndicator = styled('div')<{ $isOpen: boolean }>(({ theme, $isOpen }) => ({
  width: 0,
  height: 0,
  borderTop: `${theme.spacing(1.25)} solid ${theme.palette.text.primary}`,
  borderLeft: `${theme.spacing(0.833)} solid transparent`,
  borderRight: `${theme.spacing(0.833)} solid transparent`,
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.short,
  }),
  transform: $isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  display: 'inline-block',
  verticalAlign: 'middle',
}));
