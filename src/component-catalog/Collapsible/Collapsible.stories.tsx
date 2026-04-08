import { TextField } from '@mui/material';

import Collapsible from './Collapsible';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const FigmaMatch: Story = {
  args: {
    title: '@peduarte starred 3 repositories',
    children: (
      <TextField
        fullWidth
        placeholder="@radix-ui/primitives"
        size="small"
        disabled
        sx={{ '& .MuiInputBase-root': { borderRadius: '8px' } }}
      />
    ),
  },
};
