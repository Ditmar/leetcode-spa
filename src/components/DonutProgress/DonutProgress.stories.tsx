import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { DonutProgress } from './DonutProgress';

import type { Meta, StoryObj } from '@storybook/react';

const theme = createTheme();
const meta: Meta<typeof DonutProgress> = {
  title: 'Components/DonutProgress',
  component: DonutProgress,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ padding: 4, display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (0-100)',
    },
    color: {
      control: { type: 'select' },
      options: ['auto', 'primary', 'success', 'error', 'warning', '#9c27b0'],
      description: 'Color scheme for the progress indicator',
    },
    strokeWidth: {
      control: { type: 'range', min: 2, max: 20, step: 1 },
      description: 'Width of the progress stroke',
    },
    animated: {
      control: { type: 'boolean' },
      description: 'Enable smooth animations',
    },
    size: {
      control: { type: 'range', min: 24, max: 200, step: 4 },
      description: 'Size of the donut component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DonutProgress>;

export const Default: Story = {
  args: {
    percentage: 0,
  },
};

export const LowProgress: Story = {
  args: {
    percentage: 28,
    color: 'auto',
  },
};

export const MediumProgress: Story = {
  args: {
    percentage: 60,
    color: 'auto',
  },
};

export const HighProgress: Story = {
  args: {
    percentage: 75,
    color: 'auto',
  },
};

export const PrimaryColor: Story = {
  args: {
    percentage: 75,
    color: 'primary',
  },
};

export const SuccessColor: Story = {
  args: {
    percentage: 90,
    color: 'success',
  },
};

export const ErrorColor: Story = {
  args: {
    percentage: 25,
    color: 'error',
  },
};

export const WarningColor: Story = {
  args: {
    percentage: 55,
    color: 'warning',
  },
};

export const CustomSize: Story = {
  args: {
    percentage: 65,
    size: 100,
    strokeWidth: 15,
  },
};

export const SmallSize: Story = {
  args: {
    percentage: 80,
    size: 38,
    strokeWidth: 6,
  },
};

export const NoAnimation: Story = {
  args: {
    percentage: 80,
    animated: false,
  },
};

export const CustomColor: Story = {
  args: {
    percentage: 45,
    color: '#9c27b0',
  },
};

export const MultipleExamples: Story = {
  render: () => (
    <>
      <DonutProgress percentage={28} color="auto" />
      <DonutProgress percentage={75} color="auto" />
      <DonutProgress percentage={50} color="primary" />
      <DonutProgress percentage={90} color="success" />
    </>
  ),
};
