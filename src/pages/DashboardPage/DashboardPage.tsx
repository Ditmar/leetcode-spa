import { ThemeProvider, useMediaQuery, Box } from '@mui/material';
import React, { useState } from 'react';

import busonSvg from '../../assets/buson.svg?url';
import menuIcon from '../../assets/butons.png?url';
import derecha from '../../assets/derecha.png?url';
import Group49Img from '../../assets/Group49.png?url';
import izquierda from '../../assets/izquierda.png?url';
import { AvatarMenu } from '../../components/AvatarMenu/AvatarMenu';
import { DonutProgress } from '../../components/DonutProgress/DonutProgress';
import { LeaderboardPage } from '../../components/LeaderboardPage/LeaderboardPage';
import { Logo } from '../../components/Logo/Logo';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { StatsCard } from '../../components/StatsCard/StatsCard';
import { TestCard } from '../../components/TestCard/TestCard';
import { UpcomingQuizCard } from '../../components/UpcomingQuizCard/UpcomingQuizCard';
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
  Frame66Container,
  Frame39Placeholder,
  LeaderboardContainer,
  ResponsiveContainer,
  MobileMenuButton,
  MobileDrawer,
  Group13,
  AvatarContainer,
  Group16,
  NotificationText,
  DonutsWrapper,
  StatsColumn,
} from './DashboardPage.styles';

const DashboardPage: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  //de prueba
  const navigationItems = [
    { label: 'Tests', href: '/all-tests' },
    { label: 'Dashboard' },
    { label: 'Courses' },
    { label: 'Profile' },
    { label: 'Leaderboard' },
    { label: 'Dark Mode' },
    { label: 'Settings' },
    { label: 'Log Out' },
  ];

  const renderNavigationLinks = (isMobileView: boolean) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '100%',
        padding: 2,
      }}
    >
      {navigationItems.map((item) => (
        <a
          key={item.label}
          href={item.href || '#'}
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            color: '#000',
            fontWeight: 'bold',
            fontSize: isMobileView ? 16 : 20,
            width: '100%',
            textAlign: 'center',
            padding: '8px 0',
            borderRadius: '8px',
            backgroundColor: '#C2F9F9',
          }}
        >
          {item.label}
        </a>
      ))}
    </Box>
  );

  return (
    <DashboardBackground>
      <NoiseLayer src="/image.png" alt="noise texture" />
      <MaskLayer />
      <Line15 />

      <ResponsiveContainer isMobile={isMobile}>
        <Box mb={3} className="logo">
          <Logo orientation="vertical" width={isMobile ? 71 : 192} height={isMobile ? 56 : 88} />
        </Box>

        {!isMobile && (
          <Frame71Placeholder isMobile={isMobile}>
            {renderNavigationLinks(false)}
          </Frame71Placeholder>
        )}

        {isMobile && (
          <MobileMenuButton
            isMobile={isMobile}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Dashboard Navigation"
          >
            <img src={menuIcon} alt="Menu" width={36} height={36} />
          </MobileMenuButton>
        )}

        {isMobile && (
          <MobileDrawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box p={2}>
              <h3>Dashboard Navigation</h3>
              {renderNavigationLinks(true)}
              <button onClick={() => setDrawerOpen(false)}>Close Menu</button>
            </Box>
          </MobileDrawer>
        )}

        <Group59Container>
          <Group13 isMobile={isMobile}>
            <WelcomeMessage>Welcome Miguel!</WelcomeMessage>
            <ProfileSubtitle>Here is your Profile Dashboard</ProfileSubtitle>
          </Group13>

          {!isMobile && (
            <Box position="relative">
              <Group49Placeholder
                src={Group49Img}
                alt="notification"
                onClick={() => setNotificationOpen((prev) => !prev)}
                style={{ cursor: 'pointer' }}
              />
              {notificationOpen && (
                <Group16>
                  <NotificationText>You have 12 new action items!</NotificationText>
                </Group16>
              )}
            </Box>
          )}

          <Group53Placeholder isMobile={isMobile}>
            <SearchBar placeholder="Search..." debounceDelay={300} autoSearch />
          </Group53Placeholder>

          <AvatarContainer isMobile={isMobile}>
            <AvatarMenu
              avatarUrl="https://i.ibb.co/mV26g4B7/b2cc1d5a59644f92c2391dcdd5cde3c11e4770fe.jpg"
              username="Miguel Maquera"
              menuItems={[
                { label: 'Profile', onClick: () => (window.location.href = '/profile') },
                { label: 'Log Out', onClick: () => (window.location.href = '/login') },
              ]}
            />
          </AvatarContainer>
        </Group59Container>

        <HiconContainer>
          <img src={busonSvg} alt="icon" width={24} height={24} />
        </HiconContainer>

        <RecentTestsText>Recent Tests</RecentTestsText>
        <Right2Icon src={derecha} $isMobile={isMobile} alt="Next Test" />
        <Right3Icon src={izquierda} $isMobile={isMobile} alt="Previous Test" />

        <Frame66Container isMobile={isMobile}>
          <TestCard
            title="C Programing"
            description="Resumen"
            logo="https://i.postimg.cc/hvF0fprz/Frame-66.png"
            onSelect={() => (window.location.href = 'gg')}
          />
          <TestCard
            title="Python Programing"
            description="Resumen"
            logo="https://i.postimg.cc/RZTp25TL/95454cf4b64dabec0eeee53306359326ebee8e6c.jpg"
            onSelect={() => (window.location.href = 'gg')}
          />
        </Frame66Container>

        <DonutsWrapper isMobile={isMobile}>
          <DonutProgress percentage={75} size={40} strokeWidth={4} />
          <DonutProgress percentage={45} size={40} strokeWidth={4} />
        </DonutsWrapper>

        <Frame39Placeholder isMobile={isMobile}>
          <UpcomingQuizCard
            title="Next Quiz: Math"
            date={new Date('2025-12-15')}
            description="Prepare for the upcoming quiz in math!"
            onRegister={() => {}}
          />
        </Frame39Placeholder>

        <StatsColumn isMobile={isMobile}>
          <StatsCard value="32" label="Tests Written" />
          <StatsCard value="%80" label="Overall Average" />
        </StatsColumn>

        <LeaderboardContainer $isMobile={isMobile}>
          <ThemeProvider theme={theme}>
            <LeaderboardPage />
          </ThemeProvider>
        </LeaderboardContainer>

        <Frame61Placeholder />
      </ResponsiveContainer>
    </DashboardBackground>
  );
};

export default DashboardPage;
