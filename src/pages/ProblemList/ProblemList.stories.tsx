import { Box } from '@mui/material';
import React from 'react';

import { ProblemList } from './ProblemList';

import type { Problem } from './ProblemList.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProblemList> = {
  title: 'Components/ProblemList',
  component: ProblemList,
  decorators: [
    (Story) => (
      <Box sx={{ height: '90vh', display: 'flex', bgcolor: 'background.default' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProblemList>;

const sampleProblems: Problem[] = [
  {
    id: 1,
    idNumber: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    acceptanceRate: 49.2,
    status: 'solved',
  },
  {
    id: 2,
    idNumber: 2,
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    acceptanceRate: 41.8,
    status: 'attempted',
  },
  {
    id: 3,
    idNumber: 3,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    acceptanceRate: 33.9,
    status: 'attempted',
  },
  {
    id: 4,
    idNumber: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    acceptanceRate: 38.2,
    status: 'unsolved',
  },
  {
    id: 5,
    idNumber: 5,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    acceptanceRate: 40.1,
    status: 'solved',
  },
  {
    id: 6,
    idNumber: 6,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    acceptanceRate: 62.3,
    status: 'unsolved',
  },
];

export const Default: Story = {
  args: {
    problems: sampleProblems,
    selectedProblemId: 1,
    onSelectProblem: () => {},
  },
};

export const AllStatuses: Story = {
  args: {
    problems: sampleProblems,
    selectedProblemId: 4,
    onSelectProblem: () => {},
  },
};

export const SelectedItem: Story = {
  args: {
    problems: sampleProblems,
    selectedProblemId: 2,
    onSelectProblem: () => {},
  },
};

export const MobileDrawer: Story = {
  args: {
    problems: sampleProblems,
    selectedProblemId: 1,
    onSelectProblem: () => {},
  },
};

export const EmptyList: Story = {
  args: {
    problems: [],
    selectedProblemId: 0,
    onSelectProblem: () => {},
  },
};
