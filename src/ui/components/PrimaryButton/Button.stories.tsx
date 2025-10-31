// Button.stories.tsx
import { PrimaryButton } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof PrimaryButton>;

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
