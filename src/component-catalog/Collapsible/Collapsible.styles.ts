import { Box, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Box)(({ theme }) => ({
  borderRadius: '14px',
  backgroundColor: theme.palette.common.white,
  border: `1.2px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '400px',
  boxSizing: 'border-box',
}));

export const Header = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: theme.spacing(5.5),
}));

export const BlackButton = styled(Button)(({ theme }) => ({
  background: '#030213',
  color: '#fff',
  minWidth: theme.spacing(4.5),
  height: theme.spacing(4),
  borderRadius: '8px',
  '&:hover': { background: '#030213', opacity: 0.9 },
}));
