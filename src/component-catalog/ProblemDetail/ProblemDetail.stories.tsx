import Box from '@mui/material/Box';

import { ProblemDetail } from './ProblemDetail';

import type { Problem } from './ProblemDetail.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProblemDetail> = {
  title: 'Component Catalog/ProblemDetail',
  component: ProblemDetail,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    problem: {
      control: 'object',
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          width: { xs: '100vw', sm: 430, md: 460 },
          height: 640,
          bgcolor: 'var(--background)',
          border: 1,
          borderColor: 'var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProblemDetail>;

const twoSumProblem: Problem = {
  id: 1,
  title: 'Two Sum',
  difficulty: 'Easy',
  tags: ['Array', 'Hash Table'],
  description:
    'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
    },
  ],
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    'Only one valid answer exists.',
  ],
  acceptance: 49.2,
  status: 'unsolved',
};

const addTwoNumbersProblem: Problem = {
  id: 2,
  title: 'Add Two Numbers',
  difficulty: 'Medium',
  tags: ['Linked List', 'Math', 'Recursion'],
  description:
    'You are given two non-empty linked lists representing two non-negative integers.',
  examples: [
    {
      input: 'l1 = [2,4,3], l2 = [5,6,4]',
      output: '[7,0,8]',
      explanation: '342 + 465 = 807.',
    },
  ],
  constraints: [
    'The number of nodes in each linked list is in the range [1, 100].',
    '0 <= Node.val <= 9',
  ],
  acceptance: 41.8,
  status: 'attempted',
};

const medianProblem: Problem = {
  id: 4,
  title: 'Median of Two Sorted Arrays',
  difficulty: 'Hard',
  tags: ['Array', 'Binary Search'],
  description:
    'Given two sorted arrays nums1 and nums2 of size m and n respectively.',
  examples: [
    {
      input: 'nums1 = [1,3], nums2 = [2]',
      output: '2.00000',
    },
  ],
  constraints: [
    '0 <= m <= 1000',
    '0 <= n <= 1000',
    '1 <= m + n <= 2000',
  ],
  acceptance: 38.2,
  status: 'unsolved',
};

export const EasyProblem: Story = {
  args: {
    problem: twoSumProblem,
  },
};

export const MediumProblem: Story = {
  args: {
    problem: addTwoNumbersProblem,
  },
};

export const HardProblem: Story = {
  args: {
    problem: medianProblem,
  },
};
