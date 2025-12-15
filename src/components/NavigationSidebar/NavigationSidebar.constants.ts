import LeaderboardSvg from './assets/Award 5.svg';
import DashboardSvg from './assets/Chart.svg';
import CoursesSvg from './assets/Document Align Left 1.svg';
import TestsSvg from './assets/Edit 1.svg';
import DarkModeSvg from './assets/Moon.svg';
import ProfileSvg from './assets/Profile 1.svg';
import LogoutSvg from './assets/Unlock 2.svg';
import SettingsSvg from './assets/Verified.svg';

import type { NavItem } from './NavigationSidebar.types';

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    iconSvg: DashboardSvg as string,
    route: '/dashboard',
    testId: 'nav-dashboard',
  },
  { label: 'Tests', iconSvg: TestsSvg as string, route: '/tests', testId: 'nav-tests' },
  { label: 'Courses', iconSvg: CoursesSvg as string, route: '/courses', testId: 'nav-courses' },
  { label: 'Profile', iconSvg: ProfileSvg as string, route: '/profile', testId: 'nav-profile' },
  {
    label: 'Leaderboard',
    iconSvg: LeaderboardSvg as string,
    route: '/leaderboard',
    testId: 'nav-leaderboard',
  },
  {
    label: 'Dark mode',
    iconSvg: DarkModeSvg as string,
    route: '/settings/theme',
    testId: 'nav-darkmode',
  },
  { label: 'Settings', iconSvg: SettingsSvg as string, route: '/settings', testId: 'nav-settings' },
  { label: 'Log Out', iconSvg: LogoutSvg as string, route: '/logout', testId: 'nav-logout' },
];

export default DEFAULT_NAV_ITEMS;
