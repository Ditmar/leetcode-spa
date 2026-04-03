import { Box, Button, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CommandWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 760,
  padding: theme.spacing(2),
}));

export const CommandPanel = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 16,
  backgroundColor: 'var(--card)',
  padding: theme.spacing(2),
}));

export const CommandResults = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 12,
  overflow: 'hidden',
}));

export const CommandOpenButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: 'var(--sidebar-primary)',
  borderColor: 'var(--sidebar-ring)',
  borderRadius: 12,
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(1),
  fontSize: '0.9rem',
  lineHeight: 1.2,
  '&:hover': {
    borderColor: 'var(--switch-background)',
    backgroundColor: 'var(--switch-background)',
  },
}));

export const CommandItemRow = styled(ListItemButton)(({ theme }) => ({
  paddingInline: theme.spacing(1.5),
  paddingBlock: theme.spacing(1.25),
  minHeight: 44,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  borderRadius: 8,
  marginInline: theme.spacing(1),
  '&.Mui-selected': {
    backgroundColor: 'var(--switch-background)',
  },
  '&.Mui-selected:hover': {
    backgroundColor: 'var(--switch-background)',
  },
}));
