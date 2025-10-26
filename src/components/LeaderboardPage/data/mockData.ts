import type { LeaderboardUser } from '../LeaderboardPage.types';

export const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: 'user-1',
    rank: 1,
    avatarUrl: 'https://i.pravatar.cc/80?img=1',
    fullName: 'John Leboo',
    username: 'Neo Pragramming League_NPL',
    points: 3420,
    testsPassed: 48,
    lastActiveAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    category: 'neo',
  },
  {
    id: 'user-2',
    rank: 2,
    avatarUrl: 'https://i.pravatar.cc/80?img=2',
    fullName: 'Samuel Kingasunye',
    username: 'Neo Pragramming League_NPL ',
    points: 3190,
    testsPassed: 45,
    lastActiveAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    category: 'neo',
  },
  {
    id: 'user-3',
    rank: 3,
    avatarUrl: 'https://i.pravatar.cc/80?img=3',
    fullName: 'Stephen Kerubo',
    username: 'Neo Pragramming League_NPL',
    points: 2870,
    testsPassed: 41,
    lastActiveAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    category: 'neo',
  },
];

export const fetchLeaderboard = (delay = 600) =>
  new Promise<LeaderboardUser[]>((resolve) => {
    setTimeout(() => resolve(mockLeaderboardData.map((u, i) => ({ ...u, rank: i + 1 }))), delay);
  });
