import { Box, TextField, IconButton, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5, 2),
  backgroundColor: alpha(theme.palette.background.paper, 0.75),
  backdropFilter: 'blur(10px)',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  width: '100%',
  maxWidth: theme.spacing(40),
  minHeight: theme.spacing(8.375),
  boxSizing: 'border-box',
  gap: theme.spacing(1.5),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
    maxWidth: '100%',
    minHeight: theme.spacing(8.375),
  },
}));

export const SearchIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.75),
  color: theme.palette.primary.main,
  flexShrink: 0,

  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
  },

  '&.Mui-disabled': {
    color: theme.palette.action.disabled,
  },

  '& .MuiTouchRipple-root': {
    color: theme.palette.primary.main,
  },
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  flex: 1,
  minWidth: 0,

  '& .MuiInputBase-root': {
    ...theme.typography.input,
    color: alpha(theme.palette.text.primary, 0.5),
    backgroundColor: 'transparent',

    '&:before, &:after, &:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },

    '&.Mui-focused': {
      color: theme.palette.text.primary,
    },

    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
    },
  },

  '& .MuiInputBase-input': {
    padding: 0,

    '&::placeholder': {
      color: alpha(theme.palette.text.primary, 0.5),
      opacity: 1,
      ...theme.typography.input,
    },

    '&:disabled::placeholder': {
      color: theme.palette.text.disabled,
    },
  },

  [theme.breakpoints.down('sm')]: {
    '& .MuiInputBase-root': {
      fontSize: theme.typography.body2.fontSize,
    },

    '& .MuiInputBase-input::placeholder': {
      fontSize: theme.typography.body2.fontSize,
    },
  },
}));
