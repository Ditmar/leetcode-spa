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
  transition: theme.transitions.create(['box-shadow'], {
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
    width: '203.69px',
    height: '108.72px',
    borderRadius: '8.26px',
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
    width: '42.66px',
    height: '42.66px',
    left: '20.64px',
    top: '33.03px',
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
    width: '16.16px',
    height: '20.07px',
  },
}));

export const IconImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

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
    left: '81.2px',
    top: '33.03px',
    gap: '4px',
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
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '36px',
    width: '45px',
    height: '27px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '19.27px',
    lineHeight: '29px',
    width: '36.47px',
    height: '21.33px',
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
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('md')]: {
    fontSize: '13px',
    lineHeight: '15.6px',
    width: '81px',
    height: '15.6px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '10.32px',
    lineHeight: '12px',
    width: '65px',
    height: '12px',
  },
}));

export const LongLabelText = styled(LabelText)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '84.64px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
