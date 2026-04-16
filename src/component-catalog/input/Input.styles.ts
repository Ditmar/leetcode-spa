import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const StyledInput = styled(TextField)(({ theme }) => ({
  width: '100%',

  '& .MuiInputBase-root': {
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--input-background)',
  },

  '& .MuiInputBase-input': {
    fontSize: '0.875rem',
    color: 'var(--foreground)',
    '&::placeholder': {
      color: 'var(--muted-foreground)',
      opacity: 1,
    },
  },

  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: 'var(--muted-foreground)',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'var(--border)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--ring)',
      borderWidth: theme.spacing(0.125),
    },
    '&.Mui-error fieldset': {
      borderColor: 'var(--destructive)',
    },
  },

  '& .MuiFilledInput-root': {
    backgroundColor: 'var(--input-background)',
    '&:before': {
      borderBottomColor: 'transparent',
    },
    '&:hover:not(.Mui-disabled, .Mui-error):before': {
      borderBottomColor: 'var(--border)',
    },
    '&:after': {
      borderBottomColor: 'var(--ring)',
    },
  },

  '& .MuiInput-root': {
    '&:before': {
      borderBottomColor: 'var(--border)',
    },
    '&:hover:not(.Mui-disabled, .Mui-error):before': {
      borderBottomColor: 'var(--ring)',
    },
    '&:after': {
      borderBottomColor: 'var(--ring)',
    },
  },

  '& .MuiInputAdornment-root': {
    color: 'var(--muted-foreground)',
  },

  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginRight: 0,
  },
}));
