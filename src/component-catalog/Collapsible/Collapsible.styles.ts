import { Box, Stack, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as RadixCollapsible from '@radix-ui/react-collapsible';

export const StyledRoot = styled(RadixCollapsible.Root)(({ theme }) => ({
  width: '100%',
  maxWidth: theme.spacing(50),
}));

export const Header = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 0),
  minHeight: theme.spacing(6),
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '0.95rem',
  color: theme.palette.text.primary,
}));

export const ToggleButton = styled(Button)(({ theme }) => ({
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

export const StyledContent = styled(RadixCollapsible.Content)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(1),
}));

export const ItemCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5, 2),
  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));
