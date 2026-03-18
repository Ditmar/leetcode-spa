import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import { AvatarMenu } from '../../component-catalog/AvatarMenu/AvatarMenu';
import { DEFAULT_AVATAR_MENU_ITEMS } from '../../component-catalog/AvatarMenu/AvatarMenu.constants';
import { CountdownTimer } from '../../component-catalog/CountdownTimer/CountdownTimer';
import { FilterPanel } from '../../component-catalog/FilterPanel/FilterPanel';
import { Logo } from '../../component-catalog/Logo/Logo';
import { ProfileCard } from '../../component-catalog/ProfileCard/ProfileCard';
import { SearchBar } from '../../component-catalog/SearchBar/SearchBar';
import { SectionNav } from '../../component-catalog/SectionNav/SectionNav';
import { StatsCard } from '../../component-catalog/StatsCard/StatsCard';
import { StatsPanel } from '../../component-catalog/StatsPanel/StatsPanel';
import { TestCard } from '../../component-catalog/TestCard/TestCard';
import { UpcomingQuizCard } from '../../component-catalog/UpcomingQuizCard/UpcomingQuizCard';
import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

type FilterValue = 'all' | 'easy' | 'medium' | 'hard';

const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'tests', label: 'Practice Tests' },
  { id: 'upcoming', label: 'Upcoming' },
];

const FILTER_OPTIONS = [
  { label: 'All', value: 'all' as FilterValue },
  { label: 'Easy', value: 'easy' as FilterValue },
  { label: 'Medium', value: 'medium' as FilterValue },
  { label: 'Hard', value: 'hard' as FilterValue },
];

const SAMPLE_TESTS = [
  { title: 'Arrays & Hashing', description: 'Master fundamental array operations and hash maps.' },
  { title: 'Two Pointers', description: 'Efficient solutions using the two-pointer technique.' },
  { title: 'Binary Search', description: 'Divide-and-conquer search on sorted data.' },
  { title: 'Sliding Window', description: 'Optimise subarray/substring problems in O(n).' },
];

const MENU_ITEMS = DEFAULT_AVATAR_MENU_ITEMS.map((item) => {
  const icons: Record<string, React.ReactNode> = {
    profile: <AccountCircleIcon fontSize="small" />,
    settings: <SettingsIcon fontSize="small" />,
    logout: <LogoutIcon fontSize="small" />,
  };
  return { ...item, icon: item.icon ?? icons[item.key as string] };
});

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  return (
    <ClientOnlyMuiProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Sidebar */}
        <Box
          component="aside"
          sx={{
            width: 240,
            flexShrink: 0,
            borderRight: '1px solid',
            borderColor: 'divider',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            pt: 3,
            pb: 2,
            gap: 3,
          }}
        >
          <Logo orientation="vertical" width={120} height={56} />
          <SectionNav
            sections={NAV_SECTIONS}
            activeSectionId={activeSection}
            onSelect={setActiveSection}
            title="Navigation"
          />
        </Box>

        {/* Main */}
        <Box component="main" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Top bar */}
          <Box
            component="header"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              px: 3,
              py: 1.5,
              borderBottom: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <SearchBar placeholder="Search testsâ€¦" />
            </Box>
            <CountdownTimer seconds={1800} />
            <AvatarMenu
              avatarUrl="https://i.ibb.co/mV26g4B7/b2cc1d5a59644f92c2391dcdd5cde3c11e4770fe.jpg"
              username="Jane Doe"
              menuItems={MENU_ITEMS}
              data-testid="header-avatar-menu"
            />
          </Box>

          {/* Body */}
          <Box sx={{ flex: 1, p: { xs: 2, md: 3 }, overflow: 'auto' }}>
            <Stack spacing={4}>
              {/* Overview */}
              <section id="overview">
                <Typography variant="h6" fontWeight={700} mb={2}>
                  Overview
                </Typography>
                <Grid container spacing={3} alignItems="flex-start">
                  <Grid size={{ xs: 12, lg: 5 }}>
                    <ProfileCard
                      name="Jane Doe"
                      username="@janedoe"
                      role="Software Engineer"
                      avatarUrl="https://i.ibb.co/mV26g4B7/b2cc1d5a59644f92c2391dcdd5cde3c11e4770fe.jpg"
                      stats={{ courses: 12, points: 4320, ranking: 7 }}
                      variant="expanded"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, lg: 7 }}>
                    <Stack spacing={2}>
                      <StatsPanel totalTests={48} passed={36} failed={8} waiting={4} />
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 6 }}>
                          <StatsCard value="36" label="Tests Passed" />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <StatsCard value="75%" label="Average Score" />
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
              </section>

              {/* Practice Tests */}
              <section id="tests">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Practice Tests
                  </Typography>
                  <FilterPanel
                    filters={FILTER_OPTIONS}
                    selectedValue={activeFilter}
                    onSelect={(v) => setActiveFilter(v as FilterValue)}
                    size="medium"
                  />
                </Box>
                <Grid container spacing={2}>
                  {SAMPLE_TESTS.map((test) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={test.title}>
                      <TestCard
                        title={test.title}
                        description={test.description}
                        logo={<Logo orientation="horizontal" width={80} height={36} />}
                        orientation="vertical"
                        onSelect={() => {}}
                      />
                    </Grid>
                  ))}
                </Grid>
              </section>

              {/* Upcoming */}
              <section id="upcoming">
                <Typography variant="h6" fontWeight={700} mb={2}>
                  Upcoming Quizzes
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <UpcomingQuizCard
                      title="Weekly Challenge #12"
                      date={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)}
                      description="Top 100 LeetCode problems in 90 minutes."
                      onRegister={() => {}}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <UpcomingQuizCard
                      title="Algorithms Bootcamp"
                      date={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
                      description="Dynamic programming from zero to hero."
                      onRegister={() => {}}
                    />
                  </Grid>
                </Grid>
              </section>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ClientOnlyMuiProvider>
  );
}
