import { styled, Dialog as MuiDialogBase } from '@mui/material';

export const StyledMuiDialog = styled(MuiDialogBase)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));
