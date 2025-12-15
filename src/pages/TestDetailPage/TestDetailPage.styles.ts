import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const Root = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  fontFamily: "'Syne', sans-serif",
  padding: theme.spacing(6),
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(4),
  background: 'linear-gradient(180deg, rgba(245,247,249,1) 0%, rgba(243,238,255,0.6) 100%)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export const Sidebar = styled(Box)(({ theme }) => ({
  width: 260,
  minHeight: '100vh',
  padding: theme.spacing(4, 2),
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: 'linear-gradient(180deg, rgba(250,244,255,1) 0%, rgba(245,250,248,1) 100%)',
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const NavLogo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
}));

export const NavLogoMark = styled('div')(({ theme }) => ({
  width: 44,
  height: 44,
  borderRadius: 10,
  background: 'linear-gradient(135deg,#b23deb,#f08fff)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  fontWeight: 800,
}));

export const NavItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.25, 0),
  color: theme.palette.text.primary,
  cursor: 'pointer',
  fontWeight: 600,
}));

export const NavFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(4),
}));

export const MainArea = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));

export const PageHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const HeaderTitle = styled(Typography)(() => ({
  fontWeight: 900,
  fontSize: 36,
  lineHeight: '44px',
}));

export const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(0.5),
}));

export const HeaderRight = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
}));

export const SearchBox = styled('div')(() => ({
  flex: 1,
  minWidth: 150,
  height: 34,
  background: 'transparent',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  boxShadow: 'none',
  transform: 'translateX(-110px)',
}));

export const AvatarWrapper = styled(Box)(({ theme }) => ({
  width: 28,
  height: 28,
  borderRadius: '50%',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
  cursor: 'pointer',
  marginLeft: theme.spacing(0),
  transform: 'translateX(-40px)',
}));

export const NotificationBell = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 6px 16px rgba(30,22,60,0.04)',
  marginLeft: theme.spacing(1),
  cursor: 'pointer',
}));

export const InnerCard = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 1100,
  borderRadius: 12,
  padding: theme.spacing(6),
  background: theme.palette.background.paper,
  boxShadow: '0 8px 30px rgba(30,22,60,0.04)',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    gap: theme.spacing(2),
  },
}));

export const HeaderRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1.5),
  },
}));

export const LogoArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

export const LogoPlaceholder = styled('div')(() => ({
  width: 140,
  height: 64,
  borderRadius: 8,
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  img: {
    maxHeight: 56,
    objectFit: 'contain',
  },
}));

export const TitleSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(0.5),
  minWidth: 0,
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: 22,
  [theme.breakpoints.up('md')]: {
    fontSize: 26,
  },
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 13,
}));

export const StartButtonPlaceholder = styled('div')(({ theme }) => ({
  minWidth: 160,
  padding: '12px 28px',
  borderRadius: 9999,
  textAlign: 'center',
  color: theme.palette.common.white,
  background: 'linear-gradient(90deg,#b23deb 13.4%, #de8fff 86.6%)',
  cursor: 'pointer',
  fontWeight: 700,
  boxShadow: '0 10px 30px rgba(178,61,235,0.18)',
  transition: 'transform 150ms ease',
  '&:active': { transform: 'translateY(1px)' },
  [theme.breakpoints.down('sm')]: {
    alignSelf: 'stretch',
  },
}));

export const CertificatePill = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: 8,
  padding: theme.spacing(1, 2),
  background: '#e6fbeb',
  border: `1px solid rgba(43,154,84,0.12)`,
  color: '#2b9a54',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  justifyContent: 'flex-start',
  fontWeight: 600,
}));

export const InfoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: theme.spacing(4),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const InfoColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));

export const InfoHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 13,
  fontWeight: 700,
  marginBottom: theme.spacing(1),
}));

export const InfoValue = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle,
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(16),
  color: '#A9A9A9',
  lineHeight: '1.5',
  whiteSpace: 'normal',
  overflow: 'visible',
  textOverflow: 'unset',
}));

export const NoticeBox = styled(Box)(({ theme }) => ({
  borderRadius: 12,
  border: `1px solid ${theme.palette.grey[300]}`,
  padding: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  background: theme.palette.mode === 'light' ? '#fbfbff' : theme.palette.background.paper,
}));

export const NoticeItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  alignItems: 'center',
}));

export const IconPlaceholder = styled('div')(() => ({
  width: 44,
  height: 44,
  borderRadius: 10,
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 6px rgba(30,22,60,0.02)',
  overflow: 'hidden',
  img: {
    width: 18,
    height: 18,
    objectFit: 'contain',
    display: 'block',
  },
}));

export const NavigationBox = styled(Box)(({ theme }) => ({
  width: 260,
  minHeight: '80vh',
  borderRadius: 12,
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  boxShadow: '0 6px 18px rgba(30,22,60,0.04)',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const Separator = styled('div')(({ theme }) => ({
  width: 1,
  background: theme.palette.divider,
  alignSelf: 'stretch',
  borderRadius: 1,
  marginLeft: theme.spacing(0),
  marginRight: theme.spacing(3),
}));

export const PillPlaceholder = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 16,
  background: '#dff7e6',
  color: '#2b9a54',
  fontWeight: 700,
}));

export const MetricBadgePlaceholder = styled(Box)(({ theme }) => ({
  minWidth: 140,
  padding: theme.spacing(1.25, 1.5),
  borderRadius: 8,
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.grey[200]}`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  alignItems: 'flex-start',
}));

export const MetricBadgesBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: theme.spacing(4),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const MetricBadgeBox = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: 12,
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 6px 18px rgba(30,22,60,0.04)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export const PlaceholderBox = styled(Box)(({ theme }) => ({
  border: `1px dashed ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.background.paper,
}));
