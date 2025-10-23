import { LeaderboardPage } from './LeaderboardPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LeaderboardPage> = {
  title: 'Components/LeaderboardPage',
  component: LeaderboardPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 16, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof LeaderboardPage>;

export const Default: Story = {
  args: {
    currentUserId: 'user-3',
  },
};

export const MobileView: Story = {
  args: {
    currentUserId: 'user-3',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
};
