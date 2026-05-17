import { Box, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(1),
}));

export const IconCircle = styled(Box)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  backgroundColor: '#d1fae5', // Light green from original design
  color: '#059669', // Primary green from original design
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
}));

export const SocialButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  width: '100%',
}));
