import { ContestPage } from './ContestPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContestPage> = {
  title: 'Pages/ContestPage',
  component: ContestPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ContestPage>;

export const Default: Story = {
  args: {
    loading: false,
  },
};
export const Loading: Story = {
  args: {
    loading: true,
  },
};
export const EmptyState: Story = {
  args: {
    initialContests: [],
    loading: false,
  },
};
