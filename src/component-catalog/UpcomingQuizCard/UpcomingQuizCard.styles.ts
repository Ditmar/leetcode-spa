import { Card, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  width: theme.spacing(52.75),
  height: theme.spacing(38.375),
  margin: '0 auto', // 🔥 siempre centrado

  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: 'auto',
    padding: theme.spacing(3),
    margin: '20px auto', // 🔥 centrado en vista móvil
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // 🔥 contenido centrado
    justifyContent: 'center',
  },
}));

export const DateContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(1.5, 0),
    justifyContent: 'center',
  },
}));

export const TypographyButton = styled(Typography)(({ theme }) => ({
  fontFamily: 'Syne',
  color: theme.palette.common.white,
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(16),
  width: theme.spacing(11.875),
  height: theme.spacing(2.25),
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(15),
    textAlign: 'center',
  },
}));

export const RegisterButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(35.125),
  height: theme.spacing(8.25),
  borderRadius: theme.spacing(3.75),
  opacity: 1,
  gap: theme.spacing(1.25),
  background: 'linear-gradient(60deg, #B23DEB 13.4%, #DE8FFF 86.6%)',

  '&:hover': {
    opacity: 0.9,
    background: 'linear-gradient(60deg, #A030D9 13.4%, #D080F2 86.6%)',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: theme.spacing(6),
    borderRadius: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const StyleTitle = styled(Typography)(({ theme }) => ({
  fontFamily: `Syne, ${theme.typography.fontFamily}`,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(17),
  textAlign: 'center',
  opacity: 1,
  width: theme.spacing(28.75),
  height: theme.spacing(2.5),
  margin: `0 auto`,
  display: 'block',

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(15),
    width: '100%',
    height: 'auto',
    textAlign: 'center',
  },
}));
