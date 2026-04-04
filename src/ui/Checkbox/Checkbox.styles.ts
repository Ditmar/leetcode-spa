import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CheckboxWrapper = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
}));

export const TouchTarget = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  // 44x44 touch target (no px)
  minHeight: theme.spacing(5.5),
  minWidth: theme.spacing(5.5),

  padding: theme.spacing(0.5),
}));