import { Box, Button, Stack } from '@mui/material';
import { useState, type ReactNode } from 'react';

import { AlertDialog } from './AlertDialog';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
};

export default meta;

type Story = StoryObj<typeof meta>;

const StoryWrapper = ({ children }: { children: ReactNode }) => (
  <Box>
    <Stack spacing={2} alignItems="flex-start">
      {children}
    </Stack>
  </Box>
);

export const ConfirmCancel: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <StoryWrapper>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Alert Dialog
        </Button>

        <AlertDialog
          open={open}
          title="Delete item"
          description="This action cannot be undone. Please confirm to continue."
          severity="warning"
          showConfirmButton
          showCancelButton
          confirmLabel="Delete"
          cancelLabel="Cancel"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </StoryWrapper>
    );
  },
};

export const Acknowledge: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <StoryWrapper>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Alert Dialog
        </Button>

        <AlertDialog
          open={open}
          title="Changes saved"
          description="Your profile was updated successfully."
          severity="success"
          showAcknowledgeButton
          acknowledgeLabel="Got it"
          onClose={() => setOpen(false)}
          onAcknowledge={() => setOpen(false)}
        />
      </StoryWrapper>
    );
  },
};

export const ErrorState: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <StoryWrapper>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Alert Dialog
        </Button>

        <AlertDialog
          open={open}
          title="Connection lost"
          description="We could not reach the server. Please try again in a moment."
          severity="error"
          showConfirmButton
          showCancelButton
          confirmLabel="Retry"
          cancelLabel="Dismiss"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </StoryWrapper>
    );
  },
};

export const InfoState: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <StoryWrapper>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Alert Dialog
        </Button>

        <AlertDialog
          open={open}
          title="Session information"
          description="Your session will expire in 5 minutes."
          severity="info"
          showAcknowledgeButton
          acknowledgeLabel="Understood"
          onClose={() => setOpen(false)}
          onAcknowledge={() => setOpen(false)}
        />
      </StoryWrapper>
    );
  },
};
