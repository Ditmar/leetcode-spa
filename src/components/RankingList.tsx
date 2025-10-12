import React from 'react';
import {
  Avatar,
  Box,
  Typography,
  Chip,
} from '@mui/material';
import type { User } from './LeaderboardPage/LeaderboardPage.types';
import {
  UserCard,
  RankBadge,
} from './LeaderboardPage/LeaderboardPage.styles';

interface RankingListProps {
  users: User[];
}

export const RankingList: React.FC<RankingListProps> = ({ users }) => {
  return (
    <Box>
      {users.map((user) => (
        <UserCard
          key={user.id}
          className={user.isCurrentUser ? 'current-user' : ''}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <RankBadge rank={user.rank}>
              {user.rank}
            </RankBadge>

            <Avatar src={user.avatar} alt={user.fullName} />

            <Box sx={{ flexGrow: 1 }}>
              <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                <Typography variant="subtitle1" fontWeight="medium">
                  {user.fullName}
                </Typography>
                {user.isCurrentUser && (
                  <Chip
                    label="Tú"
                    color="primary"
                    size="small"
                  />
                )}
              </Box>

              <Typography variant="body2" color="text.secondary">
                @{user.username}
              </Typography>

              <Box display="flex" gap={2} mt={1} flexWrap="wrap">
                <Chip
                  label={`${user.points.toLocaleString()} pts`}
                  variant="outlined"
                  color="primary"
                  size="small"
                />
                <Chip
                  label={`${user.testsPassed} pruebas`}
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Box>
          </Box>
        </UserCard>
      ))}
    </Box>
  );
};