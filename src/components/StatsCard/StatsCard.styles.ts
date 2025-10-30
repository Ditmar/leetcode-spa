import { styled, Card, Box, Typography } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: theme.spacing(37),
  height: theme.spacing(19.75),
  boxShadow: theme.shadows[1],
  borderRadius:
    typeof theme.shape.borderRadius === 'number'
      ? theme.shape.borderRadius * 1.5
      : `calc(${theme.shape.borderRadius} * 1.5)`,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  padding: 0,
  overflow: 'hidden',
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down('md')]: {
    width: theme.spacing(32),
    height: theme.spacing(17),
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: theme.spacing(28),
    height: 'auto',
    minHeight: theme.spacing(16),
  },
}));

export const IconBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: theme.spacing(7.75),
  height: theme.spacing(7.75),
  left: theme.spacing(3.75),
  top: theme.spacing(6),
  backgroundColor: '#F8F6FF',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    left: theme.spacing(3),
    top: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    left: theme.spacing(2.5),
    top: theme.spacing(2.5),
    position: 'relative',
    margin: `${theme.spacing(2)} auto ${theme.spacing(1)}`,
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(3.5),
  height: theme.spacing(3.5),
  [theme.breakpoints.down('md')]: {
    width: theme.spacing(2.75),
    height: theme.spacing(2.75),
  },
  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
  },
}));

export const IconImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  color: '#B23DEB',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(14.75),
  top: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  [theme.breakpoints.down('md')]: {
    left: theme.spacing(12),
    top: theme.spacing(4),
    gap: theme.spacing(0.75),
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    left: 'auto',
    top: 'auto',
    alignItems: 'center',
    textAlign: 'center',
    gap: theme.spacing(0.5),
    padding: `0 ${theme.spacing(1)} ${theme.spacing(2)}`,
  },
}));

export const ValueText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif", //  EXACTO de Figma
  fontStyle: 'normal', // EXACTO de Figma
  fontWeight: 600, //  EXACTO de Figma
  fontSize: '28px', //  EXACTO de Figma
  lineHeight: '42px', //  EXACTO de Figma
  color: 'rgba(13, 13, 13, 0.8)', //  EXACTO de Figma
  width: '53px', //  EXACTO de Figma
  height: '31px', //  EXACTO de Figma
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center', //  Centrar verticalmente dentro del contenedor
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
    textAlign: 'center',
    justifyContent: 'center',
  },
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Syne', sans-serif", //  EXACTO de Figma
  fontStyle: 'normal', //  EXACTO de Figma
  fontWeight: 500, // EXACTO de Figma
  fontSize: '15px', //  EXACTO de Figma
  lineHeight: '18px', //  EXACTO de Figma
  color: 'rgba(13, 13, 13, 0.5)', //  EXACTO de Figma
  width: '95px', // EXACTO de Figma
  height: '18px', //  EXACTO de Figma
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
    textAlign: 'center',
    justifyContent: 'center',
  },
}));
