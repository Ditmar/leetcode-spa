import { Avatar, Box, CircularProgress, useMediaQuery, type Theme } from '@mui/material';
import confetti from 'canvas-confetti';
import React, { useEffect, useRef } from 'react';

import Award1 from '../../assets/Award1.svg';
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
              width: theme.spacing(2.9),
              height: theme.spacing(2.6),
              borderRadius: 0,
              margin: 0,
              padding: 0,
            }}
          />

          <LeaderboardTitle
            sx={{
              fontSize: theme.spacing(1.8),
              margin: 0,
              padding: 0,
              lineHeight: 1,
              [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(1.5),
              },
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
