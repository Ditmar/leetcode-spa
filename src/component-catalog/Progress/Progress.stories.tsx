import { Progress } from './Progress';
import { ProgressVariant, ProgressMode } from './Progress.constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Progress> = {
  title: 'Component Catalog/Progress',
  component: Progress,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ProgressVariant),
    },
    mode: {
      control: 'select',
      options: Object.values(ProgressMode),
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'dark'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const LinearDeterminate: Story = {
  args: {
    variant: ProgressVariant.LINEAR,
    mode: ProgressMode.DETERMINATE,
    value: 60,
    showLabel: true,
    color: 'primary',
  },
};

export const CircularIndeterminate: Story = {
  args: {
    variant: ProgressVariant.CIRCULAR,
    mode: ProgressMode.INDETERMINATE,
    color: 'success',
  },
};
