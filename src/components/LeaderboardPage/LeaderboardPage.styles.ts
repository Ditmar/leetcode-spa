import { Avatar, Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageWrap = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const ContentCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
}));

export const HighlightRow = styled(Box)(({ theme }) => ({
  background: theme.palette.action.hover,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
}));

export const SyneTypography = styled(Typography)(() => ({
  fontFamily: 'Syne, sans-serif',
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: '15px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#0D0D0D80',
}));

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,

  [theme.breakpoints.up('sm')]: {
    width: 40,
    height: 40,
  },

  [theme.breakpoints.up('md')]: {
    width: 48,
    height: 48,
  },
}));

export const LeaderboardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  fontSize: '28px',
  lineHeight: '100%',
  letterSpacing: 0,
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(1),
  display: 'inline-block',
}));
