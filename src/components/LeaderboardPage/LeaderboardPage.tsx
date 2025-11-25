import { Avatar, Box, CircularProgress, useMediaQuery, type Theme } from '@mui/material';
import React from 'react';

import Award1 from '../../assets/Award1.svg';
import { theme } from '../../style-library';

import { useLeaderboardPage } from './LeaderboardPage.hook';
import { PageWrap, LeaderboardTitle } from './LeaderboardPage.styles';
import { LeaderboardTable } from './LeaderboardTable';
import { RankingList } from './RankingList';

export const LeaderboardPage: React.FC = () => {
  const { users, loading, error } = useLeaderboardPage();

  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <PageWrap>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(0.3),
          padding: 0,
          margin: 0,
        }}
      >
        <Avatar
          src={Award1}
          sx={{
            width: theme.spacing(3),
            height: theme.spacing(3),
            borderRadius: 0,
            margin: 0,
            padding: 0,
          }}
        />

        <LeaderboardTitle
          sx={{
            margin: 0,
            padding: 0
          }}
        >

          Leader Board
        </LeaderboardTitle>
      </Box>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }} data-testid="loading">
          <CircularProgress />
        </Box>
      )}


      {!loading && !error && (
        <Box>{isSmall ? <RankingList users={users} /> : <LeaderboardTable users={users} />}</Box>
      )}
    </PageWrap>
  );
};
