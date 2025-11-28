import { styled, Card, Box, Typography } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: theme.spacing(37), // 296px
  height: theme.spacing(19.75), // 158px
  boxShadow: theme.shadows[1],
  borderRadius: theme.spacing(1.5), // 12px
  border: `1px solid ${theme.palette.divider}`,
  background: 'rgba(250, 250, 250, 0.75)',
  padding: 0,
  overflow: 'visible',
  transition: theme.transitions.create(['box-shadow'], {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down('md')]: {
    width: theme.spacing(32.5), // 260px
    height: theme.spacing(17.5), // 140px
  },
  [theme.breakpoints.down('sm')]: {
    width: '203.69px',
    height: '108.72px',
    borderRadius: '8.26px',
    background: 'rgba(250, 250, 250, 0.75)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
  },
}));

export const IconBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: theme.spacing(7.75), // 62px
  height: theme.spacing(7.75), // 62px
  left: theme.spacing(3.75), // 30px
  top: theme.spacing(6), // 48px
  background: '#F8F6FF',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: theme.spacing(6.75), // 54px
    height: theme.spacing(6.75), // 54px
    left: theme.spacing(2.5), // 20px
    top: theme.spacing(5), // 40px
  },
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    width: '42.66px',
    height: '42.66px',
    left: '20.64px',
    top: '24.77px',
    marginBottom: 0,
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '23.48px',
  height: '29.17px',
  [theme.breakpoints.down('md')]: {
    width: '21px',
    height: '26px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '16px',
    height: '29px',
  },
}));

export const IconImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(14.75), // 118px
  top: theme.spacing(6), // 48px
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1), // 8px
  [theme.breakpoints.down('md')]: {
    left: theme.spacing(12.5), // 100px
    top: theme.spacing(5), // 40px
    gap: theme.spacing(0.75), // 6px
  },
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    width: '84.64px',
    height: '40.21px',
    left: '81.2px',
    top: '24.08px',
    alignItems: 'flex-start',
    textAlign: 'left',
    gap: theme.spacing(0.5), // 4px
    padding: 0,
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
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '19.27px',
    lineHeight: '29px',
    width: '57.8px',
    height: '22.71px',
    color: 'rgba(13, 13, 13, 0.8)',
    justifyContent: 'flex-start',
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
    fontFamily: "'Syne', sans-serif",
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '10.32px',
    lineHeight: '12px',
    width: '84.64px',
    height: '12px',
    color: 'rgba(13, 13, 13, 0.5)',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
}));
