import ContestPage from './Contest';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContestPage> = {
  title: 'pages/ContestPage',
  component: ContestPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The page currently takes no props; its navigation data comes from the app configuration.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContestPage>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with the page content below.',
      },
    },
  },
};

export const MobileViewport: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout.',
      },
    },
  },
};
