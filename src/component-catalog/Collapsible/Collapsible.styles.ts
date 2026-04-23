import { Box, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 1.75,
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: theme.spacing(50),
  boxSizing: 'border-box',
}));

export const Header = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: theme.spacing(5.5),
}));

export const ToggleButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen?: boolean }>(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  minWidth: theme.spacing(4.5),
  height: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  padding: 0,
  '&:hover': {
    backgroundColor: theme.palette.common.black,
    opacity: 0.9,
  },
}));
