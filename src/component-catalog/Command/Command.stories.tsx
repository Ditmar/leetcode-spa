import {
  CalendarToday,
  CreditCardOutlined,
  PersonOutline,
  SettingsOutlined,
} from '@mui/icons-material';

import Command from './Command';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Command> = {
  title: 'Component-Catalog/Command',
  component: Command,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Default: Story = {
  args: {
    open: false,
    onClose: () => {},
    title: 'Command',
    subtitle: 'Command palette / search',
    placeholder: 'Type a command or search...',
    emptyMessage: 'No results found.',
    groups: [
      {
        id: 'suggestions',
        heading: 'Suggestions',
        items: [
          {
            id: 'calendar',
            label: 'Calendar',
            icon: <CalendarToday fontSize="small" />,
            keywords: ['date', 'event'],
          },
          {
            id: 'emoji',
            label: 'Search Emoji',
            icon: <PersonOutline fontSize="small" />,
            keywords: ['emoji', 'smile'],
          },
          {
            id: 'settings-a',
            label: 'Settings',
            icon: <SettingsOutlined fontSize="small" />,
            keywords: ['preferences'],
          },
        ],
      },
      {
        id: 'settings',
        heading: 'Settings',
        items: [
          {
            id: 'profile',
            label: 'Profile',
            icon: <PersonOutline fontSize="small" />,
            keywords: ['user'],
          },
          {
            id: 'billing',
            label: 'Billing',
            icon: <CreditCardOutlined fontSize="small" />,
            keywords: ['payment'],
          },
          {
            id: 'settings-b',
            label: 'Settings',
            icon: <SettingsOutlined fontSize="small" />,
            keywords: ['config'],
          },
        ],
      },
    ],
  },
};
