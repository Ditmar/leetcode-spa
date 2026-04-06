import type { ReactNode } from 'react';

export interface ContextMenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ContextMenuGroup {
  id: string;
  items: ContextMenuItem[];
}

export interface ContextMenuProps {
  children: ReactNode;
  groups: ContextMenuGroup[];
  onClose?: () => void;
}

export interface MenuPosition {
  x: number;
  y: number;
}
