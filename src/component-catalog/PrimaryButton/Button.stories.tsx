import { PrimaryButton } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Gradient: Story = {
  args: {
    children: 'Create Account',
    variant: 'primary',
    size: 'large',
    shape: 'pill',
  },
};

export const Outline: Story = {
  args: {
    children: 'Create Account',
    variant: 'secondary',
    size: 'large',
    shape: 'pill',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Create Account',
    variant: 'primary',
    size: 'large',
    shape: 'pill',
    disabled: true,
  },
};
