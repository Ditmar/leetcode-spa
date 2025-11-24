import { Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageWrap = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: theme.spacing(62.25),
  height: theme.spacing(44.75),
  top: theme.spacing(27.125),
  left: theme.spacing(114),

  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(30.75),
    height: theme.spacing(20.625),
    padding: 0,
    margin: 0,
  },
}));

export const PageRakingListWrap = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: theme.spacing(50),
  height: theme.spacing(31.115),
  top: theme.spacing(87.375),
  left: theme.spacing(3),

  display: 'grid',
  gap: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    padding: theme.spacing(1.5),
    gap: theme.spacing(1),
  },
}));

export const HighlightRow = styled(Box)(({ theme }) => ({
  background: theme.palette.action.hover,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.5),
  },
}));

export const SyneTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  fontWeight: 500,
  color: theme.palette.text.secondary,
  fontFamily: '"Syne", ' + theme.typography.fontFamily,

  [theme.breakpoints.down('sm')]: {
    fontSize: '8',
  },
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

  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
}));

export const LeaderboardTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 600,
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(1),
  display: 'inline-block',
  color: theme.palette.text.primary,

  [theme.breakpoints.down('sm')]: {
    ...theme.typography.subtitle1,
    padding: theme.spacing(1.2, 2),
  },
}));
