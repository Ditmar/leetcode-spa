import { ThemeProvider, CssBaseline } from '@mui/material';

import theme from '../../style-library/theme/theme';

import { StatsPanel } from './StatsPanel';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StatsPanel> = {
  title: 'components/StatsPanel',
  component: StatsPanel,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StatsPanel>;

export const Default: Story = {
  args: {
    totalTests: 32,
    passed: 12,
    failed: 19,
    waiting: 1,
  },
};

export const AllPassed: Story = {
  args: {
    totalTests: 20,
    passed: 20,
    failed: 0,
    waiting: 0,
  },
};

export const MixedResults: Story = {
  args: {
    totalTests: 40,
    passed: 25,
    failed: 10,
    waiting: 5,
  },
};
