import "@fontsource/syne/700.css";
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const TimerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
  backgroundColor: 'transparent',
  padding: theme.spacing(1),
  flexWrap: 'nowrap', // ❗ Mantiene diseño horizontal

  // No cambiamos a columna en móviles
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px',
  },
}));

export const TimerText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Syne, sans-serif',
  fontWeight: 700,
  fontSize: '2.5rem',
  color: '#A9A9A9',
  textTransform: 'capitalize',       
  letterSpacing: 'normal', 
  lineHeight: '48px',
  textAlign: 'left',
  width: '193px',
  height: '48px',
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    width: 'auto',
  },
}));
