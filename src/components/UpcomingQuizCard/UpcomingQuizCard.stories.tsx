import UpcomingQuizCard from './UpcomingQuizCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UpcomingQuizCard> = {
  title: 'Components/UpcomingQuizCard',
  component: UpcomingQuizCard,
  args: {
    title: 'Upcoming Quiz Competition',
    date: '2025-08-12',
    description: 'Join our next exciting quiz and test your knowledge!',
    onRegister: () => alert('Registered!'),
  },
};

export default meta;
type Story = StoryObj<typeof UpcomingQuizCard>;

export const Default: Story = {};

export const WithoutDescription: Story = {
  args: {
    description: undefined,
  },
};
