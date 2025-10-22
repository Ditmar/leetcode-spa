import { styled, Card, Box, Typography } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: theme.spacing(37), // 296px / 8 = 37
  height: theme.spacing(19.75), // 158px / 8 = 19.75
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
  [theme.breakpoints.down('xs')]: {
    maxWidth: '100%',
    minHeight: theme.spacing(14),
  },
}));

export const IconBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: theme.spacing(7.75), // 62px / 8 = 7.75
  height: theme.spacing(7.75),
  left: theme.spacing(3.75), // 30px / 8 = 3.75
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
  [theme.breakpoints.down('xs')]: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: `${theme.spacing(1.5)} auto ${theme.spacing(0.5)}`,
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(3), // 24px / 8 = 3
  height: theme.spacing(3),

  [theme.breakpoints.down('md')]: {
    width: theme.spacing(2.75),
    height: theme.spacing(2.75),
  },

  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
  },

  [theme.breakpoints.down('xs')]: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));

export const IconImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  color: '#B23DEB',
  filter: `
    brightness(0) saturate(100%) 
    invert(32%) sepia(89%) saturate(2916%) 
    hue-rotate(266deg) brightness(92%) contrast(91%)
  `,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(14.75), // 118px / 8 = 14.75
  top: theme.spacing(6), // 48px / 8 = 6
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1), // 8px / 8 = 1

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
  [theme.breakpoints.down('xs')]: {
    gap: theme.spacing(0.25),
    padding: `0 ${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
  },
}));

export const ValueText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: theme.typography.h4.fontSize,
  lineHeight: 1,
  color: theme.palette.text.primary + 'CC',
  margin: 0,
  padding: 0,

  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.h5.fontSize,
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h6.fontSize,
    textAlign: 'center',
    width: '100%',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: theme.typography.body2.fontSize,
  lineHeight: 1,
  color: theme.palette.text.secondary + '99',
  margin: 0,
  padding: 0,

  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.body2.fontSize,
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.caption.fontSize,
    textAlign: 'center',
    width: '100%',
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: theme.typography.caption.fontSize,
  },
}));
