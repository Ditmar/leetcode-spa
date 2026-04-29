import { Box } from '@mui/material';

import { Collapsible } from './Collapsible';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  decorators: [
    (Story) => (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const FigmaMatch: Story = {
  name: 'Figma Match Demo',
  args: {
    title: '@peduarte starred 3 repositories',
    items: ['@radix-ui/primitives', '@radix-ui/colors', '@radix-ui/themes'],
  },
};
