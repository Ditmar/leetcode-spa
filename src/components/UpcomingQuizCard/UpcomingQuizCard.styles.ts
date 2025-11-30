import { Card, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
}));

export const DateContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const TypographyButton = styled(Typography)(({ theme }) => ({
  fontFamily: 'Syne',
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(13),
  lineHeight: '100%',
  letterSpacing: '0',
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
}));
export const RegisterButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(31.125),
  height: theme.spacing(6.75),

  borderRadius: theme.spacing(3.75),
  opacity: 1,

  paddingTop: theme.spacing(2.25),
  paddingBottom: theme.spacing(2.25),
  paddingLeft: theme.spacing(9.625),
  paddingRight: theme.spacing(9.625),

  gap: theme.spacing(1.25),

  background: 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)',

  '&:hover': { opacity: 0.9, background: 'linear-gradient(60deg, #A030D9 13.4%, #D080F2 86.6%)' },
}));

export const StyleTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily || 'Syne',
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(17),
  lineHeight: theme.typography.body1.lineHeight,
  letterSpacing: theme.typography.body1.letterSpacing,
  textAlign: 'center',
  color: theme.palette.grey[900] + 'CC',
  marginBottom: theme.spacing(2),
}));
