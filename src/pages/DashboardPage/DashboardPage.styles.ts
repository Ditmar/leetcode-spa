import { styled } from '@mui/material/styles';

export const DashboardBackground = styled('div')(() => ({
  width: '100%',
  minHeight: '140vh',
  position: 'relative',
  overflow: 'auto',
  backgroundColor: '#F5F5F5',
  backgroundImage: `
        radial-gradient(30% 50% at 100% 100%, #9949FF 0%, rgba(255,81,217,0) 100%),
        radial-gradient(59% 99% at 0% 0%, #C2F9F9 0%, rgba(83,214,255,0) 100%),
        radial-gradient(34% 51% at 55% 90%, #8CBCFE 0%, rgba(221,130,255,0) 100%),
        radial-gradient(27% 41% at 78% 30%, #F5FF7F 0%, rgba(48,83,118,0) 100%)
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
    top: isMobile ? '0' : '84px',
    left: isMobile ? '0' : '71px',
    marginBottom: isMobile ? '20px' : '0',
  },
  '.avatar': {
    position: isMobile ? 'relative' : 'absolute',
    top: isMobile ? '0' : '101px',
    left: isMobile ? '0' : '1341px',
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

export const Line15 = styled('div')(() => ({
  position: 'absolute',
  top: '10px',
  left: '328px',
  width: '1px',
  height: '982px',
  backgroundColor: 'rgba(194,194,194,1)',
}));

// Faltan componentes / placeholders
export const Frame71Placeholder = styled('div')(() => ({
  position: 'absolute',
  top: '237px',
  left: '96px',
  width: '163px',
  height: '616px',
  backgroundColor: 'rgba(180, 180, 250, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Group59Container = styled('div')(() => ({
  width: '979px',
  height: '85px',
  position: 'relative',
}));

export const WelcomeMessage = styled('div')(() => ({
  position: 'absolute',
  top: '82px',
  left: '433px',
  fontSize: '35px',
  fontWeight: 700,
}));

export const Group53Placeholder = styled('div')(() => ({
  position: 'absolute',
  top: '91px',
  left: '929px',
  width: '324px',
  height: '67px',
  backgroundColor: 'rgba(200,180,250,0.3)',
}));

export const Group49Placeholder = styled('div')(() => ({
  position: 'absolute',
  top: '111px',
  left: '1285px',
  width: '24px',
  height: '25px',
  backgroundColor: 'rgba(200,200,200,0.4)',
}));

export const ProfileSubtitle = styled('div')(() => ({
  position: 'absolute',
  top: '145px',
  left: '441px',
  fontSize: '18px',
}));

export const HiconContainer = styled('div')(() => ({
  position: 'absolute',
  top: '240px',
  left: '433px',
  width: '24px',
  height: '24px',
}));

export const RecentTestsText = styled('div')(() => ({
  position: 'absolute',
  top: '240px',
  left: '473px',
  fontSize: '20px',
  fontWeight: 700,
}));

export const Right3Icon = styled('div')(() => ({
  position: 'absolute',
  top: '240px',
  left: '793px',
}));

export const Right2Icon = styled('div')(() => ({
  position: 'absolute',
  top: '240px',
  left: '833px',
  borderRadius: '7px',
}));

export const Frame66Container = styled('div')(() => ({
  position: 'absolute',
  top: '290px',
  left: '433px',
  display: 'flex',
  gap: '20px',
}));

export const Frame39Placeholder = styled('div')(() => ({
  position: 'absolute',
  top: '606px',
  left: '435px',
  width: '422px',
  height: '307px',
  backgroundColor: 'rgba(200,180,250,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Frame38Placeholder = styled('div')(() => ({
  position: 'absolute',
  top: '606px',
  left: '914px',
  width: '296px',
  height: '158px',
  display: 'flex',
}));

export const Frame37Placeholder = styled('div')(() => ({
  position: 'absolute',
  top: '779px',
  left: '914px',
  width: '296px',
  height: '134px',
  display: 'flex',
}));

export const Frame61Placeholder = styled('div')(() => ({
  position: 'absolute',
  top: '606px',
  left: '1224px',
  width: '187px',
  height: '307px',
  backgroundColor: 'rgba(200, 180, 250, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const LeaderboardContainer = styled('div')(() => ({
  position: 'absolute',
  top: '217px',
  left: '912px',
  width: '498px',
  height: '358px',
  borderRadius: '12px',
  backgroundColor: 'rgba(200, 200, 250, 0.3)',
}));
