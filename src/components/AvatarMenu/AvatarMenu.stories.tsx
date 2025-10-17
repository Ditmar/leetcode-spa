import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { AvatarMenu } from './AvatarMenu';
import { DEFAULT_AVATAR_MENU_ITEMS } from './AvatarMenu.constants';

import type { AvatarMenuProps, AvatarMenuItemProps } from './AvatarMenu.types';
import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

const theme = createTheme();

const defaultIconMap: Record<string, ReactNode> = {
  profile: <AccountCircleIcon fontSize="small" />,
  settings: <SettingsIcon fontSize="small" />,
  logout: <LogoutIcon fontSize="small" />,
};

const extendedDefaultItems: AvatarMenuItemProps[] = DEFAULT_AVATAR_MENU_ITEMS.map((item) => {
  const itemKey = item.key as string;
  if (itemKey && defaultIconMap[itemKey]) {
    return {
      ...item,
      icon: item.icon ?? defaultIconMap[itemKey],
    };
  }
  return item;
});

const customItems: AvatarMenuItemProps[] = [
  // eslint-disable-next-line prettier/prettier, no-console
  { label: 'Dark Mode', onClick: () => console.log('Dark Mode'), 'data-testid': 'dark-mode-option'},
  // eslint-disable-next-line no-console, prettier/prettier
  { label: 'Help', onClick: () => console.log('Help'), 'data-testid': 'help-option'},
  // eslint-disable-next-line no-console
  { label: 'Logout', onClick: () => console.log('Logout'), divider: true },
];

interface AvatarMenuStoryArgs extends AvatarMenuProps {
  onItemClicked: (label: string) => void;
  dataTestId?: string;
}

const meta: Meta<AvatarMenuStoryArgs> = {
  title: 'Components/AvatarMenu',
  component: AvatarMenu,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dropdown menu component for authenticated user',
      },
    },
  },
  argTypes: {
    avatarUrl: { control: 'text' },
    username: { control: 'text' },
    fullWidth: { control: 'boolean' },
    menuItems: { control: 'object' },
    dataTestId: { control: 'text' },
    onItemClicked: { action: 'menuItemClicked' },
  },
  args: {
    avatarUrl:
      'https://images.unsplash.com/photo-1749989402507-1d8a8e98bb14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
    username: 'User Example',
    fullWidth: false,
    onItemClicked: () => {},
    menuItems: extendedDefaultItems,
    dataTestId: 'avatar-menu',
  },
  render: (args) => {
    const { dataTestId, ...restArgs } = args;
    const itemsWithAction: AvatarMenuItemProps[] =
      restArgs.menuItems?.map((item) => ({
        ...item,
        onClick: () => {
          item.onClick();
        },
      })) || [];

    return <AvatarMenu {...args} menuItems={itemsWithAction} data-testid={dataTestId} />;
  },
};

export default meta;
type Story = StoryObj<typeof AvatarMenu>;

export const Standard: Story = {
  args: {
    username: 'Standard User',
  },
  parameters: {
    docs: { description: { story: 'Standard menu with default items and avatar with image' } },
  },
};

export const CustomActions: Story = {
  args: {
    username: 'Administrator',
    menuItems: customItems,
  },
  parameters: {
    docs: { description: { story: 'Menu with custom items and specific actions' } },
  },
};

export const AvatarFallback: Story = {
  args: {
    avatarUrl: '',
    username: 'Fallback User',
  },
  parameters: {
    docs: { description: { story: 'Avatar without image' } },
  },
};

export const EmptyMenu: Story = {
  args: {
    username: 'User Without Menu',
    menuItems: [],
  },
  parameters: {
    docs: { description: { story: 'Empty menu with no options available' } },
  },
};

export const DisabledItems: Story = {
  args: {
    username: 'Disabled User',

    menuItems: [
      { label: 'Option 1', onClick: () => {}, disabled: true },
      { label: 'Option 2', onClick: () => {}, disabled: true, divider: true },
    ],
    fullWidth: false,
  },
  parameters: {
    docs: { description: { story: 'Disabled items that cannot be selected' } },
  },
};

export const LayoutVariants: Story = {
  args: {
    username: '',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
    docs: { description: { story: 'Layout variants: without username and fullWidth' } },
  },
};
