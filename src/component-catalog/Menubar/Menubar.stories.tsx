import type { Meta, StoryObj } from '@storybook/react';

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

import { Menubar } from './Menubar';

const meta: Meta<typeof Menubar> = {
  title: 'component-catalog/Menubar',
  component: Menubar,
};

export default meta;

type Story = StoryObj<typeof Menubar>;

const sampleItems = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    onClick: () => console.log('Home clicked'),
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    children: [
      { label: 'Profile' },
      { label: 'Account' },
    ],
  },
  {
    label: 'Help',
    children: [
      { label: 'Documentation' },
      { label: 'Support' },
    ],
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const WithLogo: Story = {
  args: {
    items: sampleItems,
    logo: <strong>MyApp</strong>,
  },
};

export const WithDisabledItems: Story = {
  args: {
    items: [
      {
        label: 'Home',
        disabled: true,
      },
      {
        label: 'Settings',
        children: [
          { label: 'Profile', disabled: true },
          { label: 'Account' },
        ],
      },
    ],
  },
};