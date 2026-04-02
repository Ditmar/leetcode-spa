import type { ReactNode } from 'react';
/**
 * Submenu item inside a menubar item
 */
export interface MenubarSubItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

/**
 * Top-level menu item
 */
export interface MenubarItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
  children?: MenubarSubItem[];
  disabled?: boolean;
}

/**
 * Menubar component props
 */
export interface MenubarProps {
  items: MenubarItem[];
  logo?: ReactNode;
  onItemClick?: (item: MenubarItem | MenubarSubItem) => void;
  ariaLabel?: string;
}