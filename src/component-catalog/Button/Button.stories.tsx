import Button from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'component-catalog/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'contained',
  },
};
export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};
export const Text: Story = {
  args: {
    variant: 'text',
  },
};
