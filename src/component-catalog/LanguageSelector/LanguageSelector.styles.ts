import type { SxProps, Theme } from '@mui/material';

export const formControlStyles: SxProps<Theme> = {
  minWidth: {
    xs: '4.5rem',
    sm: '7rem',
  },
};

export const selectStyles: SxProps<Theme> = (theme) => ({
  minHeight: theme.spacing(5.5),
  color: 'inherit',
  '& .MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'currentColor',
    opacity: 0.5,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'currentColor',
    opacity: 0.8,
  },
});
