import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

import { Badge } from './Badge';

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

const meta = {
  title: 'Component Catalog/Badges',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  render: (args) =>
    args.display === 'attached' ? (
      <Badge {...args}>
        <Target />
      </Badge>
    ) : (
      <Badge {...args} />
    ),
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

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
    display: 'attached',
    badgeContent: 8,
    color: 'primary',
  },
};

export const MaxOverflow: Story = {
  args: {
    display: 'attached',
    badgeContent: 120,
    max: 99,
    color: 'default',
  },
};

export const DotVariant: Story = {
  args: {
    display: 'attached',
    variant: 'dot',
    color: 'success',
  },
};

export const TopLeft: Story = {
  args: {
    display: 'attached',
    badgeContent: 4,
    color: 'info',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
  },
};

export const BottomRight: Story = {
  args: {
    display: 'attached',
    badgeContent: 4,
    color: 'warning',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
  },
};

export const BottomLeft: Story = {
  args: {
    display: 'attached',
    badgeContent: 4,
    color: 'secondary',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
  },
};

export const MUIColorVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      <Badge display="attached" badgeContent={1} color="default">
        <Target />
      </Badge>
      <Badge display="attached" badgeContent={1} color="primary">
        <Target />
      </Badge>
      <Badge display="attached" badgeContent={1} color="secondary">
        <Target />
      </Badge>
      <Badge display="attached" badgeContent={1} color="error">
        <Target />
      </Badge>
      <Badge display="attached" badgeContent={1} color="info">
        <Target />
      </Badge>
      <Badge display="attached" badgeContent={1} color="success">
        <Target />
      </Badge>
      <Badge display="attached" badgeContent={1} color="warning">
        <Target />
      </Badge>
    </Box>
  ),
};
