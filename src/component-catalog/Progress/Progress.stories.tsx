import { Progress } from './Progress';
import { ProgressVariant, ProgressMode } from './Progress.constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Progress> = {
  title: 'component-catalog/Progress',
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

export const LinearIndeterminate: Story = {
  args: {
    variant: ProgressVariant.LINEAR,
    mode: ProgressMode.INDETERMINATE,
    showLabel: false,
    color: 'secondary',
  },
};

export const CircularDeterminate: Story = {
  args: {
    variant: ProgressVariant.CIRCULAR,
    mode: ProgressMode.DETERMINATE,
    value: 75,
    showLabel: true,
    color: 'success',
    size: '4rem',
    thickness: 6,
  },
};

export const CircularIndeterminate: Story = {
  args: {
    variant: ProgressVariant.CIRCULAR,
    mode: ProgressMode.INDETERMINATE,
    showLabel: false,
    color: 'info',
    size: '3rem',
    thickness: 4,
  },
};

export const WithCustomColors: Story = {
  args: {
    variant: ProgressVariant.LINEAR,
    mode: ProgressMode.DETERMINATE,
    value: 45,
    showLabel: true,
    color: 'warning',
  },
};

export const WithoutLabel: Story = {
  args: {
    variant: ProgressVariant.LINEAR,
    mode: ProgressMode.DETERMINATE,
    value: 80,
    showLabel: false,
    color: 'error',
  },
};

export const CircularCustomSizeAndThickness: Story = {
  args: {
    variant: ProgressVariant.CIRCULAR,
    mode: ProgressMode.DETERMINATE,
    value: 90,
    showLabel: true,
    color: 'dark',
    size: '5rem',
    thickness: 8,
  },
};
