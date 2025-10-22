import { UpcomingQuizCard } from './UpcomingQuizCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UpcomingQuizCard> = {
  title: 'Components/UpcomingQuizCard',
  component: UpcomingQuizCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UpcomingQuizCard>;

export const Default: Story = {
  args: {
    date: '2025-12-01',
    title: 'Next React Quiz',
    description: 'Test your knowledge about React fundamentals.',
  },
};

export const CustomDate: Story = {
  args: {
    date: '2025-11-01',
    title: 'Advanced TypeScript Challenge',
    description: 'Push your TypeScript skills to the next level.',
  },
};
