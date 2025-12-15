export type DashboardProps = {
  currentUser: {
    id: string;
    fullName: string;
    avatarUrl?: string;
  };
};

export type DashboardLeaderboardUser = {
  id: string;
  fullName: string;
  avatarUrl?: string;
};

export type DashboardLeaderboard = {
  users: DashboardLeaderboardUser[];
  loading: boolean;
  error: string | null;
};

export type ResponsiveProps = {
  isMobile: boolean;
};

export type StatsCardData = {
  value: string | number;
  label: string;
};

export type TestCardData = {
  title: string;
  description: string;
  logo: string;
  onSelect: () => void;
};

export type UseDashboardHook = {
  tests: TestCardData[];
  stats: StatsCardData[];
  leaderboard: DashboardLeaderboard;
  loading: boolean;
  error: string | null;
};
