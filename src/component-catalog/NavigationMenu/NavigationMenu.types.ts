import type {
  AppBarProps as MuiAppBarProps,
  ToolbarProps as MuiToolbarProps,
  ListItemButtonProps as MuiListItemButtonProps,
  DrawerProps as MuiDrawerProps,
} from '@mui/material';
import type { ReactNode } from 'react';

interface NavItem extends Omit<MuiListItemButtonProps, 'children'> {
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
