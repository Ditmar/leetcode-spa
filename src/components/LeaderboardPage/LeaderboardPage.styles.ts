import { Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import gifBg from '../../assets/image.gif';

export const PageWrap = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: theme.spacing(62.25),
  height: theme.spacing(44.75),
  top: theme.spacing(27.125),
  left: theme.spacing(114),

  backgroundImage: `url(${gifBg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',

  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(42.75),
    height: theme.spacing(30.865),
    padding: 0,
    margin: 0,
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
  fontWeight: 700,
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(1),
  display: 'inline-block',
  color: theme.palette.text.primary,
  width: theme.spacing(19.375),
  height: theme.spacing(3),
  fontSize: 20,

  [theme.breakpoints.down('sm')]: {
    ...theme.typography.subtitle1,
    fontWeight: 700,

    width: theme.spacing(20.125),
    height: theme.spacing(3),
    fontSize: 20,
  },
}));
