import Box from '@mui/material/Box';
import type { Meta, StoryObj } from '@storybook/react';

import { ProblemDetail } from './ProblemDetail';
import type { Problem } from './ProblemDetail.types';

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
          width: { xs: '100vw', sm: 420, md: 460 },
          height: 620,
          bgcolor: 'background.paper',
          border: 1,
          borderColor: 'divider',
          overflow: 'hidden',
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
    'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation:
        'Because nums[0] + nums[1] == 9, we return [0, 1].',
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
    },
    {
      input: 'nums = [3,3], target = 6',
      output: '[0,1]',
    },
  ],
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9',
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
    'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.',
  examples: [
    {
      input: 'l1 = [2,4,3], l2 = [5,6,4]',
      output: '[7,0,8]',
      explanation: '342 + 465 = 807.',
    },
    {
      input: 'l1 = [0], l2 = [0]',
      output: '[0]',
    },
  ],
  constraints: [
    'The number of nodes in each linked list is in the range [1, 100].',
    '0 <= Node.val <= 9',
    'The list represents a number without leading zeroes.',
  ],
  acceptance: 41.8,
  status: 'attempted',
};

const longestSubstringProblem: Problem = {
  id: 3,
  title: 'Longest Substring Without Repeating',
  difficulty: 'Medium',
  tags: ['Hash Table', 'String', 'Sliding Window'],
  description:
    'Given a string s, find the length of the longest substring without repeating characters.',
  examples: [
    {
      input: 's = "abcabcbb"',
      output: '3',
      explanation: 'The answer is "abc", with the length of 3.',
    },
    {
      input: 's = "bbbbb"',
      output: '1',
    },
  ],
  constraints: [
    '0 <= s.length <= 5 * 10^4',
    's consists of English letters, digits, symbols and spaces.',
  ],
  acceptance: 33.9,
  status: 'unsolved',
};

const medianProblem: Problem = {
  id: 4,
  title: 'Median of Two Sorted Arrays',
  difficulty: 'Hard',
  tags: ['Array', 'Binary Search', 'Divide and Conquer'],
  description:
    'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
  examples: [
    {
      input: 'nums1 = [1,3], nums2 = [2]',
      output: '2.00000',
      explanation: 'Merged array = [1,2,3] and median is 2.',
    },
    {
      input: 'nums1 = [1,2], nums2 = [3,4]',
      output: '2.50000',
    },
  ],
  constraints: [
    'nums1.length == m',
    'nums2.length == n',
    '0 <= m <= 1000',
    '0 <= n <= 1000',
    '1 <= m + n <= 2000',
  ],
  acceptance: 38.2,
  status: 'unsolved',
};

const validParenthesesProblem: Problem = {
  id: 5,
  title: 'Valid Parentheses',
  difficulty: 'Easy',
  tags: ['String', 'Stack'],
  description:
    'Given a string s containing just the characters parentheses and brackets, determine if the input string is valid.',
  examples: [
    {
      input: 's = "()"',
      output: 'true',
    },
    {
      input: 's = "()[]{}"',
      output: 'true',
    },
    {
      input: 's = "(]"',
      output: 'false',
    },
  ],
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of parentheses only.',
  ],
  acceptance: 40.1,
  status: 'unsolved',
};

const mergeTwoSortedListsProblem: Problem = {
  id: 6,
  title: 'Merge Two Sorted Lists',
  difficulty: 'Easy',
  tags: ['Linked List', 'Recursion'],
  description:
    'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.',
  examples: [
    {
      input: 'list1 = [1,2,4], list2 = [1,3,4]',
      output: '[1,1,2,3,4,4]',
    },
    {
      input: 'list1 = [], list2 = []',
      output: '[]',
    },
  ],
  constraints: [
    'The number of nodes in both lists is in the range [0, 50].',
    '-100 <= Node.val <= 100',
    'Both lists are sorted in non-decreasing order.',
  ],
  acceptance: 62.3,
  status: 'unsolved',
};

export const EasyProblem: Story = {
  name: '1. Two Sum',
  args: {
    problem: twoSumProblem,
  },
};

export const MediumProblem: Story = {
  name: '2. Add Two Numbers',
  args: {
    problem: addTwoNumbersProblem,
  },
};

export const LongestSubstring: Story = {
  name: '3. Longest Substring Without Repeating',
  args: {
    problem: longestSubstringProblem,
  },
};

export const HardProblem: Story = {
  name: '4. Median of Two Sorted Arrays',
  args: {
    problem: medianProblem,
  },
};

export const ValidParentheses: Story = {
  name: '5. Valid Parentheses',
  args: {
    problem: validParenthesesProblem,
  },
};

export const MergeTwoSortedLists: Story = {
  name: '6. Merge Two Sorted Lists',
  args: {
    problem: mergeTwoSortedListsProblem,
  },
};
