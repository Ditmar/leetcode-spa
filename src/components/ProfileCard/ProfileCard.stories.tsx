import { ProfileCard } from './ProfileCard';
import { PROFILE_CARD_SIZES, PROFILE_CARD_VARIANTS } from './ProfileCard.constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable profile card component for displaying user information and statistics.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'User full name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    username: {
      control: 'text',
      description: 'User username/handle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    avatarUrl: {
      control: 'text',
      description: 'URL for the user avatar image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    role: {
      control: 'text',
      description: 'User role or title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      control: 'select',
      options: Object.values(PROFILE_CARD_SIZES),
      description: 'Size variant of the card',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    variant: {
      control: 'select',
      options: Object.values(PROFILE_CARD_VARIANTS),
      description: 'Layout variant of the card',
      table: {
        type: { summary: 'default | compact | expanded' },
        defaultValue: { summary: 'default' },
      },
    },
    showStats: {
      control: 'boolean',
      description: 'Whether to show the statistics section',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    stats: {
      control: 'object',
      description: 'User statistics object containing courses, points, and ranking',
      table: {
        type: { summary: '{ courses: number; points: number; ranking: number }' },
        defaultValue: { summary: '{ courses: 0, points: 0, ranking: 0 }' },
      },
    },
    className: {
      control: 'text',
      description: 'Custom CSS class name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    'data-testid': {
      control: 'text',
      description: 'Test ID for testing purposes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'profile-card' },
      },
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
      courses: 3,
      points: 850,
      ranking: -135,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    name: 'John Doe',
    username: 'johndoe',
    role: 'Senior Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    size: 'medium',
    variant: 'default',
    showStats: true,
    stats: {
      courses: 3,
      points: 850,
      ranking: -23,
    },
  },
};

export const Default: Story = {
  args: {
    name: 'Sarah Johnson',
    username: 'sarahjohnson',
    role: 'Product Designer',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    stats: {
      courses: 3,
      points: 850,
      ranking: -124,
    },
  },
};

export const NoAvatar: Story = {
  args: {
    name: 'Michael Chen',
    username: 'mchen',
    role: 'Data Scientist',
    avatarUrl: undefined,
    stats: {
      courses: 15,
      points: 4200,
      ranking: -7,
    },
  },
};

export const LongName: Story = {
  args: {
    name: 'Alexander Christopher Montgomery III',
    username: 'alexmontgomery',
    role: 'Chief Technology Officer',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
    stats: {
      courses: 25,
      points: 8950,
      ranking: -1,
    },
  },
};

export const NoRole: Story = {
  args: {
    name: 'Emily Davis',
    username: 'emilyd',
    role: undefined,
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
    stats: {
      courses: 5,
      points: 1200,
      ranking: -156,
    },
  },
};

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
      ranking: -89,
    },
  },
};

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
      ranking: -34,
    },
  },
};

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
      ranking: -56,
    },
  },
};

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
      ranking: -12,
    },
  },
};

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
