import { PrimaryButton } from './Button'; // Ensure the Button component is imported correctly
import { BUTTON_VARIANTS, BUTTON_SIZES, BUTTON_SHAPES } from './Button.constants';

import type { ButtonVariant, ButtonSize, ButtonShape } from './Button.types'; // Import types correctly
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered', // Centers the component in the Storybook panel
    docs: {
      description: {
        component: 'Button with multiple variants, sizes, and shapes built on MUI.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: Object.values(BUTTON_VARIANTS) as ButtonVariant[] }, // Use ButtonVariant type
    size: { control: 'select', options: Object.values(BUTTON_SIZES) as ButtonSize[] }, // Use ButtonSize type
    shape: { control: 'select', options: Object.values(BUTTON_SHAPES) as ButtonShape[] }, // Use ButtonShape type
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'medium',
    shape: 'rounded',
    loading: false,
    disabled: false,
    fullWidth: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Playground Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Create Account',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create Account',
  },
};
