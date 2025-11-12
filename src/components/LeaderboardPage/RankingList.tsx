import React from 'react';

import { PageRakingListWrap } from './LeaderboardPage.styles';
import { LeaderboardTable } from './LeaderboardTable';

import type { LeaderboardUser } from './LeaderboardPage.types';

export const RankingList: React.FC<{ users: LeaderboardUser[] }> = ({ users }) => {
  return (
    <PageRakingListWrap sx={{ display: 'grid', gap: 1 }}>
      <LeaderboardTable users={users} />
    </PageRakingListWrap>
  );
};
