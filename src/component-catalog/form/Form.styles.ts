import { TextField, FormControl, FormHelperText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  maxWidth: theme.spacing(152),

  minHeight: theme.spacing(37.5),

  display: 'flex',
  flexDirection: 'column',

  padding: theme.spacing(3),

  borderRadius: (theme.shape.borderRadius as number) * 2,
  border: `1px solid ${theme.palette.divider}`,

  backgroundColor: theme.palette.background.paper,

  margin: '0 auto',
}));

export const StyledFormControl = styled(FormControl)(() => ({
  width: '100%',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',

  '& .MuiInputBase-root': {
    backgroundColor: theme.palette.action.hover,
    borderRadius: (theme.shape.borderRadius as number) * 1.5,
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

export const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  marginLeft: 0,
  color: theme.palette.error.main,
}));

export const ButtonContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
}));

export const GridContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const GridItem = styled('div')<{ span: number }>(({ theme, span }) => ({
  gridColumn: `span ${span}`,

  [theme.breakpoints.down('sm')]: {
    gridColumn: 'span 12',
  },
}));
