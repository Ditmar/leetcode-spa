import type { SxProps, Theme } from '@mui/material/styles';

export const cardSx: SxProps<Theme> = {
  padding: 3,
  borderRadius: 2,
  mb: 2,
};

export const statusChipSx: SxProps<Theme> = {
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '0.75rem',
};

export const countdownSx: SxProps<Theme> = {
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: 'warning.main',
};

export const modalSx: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 },
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
