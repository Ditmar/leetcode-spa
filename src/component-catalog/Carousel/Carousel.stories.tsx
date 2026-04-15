import { Box } from '@mui/material';

import Carousel from './Carousel';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const Slide1 = () => <Box sx={{ height: 200, bgcolor: 'red' }}>Slide 1</Box>;

const Slide2 = () => <Box sx={{ height: 200, bgcolor: 'blue' }}>Slide 2</Box>;

const Slide3 = () => <Box sx={{ height: 200, bgcolor: 'green' }}>Slide 3</Box>;

const slides = [<Slide1 key={1} />, <Slide2 key={2} />, <Slide3 key={3} />];

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

const OnlySlide = () => <Box sx={{ height: 200, bgcolor: 'purple' }}>Only</Box>;

export const SingleSlide: Story = {
  args: {
    children: [<OnlySlide key={1} />],
  },
};
