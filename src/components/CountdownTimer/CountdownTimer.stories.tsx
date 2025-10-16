import { CountdownTimer } from './CountdownTimer';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CountdownTimer> = {
  title: 'Components/CountdownTimer',
  component: CountdownTimer,
  argTypes: {
    seconds: { control: 'number' },
    onComplete: { action: 'completed' },
  },
};

export default meta;

type Story = StoryObj<typeof CountdownTimer>;

export const Default: Story = {
  args: {
    seconds: 1230,
  },
};

export const ShortTimer: Story = {
  args: {
    seconds: 30,
  },
};

export const LongTimer: Story = {
  args: {
    seconds: 3600,
  },
};
