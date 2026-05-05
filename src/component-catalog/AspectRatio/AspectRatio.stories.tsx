import { Box } from '@mui/material';

import { AspectRatio } from './AspectRatio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

const DemoContent = () => (
  <Box
    sx={(theme) => ({
      backgroundColor: theme.palette.grey[300],
      width: '100%',
      height: '100%',
    })}
  />
);

export const Ratio16by9: Story = {
  args: {
    ratio: '16/9',
    children: <DemoContent />,
  },
};

export const Ratio4by3: Story = {
  args: {
    ratio: '4/3',
    children: <DemoContent />,
  },
};

export const Ratio1by1: Story = {
  args: {
    ratio: 1,
    children: <DemoContent />,
  },
};
