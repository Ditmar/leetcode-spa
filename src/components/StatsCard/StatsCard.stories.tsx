import { Assessment, Edit } from '@mui/icons-material';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../../style-library/theme/theme';

import { StatsCard } from './StatsCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StatsCard> = {
  title: 'Components/StatsCard',
  component: StatsCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof StatsCard>;

export const Default: Story = {
  args: {
    value: '32',
    label: 'Tests Written',
  },
};

export const OverallAverage: Story = {
  args: {
    icon: <Assessment fontSize="large" />,
    value: '80%',
    label: 'Overall Average',
  },
};

export const WithCustomIcon: Story = {
  args: {
    icon: <Edit fontSize="large" />,
    value: '42',
    label: 'Custom Icon',
  },
};

export const MultipleCards: Story = {
  render: () => (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        padding: 4,
        backgroundColor: (theme) => theme.palette.background.default,
        borderRadius: 2,
        flexWrap: 'wrap',
      }}
    >
      <StatsCard value="32" label="Tests Written" />
      <StatsCard value="80%" label="Overall Average" />
    </Box>
  ),
};

export const CardsInGrid: Story = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gap: 2,
        padding: 4,
        backgroundColor: (theme) => theme.palette.background.default,
        borderRadius: 2,
        maxWidth: { xs: '100%', md: '1000px' },
      }}
    >
      <StatsCard value="32" label="Tests Written" />
      <StatsCard value="80%" label="Overall Average" />
      <StatsCard value="15" label="Projects" />
      <StatsCard value="95%" label="Success Rate" />
    </Box>
  ),
};

export const NoIcon: Story = {
  args: {
    value: '100',
    label: 'No Icon Example',
  },
};
