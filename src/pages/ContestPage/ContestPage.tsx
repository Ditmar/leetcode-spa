import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Box,
  Chip,
  Button,
  Skeleton,
  Stack,
  Paper,
} from '@mui/material';
import React from 'react';

import { MOCK_CONTESTS } from './ContestPage.constants';
import { useContestPage } from './ContestPage.hook';
import * as S from './ContestPage.styles';
import { getStatusChipColor, getDifficultyColor } from './ContestPage.utils';

import type { Contest } from './ContestPage.types';

const ContestCard = ({ contest }: { contest: Contest }) => {
  return (
    <S.StyledContestCard>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1}>
          <Chip
            label={
              contest.status === 'active'
                ? 'Live Now'
                : contest.status === 'upcoming'
                  ? 'Upcoming'
                  : 'Past'
            }
            color={getStatusChipColor(contest.status)}
            size="small"
            sx={{
              fontWeight: 'bold',
              fontSize: '0.65rem',
              height: '20px',
              textTransform: 'uppercase',
            }}
          />
        </Stack>
        <Typography
          variant="caption"
          fontWeight="bold"
          sx={{ color: getDifficultyColor(contest.difficulty), fontSize: '0.75rem' }}
        >
          {contest.difficulty}
        </Typography>
      </Box>

      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ lineHeight: 1.4, mt: 0.5, color: '#1a1a1a' }}
      >
        {contest.title}
      </Typography>

      <Stack spacing={1} sx={{ color: 'text.secondary', mt: 1 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <CalendarMonthOutlinedIcon sx={{ fontSize: '16px', color: '#868e96' }} />
          <Typography variant="caption" sx={{ color: '#495057' }}>
            {contest.startTime}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <AccessTimeIcon sx={{ fontSize: '16px', color: '#868e96' }} />
          <Typography variant="caption" sx={{ color: '#495057' }}>
            {contest.duration}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <GroupsOutlinedIcon sx={{ fontSize: '16px', color: '#868e96' }} />
          <Typography variant="caption" sx={{ color: '#495057' }}>
            {contest.participants.toLocaleString()} participants
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <AssignmentOutlinedIcon sx={{ fontSize: '16px', color: '#868e96' }} />
          <Typography variant="caption" sx={{ color: '#495057' }}>
            {contest.problemCount} Problems
          </Typography>
        </Box>
      </Stack>

      <Box mt="auto" pt={1.5}>
        {contest.status === 'active' && (
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: '6px',
              fontSize: '0.85rem',
            }}
          >
            Join Contest
          </Button>
        )}
        {contest.status === 'upcoming' && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: '6px',
              fontSize: '0.85rem',
            }}
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
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: '6px',
                color: '#495057',
                borderColor: '#ced4da',
                fontSize: '0.8rem',
              }}
            >
              Problems
            </Button>
            <Button
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: '6px',
                color: '#495057',
                borderColor: '#ced4da',
                fontSize: '0.8rem',
              }}
            >
              Leaderboard
            </Button>
          </Stack>
        )}
      </Box>
    </S.StyledContestCard>
  );
};

interface ContestPageProps {
  initialData?: Contest[];
}

export const ContestPage = ({ initialData = MOCK_CONTESTS }: ContestPageProps) => {
  const { tabValue, handleTabChange, filteredContests, loading } = useContestPage(initialData);

  return (
    <S.PageContainer>
      <Box mb={4}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: '#1a1a1a', letterSpacing: '-0.5px' }}
        >
          Contests
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Compete with developers around the world
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <S.StatsCard elevation={0}>
            <Box className="icon-container">
              <EmojiEventsOutlinedIcon color="success" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                1
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Live Now
              </Typography>
            </Box>
          </S.StatsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <S.StatsCard elevation={0}>
            <Box className="icon-container">
              <CalendarMonthOutlinedIcon color="primary" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                3
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Upcoming
              </Typography>
            </Box>
          </S.StatsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <S.StatsCard elevation={0}>
            <Box className="icon-container">
              <TrendingUpIcon color="secondary" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                1,247
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Your Ranking
              </Typography>
            </Box>
          </S.StatsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <S.StatsCard elevation={0}>
            <Box className="icon-container">
              <GroupsOutlinedIcon color="action" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                12
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Contests Joined
              </Typography>
            </Box>
          </S.StatsCard>
        </Grid>
      </Grid>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 5, mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="contest tabs">
          <Tab label="Live Now (1)" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
          <Tab label="Upcoming (3)" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
          <Tab label="Past (4)" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {loading ? (
          Array.from(new Array(3)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2 }}>
                <Skeleton variant="text" width="40%" height={24} />
                <Skeleton variant="rectangular" height={120} sx={{ my: 2, borderRadius: 1 }} />
                <Skeleton variant="text" width="80%" />
              </Box>
            </Grid>
          ))
        ) : filteredContests.length === 0 ? (
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 5,
                textAlign: 'center',
                color: 'text.secondary',
                bgcolor: '#fff',
                borderRadius: 2,
                boxShadow: 'none',
                border: '1px solid #eef2f6',
              }}
            >
              <Typography variant="h6" fontWeight="medium">
                No contests available in this section
              </Typography>
            </Paper>
          </Grid>
        ) : (
          filteredContests.map((contest) => (
            <Grid item xs={12} sm={6} md={4} key={contest.id}>
              <ContestCard contest={contest} />
            </Grid>
          ))
        )}
      </Grid>
    </S.PageContainer>
  );
};

export default ContestPage;
