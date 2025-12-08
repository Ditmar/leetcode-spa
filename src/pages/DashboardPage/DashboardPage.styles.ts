import { Drawer, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DashboardBackground = styled('div')(() => ({
  width: '111%',
  minHeight: '262vh',
  position: 'relative',
  overflow: 'auto',
  backgroundColor: '#F5F5F5',
  backgroundImage: `
    radial-gradient(30.1% 50.86% at 100% 100%, #9949FF 0%, rgba(255,81,217,0) 100%),
    radial-gradient(58.68% 99.14% at 0% 0%, #C2F9F9 0%, rgba(83,214,255,0) 100%),
    radial-gradient(33.55% 50.83% at 55.38% 89.56%, #8CBCFE 0%, rgba(221,130,255,0) 100%),
    radial-gradient(27.33% 40.65% at 78.12% 29.89%, #F5FF7F 0%, rgba(48,83,118,0) 100%)
  `,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  zIndex: 0,
}));

export const ResponsiveContainer = styled('div')<{ isMobile: boolean }>(({ isMobile }) => ({
  position: 'relative',
  zIndex: 2,
  padding: isMobile ? '10px' : undefined,

  '.logo': {
    position: isMobile ? 'relative' : 'absolute',
    top: isMobile ? '32px' : '84px',
    left: isMobile ? '24px' : '71px',
    width: isMobile ? '71px' : '192px',
    height: isMobile ? '56px' : '88px',
    marginBottom: isMobile ? '20px' : '0',
  },
  '.avatar': {
    position: isMobile ? 'relative' : 'absolute',
    top: isMobile ? '10px' : '101px',
    left: isMobile ? '50%' : '1341px',
    transform: isMobile ? 'translateX(-50%)' : 'none',
    marginBottom: isMobile ? '20px' : '0',
  },
}));

export const NoiseLayer = styled('img')(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover',
  opacity: 0.05,
  pointerEvents: 'none',
}));

export const MaskLayer = styled('div')(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  background: 'rgba(245, 245, 245, 0.3)',
  backdropFilter: 'blur(50px)',
  WebkitBackdropFilter: 'blur(50px)',
  pointerEvents: 'none',
}));

export const Line15 = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  left: '328px',
  width: '1px',
  height: '982px',
  backgroundColor: 'rgba(194,194,194,1)',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const Frame71Placeholder = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  position: 'absolute',
  top: isMobile ? '180px' : '237px',
  left: isMobile ? '50%' : '96px',
  transform: isMobile ? 'translateX(-50%)' : 'none',
  width: '163px',
  height: '616px',
  backgroundColor: 'rgba(180, 180, 250, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Group59Container = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  width: isMobile ? '90%' : '979px',
  height: isMobile ? 'auto' : '85px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  zIndex: 2,
  margin: isMobile ? '20px auto 0 auto' : '0',
}));

export const Group13 = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  position: 'absolute',
  top: isMobile ? '29px' : '92px',
  left: isMobile ? '20px' : '433px',
  width: isMobile ? '342px' : '366px',
  height: isMobile ? '78.87px' : '85px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
}));

export const WelcomeMessage = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  fontFamily: 'Syne, sans-serif',
  fontWeight: 700,
  fontStyle: 'normal',
  fontSize: isMobile ? '40px' : '40px',
  lineHeight: '100%',
  letterSpacing: '0%',
  textAlign: isMobile ? 'center' : 'left',
}));

export const ProfileSubtitle = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  fontFamily: 'Syne, sans-serif',
  fontSize: isMobile ? '16px' : '18px',
  fontWeight: 400,
  color: 'rgba(13,13,13,0.5)',
  marginTop: '4px',
  textAlign: isMobile ? 'center' : 'left',
}));

export const Group53Placeholder = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  position: 'absolute',
  top: isMobile ? '131.87px' : '110px',
  left: isMobile ? '0px' : '929px',
  width: isMobile ? '342px' : '324px',
  height: '67px',
  backgroundColor: 'rgba(200,180,250,0.3)',
  display: 'flex',
  alignItems: 'center',
  padding: '0 12px',
  borderRadius: '12px',
  boxSizing: 'border-box',
}));

export const Group49Placeholder = styled('img')(() => ({
  position: 'absolute',
  width: '24px',
  height: '25px',
  top: '90px',
  left: '1285px',
  zIndex: 5,
}));

