import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Typography, Tabs, Tab, Box, Chip, Button, Skeleton, Stack, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

import { MOCK_CONTESTS, STATS_CONFIG, SKELETON_COUNT } from './ContestPage.constants';
import { useContestPage } from './ContestPage.hook';
import * as S from './ContestPage.styles';
import {
  getStatusChipColor,
  getDifficultyColor,
  getStatusLabel,
  formatParticipants,
  formatDate,
  a11yProps,
} from './ContestPage.utils';

import type { Contest, ContestPageProps } from './ContestPage.types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`contest-tabpanel-${index}`}
      aria-labelledby={`contest-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const ContestCard = ({ contest }: { contest: Contest }) => {
  return (
    <S.StyledContestCard>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label={getStatusLabel(contest.status)}
            color={getStatusChipColor(contest.status)}
            size="small"
            sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
          />
          {contest.hasPrizePool && (
            <Chip
              icon={<EmojiEventsOutlinedIcon fontSize="small" />}
              label="Prize Pool"
              size="small"
              color="warning"
              variant="outlined"
              sx={{ fontWeight: 'bold' }}
            />
          )}
        </Stack>
        <Typography
          variant="caption"
          fontWeight="bold"
          sx={{ color: getDifficultyColor(contest.difficulty) }}
        >
          {contest.difficulty}
        </Typography>
      </Box>

      <Typography
        variant="subtitle1"
        fontWeight="bold"
        color="text.primary"
        sx={{ lineHeight: 1.4, mt: 0.5 }}
      >
        {contest.title}
      </Typography>

      <Stack spacing={1} sx={{ color: 'text.secondary', mt: 1 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <CalendarMonthOutlinedIcon fontSize="small" sx={{ color: 'action.active' }} />
          <Typography variant="caption">{formatDate(contest.startTime)}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <AccessTimeIcon fontSize="small" sx={{ color: 'action.active' }} />
          <Typography variant="caption">{contest.duration}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <GroupsOutlinedIcon fontSize="small" sx={{ color: 'action.active' }} />
          <Typography variant="caption">
            {formatParticipants(contest.participants)} participants
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <AssignmentOutlinedIcon fontSize="small" sx={{ color: 'action.active' }} />
          <Typography variant="caption">{contest.problemCount} Problems</Typography>
        </Box>
      </Stack>

      <Box mt="auto" pt={1.5}>
        {contest.status === 'active' && (
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
            Join Contest
          </Button>
        )}
        {contest.status === 'upcoming' && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
            Register
          </Button>
        )}
        {contest.status === 'past' && (
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              size="small"
              fullWidth
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              Problems
            </Button>
            <Button
              variant="outlined"
              size="small"
              fullWidth
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              Leaderboard
            </Button>
          </Stack>
        )}
      </Box>
    </S.StyledContestCard>
  );
};

export const ContestPage = ({
  initialContests = MOCK_CONTESTS,
  loading: forceLoading = false,
}: ContestPageProps) => {
  const { tabValue, handleTabChange, filteredContests, loading } = useContestPage(
    initialContests,
    forceLoading
  );

  const renderStatsIcon = (icon: string, color: string) => {
    const iconColor = color as 'success' | 'primary' | 'secondary' | 'action';
    switch (icon) {
      case 'live':
        return <EmojiEventsOutlinedIcon color={iconColor} />;
      case 'calendar':
        return <CalendarMonthOutlinedIcon color={iconColor} />;
      case 'ranking':
        return <TrendingUpIcon color={iconColor} />;
      default:
        return <GroupsOutlinedIcon color={iconColor} />;
    }
  };

  return (
    <S.PageContainer>
      <Box mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
          Contests
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Compete with developers around the world
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {STATS_CONFIG.map((stat) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.id}>
            <S.StatsCard elevation={0}>
              <Box className="icon-container">{renderStatsIcon(stat.icon, stat.color)}</Box>
              <Box>
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                  {stat.count}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </S.StatsCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 5, mb: 1 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="programming contests tabs">
          <Tab
            label="Live Now"
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
            {...a11yProps(0)}
          />
          <Tab
            label="Upcoming"
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
            {...a11yProps(1)}
          />
          <Tab label="Past" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={tabValue} index={tabValue}>
        <Grid container spacing={3}>
          {loading ? (
            Array.from(new Array(SKELETON_COUNT)).map((_, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`skeleton-${index}`}>
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    p: 3,
                    borderRadius: (theme) => theme.shape.borderRadius,
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Skeleton variant="text" width="40%" height={24} />
                  <Skeleton variant="rectangular" height={120} sx={{ my: 2, borderRadius: 1 }} />
                  <Skeleton variant="text" width="80%" />
                </Box>
              </Grid>
            ))
          ) : filteredContests.length === 0 ? (
            <Grid size={12}>
              <Paper
                elevation={0}
                role="region"
                aria-live="polite"
                aria-label="No contests available message"
                sx={{
                  p: 5,
                  textAlign: 'center',
                  color: 'text.secondary',
                  bgcolor: 'background.paper',
                  borderRadius: (theme) => theme.shape.borderRadius,
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <EmojiEventsOutlinedIcon sx={{ fontSize: 40, color: 'text.disabled', mb: 2 }} />
                <Typography variant="h6" fontWeight="medium" color="text.primary" gutterBottom>
                  No contests available
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  There are currently no contests listed under this section.
                </Typography>
              </Paper>
            </Grid>
          ) : (
            filteredContests.map((contest) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={contest.id}>
                <ContestCard contest={contest} />
              </Grid>
            ))
          )}
        </Grid>
      </CustomTabPanel>
    </S.PageContainer>
  );
};

export default ContestPage;
