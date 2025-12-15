import { Drawer, IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { dashboardBackgroundImage } from './DashboardPage.constants';

export const DashboardBackground = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'auto',
  backgroundColor: '#F5F5F5',
  backgroundImage: dashboardBackgroundImage,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  zIndex: 0,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    padding: '0 5%',
    minHeight: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  },
}));

export const ResponsiveContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  padding: '0',
  [theme.breakpoints.down('sm')]: { padding: '10px' },
  '.logo': {
    position: 'absolute',
    top: '84px',
    left: '71px',
    width: '192px',
    height: '88px',
    marginBottom: '0',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: '32px',
      left: '24px',
      width: '71px',
      height: '56px',
      marginBottom: '20px',
    },
  },
  '.avatar': {
    position: 'absolute',
    top: '101px',
    left: '1341px',
    transform: 'none',
    marginBottom: '0',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '20px',
    },
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
  [theme.breakpoints.down('sm')]: { display: 'none' },
}));

export const Frame71Placeholder = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '237px',
  left: '96px',
  transform: 'none',
  width: '163px',
  height: '616px',
  backgroundColor: 'rgba(180, 180, 250, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    top: '180px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
}));
export const Group59Container = styled('div')(({ theme }) => ({
  width: '979px',
  height: '85px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  zIndex: 2,
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: 'auto',
    margin: '20px auto 0 auto',
  },
}));

export const Group13 = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '92px',
  left: '433px',
  width: '366px',
  height: '85px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    top: '29px',
    left: '20px',
    width: '342px',
    height: '78.87px',
  },
}));

export const WelcomeMessage = styled('div')(({ theme }) => ({
  fontFamily: 'Syne, sans-serif',
  fontWeight: 700,
  fontSize: '35px',
  lineHeight: '100%',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: { textAlign: 'center' },
}));

export const ProfileSubtitle = styled('div')(({ theme }) => ({
  fontFamily: 'Syne, sans-serif',
  fontSize: '18px',
  fontWeight: 400,
  color: 'rgba(13,13,13,0.5)',
  marginTop: '4px',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    textAlign: 'center',
  },
}));

export const Group53Placeholder = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '110px',
  left: '929px',
  width: '324px',
  height: '67px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 12px',
  borderRadius: '12px',
  boxSizing: 'border-box',
  '& > *': { flex: 1 },
  [theme.breakpoints.down('sm')]: {
    top: '131.87px',
    left: '0px',
    width: '342px',
    height: '67px',
  },
}));

export const Group49Placeholder = styled('img')(() => ({
  position: 'absolute',
  width: '24px',
  height: '25px',
  top: '90px',
  left: '1285px',
  zIndex: 5,
}));

export const Group16 = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '211px',
  height: '31px',
  top: '109px',
  left: '1077px',
  borderRadius: '8px',
  background: 'rgba(116, 121, 255, 1)',
  boxShadow: '0px 4px 4px rgba(0,0,0,0.05), 0px 0px 2px rgba(0,0,0,0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    top: '180px',
    left: '24px',
  },
}));

export const NotificationText = styled('div')(() => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  fontSize: '12px',
  color: 'white',
  textAlign: 'center',
}));

export const AvatarContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '120px',
  left: '1341px',
  right: 'auto',
  width: '71px',
  height: '46px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    left: 'auto',
    right: '10px',
    width: '45px',
    height: '40px',
    display: 'none',
  },
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
export const Right2Icon = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: '250px',
  left: '833px',
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    top: '310px',
    left: '90%',
  },
}));

export const Right3Icon = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: '250px',
  left: '793px',
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    top: '310px',
    left: '80%',
  },
}));

export const Frame66Container = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '290px',
  left: '433px',
  transform: 'none',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  width: 'auto',
  overflowX: 'visible',
  paddingBottom: '0',
  [theme.breakpoints.down('sm')]: {
    top: '350px',
    left: '55%',
    transform: 'translateX(-50%)',
    width: '90%',
    overflowX: 'auto',
    paddingBottom: '10px',
  },
}));

export const Frame39Placeholder = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '606px',
  left: '435px',
  width: '422px',
  height: '307px',
  backgroundColor: 'rgba(200,180,250,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    top: '1280px',
    left: '5%',
    width: '90%',
    height: '200px',
  },
}));

export const StatsColumn = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '606px',
  left: '914px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: 'auto',
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    top: '850px',
    left: 'auto',
    width: '90%',
    margin: '20px auto',
  },
}));

export const DonutsWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '517px',
  left: '570px',
  transform: 'none',
  display: 'flex',
  flexDirection: 'row',
  gap: '190px',
  width: 'auto',
  overflowX: 'visible',
  zIndex: theme.zIndex.appBar,
  [theme.breakpoints.down('sm')]: {
    top: '580px',
    left: '81%',
    transform: 'translateX(-50%)',
    gap: '180px',
    width: '90%',
    overflowX: 'auto',
  },
}));

export const RightColumnContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '590px',
  left: '914px',
  transform: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0px',
  width: '296px',
  [theme.breakpoints.down('sm')]: {
    top: '580px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
  },
}));

export const Frame61Placeholder = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '606px',
  left: '1224px',
  width: '187px',
  height: '307px',
  backgroundColor: 'rgba(200, 180, 250, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    top: '820px',
    left: '5%',
    width: '90%',
    height: '200px',
  },
}));

export const LeaderboardContainer = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  height: 380,
  justifyContent: 'center',
  marginLeft: 900,
  marginTop: 132,
  overflow: 'hidden',
  padding: 16,
  position: 'relative',
  width: 520,

  [theme.breakpoints.down('sm')]: {
    height: 255,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 330,
    width: '110%',
  },
}));

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 101,
  zIndex: 10,
  [theme.breakpoints.down('sm')]: {
    top: 50,
    right: 10,
  },
}));

export const MobileDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: '250px',
    padding: '20px',
  },
}));
