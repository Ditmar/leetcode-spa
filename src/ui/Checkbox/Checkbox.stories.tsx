import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Box, Typography, Paper } from '@mui/material';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const MaterialStyle: Story = {
  render: () => (
    <Box
      sx={{
        p: 3,
        backgroundColor: '#f5f5f5',
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
          borderRadius: 4,
          backgroundColor: '#fafafa',
          border: '1px solid',
          borderColor: 'divider',
          maxWidth: 360,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Checkbox label="Accept terms and conditions" />
          <Checkbox label="Receive marketing emails" />
          <Checkbox label="Disabled option" disabled />
        </Box>
      </Paper>
    </Box>
  ),
};