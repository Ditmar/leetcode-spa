import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAlertDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: `calc(100% - ${theme.spacing(4)})`,
    maxWidth: theme.spacing(70),
    margin: theme.spacing(2),
    borderRadius: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiDialog-container': {
      alignItems: 'flex-end',
    },
    '& .MuiDialog-paper': {
      width: '100%',
      maxWidth: '100%',
      margin: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: theme.spacing(3),
      borderTopRightRadius: theme.spacing(3),
    },
  },
}));

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  padding: theme.spacing(3, 3, 1.5),
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(0, 3, 3),
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(0, 3, 3),
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    '& .MuiButton-root': {
      width: '100%',
    },
  },
  '& .MuiButton-root': {
    minHeight: theme.spacing(5.5),
  },
}));

export const AlertDialogHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
}));

export const AlertDialogTitleContent = styled(Box)(() => ({
  flex: 1,
}));

export const AlertDialogSeverityDot = styled(Box)(({ theme }) => ({
  width: theme.spacing(1.5),
  height: theme.spacing(1.5),
  borderRadius: '50%',
  marginTop: theme.spacing(1),
  flexShrink: 0,
}));
