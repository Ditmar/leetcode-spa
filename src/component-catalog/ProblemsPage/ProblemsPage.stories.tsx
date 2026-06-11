const action = (name: string) => () => {
  return `action: ${name}`;
};

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

import { ProblemsPage } from './ProblemsPage';

import type { Problem } from './ProblemsPage.types';
import type { Meta, StoryObj } from '@storybook/react';

const SAMPLE_PROBLEMS: Problem[] = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    acceptance: 49.2,
    status: 'solved',
    tags: ['Array', 'Hash Table'],
  },
  {
    id: 2,
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    acceptance: 41.8,
    status: 'attempted',
    tags: ['Linked List'],
  },
  {
    id: 3,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    acceptance: 33.9,
    status: 'unsolved',
    tags: ['Sliding Window', 'Hash Table'],
  },
  {
    id: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    acceptance: 38.2,
    status: 'unsolved',
    tags: ['Binary Search', 'Array'],
  },
  {
    id: 5,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    acceptance: 40.1,
    status: 'unsolved',
    tags: ['Stack'],
  },
  {
    id: 6,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    acceptance: 62.3,
    status: 'solved',
    tags: ['Linked List'],
  },
  {
    id: 7,
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    acceptance: 50.3,
    status: 'unsolved',
    tags: ['Dynamic Programming'],
  },
];

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
    problems: SAMPLE_PROBLEMS,
    onSelectProblem: action('onSelectProblem'),
    onNavigateToCode: action('onNavigateToCode'),
  },
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ProblemsPage>;

export const Default: Story = {};

export const AllFiltersApplied: Story = {
  parameters: {
    docs: {
      description: { story: 'All filter dropdowns active simultaneously.' },
    },
  },
};

export const EmptyState: Story = {
  args: { problems: [] },
  parameters: {
    docs: {
      description: {
        story: 'Empty dataset — renders the empty-state message and Clear Filters button.',
      },
    },
  },
};

export const LoadingState: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <div style={{ opacity: 0.4, pointerEvents: 'none' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
      viewports: {
        mobile1: { name: 'iPhone SE', styles: { width: '375px', height: '812px' } },
      },
    },
  },
};
