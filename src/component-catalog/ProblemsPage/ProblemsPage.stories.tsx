import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

import { ProblemsPage } from './ProblemsPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProblemsPage> = {
  title: 'Pages/ProblemsPage',
  component: ProblemsPage,
  decorators: [
    (Story) => (
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    onSelectProblem: () => {},
    onNavigateToCode: () => {},
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProblemsPage>;

export const Default: Story = {};

export const AllFiltersApplied: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'All three filter dropdowns active at once. Only Easy + Unsolved + Array tag problems should appear.',
      },
    },
  },
};

export const EmptyState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'When no problems match the active filters the component renders a centred empty-state message and a "Clear Filters" button.',
      },
    },
  },
};

export const LoadingState: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        {/* Skeleton overlay — replace with real loading UI when integrating */}
        <div style={{ opacity: 0.4, pointerEvents: 'none' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Visual representation of the loading state (opacity dimmed). Replace with skeleton components in the production implementation.',
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
      viewports: {
        mobile1: {
          name: 'iPhone SE',
          styles: { width: '375px', height: '812px' },
        },
      },
    },
    docs: {
      description: {
        story:
          'On screens narrower than the md breakpoint the filter bar collapses into a side Drawer triggered by a "Filters" button, and the desktop Table is replaced by a List.',
      },
    },
  },
};
