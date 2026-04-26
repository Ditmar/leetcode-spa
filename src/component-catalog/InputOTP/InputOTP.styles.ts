import { styled, Box, TextField, Typography } from '@mui/material';

export const Label = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  fontSize: theme.typography.body2.fontSize,
  lineHeight: theme.typography.body2.lineHeight,
  color: 'var(--foreground)',
}));

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  maxWidth: '100%',
  boxSizing: 'border-box',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  backgroundColor: 'var(--background)',
  border: '1px solid var(--border)',

  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.5),
  },
}));

interface StyledProps {
  isFirst?: boolean;
  isLast?: boolean;
  error?: boolean;
  disabled?: boolean;
}

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) =>
    prop !== 'isFirst' &&
    prop !== 'isLast' &&
    prop !== 'error' &&
    prop !== 'disabled',
})<StyledProps>(({ theme, isFirst, isLast, error, disabled }) => ({
  flex: 1,
  minWidth: theme.spacing(6),
  maxWidth: theme.spacing(6),

  '& .MuiInputBase-root': {
    height: theme.spacing(6),
    backgroundColor: 'var(--input-background)',
    border: '1px solid var(--border)',
    borderRadius: isFirst
      ? `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`
      : isLast
        ? `0 ${theme.spacing(1)} ${theme.spacing(1)} 0`
        : 0,

    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
      borderColor: 'var(--ring)',
    },

    '&:focus-within': {
      borderColor: 'var(--primary)',
    },

    ...(error && {
      borderColor: 'var(--destructive)',
    }),

    ...(disabled && {
      opacity: 0.6,
    }),
  },

  '& input': {
    textAlign: 'center',
    padding: 0,
    fontSize: theme.typography.h5?.fontSize ?? theme.typography.body1.fontSize,
  },
}));