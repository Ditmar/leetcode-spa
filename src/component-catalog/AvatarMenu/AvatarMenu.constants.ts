import type { AvatarMenuItemProps } from './AvatarMenu.types';

export const DEFAULT_AVATAR_MENU_ITEMS: AvatarMenuItemProps[] = [
  {
    label: 'Profile',
    // eslint-disable-next-line no-console
    onClick: () => console.log('Action: Navigate to Profile'),
    key: 'profile',
    'data-testid': 'menu-item-profile',
  },
  {
    label: 'Account Settings',
    // eslint-disable-next-line no-console
    onClick: () => console.log('Action: Open Settings'),
    'data-testid': 'menu-item-settings',
    key: 'settings',
  },
  {
    label: 'Sign Out',
    // eslint-disable-next-line no-console
    onClick: () => console.log('Action: Execute Logout'),
    key: 'logout',
    divider: true,
    'data-testid': 'menu-item-logout',
  },
];
