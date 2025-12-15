import { Box, ThemeProvider, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';

import busonSvg from '../../assets/buson.svg?url';
import menuIcon from '../../assets/butons.png?url';
import derecha from '../../assets/derecha.png?url';
import Frame66Logo from '../../assets/Framee 66.png?url';
import Group49Img from '../../assets/Group49.png?url';
import izquierda from '../../assets/izquierda.png?url';
import Rectangle22Logo from '../../assets/Rectangle 22.png?url';
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
  AvatarContainer,
  DashboardBackground,
  DonutsWrapper,
  Frame39Placeholder,
  Frame66Container,
  Frame71Placeholder,
  Group13,
  Group16,
  Group49Placeholder,
  Group53Placeholder,
  Group59Container,
  HiconContainer,
  LeaderboardContainer,
  Line15,
  MaskLayer,
  MobileDrawer,
  MobileMenuButton,
  RecentTestsText,
  ResponsiveContainer,
  Right2Icon,
  Right3Icon,
  StatsColumn,
  WelcomeMessage,
  ProfileSubtitle,
  NotificationText,
  NoiseLayer,
} from './DashboardPage.styles';

import type { DashboardProps } from './DashboardPage.types';

const DashboardPage: React.FC<{ currentUser?: DashboardProps['currentUser'] }> = ({
  currentUser,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleNavigate = (path: string) => {
    window.location.assign(path);
  };

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
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 2,
        width: '100%',
      }}
    >
      {navigationItems.map((item) => (
        <Box
          key={item.label}
          component="a"
          href={item.href || '#'}
          sx={{
            backgroundColor: '#C2F9F9',
            borderRadius: 2,
            color: '#000',
            cursor: 'pointer',
            fontSize: isMobileView ? 16 : 20,
            fontWeight: 'bold',
            py: 1,
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
          }}
        >
          {item.label}
        </Box>
      ))}
    </Box>
  );

  return (
    <DashboardBackground>
      <NoiseLayer />
      <MaskLayer />
      <Line15 />

      <ResponsiveContainer>
        <Box mb={3} className="logo">
          <Logo height={isMobile ? 56 : 88} orientation="vertical" width={isMobile ? 71 : 192} />
        </Box>

        {!isMobile && <Frame71Placeholder>{renderNavigationLinks(false)}</Frame71Placeholder>}

        {isMobile && (
          <MobileMenuButton
            onClick={() => setDrawerOpen(true)}
            aria-label="Open dashboard navigation"
          >
            <img src={menuIcon} alt="Open menu" height={36} width={36} />
          </MobileMenuButton>
        )}

        {isMobile && (
          <MobileDrawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box p={2}>
              <h3>Dashboard Navigation</h3>
              {renderNavigationLinks(true)}
            </Box>
          </MobileDrawer>
        )}

        <Group59Container>
          <Group13>
            <WelcomeMessage>Welcome {currentUser?.fullName ?? 'Guest'}!</WelcomeMessage>
            <ProfileSubtitle>Here is your Profile Dashboard</ProfileSubtitle>
          </Group13>

          <Box position="relative">
            <Group49Placeholder
              alt="Notifications"
              aria-label="Toggle notifications"
              onClick={() => setNotificationOpen((prev) => !prev)}
              role="button"
              src={Group49Img}
              tabIndex={0}
            />
            {notificationOpen && (
              <Group16>
                <NotificationText>You have 12 new action items!</NotificationText>
              </Group16>
            )}
          </Box>

          <Group53Placeholder>
            <SearchBar placeholder="Search..." autoSearch debounceDelay={300} />
          </Group53Placeholder>

          <AvatarContainer>
            <AvatarMenu
              avatarUrl={currentUser?.avatarUrl ?? ''}
              menuItems={[
                { label: 'Profile', onClick: () => handleNavigate('/profile') },
                { label: 'Log Out', onClick: () => handleNavigate('/login') },
              ]}
              username={currentUser?.fullName ?? 'Guest'}
            />
          </AvatarContainer>
        </Group59Container>

        <HiconContainer>
          <img alt="" aria-hidden="true" src={busonSvg} />
        </HiconContainer>

        <RecentTestsText>Recent Tests</RecentTestsText>
        <Right2Icon alt="Next test" src={derecha} />
        <Right3Icon alt="Previous test" src={izquierda} />

        <Frame66Container>
          <TestCard
            description="Resumen"
            logo={Frame66Logo}
            onSelect={() => handleNavigate('gg')}
            title="C Programming"
          />
          <TestCard
            description="Resumen"
            logo={Rectangle22Logo}
            onSelect={() => handleNavigate('gg')}
            title="Python Programming"
          />
        </Frame66Container>

        <DonutsWrapper>
          <DonutProgress percentage={75} size={40} strokeWidth={4} />
          <DonutProgress percentage={45} size={40} strokeWidth={4} />
        </DonutsWrapper>

        <Frame39Placeholder>
          <UpcomingQuizCard
            date={new Date('2025-12-15')}
            description="Prepare for the upcoming quiz in math!"
            onRegister={() => handleNavigate('/upcoming-contest/1')}
            title="Next Quiz: Math"
          />
        </Frame39Placeholder>

        <StatsColumn>
          <StatsCard label="Tests Written" value="32" />
          <StatsCard label="Overall Average" value="%80" />
        </StatsColumn>

        <LeaderboardContainer>
          <ThemeProvider theme={theme}>
            <LeaderboardPage />
          </ThemeProvider>

          <Box mt={2} textAlign="center">
            <Box
              component="a"
              href="/leaderboard"
              sx={{
                color: '#7544FF',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              View Full Leaderboard
            </Box>
          </Box>
        </LeaderboardContainer>
      </ResponsiveContainer>
    </DashboardBackground>
  );
};

export default DashboardPage;
