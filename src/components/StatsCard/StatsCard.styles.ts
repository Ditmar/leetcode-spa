import { styled, Card, Box, Typography } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '296px',
  height: '158px',
  boxShadow: theme.shadows[1],
  borderRadius: '12px',
  border: `1px solid ${theme.palette.divider}`,
  background: 'rgba(250, 250, 250, 0.75)',
  padding: 0,
  overflow: 'visible',
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down('md')]: {
    width: '260px',
    height: '140px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '280px',
    height: 'auto',
    minHeight: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
  },
}));

export const IconBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '62px',
  height: '62px',
  left: '30px',
  top: '48px',
  background: '#F8F6FF',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '54px',
    height: '54px',
    left: '20px',
    top: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    width: '50px',
    height: '50px',
    left: 'auto',
    top: 'auto',
    marginBottom: theme.spacing(1),
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px', // ← Cambiado para que coincida con el SVG
  height: '30px', // ← Cambiado para que coincida con el SVG
  [theme.breakpoints.down('md')]: {
    width: '21px', // ← Ajuste proporcional
    height: '26px', // ← Ajuste proporcional
  },
  [theme.breakpoints.down('sm')]: {
    width: '19px', // ← Ajuste proporcional
    height: '24px', // ← Ajuste proporcional
  },
}));

export const IconImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  // REMOVER completamente el background - el gradiente ya está en el SVG
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '118px',
  top: '48px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  [theme.breakpoints.down('md')]: {
    left: '100px',
    top: '40px',
    gap: '6px',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    left: 'auto',
    top: 'auto',
    alignItems: 'center',
    textAlign: 'center',
    gap: '4px',
    padding: theme.spacing(0, 1),
  },
}));

export const ValueText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '28px',
  lineHeight: '42px',
  color: 'rgba(13, 13, 13, 0.8)',
  width: '53px',
  height: '31px',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '36px',
    width: '45px',
    height: '27px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
    lineHeight: '33px',
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
  },
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Syne', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '15px',
  lineHeight: '18px',
  color: 'rgba(13, 13, 13, 0.5)',
  width: '95px',
  height: '18px',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '13px',
    lineHeight: '15.6px',
    width: '81px',
    height: '15.6px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    lineHeight: '14.4px',
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));
