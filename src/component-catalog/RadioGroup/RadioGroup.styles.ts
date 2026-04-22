import { theme } from '../../style-library';

import type { SxProps, Theme } from '@mui/material';

export const radioOptionStyles: SxProps<Theme> = (theme) => ({
  minHeight: theme.spacing(6),
  '& .MuiTypography-root': {
    ...theme.typography.body2,
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1,
  },
});

export const formControlStyles: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 2,
};

export const formLabelStyles: SxProps<Theme> = (theme) => ({
  color: theme.palette.text.primary,
  ...theme.typography.subtitle1,
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: 1.5,
  '&.Mui-focused': {
    color: theme.palette.text.primary,
  },
});

export const radioGroupStyles = (direction: 'row' | 'column'): SxProps<Theme> => ({
  flexDirection: {
    xs: 'column',
    sm: direction,
  },
  flexWrap: 'wrap',
  gap: 0,
});

export const customIconStyles: SxProps<Theme> = {
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  boxShadow: (theme) => theme.shadows[1],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const customCheckedIconStyles: SxProps<Theme> = {
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  backgroundColor: 'transparentent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const customCheckedDotStyles: SxProps<Theme> = {
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '50%',
  backgroundColor: theme.palette.text.primary,
};
