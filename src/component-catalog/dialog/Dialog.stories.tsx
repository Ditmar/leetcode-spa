import type { Meta, StoryObj } from '@storybook/react';
import { Button, TextField } from '@mui/material';

import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'component-catalog/Dialog',
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    open: true,
    title: 'Dialog Title',
    description: 'This is a dialog description. You can put any content here.',
    children: <TextField fullWidth placeholder="Enter your name" />,
    actions: (
      <>
        <Button variant="contained" fullWidth>
          Save changes
        </Button>
        <Button variant="outlined" fullWidth>
          Cancel
        </Button>
      </>
    ),
  },
};