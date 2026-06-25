import AppProvider from '../../../context/AppConfigContext';
import ContestPage from './ContestPage';

import type { Meta, StoryObj } from '@storybook/react';

// Mock data for Storybook stories
const mockContest = {
  id: 1,
  title: 'Sample Contest',
  status: 'active' as const,
  startTime: '2026-06-01T00:00:00Z',
  endTime: '2026-06-02T00:00:00Z',
  problems: [],
};

const meta: Meta<typeof ContestPage> = {
  title: 'Pages/ContestPage',
  component: ContestPage,
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ContestPage>;

// Shows all three contest sections populated
export const Complete: Story = {
  args: {
    activeContests: [mockContest],
    upcomingContests: [{ ...mockContest, id: 2, status: 'upcoming' as const }],
    pastContests: [{ ...mockContest, id: 3, status: 'past' as const }],
  },
};

// Shows empty state when no contests exist
export const Empty: Story = {
  args: {
    activeContests: [],
    upcomingContests: [],
    pastContests: [],
  },
};