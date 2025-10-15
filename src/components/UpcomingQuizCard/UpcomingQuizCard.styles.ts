import { Card, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
}));

export const DateContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const RegisterButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  background: 'linear-gradient(90deg, #A44CE0, #6C63FF)',
  color: '#fff',
  padding: theme.spacing(1.2, 4),
  borderRadius: (theme.shape.borderRadius as number) * 2,
  '&:hover': {
    opacity: 0.9,
  },
}));
