// LeaderboardPage.types.ts
export interface User {
  id: string;
  rank: number;
  avatar?: string;
  fullName: string;
  username: string;
  points: number;
  testsPassed: number;
  isCurrentUser?: boolean;
}

export type SortBy = 'points' | 'testsPassed' | 'recentActivity';
export type TimePeriod = 'all' | 'week' | 'month' | 'year';

export interface LeaderboardFilters {
  search: string;
  sortBy: SortBy;
  timePeriod?: TimePeriod;
  category?: string;
}

export interface LeaderboardState {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
  filters: LeaderboardFilters;
}

// -------------------------------------------------------------
// LeaderboardPage.tsx
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Button,
  Grid,
} from '@mui/material';
import React from 'react';

import { useLeaderboard } from './LeaderboardPage.hook';
import { LoadingContainer, ErrorContainer } from './LeaderboardPage.styles';
import { LeaderboardTable } from './LeaderboardTable';
import { RankingList } from './RankingList';
import { SearchBar } from './SearchBar';

import type { User, LeaderboardFilters } from './LeaderboardPage.types';

export const LeaderboardPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { users, loading, error, filters, updateFilters } = useLeaderboard();

  const handleSearch = (searchTerm: string) => {
    updateFilters({ ...(filters as LeaderboardFilters), search: searchTerm });
  };

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <Box display="flex">
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <LoadingContainer>
            <CircularProgress size={60} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Cargando clasificación...
            </Typography>
          </LoadingContainer>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex">
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ErrorContainer>
            <Typography variant="h6" color="error" gutterBottom>
              {error}
            </Typography>
            <Button variant="contained" onClick={handleRetry} aria-label="Reintentar carga">
              Reintentar
            </Button>
          </ErrorContainer>
        </Box>
      </Box>
    );
  }

  return (
    <Box display="flex">
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
              Tests For You!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Here is your Profile Dashboard
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <SearchBar
                  placeholder="Buscar por nombre o usuario..."
                  onSearch={handleSearch}
                  value={(filters && (filters as LeaderboardFilters).search) ?? ''}
                />
              </Grid>
            </Grid>
          </Box>

          {isMobile ? (
            <RankingList users={users as User[]} />
          ) : (
            <LeaderboardTable users={users as User[]} />
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default LeaderboardPage;
