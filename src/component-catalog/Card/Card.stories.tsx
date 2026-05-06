import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'ComponentCatalog/Card',
  component: Card,

  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },

  argTypes: {
    avatar: { control: false },
    children: { control: false },
    actions: { control: false },
    expandedContent: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subheader: 'Subtitle',
    children: 'This is a card',
  },
};

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
    title: 'Horizontal Card',
    media: 'https://via.placeholder.com/400',
  },
};

export const Expandable: Story = {
  args: {
    title: 'Expandable Card',
    expandable: true,
    expandedContent: 'Hidden content',
  },
};

export const Highlighted: Story = {
  args: {
    customVariant: 'highlighted',
    title: 'Highlighted Card',
    subheader: 'With custom styling',
    children: 'Cards can be customized with different colors and styles.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    children: 'This card includes footer actions.',
    actions: (
      <>
        <Button
          variant="outlined"
          sx={{
            borderColor: 'var(--primary)',
            color: 'var(--primary)',
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            '&:hover': {
              backgroundColor: 'var(--primary)',
              opacity: 0.9,
            },
          }}
        >
          Save
        </Button>
      </>
    ),
  },
};

export const WithAvatar: Story = {
  args: {
    title: 'User Card',
    subheader: 'Developer',
    avatar: <Avatar>A</Avatar>,
  },
};
