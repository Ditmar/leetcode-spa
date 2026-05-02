import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const AccordionContainer = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'square',
})<{ square?: boolean }>(({ theme, square }) => ({
  maxWidth: 1216,
  width: '100%',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  ...(!square && {
    borderRadius: theme.spacing(1.75),
  }),
  transition: theme.transitions.create(['border-radius'], {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const TouchTarget = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: theme.spacing(5.5),
  minWidth: theme.spacing(5.5),
}));

export const StyledAccordion = styled(MuiAccordion, {
  shouldForwardProp: (prop) => prop !== 'square',
})<{ square?: boolean }>(({ theme, square }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  margin: 0,
  '&:before': {
    display: 'none',
  },
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  ...(!square && {
    borderRadius: 0,
  }),
  [theme.breakpoints.down('sm')]: {
    margin: 0,
  },
}));

export const StyledAccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  minHeight: theme.spacing(5.5),
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(1.5, 0),
    '&.Mui-expanded': {
      margin: theme.spacing(1.5, 0),
    },
  },
  '& .MuiTypography-root': {
    color: theme.palette.grey[900],
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    transition: theme.transitions.create(['opacity', 'transform'], {
      duration: theme.transitions.duration.short,
    }),
    transform: 'scale(1)',
  },
  '&.Mui-expanded .MuiAccordionSummary-expandIconWrapper': {
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 1.5),
    '& .MuiAccordionSummary-content': {
      margin: theme.spacing(1, 0),
    },
  },
}));

export const StyledAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));
