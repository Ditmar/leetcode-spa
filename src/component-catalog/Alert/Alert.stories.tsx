import { Box } from '@mui/material';

import { Alert } from './Alert';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component-Catalog/Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, width: '100%', maxWidth: '1216px', margin: '0 auto' }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    severity: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    severity: 'info',
    title: 'Information',
    children: 'This is a standard informational alert message.',
  },
};

export const Success: Story = {
  args: {
    severity: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully!',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    title: 'Warning',
    children: 'Please review your information before submitting.',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.',
  },
};

export const TitleOnly: Story = {
  args: {
    severity: 'info',
    title: 'This is a compact alert without a description.',
  },
};
export const AllAlertsStacked: Story = {
  args: {
    title: 'Stacked Alerts',
  },
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert severity="info" title="Information">
        This is a standard informational alert message.
      </Alert>
      <Alert severity="success" title="Success">
        Your changes have been saved successfully!
      </Alert>
      <Alert severity="warning" title="Warning">
        Please review your information before submitting.
      </Alert>
      <Alert severity="error" title="Error">
        Something went wrong. Please try again.
      </Alert>
    </Box>
  ),
};