export const Group16 = styled('div')<{ $isMobile?: boolean }>(({ $isMobile }) => ({
  position: 'absolute',
  width: $isMobile ? '90%' : '211px',
  height: '31px',
  top: $isMobile ? '180px' : '109px',
  left: $isMobile ? '24px' : '1077px',
  borderRadius: '8px',
  background: 'rgba(116, 121, 255, 1)',
  boxShadow: '0px 4px 4px rgba(0,0,0,0.05), 0px 0px 2px rgba(0,0,0,0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
}));

export const NotificationText = styled('div')(() => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '100%',
  color: 'white',
  textAlign: 'center',
}));

export const AvatarContainer = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  position: 'absolute',
  top: '120px',
  left: isMobile ? 'auto' : '1341px',
  right: isMobile ? '10px' : 'auto',
  width: isMobile ? 45 : 71,
  height: isMobile ? 40 : 46,
  display: isMobile ? 'none' : 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const HiconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '250px',
  left: '430px',
  [theme.breakpoints.down('sm')]: {
    top: '310px',
    left: '25px',
  },
}));

export const RecentTestsText = styled('div')(({ theme }) => ({
  position: 'absolute',
  fontSize: '20px',
  fontWeight: 700,
  top: '250px',
  left: '470px',
  [theme.breakpoints.down('sm')]: {
    top: '315px',
    left: '50px',
    fontSize: '16px',
  },
}));

export const Right2Icon = styled('img')<{ $isMobile?: boolean }>(({ $isMobile }) => ({
  position: 'absolute',
  top: $isMobile ? '310px' : '250px',
  left: $isMobile ? '90%' : '833px',
  width: '24px',
  height: '24px',
  cursor: 'pointer',
}));

export const Right3Icon = styled('img')<{ $isMobile?: boolean }>(({ $isMobile }) => ({
  position: 'absolute',
  top: $isMobile ? '310px' : '250px',
  left: $isMobile ? '80%' : '793px',
  width: '24px',
  height: '24px',
  cursor: 'pointer',
}));

export const Frame66Container = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  position: 'absolute',
  top: isMobile ? '350px' : '290px',
  left: isMobile ? '55%' : '433px',
  transform: isMobile ? 'translateX(-50%)' : 'none',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  width: isMobile ? '90%' : 'auto',
  overflowX: isMobile ? 'auto' : 'visible',
  paddingBottom: isMobile ? '10px' : '0',
}));

export const Frame39Placeholder = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  position: 'absolute',
  top: isMobile ? '580px' : '606px',
  left: isMobile ? '5%' : '435px',
  width: isMobile ? '90%' : '422px',
  height: isMobile ? '200px' : '307px',
  backgroundColor: 'rgba(200,180,250,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const RightColumnContainer = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  position: 'absolute',
  top: isMobile ? '580px' : '590px',
  left: isMobile ? '50%' : '914px',
  transform: isMobile ? 'translateX(-50%)' : 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0px',
  width: isMobile ? '90%' : '296px',
}));

export const Frame61Placeholder = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  position: 'absolute',
  top: isMobile ? '820px' : '606px',
  left: isMobile ? '5%' : '1224px',
  width: isMobile ? '90%' : '187px',
  height: isMobile ? '200px' : '307px',
  backgroundColor: 'rgba(200, 180, 250, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const LeaderboardContainer = styled('div')<{ isMobile?: boolean }>(({ isMobile }) => ({
  position: isMobile ? 'relative' : 'absolute',
  top: isMobile ? '510px' : '217px',
  left: isMobile ? '50%' : '912px',
  transform: isMobile ? 'translateX(-50%)' : 'none',
  width: isMobile ? '90%' : '498px',
  height: isMobile ? '250px' : '361px',
  borderRadius: '12px',
  backgroundColor: 'rgba(253, 255, 255, 0.91)',
  padding: isMobile ? '16px' : '0px',
  boxSizing: 'border-box',
  overflow: 'hidden',
}));

export const MobileMenuButton = styled(IconButton)<{ isMobile: boolean }>(({ isMobile }) => ({
  position: 'absolute',
  top: isMobile ? 50 : 101,
  right: isMobile ? 10 : undefined,
  zIndex: 10,
}));

export const MobileDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: '250px',
    padding: '20px',
  },
}));
