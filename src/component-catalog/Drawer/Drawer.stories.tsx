import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

import { Drawer } from './Drawer';
import { drawerStoryContainerSx, storyBodyTextSx } from './Drawer.styles';

import type { CustomDrawerProps } from './Drawer.types';
import type { SxProps, Theme } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

const formContainerSx: SxProps<Theme> = {
  display: 'grid',

  gridTemplateColumns: '1fr',

  gap: (theme) => theme.spacing(2),
};

const formRowSx: SxProps<Theme> = {
  display: 'grid',

  gridTemplateColumns: (theme) => `${theme.spacing(10.5)} 1fr`,

  alignItems: 'center',

  columnGap: (theme) => theme.spacing(1.5),
};

const formLabelSx: SxProps<Theme> = {
  fontSize: '0.875rem',

  lineHeight: '0.875rem',

  fontWeight: 500,

  color: 'var(--foreground)',

  textAlign: 'left',
};

const formFieldSx: SxProps<Theme> = {
  display: 'flex',

  alignItems: 'center',

  minHeight: (theme) => theme.spacing(4.5),

  borderRadius: (theme) => theme.spacing(1),

  backgroundColor: 'var(--input-background)',

  border: '1px solid transparent',

  paddingTop: 0.5,

  paddingBottom: 0.5,

  paddingLeft: 1.5,

  paddingRight: 1.5,

  fontSize: '0.875rem',

  lineHeight: '1.25rem',

  fontWeight: 400,

  color: 'var(--foreground)',
};

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

const DrawerFormContent = () => (
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

const DrawerTemplate = (args: CustomDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={drawerStoryContainerSx}>
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
      <Typography sx={storyBodyTextSx}>
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
      <Typography sx={storyBodyTextSx}>
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
