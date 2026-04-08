import { styled, Dialog as MuiDialogBase } from '@mui/material';

export const StyledMuiDialog = styled(MuiDialogBase)(({ theme }) => ({
  '& .MuiDialog-paper': {
    // borderRadius: 16px -> 16 / 8 = 2. Usamos spacing(2)
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: '#fff',
  },
}));