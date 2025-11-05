
import {
  Box,
  Paper,
  Button,
  IconButton,
  Grid,
  Typography,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface DecorativeCircleProps {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  size: string | number;
}

export const PageRoot = styled(Grid)({
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  backgroundColor: '#f9f9f9',
  fontFamily: 'Syne, Arial, sans-serif',
});

export const LeftPanel = styled(Grid)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  background:
    'linear-gradient(160deg, rgba(243, 235, 255, 0.8) 0%, rgba(220, 213, 248, 0.5) 30%, rgba(200, 190, 250, 0.3) 70%, rgba(180, 170, 255, 0.1) 100%)',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StudentImage = styled('img')({
  maxWidth: '450px',
  width: '70%',
  height: 'auto',
  objectFit: 'cover',
  zIndex: 2,
});

export const DecorativeCircle = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'top' && prop !== 'left' && prop !== 'right' && prop !== 'bottom' && prop !== 'size',
})<DecorativeCircleProps>(({ top, left, right, bottom, size }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: 'rgba(171, 71, 188, 0.15)',
  top: top,
  left: left,
  right: right,
  bottom: bottom,
  zIndex: 1,
}));

export const RightPanel = styled(Grid)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  background:
    'linear-gradient(180deg, rgba(243, 235, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%)',
  [theme.breakpoints.up('md')]: {
    backgroundColor: theme.palette.background.default,
  },
}));

export const FormContainer = styled(Paper)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  padding: theme.spacing(2),
  borderRadius: '20px',
  maxWidth: 440,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    background: theme.palette.background.paper,
    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.08)',
    padding: theme.spacing(5),
  },
}));

export const LogoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(3),
  color: '#333',

  '& img': {
    height: '40px',
    width: 'auto',
  },
}));

export const StyledForm = styled('form')({
  width: '100%',
  marginTop: '8px',
});

export const FormInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    '& fieldset': {
      borderColor: 'rgba(171, 71, 188, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8E44AD',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#BCBCBC',
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#BCBCBC',
    opacity: 1,
  },
  '& .MuiInputBase-input': {
    color: '#CCCCCC',
  },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: '50px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  color: 'white',
  background: 'linear-gradient(90deg, #9B59B6 0%, #8E44AD 100%)',
  '&:hover': {
    opacity: 0.9,
    boxShadow: '0px 4px 15px rgba(142, 68, 173, 0.4)',
  },
  '&:disabled': {
    background: theme.palette.grey[300],
    color: theme.palette.grey[500],
  },
}));

export const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2.5),
  marginTop: theme.spacing(0.2),
}));

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
  border: 'none',
  padding: theme.spacing(1),
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },

  '& img': {
    width: '32px',
    height: '32px',
  },
}));

export const DividerText = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  margin: theme.spacing(3, 0),
  color: '#BCBCBC',
}));