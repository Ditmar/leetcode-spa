import SendIcon from '@mui/icons-material/Send';

import { Button } from './Button';

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
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
};

export const ContainedSmall: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
    size: 'small',
  },
};

export const ContainedIcon: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
    startIcon: <SendIcon />,
  },
};
