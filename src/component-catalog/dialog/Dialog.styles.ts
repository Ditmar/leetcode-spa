import { styled, Dialog } from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    padding: theme.spacing(2),
    width: '100%',
    maxWidth: '400px',
  },

  '& .MuiDialogTitle-root': {
    textAlign: 'center',
    fontWeight: 600,
  },

  '& .MuiDialogContent-root': {
    textAlign: 'center',
    color: '#0d1016',
  },
}));