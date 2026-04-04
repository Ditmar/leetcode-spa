import Box from '@mui/material/Box';

import { Badge } from './Badge';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component Catalog/Badges',
  component: Badge,
  parameters: {
    layout: 'centered',
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

export const Default: Story = {
  args: {
    display: 'standalone',
    badgeContent: 'Default',
    tone: 'default',
  },
};

export const Secondary: Story = {
  args: {
    display: 'standalone',
    badgeContent: 'Secondary',
    tone: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    display: 'standalone',
    badgeContent: 'Outline',
    tone: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    display: 'standalone',
    badgeContent: 'Destructive',
    tone: 'destructive',
  },
};

export const Success: Story = {
  args: {
    display: 'standalone',
    badgeContent: 'Success',
    tone: 'success',
  },
};

export const Info: Story = {
  args: {
    display: 'standalone',
    badgeContent: 'Info',
    tone: 'info',
  },
};

export const Warning: Story = {
  args: {
    display: 'standalone',
    badgeContent: 'Warning',
    tone: 'warning',
  },
};

export const Numeric: Story = {
  args: {
    badgeContent: 8,
    children: <Target />,
  },
};

export const MaxOverflow: Story = {
  args: {
    badgeContent: 120,
    max: 99,
    color: 'error',
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

export const TopLeft: Story = {
  args: {
    badgeContent: 4,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    children: <Target />,
  },
};

export const BottomRight: Story = {
  args: {
    badgeContent: 7,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    children: <Target />,
  },
};

export const BottomLeft: Story = {
  args: {
    badgeContent: 3,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    children: <Target />,
  },
};

export const MuiColorVariants: Story = {
  render: () => (
    <Box display="flex" gap={2} flexWrap="wrap">
      <Badge badgeContent={4} color="default">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="primary">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="error">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="info">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="success">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="warning">
        <Target />
      </Badge>
    </Box>
  ),
};
