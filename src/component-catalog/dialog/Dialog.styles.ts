import { styled, Dialog as MuiDialogBase } from '@mui/material';

export const StyledMuiDialog = styled(MuiDialogBase)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.spacing(2), // 16px
    padding: theme.spacing(1),
    backgroundColor: '#fff',
  },
}));