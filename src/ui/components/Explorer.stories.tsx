import ExplorePage from './Explorer';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ExplorePage> = {
  title: 'pages/ExplorePage',
  component: ExplorePage,
  parameters: {
    docs: {
      description: {
        component:
          'Explore page content, wrapped by ClientOnlyMuiProvider. The navigation bar and the footer come from AppLayout.astro, so they are not rendered in this story.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExplorePage>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default desktop state of the Explore page content.',
      },
    },
  },
};

export const MobileViewport: Story = {
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Explore page content rendered on a mobile viewport.',
      },
    },
  },
};
