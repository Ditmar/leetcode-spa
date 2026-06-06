import type { Problem } from './ProblemList.types';

export const MOCK_PROBLEMS: Problem[] = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', acceptanceRate: 49.2, status: 'solved' },
  {
    id: 2,
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    acceptanceRate: 41.8,
    status: 'attempted',
  },
  {
    id: 3,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    acceptanceRate: 33.9,
    status: 'unsolved',
  },
  {
    id: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    acceptanceRate: 38.2,
    status: 'unsolved',
  },
  {
    id: 5,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    acceptanceRate: 40.1,
    status: 'unsolved',
  },
  {
    id: 6,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    acceptanceRate: 62.3,
    status: 'unsolved',
  },
];
