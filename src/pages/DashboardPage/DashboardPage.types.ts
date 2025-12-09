import type { LeaderboardUser } from '../../components/LeaderboardPage/LeaderboardPage.types';

export type DashboardProps = {
  currentUser?: {
    id: string;
    fullName: string;
    avatarUrl?: string;
  };
};

export type ResponsiveProps = {
  isMobile: boolean;
};

export type TestCardData = {
  title: string;
  description: string;
  logo: string;
  onSelect: () => void;
};

export type StatsCardData = {
  value: string | number;
  label: string;
};

export type DashboardLeaderboard = {
  users: LeaderboardUser[];
  loading: boolean;
  error: string | null;
};

export type UseDashboardHook = {
  tests: TestCardData[];
  stats: StatsCardData[];
  leaderboard: DashboardLeaderboard;
  loading: boolean;
  error: string | null;
};
