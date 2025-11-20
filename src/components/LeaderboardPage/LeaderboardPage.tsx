import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { Box, CircularProgress, useMediaQuery, type Theme } from '@mui/material';
import { purple } from '@mui/material/colors';
import confetti from 'canvas-confetti';
import React, { useEffect, useRef } from 'react';

import { theme } from '../../style-library';

import { useLeaderboardPage } from './LeaderboardPage.hook';
import { PageWrap, LeaderboardTitle } from './LeaderboardPage.styles';
import { LeaderboardTable } from './LeaderboardTable';
import { RankingList } from './RankingList';

export const LeaderboardPage: React.FC = () => {
  const { users, loading, error } = useLeaderboardPage();

  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const confettiRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!confetti) return;

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <canvas
        ref={confettiRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />

      <PageWrap>
        <EmojiEventsOutlinedIcon
          sx={{
            color: purple[200],
            fontSize: theme.spacing(3),
          }}
        />
        <LeaderboardTitle>Leader Board</LeaderboardTitle>
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
          <Box>{isSmall ? <RankingList users={users} /> : <LeaderboardTable users={users} />}</Box>
        )}
      </PageWrap>
    </Box>
  );
};
