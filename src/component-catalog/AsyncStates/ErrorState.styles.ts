import type { SxProps, Theme } from '@mui/material/styles';

export const errorStateSx: SxProps<Theme> = {
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

export const errorMessageSx: SxProps<Theme> = {
  color: 'error.main',
};

export const errorActionsSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
};
