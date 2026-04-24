import type {
  AppBarProps as MuiAppBarProps,
  ToolbarProps as MuiToolbarProps,
  DrawerProps as MuiDrawerProps,
} from '@mui/material';
import type { ReactNode } from 'react';

interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  children?: NavItem[];
  megaPanelContent?: ReactNode;
  isActive?: boolean;
  badge?: ReactNode;
  disabled?: boolean;
}

interface NavSection {
  id: string;
  title?: string;
  showDivider?: boolean;
  items: NavItem[];
  subheader?: ReactNode;
}

interface NavigationMenuProps extends Omit<MuiAppBarProps, 'children' | 'color'> {
  logo?: string | ReactNode;
  navSections: NavSection[];
  onItemClick?: (item: NavItem) => void;
  currentPath?: string;
  useScrollHide?: boolean;
  ariaLabel?: string;
  rightContent?: ReactNode;
  drawerProps?: Partial<MuiDrawerProps>;
  toolbarProps?: Partial<MuiToolbarProps>;
  onMobileMenuToggle?: (isOpen: boolean) => void;
  forceHamburger?: boolean;
  size?: NavigationMenuSize;
  variant?: NavigationMenuVariant;
}

export type { NavItem, NavSection, NavigationMenuProps };

export type NavigationMenuSize = 'small' | 'medium' | 'large';
export type NavigationMenuVariant = 'primary' | 'secondary';

export interface UseNavigationMenuStateProps {
  navSections: NavSection[];
  currentPath?: string;
  onItemClick?: (item: NavItem) => void;
  useScrollHide?: boolean;
  onMobileMenuToggle?: (isOpen: boolean) => void;
}

export const DEFAULT_NAVIGATION_MENU_STATE_PROPS = {
  currentPath: '',
  useScrollHide: false,
} as const;

export interface UseNavigationMenuStateReturn {
  activePanelId: string | null;
  openPanel: (panelId: string) => void;
  closePanel: () => void;
  isMobileDrawerOpen: boolean;
  toggleMobileDrawer: () => void;
  closeMobileDrawer: () => void;
  activeItemId: string | null;
  isItemActive: (item: NavItem) => boolean;
  isMobile: boolean;
  isDesktop: boolean;
  handleItemClick: (item: NavItem) => void;
  handleEscapeKey: () => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  isScrollHidden: boolean;
}
