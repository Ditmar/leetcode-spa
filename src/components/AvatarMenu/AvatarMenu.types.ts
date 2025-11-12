import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import type { ReactNode } from 'react';

export type AvatarMenuItemProps = {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  divider?: boolean;
  'data-testid'?: string;
  menuItemProps?: Omit<MuiMenuItemProps, 'onClick'>;
  key?: 'profile' | 'settings' | 'logout' | string;
};

export type AvatarMenuProps = {
  avatarUrl: string;
  username: string;
  menuItems?: AvatarMenuItemProps[];
  avatarProps?: Omit<MuiAvatarProps, 'src' | 'alt'>;
  fullWidth?: boolean;
  'data-testid'?: string;
};

export type StyledAvatarMenuProps = {
  $isOpen?: boolean;
  $fullWidth?: boolean;
};
