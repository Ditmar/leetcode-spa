import { Box, CircularProgress, Container, Typography } from '@mui/material';

import { useLeaderboard } from './Leaderboard.hook';
import { LeaderboardTable } from './LeaderboardTable';

import type { LeaderboardEntry } from '../../services/leaderboard/leaderboardService.types';

interface LeaderboardPageProps {
  initialUsers?: LeaderboardEntry[];
}

const LeaderboardPage = ({ initialUsers = [] }: LeaderboardPageProps) => {
  const { users, loading, error } = useLeaderboard(initialUsers);

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
        aria-label="Cargando leaderboard"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" minHeight="60vh">
        <Typography color="error" role="alert">
          Error al cargar el ranking: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
        Leaderboard
      </Typography>
      <LeaderboardTable users={users} />
    </Container>
  );
};

export { LeaderboardPage };
