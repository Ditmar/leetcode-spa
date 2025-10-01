import Counter from './Counter';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
