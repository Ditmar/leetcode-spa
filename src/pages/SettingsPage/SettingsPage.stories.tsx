import { SettingsPage } from './SettingsPage';

import type { UserPreferences, SettingsPageProps } from './SettingsPage.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<SettingsPageProps> = {
  title: 'Pages/SettingsPage',
  component: SettingsPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj<SettingsPageProps>;

const preferencesLight: Partial<UserPreferences> = {
  theme: 'light',
  notifications: true,
  language: 'en',
  privacy: { publicProfile: true, shareActivity: true, saveHistory: true },
};

const preferencesDark: Partial<UserPreferences> = {
  theme: 'dark',
  notifications: false,
  language: 'es',
  privacy: { publicProfile: false, shareActivity: true, saveHistory: false },
};

export const ComputerView: Story = {
  args: { initialPreferences: preferencesLight, forceMobile: false, readOnly: true },
};

export const MobileView: Story = {
  args: { initialPreferences: preferencesDark, forceMobile: true, readOnly: true },
};

