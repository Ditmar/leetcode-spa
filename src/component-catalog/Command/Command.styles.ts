import { Box, Button, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CommandWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: theme.spacing(95),
  padding: theme.spacing(2),
}));

export const CommandPanel = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: (theme.shape.borderRadius as number) * 4,
  backgroundColor: 'var(--card)',
  padding: theme.spacing(2),
}));

export const CommandResults = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: (theme.shape.borderRadius as number) * 3,
  overflow: 'hidden',
}));

export const CommandOpenButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: 'var(--sidebar-primary)',
  borderColor: 'var(--sidebar-ring)',
  borderRadius: (theme.shape.borderRadius as number) * 3,
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(1),
  fontSize: theme.typography.body2.fontSize,
  lineHeight: 1.2,
  '&:hover': {
    borderColor: 'var(--switch-background)',
    backgroundColor: 'var(--switch-background)',
  },
}));

export const CommandItemRow = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected?: boolean }>(({ theme, selected }) => ({
  paddingInline: theme.spacing(1.5),
  paddingBlock: theme.spacing(1.25),
  minHeight: theme.spacing(5.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  borderRadius: (theme.shape.borderRadius as number) * 2,
  marginInline: theme.spacing(1),

  ...(selected && {
    backgroundColor: 'var(--switch-background)',
    '&:hover': {
      backgroundColor: 'var(--switch-background)',
    },
  }),
}));
