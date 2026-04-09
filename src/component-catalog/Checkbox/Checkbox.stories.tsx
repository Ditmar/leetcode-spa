import { Box, Typography, Paper } from '@mui/material';

import { Checkbox } from './Checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const MaterialStyle: Story = {
  args: {
    label: 'Accept terms and conditions',
    color: 'primary',
  },

  render: (args) => (
    <Box
      sx={{
        p: 3,
        backgroundColor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Checkboxes
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: (theme) => theme.spacing(1),
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          maxWidth: (theme) => theme.spacing(45),
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Checkbox {...args} />
          <Checkbox label="Receive marketing emails" />
          <Checkbox label="Disabled option" disabled />
        </Box>
      </Paper>
    </Box>
  ),
};
