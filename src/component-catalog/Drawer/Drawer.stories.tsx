import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

import { Drawer } from './Drawer';
import { formContainerSx, formFieldSx, formLabelSx, formRowSx } from './Drawer.styles';

import type { CustomDrawerProps } from './Drawer.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  title: 'component-catalog/Drawer',

  component: Drawer,

  parameters: {
    layout: 'fullscreen',

    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const DrawerFormContent = () => {
  return (
    <Box sx={formContainerSx}>
      <Box sx={formRowSx}>
        <Typography sx={formLabelSx}>Name</Typography>

        <Box sx={formFieldSx}>Pedro Duarte</Box>
      </Box>

      <Box sx={formRowSx}>
        <Typography sx={formLabelSx}>Username</Typography>

        <Box sx={formFieldSx}>@peduarte</Box>
      </Box>
    </Box>
  );
};

const DrawerTemplate = (args: CustomDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        minHeight: '100vh',

        backgroundColor: 'var(--background)',
      }}
    >
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>

      <Drawer {...args} open={isOpen} onClose={() => setIsOpen(false)}>
        {args.children}
      </Drawer>
    </Box>
  );
};

export const Right: Story = {
  render: DrawerTemplate,

  args: {
    anchor: 'right',

    title: 'Edit profile',

    description: "Make changes to your profile here. Click save when you're done.",

    variant: 'temporary',

    children: <DrawerFormContent />,
  },
};

export const Left: Story = {
  render: DrawerTemplate,

  args: {
    anchor: 'left',

    title: 'Navigation',

    description: 'Responsive navigation drawer.',

    variant: 'temporary',

    children: <DrawerFormContent />,
  },
};

export const Top: Story = {
  render: DrawerTemplate,

  args: {
    anchor: 'top',

    title: 'Top Drawer',

    description: 'Top positioned drawer example.',

    variant: 'temporary',

    children: (
      <Typography
        sx={{
          fontSize: '0.875rem',

          lineHeight: '1.25rem',

          color: 'var(--muted-foreground)',
        }}
      >
        Top drawers are useful for contextual navigation and actions.
      </Typography>
    ),
  },
};

export const Bottom: Story = {
  render: DrawerTemplate,

  args: {
    anchor: 'bottom',

    title: 'Drawer Title',

    description: 'This is a drawer component from the bottom.',

    variant: 'temporary',

    children: (
      <Typography
        sx={{
          fontSize: '0.875rem',

          lineHeight: '1.25rem',

          color: 'var(--muted-foreground)',
        }}
      >
        Drawers are useful for mobile experiences and bottom sheets.
      </Typography>
    ),
  },
};

export const Persistent: Story = {
  render: DrawerTemplate,

  args: {
    anchor: 'right',

    title: 'Persistent Drawer',

    description: 'Persistent navigation drawer.',

    variant: 'persistent',

    children: <DrawerFormContent />,
  },
};

export const Permanent: Story = {
  render: DrawerTemplate,

  args: {
    anchor: 'right',

    title: 'Permanent Drawer',

    description: 'Permanent drawer example.',

    variant: 'permanent',

    children: <DrawerFormContent />,
  },
};
