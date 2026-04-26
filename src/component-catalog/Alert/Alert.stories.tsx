import { Box } from '@mui/material';

import { Alert } from './Alert';

import type { Meta, StoryObj, Decorator } from '@storybook/react';

const CenteredBoxDecorator: Decorator = (Story) => (
  <Box
    sx={{
      p: 4,
      width: '100%',
      maxWidth: (theme) => theme.breakpoints.values.lg,
      margin: '0 auto',
    }}
  >
    <Story />
  </Box>
);

const meta = {
  title: 'Component-Catalog/Alert',
  component: Alert,
  decorators: [CenteredBoxDecorator],
  argTypes: {
    severity: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllAlertsStacked: Story = {
  args: {
    title: 'Stacked Alerts',
  },
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
