import { Box } from '@mui/material';

import { InputOTP } from './InputOTP';

import type { Meta, StoryObj } from '@storybook/react';

const CenterDecorator = (Story: any) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100%">
      <Story />
    </Box>
  );
};

const meta: Meta<typeof InputOTP> = {
  title: 'component-catalog/InputOTP',
  component: InputOTP,
  decorators: [CenterDecorator],
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Primary: Story = {
  args: {
    length: 6,
  },
};

export const Disabled: Story = {
  args: {
    length: 6,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    length: 6,
    error: true,
  },
};
