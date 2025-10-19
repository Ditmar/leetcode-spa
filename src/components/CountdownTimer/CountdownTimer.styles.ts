import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TimerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
  backgroundColor: 'transparent',
  padding: theme.spacing(1),
  flexWrap: 'nowrap',
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(6.25),
  height: theme.spacing(6.25),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: '#AE8CFA',

  '& img': {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },

  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export const TimerText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Syne, sans-serif',
  fontWeight: 700,
  fontSize: '2.5rem',
  color: '#A9A9A9',
  textTransform: 'capitalize',
  letterSpacing: 'normal',
  lineHeight: theme.spacing(6), // 48px
  textAlign: 'left',
  width: theme.spacing(24.125), // 193px
  height: theme.spacing(6), // 48px
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    width: 'auto',
  },
}));
