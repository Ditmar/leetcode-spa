import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
  {
    id: 8,
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    acceptance: 51.8,
    status: 'unsolved',
    tags: ['Dynamic Programming'],
  },
  {
    id: 9,
    title: 'Binary Tree Inorder Traversal',
    difficulty: 'Easy',
    acceptance: 73.5,
    status: 'unsolved',
    tags: ['Tree', 'Stack'],
  },
  {
    id: 10,
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    acceptance: 54.1,
    status: 'attempted',
    tags: ['Array'],
  },
  {
    id: 11,
    title: 'Word Break',
    difficulty: 'Medium',
    acceptance: 45.0,
    status: 'unsolved',
    tags: ['Dynamic Programming'],
  },
  {
    id: 12,
    title: 'Number of Islands',
    difficulty: 'Medium',
    acceptance: 58.7,
    status: 'unsolved',
    tags: ['Depth-First Search'],
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
    isLoading: false,
    //onSelectProblem: (_id: number) => {},
    onNavigateToCode: () => {},
  },
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ProblemsPage>;

export const Default: Story = {};

export const AllFiltersApplied: Story = {
  parameters: {
    docs: { description: { story: 'All filter dropdowns active simultaneously.' } },
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
  args: { isLoading: true, problems: [] },
  parameters: {
    docs: {
      description: {
        story:
          'isLoading=true — skeleton placeholders replace real rows and all controls are disabled.',
      },
    },
  },
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
