import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const HoverCardPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius:
    typeof theme.shape.borderRadius === 'number'
      ? theme.shape.borderRadius * 3
      : theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  outline: `1px solid ${theme.palette.divider}`,
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
  maxWidth: 'maxWidth',

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
    width: `calc(100vw - ${theme.spacing(4)})`,
  },
}));

export const TriggerWrapper = styled('span')({
  display: 'inline-block',
});

export const DemoPageRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  minHeight: '100vh',
  padding: theme.spacing(3),
}));

export const DemoPageTitle = styled('h1')(({ theme }) => ({
  margin: 0,
  fontWeight: 700,
  fontSize: theme.typography.h5.fontSize,
  lineHeight: theme.typography.h5.lineHeight,
  color: theme.palette.text.primary,
}));

export const DemoPageSubtitle = styled('p')(({ theme }) => ({
  margin: `${theme.spacing(0.5)} 0 ${theme.spacing(3)}`,
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.secondary,
}));

export const DemoTriggerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius:
    typeof theme.shape.borderRadius === 'number'
      ? theme.shape.borderRadius * 3
      : theme.shape.borderRadius,
  padding: theme.spacing(3),
  display: 'inline-flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  border: `1px solid ${theme.palette.divider}`,
}));
