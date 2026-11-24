import ProblemsPage from './Problems';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProblemsPage> = {
  title: 'pages/ProblemsPage',
  component: ProblemsPage,
  parameters: {
    docs: {
      description: {
        component:
          'Problems page content, wrapped by ClientOnlyMuiProvider. The navigation bar and the footer come from AppLayout.astro, so they are not rendered in this story.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProblemsPage>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default desktop state of the Problems page content.',
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
        story: 'Problems page content rendered on a mobile viewport.',
      },
    },
  },
};
