
import { Box } from '@mui/material';

import LoginPage from './LoginPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <LoginPage />
    </Box>
  ),
};

