import type { DropdownItemType } from './DropdownMenu.constants';
import type { ReactNode } from 'react';

/**
 * Base structure for any dropdown item.
 */
export interface DropdownItem {
  id: string;
  label?: string;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  type?: DropdownItemType;
  checked?: boolean;
  name?: string;
  onClick?: () => void;
  children?: DropdownItem[];
}

/**
 * Group of items separated visually with Divider.
 */
export interface DropdownGroup {
  id: string;
  label?: string;
  items: DropdownItem[];
}

/**
 * Props for DropdownMenu component.
 */
export interface DropdownMenuProps {
  trigger: ReactNode;
  groups?: DropdownGroup[];
  items?: DropdownItem[];
  onItemSelect?: (item: DropdownItem) => void;
  disabled?: boolean;
  mobileFullWidth?: boolean;
  menuAriaLabel?: string;
  submenuAriaLabel?: string;
}
