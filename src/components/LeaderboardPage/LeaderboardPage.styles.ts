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

export const SyneTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  fontWeight: 500,
  color: theme.palette.text.secondary,
  fontFamily: '"Syne", ' + theme.typography.fontFamily,
}));

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),

  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  [theme.breakpoints.up('md')]: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export const LeaderboardTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 600,
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(1),
  display: 'inline-block',
  color: theme.palette.text.primary,
}));
