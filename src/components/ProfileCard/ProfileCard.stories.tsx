import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { PROFILE_CARD_SIZES, PROFILE_CARD_VARIANTS } from './ProfileCard.constants';
import { Box } from '@mui/material';

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable profile card component for displaying user information and statistics.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(PROFILE_CARD_SIZES),
      description: 'Size variant of the card',
    },
    variant: {
      control: 'select',
      options: Object.keys(PROFILE_CARD_VARIANTS),
      description: 'Layout variant of the card',
    },
    avatarUrl: {
      control: 'text',
      description: 'URL for the user avatar image',
    },
    name: {
      control: 'text',
      description: 'User full name',
    },
    username: {
      control: 'text',
      description: 'User username/handle',
    },
    role: {
      control: 'text',
      description: 'User role or title',
    },
    showStats: {
      control: 'boolean',
      description: 'Whether to show the statistics section',
    },
    stats: {
      control: 'object',
      description: 'User statistics object',
    },
  },
  args: {
    name: 'John Doe',
    username: 'johndoe',
    role: 'Senior Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    size: 'medium',
    variant: 'default',
    showStats: true,
    stats: {
      courses: 12,
      points: 3450,
      ranking: 23,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Interactive playground for testing different ProfileCard configurations */
export const Playground: Story = {};

/** Standard user profile card with all information */
export const Default: Story = {
  args: {
    name: 'Sarah Johnson',
    username: 'sarahjohnson',
    role: 'Product Designer',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    stats: {
      courses: 8,
      points: 2150,
      ranking: 42,
    },
  },
};

/** Profile card without avatar URL - shows initials fallback */
export const NoAvatar: Story = {
  args: {
    name: 'Michael Chen',
    username: 'mchen',
    role: 'Data Scientist',
    avatarUrl: undefined,
    stats: {
      courses: 15,
      points: 4200,
      ranking: 7,
    },
  },
};

/** Profile card with very long name to test truncation */
export const LongName: Story = {
  args: {
    name: 'Alexander Christopher Montgomery III',
    username: 'alexmontgomery',
    role: 'Chief Technology Officer',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
    stats: {
      courses: 25,
      points: 8950,
      ranking: 1,
    },
  },
};

/** Profile card without role */
export const NoRole: Story = {
  args: {
    name: 'Emily Davis',
    username: 'emilyd',
    role: undefined,
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
    stats: {
      courses: 5,
      points: 1200,
      ranking: 156,
    },
  },
};

/** Profile card without statistics */
export const NoStats: Story = {
  args: {
    name: 'Robert Wilson',
    username: 'rwilson',
    role: 'Backend Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    showStats: false,
  },
};

/** Small size variant */
export const SmallSize: Story = {
  args: {
    size: 'small',
    name: 'Lisa Anderson',
    username: 'lisaa',
    role: 'UX Researcher',
    avatarUrl: 'https://i.pravatar.cc/150?img=16',
    stats: {
      courses: 6,
      points: 1800,
      ranking: 89,
    },
  },
};

/** Large size variant */
export const LargeSize: Story = {
  args: {
    size: 'large',
    name: 'David Thompson',
    username: 'dthompson',
    role: 'DevOps Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=18',
    stats: {
      courses: 10,
      points: 3000,
      ranking: 34,
    },
  },
};

/** Compact layout variant */
export const CompactVariant: Story = {
  args: {
    variant: 'compact',
    name: 'Jennifer Martinez',
    username: 'jmartinez',
    role: 'Frontend Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=20',
    stats: {
      courses: 9,
      points: 2700,
      ranking: 56,
    },
  },
};

/** Expanded layout variant */
export const ExpandedVariant: Story = {
  args: {
    variant: 'expanded',
    name: 'Thomas Brown',
    username: 'tbrown',
    role: 'Full Stack Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=22',
    stats: {
      courses: 14,
      points: 4100,
      ranking: 12,
    },
  },
};

/** New user with zero stats */
export const NewUser: Story = {
  args: {
    name: 'New User',
    username: 'newbie',
    role: 'Beginner',
    avatarUrl: undefined,
    stats: {
      courses: 0,
      points: 0,
      ranking: 0,
    },
  },
};

/** Gallery showcasing different size and variant combinations */
export const Gallery: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 2 }}>
      <Box>
        <h3>Size Variations</h3>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <ProfileCard
            size="small"
            name="Small Card"
            username="smalluser"
            role="Developer"
            avatarUrl="https://i.pravatar.cc/150?img=1"
            stats={{ courses: 5, points: 1500, ranking: 45 }}
          />
          <ProfileCard
            size="medium"
            name="Medium Card"
            username="mediumuser"
            role="Designer"
            avatarUrl="https://i.pravatar.cc/150?img=2"
            stats={{ courses: 8, points: 2400, ranking: 23 }}
          />
          <ProfileCard
            size="large"
            name="Large Card"
            username="largeuser"
            role="Manager"
            avatarUrl="https://i.pravatar.cc/150?img=3"
            stats={{ courses: 12, points: 3600, ranking: 10 }}
          />
        </Box>
      </Box>

      <Box>
        <h3>Variant Styles</h3>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <ProfileCard
            variant="default"
            name="Default Layout"
            username="defaultuser"
            role="Engineer"
            avatarUrl="https://i.pravatar.cc/150?img=4"
            stats={{ courses: 7, points: 2100, ranking: 34 }}
          />
          <ProfileCard
            variant="compact"
            name="Compact Layout"
            username="compactuser"
            role="Analyst"
            avatarUrl="https://i.pravatar.cc/150?img=5"
            stats={{ courses: 10, points: 3000, ranking: 18 }}
          />
          <ProfileCard
            variant="expanded"
            name="Expanded Layout"
            username="expandeduser"
            role="Architect"
            avatarUrl="https://i.pravatar.cc/150?img=6"
            stats={{ courses: 15, points: 4500, ranking: 5 }}
          />
        </Box>
      </Box>

      <Box>
        <h3>Edge Cases</h3>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <ProfileCard
            name="No Avatar User"
            username="noavatar"
            role="Tester"
            stats={{ courses: 3, points: 900, ranking: 123 }}
          />
          <ProfileCard
            name="Very Long Name That Should Be Truncated"
            username="verylongusernamethatshouldalsobetruncated"
            role="Senior Principal Staff Engineer"
            avatarUrl="https://i.pravatar.cc/150?img=7"
            stats={{ courses: 20, points: 6000, ranking: 2 }}
          />
          <ProfileCard
            name="No Stats User"
            username="nostats"
            role="Intern"
            avatarUrl="https://i.pravatar.cc/150?img=8"
            showStats={false}
          />
        </Box>
      </Box>
    </Box>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};