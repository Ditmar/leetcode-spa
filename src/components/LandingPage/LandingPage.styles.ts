import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LandingRoot = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  boxSizing: 'border-box',
  backgroundImage: theme.gradients?.background(theme.palette),
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  paddingLeft: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(3),
  },
}));

export const HeroGrid = styled('main')(({ theme }) => ({
  width: '100%',
  maxWidth: theme.breakpoints.values.lg,
  display: 'grid',
  gridTemplateColumns: `1fr ${theme.spacing(65)}`,
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
  minHeight: theme.spacing(60),
  [theme.breakpoints.down('md')]: {
    minHeight: 360,
  },
}));

export const AvatarImage = styled('img')(({ theme }) => {
  const baseRadius = parseInt(theme.shape.borderRadius, 10);

  return {
    maxWidth: theme.spacing(65),
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: baseRadius * 1.5,
    objectFit: 'cover',
    boxShadow: theme.shadows[4],
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      borderRadius: baseRadius,
    },
  };
});

export const DecorativeSvgContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 'auto 0 0 auto',
  right: theme.spacing(4),
  top: theme.spacing(3),
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
  borderRadius: theme.shape.borderRadius,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.button.fontSize,
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[2],
  },
  '&:focus': {
    boxShadow: `0 0 0 ${theme.spacing(0.5)} ${theme.palette.primary.light}`,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.25, 2.5),
    fontSize: theme.typography.pxToRem(parseInt(theme.typography.button.fontSize) - 2),
  },
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(3, 6),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2, 3),
  },
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const LogoImage = styled('img')(({ theme }) => ({
  height: theme.spacing(3.125),
  width: 'auto',
  cursor: 'pointer',
}));
