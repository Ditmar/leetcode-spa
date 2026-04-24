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
    tone: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'destructive', 'success', 'info', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
    },
    display: {
      control: 'select',
      options: ['attached', 'standalone'],
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
    children: <Target />,
  },
};

export const MaxOverflow: Story = {
  args: {
    display: 'attached',
    badgeContent: 120,
    max: 99,
    color: 'default',
    children: <Target />,
  },
};

export const DotVariant: Story = {
  args: {
    display: 'attached',
    variant: 'dot',
    color: 'success',
    children: <Target />,
  },
};

export const TopRight: Story = {
  args: {
    display: 'attached',
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    children: <Target />,
  },
};

export const TopLeft: Story = {
  args: {
    display: 'attached',
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    children: <Target />,
  },
};

export const BottomRight: Story = {
  args: {
    display: 'attached',
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    children: <Target />,
  },
};

export const BottomLeft: Story = {
  args: {
    display: 'attached',
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    children: <Target />,
  },
};

export const Playground: Story = {
  args: {
    display: 'attached',
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
