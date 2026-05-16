import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContestPage } from './ContestPage';
import { MOCK_CONTESTS } from './ContestPage.constants';

const meta: Meta<typeof ContestPage> = {
  title: 'Pages/ContestPage',
  component: ContestPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ContestPage>;

export const WithAllStatuses: Story = {
  args: {
    initialData: MOCK_CONTESTS,
  },
};

export const EmptyState: Story = {
  args: {
    initialData: [],
  },
};