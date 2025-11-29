import React from 'react';

import { LeaderboardTable } from './LeaderboardTable';

import type { LeaderboardUser } from './LeaderboardPage.types';

export const RankingList: React.FC<{ users: LeaderboardUser[] }> = ({ users }) => {
  return <LeaderboardTable users={users} />;
};
