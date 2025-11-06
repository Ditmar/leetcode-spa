import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { Box, Grid, CircularProgress, useMediaQuery, type Theme } from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';

import { useLeaderboardPage } from './LeaderboardPage.hook';
import { PageWrap, ContentCard, LeaderboardTitle } from './LeaderboardPage.styles';
import { LeaderboardTable } from './LeaderboardTable';
import { RankingList } from './RankingList';

export const LeaderboardPage: React.FC = () => {
  const { users, loading, error } = useLeaderboardPage();

  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <PageWrap>
      <EmojiEventsOutlinedIcon sx={{ color: purple[200] }} />
      <LeaderboardTitle>Leader Board</LeaderboardTitle>
      <Grid item xs={12} md={9}>
        <ContentCard>
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }} data-testid="loading">
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Box sx={{ color: 'error.main', p: 2 }} data-testid="error">
              {error}
            </Box>
          )}

          {!loading && !error && (
            <Box>
              {isSmall ? <RankingList users={users} /> : <LeaderboardTable users={users} />}
            </Box>
          )}
        </ContentCard>
      </Grid>
    </PageWrap>
  );
};
