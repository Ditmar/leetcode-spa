import ContestPage from './Contest';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContestPage> = {
  title: 'pages/ContestPage',
  component: ContestPage,
  parameters: {
    docs: {
      description: {
        component:
          'Contest page content, wrapped by ClientOnlyMuiProvider. The navigation bar and the footer come from AppLayout.astro, so they are not rendered in this story.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContestPage>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default desktop state of the Contest page content.',
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
        story: 'Contest page content rendered on a mobile viewport.',
      },
    },
  },
};
