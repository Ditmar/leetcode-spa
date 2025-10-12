import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import type { MouseEventHandler, ReactNode } from 'react';

export interface AvatarMenuItem {
    label: string;
    onClick: () => void;
    icon?: ReactNode;
    disabled?: boolean;
    divider?: boolean;
    'data-testid'?: string;
    menuItemProps?: Omit<MuiMenuItemProps, 'onClick'>;
}

export interface AvatarMenuProps {
    avatarUrl: string;
    username: string;
    menuItems?: AvatarMenuItem[];
    avatarProps?: Omit<MuiAvatarProps, 'src' | 'alt'>;
    fullWidth?: boolean;
    'data-testid'?: string;
}

export interface StyledAvatarMenuProps {
    $isOpen: boolean;
    $fullWidth: boolean;
}
