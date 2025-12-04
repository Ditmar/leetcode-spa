import { ThemeProvider, useMediaQuery, Stack, Box } from '@mui/material';
import React from 'react';

import { AvatarMenu } from '../../components/AvatarMenu/AvatarMenu';
import { LeaderboardPage } from '../../components/LeaderboardPage/LeaderboardPage';
import { Logo } from '../../components/Logo/Logo';
import { StatsCard } from '../../components/StatsCard/StatsCard';
import { TestCard } from '../../components/TestCard/TestCard';
import { theme } from '../../style-library';

import {
  DashboardBackground,
  NoiseLayer,
  MaskLayer,
  Line15,
  Frame71Placeholder,
  Group59Container,
  WelcomeMessage,
  ProfileSubtitle,
  Group53Placeholder,
  Group49Placeholder,
  HiconContainer,
  RecentTestsText,
  Right3Icon,
  Right2Icon,
  Frame61Placeholder,
  LeaderboardContainer,
  ResponsiveContainer,
} from './DashboardPage.styles';

const DashboardPage: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <DashboardBackground>
      <NoiseLayer src="/image.png" alt="noise texture" />
      <MaskLayer />
      <Line15 />

      <ResponsiveContainer isMobile={isMobile}>
        {/* Logo */}
        <Box mb={3} className="logo">
          <Logo orientation="vertical" width={192} height={88} />
        </Box>

        <Frame71Placeholder>{/* Componente adicional si quieres */}</Frame71Placeholder>

        {/* Welcome y Avatar */}
        <Group59Container>
          <WelcomeMessage>Welcome Miguel!</WelcomeMessage>
          <Group53Placeholder>{/* Componente adicional */}</Group53Placeholder>
          <Group49Placeholder>{/* Componente adicional */}</Group49Placeholder>
          <div className="avatar">
            <AvatarMenu
              avatarUrl="https://i.ibb.co/mV26g4B7/b2cc1d5a59644f92c2391dcdd5cde3c11e4770fe.jpg"
              username="Miguel Maquera"
              menuItems={[
                { label: 'Profile', onClick: () => {} },
                { label: 'Log Out', onClick: () => {} },
              ]}
            />
          </div>
        </Group59Container>

        <ProfileSubtitle>Here is your Profile Dashboard</ProfileSubtitle>

        <HiconContainer>{/* Componente adicional */}</HiconContainer>

        {/* Recent Tests */}
        <RecentTestsText>Recent Tests</RecentTestsText>
        <Box sx={{ overflowX: 'auto' }}>
          <Stack direction="row" spacing={2} sx={{ pb: 2 }}>
            <TestCard
              title="C Programing"
              description="Resumen"
              logo="https://i.postimg.cc/hvF0fprz/Frame-66.png"
              onSelect={() => {}}
            />
            <TestCard
              title="Python Programing"
              description="Resumen"
              logo="https://i.postimg.cc/RZTp25TL/95454cf4b64dabec0eeee53306359326ebee8e6c.jpg"
              onSelect={() => {}}
            />
            {/* Más TestCards si quieres */}
          </Stack>
        </Box>

        <Right3Icon>{/* Componente adicional */}</Right3Icon>
        <Right2Icon>{/* Componente adicional */}</Right2Icon>

        {/* StatsCards responsive */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
          <Box>
            <StatsCard value="32" label="Tests Written" />
          </Box>
          <Box>
            <StatsCard value="%80" label="Overall Average" />
          </Box>
        </Stack>

        <Frame61Placeholder>{/* Componente adicional */}</Frame61Placeholder>

        {/* Leaderboard */}
        <LeaderboardContainer>
          <ThemeProvider theme={theme}>
            <LeaderboardPage />
          </ThemeProvider>
        </LeaderboardContainer>
      </ResponsiveContainer>
    </DashboardBackground>
  );
};

export default DashboardPage;
