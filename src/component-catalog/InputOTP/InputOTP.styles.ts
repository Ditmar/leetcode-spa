import { styled, Box, TextField, Typography } from '@mui/material';

export const Label = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: '0.875rem',
  color: 'var(--foreground)',
}));

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: theme.spacing(1),
  width: 'fit-content',
  maxWidth: '100%',
  margin: '0 auto',
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
}

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'isFirst' && prop !== 'isLast',
})<StyledProps>(({ theme, isFirst, isLast }) => ({
  flex: 1,
  minWidth: theme.spacing(5.5),
  maxWidth: theme.spacing(6),

  '& .MuiOutlinedInput-root': {
    width: '100%',
    height: theme.spacing(6),

    backgroundColor: 'var(--input-background)',

    borderRadius: isFirst
      ? `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`
      : isLast
        ? `0 ${theme.spacing(1)} ${theme.spacing(1)} 0`
        : 0,

    '& fieldset': {
      border: '1px solid var(--border)',
    },

    '&:hover fieldset': {
      borderColor: 'var(--ring)',
    },

    '&.Mui-focused fieldset': {
      borderColor: 'var(--primary)',
    },

    '&.Mui-error fieldset': {
      borderColor: 'var(--destructive)',
    },
  },

  '& input': {
    textAlign: 'center',
    padding: 0,
    height: '100%',
    fontSize: theme.typography.h6.fontSize,
  },

  '& .MuiOutlinedInput-root.Mui-disabled': {
    opacity: 0.6,
  },
}));
