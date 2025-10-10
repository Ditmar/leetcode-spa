import { styled } from '@mui/material/styles';
import { Box, Typography, SvgIcon } from '@mui/material';

export const HeaderContainer = styled(Box)<{ flexDirection: 'row' | 'column' }>(({ theme, flexDirection }) => ({
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
}));

export const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  // Que el bloque logo+texto no crezca inesperadamente
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
  // IMPORTANTE: permitir que el contenedor de texto se encoja en flex
  minWidth: 0,
  flex: '0 1 auto',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Syne', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  fontWeight: 600,
  fontStyle: 'normal',
  fontSize: theme.typography.pxToRem(18),
  lineHeight: '100%',
  color: '#565656',
  width: 203,
  height: 22,
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
  fontFamily: "'Syne', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: theme.typography.pxToRem(16),
  lineHeight: '100%',
  color: '#A9A9A9',
  width: 169,
  height: 19,
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

export const LogoImage = styled('img')<{ size: 'small' | 'medium' | 'large' }>(({ theme, size }) => ({
  width: size === 'small' ? 100 : size === 'large' ? 240 : 201,
  height: size === 'small' ? 42 : size === 'large' ? 102 : 85,
  borderRadius: 6,
  opacity: 1,
  objectFit: 'contain',
  backgroundColor: 'transparent',
  // Evita que la img crezca o encoga
  flex: '0 0 auto',
  [theme.breakpoints.down('sm')]: {
    margin: '0 auto',
    maxWidth: '100%',
  },
}));

export const PlaceholderLogo = styled(SvgIcon)<{ size: 'small' | 'medium' | 'large' }>(({ theme, size }) => ({
  width: size === 'small' ? 100 : size === 'large' ? 240 : 201,
  height: size === 'small' ? 42 : size === 'large' ? 102 : 85,
  borderRadius: 6,
  backgroundColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    margin: '0 auto',
    maxWidth: '100%',
  },
}));
