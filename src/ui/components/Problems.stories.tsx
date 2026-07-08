import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import ProblemsPage from './Problems';

import type { Meta, StoryObj } from '@storybook/react';

const NAV_ROUTES = ['/', '/explore', '/problems', '/contest', '/discuss'];

const meta: Meta<typeof ProblemsPage> = {
  title: 'pages/ProblemsPage',
  component: ProblemsPage,
  decorators: [
    (Story) => (
      <ClientOnlyMuiProvider>
        <Story />
      </ClientOnlyMuiProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location.',
      },
    },
  },
  argTypes: {
    currentPath: {
      control: 'select',
      options: NAV_ROUTES,
      description: 'Route highlighted as active in the NavShell navigation bar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/problems' },
      },
    },
  },
  args: {
    currentPath: '/problems',
  },
};

export default meta;
type Story = StoryObj<typeof ProblemsPage>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.',
      },
    },
  },
};

export const InactiveNavigation: Story = {
  args: {
    currentPath: '/',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.',
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
        story:
          'Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout.',
      },
    },
  },
};
