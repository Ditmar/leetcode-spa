import { Box } from '@mui/material';

import { LeaderboardPage } from './LeaderboardPage';

import type { Meta, StoryObj } from '@storybook/react';

/* 
  ESLint rule exception:
  Storybook requires a default export for CSF (Component Story Format) files.
  This default export defines story metadata (title, component, etc.)
  and is mandatory for Storybook to index stories correctly.
  Disable 'import/no-default-export' for this file only.
*/

const meta: Meta<typeof LeaderboardPage> = {
  title: 'Components/LeaderboardPage',
  component: LeaderboardPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.default',
          minHeight: '100vh',
        }}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta; // ✅ requerido por Storybook

type Story = StoryObj<typeof LeaderboardPage>;

export const Default: Story = {
  args: {
    currentUserId: 'user-3',
  },
};

export const MobileView: Story = {
  args: {
    currentUserId: 'user-3',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
};
