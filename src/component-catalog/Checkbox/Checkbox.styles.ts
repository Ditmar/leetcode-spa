import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const CheckboxWrapper = styled(Box)(() => ({
  display: 'inline-flex',
  flexDirection: 'column',
}));

export const TouchTarget = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  minHeight: theme.spacing(5.5),
  minWidth: theme.spacing(5.5),

  padding: theme.spacing(0.5),
}));
