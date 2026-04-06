import { styled, Menu, MenuItem } from '@mui/material';

export const ContextMenuTrigger = styled('div')({
  display: 'contents',
  userSelect: 'none',
});

export const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    minWidth: theme.spacing(25),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  minHeight: theme.spacing(5.5),
  gap: theme.spacing(1.5),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
