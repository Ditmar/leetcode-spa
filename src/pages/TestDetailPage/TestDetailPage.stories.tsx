import TestDetailPage from './TestDetailPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TestDetailPage> = {
  title: 'Pages/TestDetailPage',
  component: TestDetailPage,
};

export default meta;

type Story = StoryObj<typeof TestDetailPage>;

export const Default: Story = {
  args: {
    testId: 't-1',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const ErrorState: Story = {
  args: {
    error: 'Failed to load',
  },
};
