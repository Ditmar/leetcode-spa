import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';

import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const slides = [
  <Box key={1} sx={{ height: 200, bgcolor: 'red' }}>Slide 1</Box>,
  <Box key={2} sx={{ height: 200, bgcolor: 'blue' }}>Slide 2</Box>,
  <Box key={3} sx={{ height: 200, bgcolor: 'green' }}>Slide 3</Box>,
];

export const Default: Story = {
  args: {
    children: slides,
  },
};

export const AutoPlay: Story = {
  args: {
    children: slides,
    autoPlay: true,
    interval: 2000,
  },
};

export const SingleSlide: Story = {
  args: {
    children: [
      <Box key={1} sx={{ height: 200, bgcolor: 'purple' }}>Only</Box>,
    ],
  },
};