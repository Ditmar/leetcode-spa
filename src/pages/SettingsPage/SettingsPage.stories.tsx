import { ThemeProvider, createTheme } from '@mui/material';

import { SettingsPage } from './SettingsPage';

import type { SettingsPageProps } from './SettingsPage.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SettingsPage> = {
  title: 'Pages/Settings',
  component: SettingsPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={createTheme()}>
        <div className="min-h-screen bg-gray-50 p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    forceMobile: {
      control: 'boolean',
    },
    initialPreferences: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const lightEn: SettingsPageProps['initialPreferences'] = {
  theme: 'light',
  language: 'en',
  notifications: true,
  privacy: { publicProfile: true, shareActivity: true, saveHistory: true },
};

export const Desktop: Story = {
  args: {
    initialPreferences: lightEn,
    forceMobile: false,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

export const Mobile: Story = {
  args: {
    initialPreferences: lightEn,
    forceMobile: true,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};
