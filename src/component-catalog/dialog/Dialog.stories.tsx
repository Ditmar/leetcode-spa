import { Button, TextField, Typography, Box } from '@mui/material';
import React from 'react';

import { Dialog } from './Dialog';

import type { Meta, StoryObj } from '@storybook/react';

const CenterDecorator: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px',
      width: '100%',
      bgcolor: 'background.default',
    }}
  >
    {children}
  </Box>
);

const handleClose = () => {};

const meta: Meta<typeof Dialog> = {
  title: 'component-catalog/Dialog',
  component: Dialog,
  decorators: [
    (Story) => (
      <CenterDecorator>
        <Story />
      </CenterDecorator>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dialog>;
export const Base: Story = {
  name: '1. Base Structure',
  args: {
    open: true,
    title: 'Dialog Title',
    onClose: handleClose,
  },
};
export const OnlyContent: Story = {
  name: '2. Content Space',
  args: {
    open: true,
    title: 'Dialog with Content',
    description: 'This is the dedicated space for description or form instructions.',
    children: (
      <Box
        sx={{
          p: 2,
          border: (theme) => `1px dashed ${theme.palette.divider}`,
          textAlign: 'center',
        }}
      >
        <Typography>Body message or inputs go here</Typography>
      </Box>
    ),
    onClose: handleClose,
  },
};
export const OnlyButtons: Story = {
  name: '3. Actions Space',
  args: {
    open: true,
    title: 'Dialog with Buttons',
    actions: (
      <>
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[900],
            color: (theme) => theme.palette.common.white,
            '&:hover': {
              backgroundColor: (theme) => theme.palette.grey[800],
            },
          }}
        >
          Main Action
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            color: 'text.primary',
            borderColor: 'divider',
          }}
        >
          Cancel
        </Button>
      </>
    ),
    onClose: handleClose,
  },
};
export const Complete: Story = {
  name: '4. Final Implementation',
  args: {
    open: true,
    title: 'Dialog Title',
    description: 'This is a dialog description. You can put any content here.',
    children: (
      <TextField
        fullWidth
        label="Name"
        placeholder="Enter your name"
        variant="outlined"
        margin="normal"
      />
    ),
    actions: (
      <>
        <Button
          fullWidth
          variant="contained"
          sx={{
            mb: 1,
            backgroundColor: (theme) => theme.palette.grey[900],
            color: (theme) => theme.palette.common.white,
            '&:hover': {
              backgroundColor: (theme) => theme.palette.grey[800],
            },
          }}
        >
          Save changes
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            borderColor: 'divider',
            color: 'text.primary',
          }}
        >
          Cancel
        </Button>
      </>
    ),
    onClose: handleClose,
  },
};
