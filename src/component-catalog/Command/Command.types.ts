import type { ReactNode } from 'react';

export interface CommandItem {
  id: string;
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  keywords?: string[];
  onSelect?: () => void;
}

export interface CommandGroup {
  id: string;
  heading: string;
  items: CommandItem[];
}

export interface CommandProps {
  open?: boolean;
  groups: CommandGroup[];
  placeholder?: string;
  emptyMessage?: string;
  title?: string;
  subtitle?: string;
  onClose?: () => void;
}
