import { Box, CircularProgress, Container, Typography } from '@mui/material';

import { useLeaderboard } from '../../component-catalog/Leaderboard/Leaderboard.hook';
import { LeaderboardTable } from '../../component-catalog/Leaderboard/LeaderboardTable';

const LeaderboardPage = () => {
  const { users, loading, error } = useLeaderboard();

  if (loading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" minHeight="60vh">
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
