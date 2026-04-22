import Box from '@mui/material/Box';

import { Badge } from './Badge';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component Catalog/Badges',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
    },
    anchorOrigin: {
      control: 'object',
    },
    badgeContent: {
      control: 'text',
    },
    showZero: {
      control: 'boolean',
    },
    invisible: {
      control: 'boolean',
    },
    max: {
      control: 'number',
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const Target = () => (
  <Box
    sx={{
      width: 40,
      height: 40,
      borderRadius: 1,
      bgcolor: 'grey.300',
    }}
  />
);

export const Numeric: Story = {
  args: {
    badgeContent: 8,
    color: 'primary',
    children: <Target />,
  },
};

export const MaxOverflow: Story = {
  args: {
    badgeContent: 120,
    max: 99,
    color: 'primary',
    children: <Target />,
  },
};

export const DotVariant: Story = {
  args: {
    variant: 'dot',
    color: 'success',
    children: <Target />,
  },
};

export const ColorVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
      <Badge badgeContent={1} color="default">
        <Target />
      </Badge>
      <Badge badgeContent={2} color="primary">
        <Target />
      </Badge>
      <Badge badgeContent={3} color="secondary">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="error">
        <Target />
      </Badge>
      <Badge badgeContent={5} color="info">
        <Target />
      </Badge>
      <Badge badgeContent={6} color="success">
        <Target />
      </Badge>
      <Badge badgeContent={7} color="warning">
        <Target />
      </Badge>
    </Box>
  ),
};

export const TopLeft: Story = {
  args: {
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    children: <Target />,
  },
};

export const TopRight: Story = {
  args: {
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    children: <Target />,
  },
};

export const BottomLeft: Story = {
  args: {
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    children: <Target />,
  },
};

export const BottomRight: Story = {
  args: {
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    children: <Target />,
  },
};

export const Playground: Story = {
  args: {
    badgeContent: 4,
    color: 'primary',
    variant: 'standard',
    max: 99,
    showZero: false,
    invisible: false,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    children: <Target />,
  },
};
