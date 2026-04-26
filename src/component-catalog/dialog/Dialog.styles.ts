import { styled, Dialog as MuiDialogBase } from '@mui/material';

export const StyledMuiDialog = styled(MuiDialogBase)(({ theme }) => ({
  '& .MuiDialog-paper': {
   
    borderRadius: theme.spacing(2), 
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    boxShadow: theme.shadows[5],
  },
}));