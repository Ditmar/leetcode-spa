import { Card, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  width: theme.spacing(52.75),
  height: theme.spacing(38.375),
}));

export const DateContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const TypographyButton = styled(Typography)(({ theme }) => ({
  fontFamily: 'Syne',
  color: theme.palette.common.white,
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(17),
}));

export const RegisterButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(31.125),
  height: theme.spacing(6.75),

  borderRadius: theme.spacing(3.75),
  opacity: 1,

  gap: theme.spacing(1.25),
  background: 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)',

  '&:hover': { opacity: 0.9, background: 'linear-gradient(60deg, #A030D9 13.4%, #D080F2 86.6%)' },
}));

export const StyleTitle = styled(Typography)(({ theme }) => ({
  fontFamily: `Syne, ${theme.typography.fontFamily}`,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(17),

  textAlign: 'center',
  color: theme.palette.grey[900] + 'CC',
  opacity: 1,

  width: theme.spacing(28.75),
  height: theme.spacing(2.5),

  margin: `0 auto`,
  display: 'block',
}));
