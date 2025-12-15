import type { ReactNode } from 'react';

export type NavItem = {
  label: string;
  // either provide pre-rendered icon ReactNode or raw svg string via `iconSvg`
  icon?: ReactNode;
  iconSvg?: string;
  route: string;
  testId?: string;
};

export type NavigationSidebarProps = {
  items?: NavItem[];
  currentPath?: string;
  onNavigate?: (route: string) => void;
  width?: number | string;
};
