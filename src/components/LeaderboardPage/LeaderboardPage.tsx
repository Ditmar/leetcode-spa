import React from 'react';
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
import { NavigationSidebar } from '../NavigationSidebar';
import { SearchBar } from '../SearchBar';
import { useLeaderboard } from './LeaderboardPage.hook';
import { LeaderboardTable } from '../LeaderboardTable';
import { RankingList } from '../RankingList';
import {
  LoadingContainer,
  ErrorContainer,
} from './LeaderboardPage.styles';

export const LeaderboardPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { users, loading, error, filters, updateFilters } = useLeaderboard();

  const handleSearch = (searchTerm: string) => {
    updateFilters({ search: searchTerm });
  };

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <Box display="flex">
        <NavigationSidebar />
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
        <NavigationSidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ErrorContainer>
            <Typography variant="h6" color="error" gutterBottom>
              {error}
            </Typography>
            <Button variant="contained" onClick={handleRetry}>
              Reintentar
            </Button>
          </ErrorContainer>
        </Box>
      </Box>
    );
  }

  return (
    <Box display="flex">
      <NavigationSidebar />
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
                  value={filters.search}
                />
              </Grid>
            </Grid>


          </Box>

          {isMobile ? (
            <RankingList users={users} />
          ) : (
            <LeaderboardTable users={users} />
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default LeaderboardPage;