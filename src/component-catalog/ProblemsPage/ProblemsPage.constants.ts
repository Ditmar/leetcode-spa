import type { DifficultyFilter, StatusFilter, Problem } from './ProblemsPage.types';

export const ALL_DIFFICULTIES: DifficultyFilter[] = ['All', 'Easy', 'Medium', 'Hard'];

export const ALL_STATUSES: StatusFilter[] = ['All', 'Solved', 'Attempted', 'Unsolved'];

export const ALL_TAGS_SENTINEL = 'All';

export const SEARCH_DEBOUNCE_MS = 300;

export const DRAWER_SPACING_WIDTH = 36;

export const PROBLEMS: Problem[] = [
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
    tags: ['Linked List', 'Math'],
  },
  {
    id: 3,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    acceptance: 33.9,
    status: 'unsolved',
    tags: ['Sliding Window', 'Hash Table', 'String'],
  },
  {
    id: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    acceptance: 38.2,
    status: 'unsolved',
    tags: ['Binary Search', 'Array', 'Divide and Conquer'],
  },
  {
    id: 5,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    acceptance: 40.1,
    status: 'unsolved',
    tags: ['Stack', 'String'],
  },
  {
    id: 6,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    acceptance: 62.3,
    status: 'solved',
    tags: ['Linked List', 'Recursion'],
  },
  {
    id: 7,
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    acceptance: 54.1,
    status: 'attempted',
    tags: ['Array', 'Dynamic Programming'],
  },
  {
    id: 8,
    title: 'Binary Tree Inorder Traversal',
    difficulty: 'Easy',
    acceptance: 73.5,
    status: 'unsolved',
    tags: ['Tree', 'Depth-First Search', 'Stack'],
  },
  {
    id: 9,
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    acceptance: 51.8,
    status: 'unsolved',
    tags: ['Dynamic Programming', 'Math'],
  },
  {
    id: 10,
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    acceptance: 50.3,
    status: 'unsolved',
    tags: ['Array', 'Dynamic Programming', 'Divide and Conquer'],
  },
];
