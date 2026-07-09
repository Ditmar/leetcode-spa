import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { leaderboardTokens as T } from './Leaderboard.styles';

import type { LeaderboardTableProps } from './Leaderboard.types';

const MEDAL_COLORS: Record<number, string> = {
  1: T.colors.medalGold,
  2: T.colors.medalSilver,
  3: T.colors.medalBronze,
};

const LeaderboardTable = ({ users }: LeaderboardTableProps) => (
  <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table aria-label="Tabla de ranking de usuarios">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 700 }}>#</TableCell>
          <TableCell sx={{ fontWeight: 700 }}>Usuario</TableCell>
          <TableCell align="right" sx={{ fontWeight: 700 }}>
            Score
          </TableCell>
          <TableCell align="right" sx={{ fontWeight: 700 }}>
            Resueltos
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.username} hover>
            <TableCell>
              {user.rank <= 3 ? (
                <EmojiEventsIcon
                  sx={{ color: MEDAL_COLORS[user.rank], verticalAlign: 'middle' }}
                  aria-label={`Medalla posición ${user.rank}`}
                />
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {user.rank}
                </Typography>
              )}
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar src={user.avatar} sx={{ width: 32, height: 32 }}>
                  {/* Fix defensivo: fallback si username está vacío */}
                  {user.username ? user.username[0].toUpperCase() : '?'}
                </Avatar>
                <Typography variant="body2" fontWeight={500}>
                  {user.username || 'Anónimo'}
                </Typography>
              </Box>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" fontWeight={600}>
                {user.score.toLocaleString()}
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" color="text.secondary">
                {user.solvedCount}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export { LeaderboardTable };
