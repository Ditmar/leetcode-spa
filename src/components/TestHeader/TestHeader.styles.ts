import { Box, Typography, SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderContainer = styled(Box)<{ flexDirection: 'row' | 'column' }>(
  ({ theme, flexDirection }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: flexDirection === 'row' ? 'space-between' : 'center',
    flexDirection,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(1.5),
      gap: theme.spacing(1.5),
    },
  })
);

export const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  flex: '0 0 auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1),
    alignItems: 'center',
  },
}));

export const TextSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  minWidth: 0,
  flex: '0 1 auto',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontStyle: 'normal',
  fontSize: theme.typography.pxToRem(18),
  lineHeight: '100%',
  color: '#565656',
  width: theme.spacing(25.4),
  height: theme.spacing(2.75),
  textAlign: 'left',
  opacity: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
}));


export const SubtitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: theme.typography.pxToRem(16),
  lineHeight: '100%',
  color: '#A9A9A9',
  width: theme.spacing(21.125),
  height: theme.spacing(2.375),
  textAlign: 'left',
  opacity: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
}));


export const LogoImage = styled('img')<{ size: 'small' | 'medium' | 'large' }>(
  ({ theme, size }) => ({
    width:
      size === 'small'
        ? theme.spacing(12.5) // 100 px
        : size === 'large'
          ? theme.spacing(30) // 240 px
          : theme.spacing(25.125), // 201 px
    height:
      size === 'small'
        ? theme.spacing(5.25) // 42 px
        : size === 'large'
          ? theme.spacing(12.75) // 102 px
          : theme.spacing(10.625), // 85 px
    borderRadius: theme.spacing(0.75), // 6 px
    opacity: 1,
    objectFit: 'contain',
    backgroundColor: 'transparent',
    flex: '0 0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      maxWidth: '100%',
    },
  })
);

export const PlaceholderLogo = styled(SvgIcon)<{ size: 'small' | 'medium' | 'large' }>(
  ({ theme, size }) => ({
    width:
      size === 'small'
        ? theme.spacing(12.5)
        : size === 'large'
          ? theme.spacing(30)
          : theme.spacing(25.125),
    height:
      size === 'small'
        ? theme.spacing(5.25)
        : size === 'large'
          ? theme.spacing(12.75)
          : theme.spacing(10.625),
    borderRadius: theme.spacing(0.75),
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      maxWidth: '100%',
    },
  })
);
