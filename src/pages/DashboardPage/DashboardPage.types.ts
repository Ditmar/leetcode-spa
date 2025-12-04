export interface Test {
  id: string;
  title: string;
  description: string;
  logo: string;
  orientation?: 'vertical' | 'horizontal';
}

export interface User {
  id?: string;
  name: string;
  avatarUrl?: string;
}

export interface MenuItem {
  label: string;
  icon?: string;
  route?: string;
  action?: () => void;
  isActive?: boolean;
}

export interface DashboardPageProps {
  user: User;
  recentTests: Test[];
  leaderboardData?: User[];
}
