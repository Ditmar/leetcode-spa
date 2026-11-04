import { Button } from '@mui/material';

import { EmptyState } from './EmptyState';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EmptyState> = {
  title: 'Component Catalog/AsyncStates/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const NoProblems: Story = {
  args: {
    title: 'No problems found',
    description: 'Try changing your search filters.',
  },
};

export const WithIconAndAction: Story = {
  args: {
    title: 'No results',
    description: 'There are no results matching your search.',
    icon: '🔎',
    action: (
      <Button variant="outlined" onClick={() => {}}>
        Clear filters
      </Button>
    ),
  },
};

export const EmptyCollection: Story = {
  args: {
    title: 'Your collection is empty',
    description: 'Items you add will appear here.',
  },
};
