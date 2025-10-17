import Box from '@mui/material/Box';
import { styled, keyframes } from '@mui/material/styles';
import '../../style-library/fonts.css';

const popIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(8px) scale(0.995)' },
  '60%': { opacity: 1, transform: 'translateY(-4px) scale(1.005)' },
  '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
});

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1200px',
  minHeight: '64vh',
  paddingTop: theme.spacing(6),
  paddingRight: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(6),
  margin: '0 auto',
  boxSizing: 'border-box',
  backgroundSize: '120%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.background.paper,
    backdropFilter: 'none',
    boxShadow: 'none',
    border: 'none',
    position: 'relative',
    zIndex: 1,
  },
  '&::before': {
    content: "''",
    position: 'absolute',
    zIndex: 999,
    left: '50%',
    top: '62%',
    transform: 'translate(-50%, -50%)',
    width: '420px',
    height: '240px',
    backgroundImage:
      "url('https://ik.imagekit.io/3kffwbcsu/f4e97cf31cf916fc8f2971161a64b6716a79fab2.gif?updatedAt=1760635002477')",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    pointerEvents: 'none',
    opacity: 0.85,
  },
  [theme.breakpoints.up('lg')]: {
    '&::before': {
      width: '720px',
      height: '460px',
      top: '72%',
    },
    backgroundSize: '160%',
    minHeight: '82vh',
    paddingTop: theme.spacing(16),
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    '&::before': {
      width: '560px',
      height: '360px',
      top: '56%',
    },
    minHeight: '78vh',
    paddingTop: theme.spacing(14),
    justifyContent: 'flex-start',
  },
  [theme.breakpoints.down('md')]: {
    '&::before': {
      width: '380px',
      height: '220px',
      top: '60%',
    },
    paddingTop: theme.spacing(12),
    minHeight: '76vh',
    justifyContent: 'flex-start',
  },
  [theme.breakpoints.down('sm')]: {
    '&::before': {
      width: '320px',
      height: '190px',
      top: '60%',
    },
    paddingTop: theme.spacing(10),
    minHeight: '74vh',
    justifyContent: 'flex-start',
  },

  animation: `${popIn} 420ms cubic-bezier(.2,.9,.3,1)`,
  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
    '&::before': {
      display: 'none',
    },
  },
}));

export const Title = styled('h1')(({ theme }) => ({
  fontFamily: "'Syne', 'Inter', sans-serif",
  fontWeight: 700,
  fontSize: 'clamp(1.3rem, 3.6vw, 2.6rem)',
  lineHeight: 1.06,
  letterSpacing: '-0.02em',
  margin: 0,
  marginTop: theme.spacing(0.5),
  marginBottom: theme.spacing(1.5),
  textAlign: 'center',
  alignSelf: 'center',
  color: theme.palette.text.primary,
  [theme.breakpoints.up('md')]: {
    fontSize: '80px',
    lineHeight: '96px',
    maxWidth: '1067px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export const Message = styled('p')(({ theme }) => ({
  fontFamily: "'Syne', 'Inter', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(1rem, 2.6vw, 1.25rem)',
  lineHeight: 1.3,
  color: theme.palette.text.primary,
  textAlign: 'center',
  alignSelf: 'center',
  marginTop: theme.spacing(0.5),
  maxWidth: '720px',
  margin: '0 auto',
  marginBottom: theme.spacing(2.5),
  whiteSpace: 'normal',
  [theme.breakpoints.up('md')]: {
    fontSize: '30px',
    lineHeight: '48px',
    maxWidth: '995px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'clip',
    transform: 'scaleX(1.06) translateZ(0)',
  },
}));

export const MessageReducedMotion = styled('div')(() => ({
  '@media (prefers-reduced-motion: reduce)': {
    '& p, & h1, & img': {
      transform: 'none !important',
      transition: 'none !important',
    },
  },
}));

export const Illustration = styled('img')(({ theme }) => ({
  display: 'block',
  margin: 0,
  marginTop: theme.spacing(0.5),
  width: '100%',
  maxWidth: '880px',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: 0,
  boxShadow: 'none',
  position: 'relative',
  zIndex: 1,
  transform: 'scaleY(0.82)',
  transition: 'transform 240ms ease',
  '&:hover': {
    transform: 'translateY(-4px) scaleX(1.02)',
  },
  '@media (prefers-reduced-motion: reduce)': {
    transform: 'none',
    transition: 'none',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '460px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '92vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '440px',
    height: 'auto',
    maxWidth: '880px',
  },
}));

export const Notification = styled('div')(({ theme }) => ({
  fontFamily: "'Inter', 'Montserrat', Arial, sans-serif",
  fontWeight: 500,
  fontSize: '0.95rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  alignSelf: 'center',
  marginTop: theme.spacing(1),
  opacity: 0.95,
  [theme.breakpoints.up('md')]: {
    fontSize: '18px',
    lineHeight: '22px',
    maxWidth: '995px',
    height: '22px',
  },
}));
