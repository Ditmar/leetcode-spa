import { IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { StyledAvatarMenuProps } from './AvatarMenu.types';

export const AvatarMenuRoot = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== '$fullWidth' && prop !== '$isOpen',
})<StyledAvatarMenuProps>((props) => {
  return {
    borderRadius: props.theme.shape.borderRadius,
    padding: props.theme.spacing(1),
    width: props.$fullWidth ? '100%' : 'auto',
    justifyContent: props.$fullWidth ? 'flex-end' : 'center',
    display: 'flex',
  };
});

export const AvatarContainer = styled('div')<{
  $fullWidth?: boolean;
}>(({ theme, $fullWidth }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.025),
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

export const TriangleIndicator = styled('div')<{ $isOpen: boolean }>(({ theme, $isOpen }) => ({
  width: 0,
  height: 0,
  borderTop: `${theme.spacing(1.25)} solid ${theme.palette.text.primary}`,
  borderLeft: `${theme.spacing(0.833)} solid transparent`,
  borderRight: `${theme.spacing(0.833)} solid transparent`,
  marginLeft: theme.spacing(0.5),
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.short,
  }),
  transform: $isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  display: 'inline-block',
  verticalAlign: 'middle',
}));
