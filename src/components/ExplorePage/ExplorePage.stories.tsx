import { ExplorePage } from './ExplorePage';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ExplorePage',
  component: ExplorePage,
  parameters: {
    docs: {
      description: {
        component:
          'Page-level Explore component built with Material UI. It displays topic stats, category and difficulty filters, and a responsive grid of topic cards.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExplorePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomHeader: Story = {
  args: {
    title: 'Explore',
    subtitle: 'Master coding interview questions by topic',
  },
};
