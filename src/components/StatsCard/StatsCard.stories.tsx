import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { Edit, Star, TrendingUp, People } from '@mui/icons-material';
import { StatsCard } from './StatsCard';
import { StatsCardVariant } from './StatsCard.types';

const meta: Meta<typeof StatsCard> = {
  title: 'Components/StatsCard',
  component: StatsCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A card that displays a statistic (icon, value and label) used in dashboards.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(StatsCardVariant),
    },
    animated: { control: 'boolean' },
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
    animated: true,
  },
};

export const Examples: Story = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 2,
      }}
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
