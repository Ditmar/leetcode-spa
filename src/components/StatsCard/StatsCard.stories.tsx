import type { Meta, StoryObj } from '@storybook/react';
import StatsCard from './StatsCard';
import { StatsCardVariant } from './StatsCard.types';
import { Edit, Star, TrendingUp, People } from '@mui/icons-material';
import { Box } from '@mui/material';

const meta: Meta<typeof StatsCard> = {
  title: 'Components/StatsCard',
  component: StatsCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A card component to display a statistic (e.g., "32 Tests Written") with an icon.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatsCard>;

export const Default: Story = {
  args: {
    icon: <Edit />,
    value: 32,
    label: 'Tests Written',
    variant: StatsCardVariant.PRIMARY,
  },
};

export const Examples: Story = {
  render: () => (
    <Box
      sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}
    >
      <StatsCard icon={<Edit />} value={32} label="Tests" variant={StatsCardVariant.PRIMARY} />
      <StatsCard icon={<Star />} value="1,580" label="Points" variant={StatsCardVariant.SUCCESS} />
      <StatsCard
        icon={<TrendingUp />}
        value="+12%"
        label="Growth"
        variant={StatsCardVariant.WARNING}
      />
      <StatsCard
        icon={<People />}
        value="2.4K"
        label="Users"
        variant={StatsCardVariant.SECONDARY}
      />
    </Box>
  ),
};
