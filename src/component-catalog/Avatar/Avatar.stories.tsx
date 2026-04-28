import { Box } from '@mui/material';
import React from 'react';

import { Avatar } from './Avatar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'component-catalog/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: 'MD',
    size: 'md',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'JD',
    size: 'lg',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'AB',
    size: 'lg',
    variant: 'success',
  },
};

export const Showcase: Story = {
  render: () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
      }}
    >
      <Avatar size="sm" variant="default">
        SM
      </Avatar>
      <Avatar size="md" variant="default">
        MD
      </Avatar>
      <Avatar size="lg" variant="primary">
        JD
      </Avatar>
      <Avatar size="xl" variant="success">
        AB
      </Avatar>
    </Box>
  ),
};
