import { Box, FormControlLabel, Radio, Typography, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

export const QuestionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(5),
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  margin: 0,
  boxSizing: 'border-box',
}));

export const QuestionText = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  fontWeight: 600,
  color: theme.palette.text.primary,
  lineHeight: 1.3,
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  alignItems: 'center',
  padding: theme.spacing(1, 1.5),
  cursor: 'pointer',
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest,
  }),
  '& .MuiFormControlLabel-label': {
    ...theme.typography.body1,
    fontWeight: 600,
    color: theme.palette.text.secondary,
  },
}));

export const StyledRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
  '& .MuiSvgIcon-root': {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export const OptionsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const QuestionNumber = styled('span')(({ theme }) => ({
  marginRight: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const StyledFormControl = styled(FormControl)(() => ({
  width: '100%',
  margin: 0,
  padding: 0,
}));
