import type { SxProps, Theme } from '@mui/material/styles';

export const emptyStateSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
  p: 3,
  textAlign: 'center',
  color: 'var(--muted-foreground)',
  bgcolor: 'var(--muted)',
  border: 1,
  borderColor: 'var(--border)',
  borderRadius: 'var(--radius-lg)',
};

export const emptyStateIconSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
