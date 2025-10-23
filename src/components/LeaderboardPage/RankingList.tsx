import { Box, Avatar, Typography, Paper } from '@mui/material';
import React from 'react';

import ranking_1 from '../../assets/ranking_one.svg';
import ranking_3 from '../../assets/ranking_three.svg';
import ranking_2 from '../../assets/ranking_two.svg';

import { HighlightRow } from './LeaderboardPage.styles';

import type { LeaderboardUser } from './LeaderboardPage.types';

export const RankingList: React.FC<{ users: LeaderboardUser[]; currentUserId?: string }> = ({
  users,
  currentUserId,
}) => {
  return (
    <Box sx={{ display: 'grid', gap: 1 }}>
      {users.map((u) => {
        let rankImg: string | null = null;
        if (u.rank === 1) rankImg = ranking_1;
        else if (u.rank === 2) rankImg = ranking_2;
        else if (u.rank === 3) rankImg = ranking_3;

        const content = (
          <Paper variant="outlined" sx={{ p: 1 }} data-testid={`card-${u.username}`}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={u.avatarUrl} />
                <Box>
                  <Typography fontWeight={700}>
                    {u.rank}. {u.fullName}
                  </Typography>
                  <Typography variant="caption">@{u.username}</Typography>
                </Box>
              </Box>

              {rankImg && (
                <Box
                  component="img"
                  src={rankImg}
                  alt={`ranking-${u.rank}`}
                  sx={{ width: 40, height: 40, objectFit: 'contain' }}
                />
              )}
            </Box>
          </Paper>
        );

        if (u.id === currentUserId) {
          return <HighlightRow key={u.id}>{content}</HighlightRow>;
        }

        return <div key={u.id}>{content}</div>;
      })}
    </Box>
  );
};
