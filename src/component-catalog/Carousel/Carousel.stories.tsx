import { Box } from '@mui/material';

import { Carousel } from './Carousel';

import type { Meta, StoryObj } from '@storybook/react';

const slideStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '48px',
  fontWeight: 'bold',
  backgroundColor: '#fafafa',
  borderRadius: '16px',
};

const meta: Meta<typeof Carousel> = {
  title: 'Component Catalog/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    autoPlay: { control: 'boolean' },
    autoPlayInterval: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    autoPlay: false,
    autoPlayInterval: 3000,
    children: [
      <Box key={1} sx={slideStyle}>
        1
      </Box>,
      <Box key={2} sx={slideStyle}>
        2
      </Box>,
      <Box key={3} sx={slideStyle}>
        3
      </Box>,
      <Box key={4} sx={slideStyle}>
        4
      </Box>,
    ],
  },
};

export const AutoPlay: Story = {
  args: {
    autoPlay: true,
    autoPlayInterval: 2000,
    children: [
      <Box key={1} sx={slideStyle}>
        1
      </Box>,
      <Box key={2} sx={slideStyle}>
        2
      </Box>,
      <Box key={3} sx={slideStyle}>
        3
      </Box>,
    ],
  },
};

export const SingleSlide: Story = {
  args: {
    autoPlay: false,
    autoPlayInterval: 3000,
    children: [
      <Box key={1} sx={slideStyle}>
        1
      </Box>,
    ],
  },
};
