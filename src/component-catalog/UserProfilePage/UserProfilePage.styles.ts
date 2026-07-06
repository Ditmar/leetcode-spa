import type { SxProps, Theme } from '@mui/material/styles';

export const containerSx: SxProps<Theme> = {
  maxWidth: 900,
  margin: '0 auto',
  padding: { xs: 2, md: 4 },
};

export const headerSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 3,
  flexWrap: 'wrap',
  mb: 4,
};

export const avatarSx: SxProps<Theme> = {
  width: 80,
  height: 80,
};

export const statCardSx: SxProps<Theme> = {
  padding: 2,
  textAlign: 'center',
  borderRadius: 2,
};

export const sectionTitleSx: SxProps<Theme> = {
  fontWeight: 700,
  mb: 2,
};
