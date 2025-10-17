import { ThemeProvider, createTheme } from '@mui/material';

import { LeaderboardPage } from './LeaderboardPage';

import type { Meta, StoryObj } from '@storybook/react';

const theme = createTheme();

const meta: Meta<typeof LeaderboardPage> = {
  title: 'Components/LeaderboardPage',
  component: LeaderboardPage,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LeaderboardPage>;

export const Default: Story = {
  args: {},
};

export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const WithSearch: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Vista con filtro de búsqueda activo',
      },
    },
  },
};
