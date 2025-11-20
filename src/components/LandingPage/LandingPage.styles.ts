import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const BACKGROUND = `
  radial-gradient(30.1% 50.86% at 100% 100%, #FBFF49 0%, rgba(255, 81, 217, 0) 100%),
  radial-gradient(58.68% 99.14% at 0% 0%, #8E49FF 0%, rgba(83, 214, 255, 0) 100%),
  radial-gradient(33.55% 50.83% at 55.38% 89.56%, #8CBCFE 0%, rgba(221, 130, 255, 0) 100%),
  radial-gradient(78.12% 89.33% at 78.13% 29.89%, #FFE4C4 0%, rgba(48, 83, 118, 0) 100%),
  linear-gradient(0deg, #F5F5F5, #F5F5F5)
`;

export const LandingRoot = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  boxSizing: 'border-box',
  backgroundImage: BACKGROUND,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  paddingLeft: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
}));

export const HeroGrid = styled('main')(({ theme }) => ({
  width: '100%',
  maxWidth: 1400,
  display: 'grid',
  gridTemplateColumns: '1fr 520px',
  alignItems: 'center',
  gap: theme.spacing(4),
  boxSizing: 'border-box',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
    alignItems: 'start',
  },
}));

export const HeroLeft = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    paddingRight: 0,
  },
}));

export const HeroRight = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 480,
  [theme.breakpoints.down('md')]: {
    minHeight: 360,
  },
}));

export const AvatarImage = styled('img')(({ theme }) => ({
  maxWidth: 520,
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: 12,
  objectFit: 'cover',
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    borderRadius: 8,
  },
}));

export const DecorativeSvgContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 'auto 0 0 auto',
  right: 32,
  top: 24,
  pointerEvents: 'none',
  [theme.breakpoints.down('md')]: {
    right: 12,
    top: 16,
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1.5, 3),
  borderRadius: 8,
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[2],
  },
  '&:focus': {
    boxShadow: `0 0 0 3px ${theme.palette.primary.light}`,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.25, 2.5),
    fontSize: '0.9rem',
  },
}));
