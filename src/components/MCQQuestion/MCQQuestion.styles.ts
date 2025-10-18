import { Box, FormControlLabel, Radio, Typography, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

export const QuestionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  paddingTop: theme.spacing(5.625),
  paddingRight: theme.spacing(4.625),
  paddingBottom: theme.spacing(5.625),
  paddingLeft: theme.spacing(4.625),
  backgroundColor: theme.palette.backgroundQuestion,
  width: '100%',
  margin: 0,
  boxSizing: 'border-box',
}));

export const QuestionText = styled(Typography)(({ theme }) => ({
  ...theme.typography.question,
  fontWeight: 600,
  color: theme.palette.text.primary,
  lineHeight: 1,
  letterSpacing: 0,
  display: 'inline-flex',
  textTransform: 'capitalize',
  alignItems: 'baseline',
  gap: theme.spacing(1),
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSize: theme.typography.pxToRem(18),
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  alignItems: 'center',
  cursor: 'pointer',
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest,
  }),
  '& .MuiFormControlLabel-label': {
    ...theme.typography.option,
    fontWeight: 500,
    padding: theme.spacing(0, 1),
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(19.09),
    lineHeight: 1.2,
    letterSpacing: 0,
  },
}));

export const StyledRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: 0,
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
  '& .MuiSvgIcon-root': {
    width: theme.spacing(3.75),
    height: theme.spacing(3.75),
  },
}));

export const OptionsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2.5),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const QuestionNumber = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const StyledFormControl = styled(FormControl)(() => ({
  width: '100%',
  margin: 0,
  padding: 0,
}));
