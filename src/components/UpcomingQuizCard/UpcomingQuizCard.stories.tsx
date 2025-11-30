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
    date: '2023-08-12',
    title: 'Upcoming Quiz Competition',
    description: '',
  },
};

export const CustomDate: Story = {
  args: {
    date: '2023-08-12',
    title: 'Upcoming Quiz Competition',
    description: '',
  },
};
