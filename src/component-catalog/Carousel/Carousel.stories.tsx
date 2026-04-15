import { Box } from '@mui/material';

import { Carousel } from './Carousel';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    autoPlay: { control: 'boolean' },
    interval: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    autoPlay: false,
    interval: 3000,
    children: [
      <Box key={1} sx={{ height: 200, width: '100%', bgcolor: 'primary.main' }} />,
      <Box key={2} sx={{ height: 200, width: '100%', bgcolor: 'secondary.main' }} />,
      <Box key={3} sx={{ height: 200, width: '100%', bgcolor: 'success.main' }} />,
    ],
  },
};

export const AutoPlay: Story = {
  args: {
    autoPlay: true,
    interval: 2000,
    children: [
      <Box key={1} sx={{ height: 200, width: '100%', bgcolor: 'primary.main' }} />,
      <Box key={2} sx={{ height: 200, width: '100%', bgcolor: 'secondary.main' }} />,
      <Box key={3} sx={{ height: 200, width: '100%', bgcolor: 'success.main' }} />,
    ],
  },
};

export const SingleSlide: Story = {
  args: {
    autoPlay: false,
    children: [<Box key={1} sx={{ height: 200, width: '100%', bgcolor: 'warning.main' }} />],
  },
};
