import type { ExploreTopic } from './ExplorePage.types';

export const EXPLORE_CATEGORIES = ['All', 'Data Structures', 'Algorithms'] as const;

export const EXPLORE_DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;

export const EXPLORE_TOPICS: ExploreTopic[] = [
  {
    id: 'arrays-101',
    icon: 'arrays',
    title: 'Arrays 101',
    description: 'Learn the basics of array manipulation, traversal, and common patterns.',
    category: 'Data Structures',
    difficulty: 'Beginner',
    progress: 8,
    totalProblems: 12,
  },
  {
    id: 'linked-list',
    icon: 'linkedList',
    title: 'Linked List',
    description: 'Master linked list operations including insertion, deletion, and reversal.',
    category: 'Data Structures',
    difficulty: 'Intermediate',
    progress: 3,
    totalProblems: 10,
  },
  {
    id: 'binary-search',
    icon: 'search',
    title: 'Binary Search',
    description: 'Understand binary search and its applications in various scenarios.',
    category: 'Algorithms',
    difficulty: 'Intermediate',
    progress: 0,
    totalProblems: 15,
  },
  {
    id: 'hash-table',
    icon: 'hash',
    title: 'Hash Table',
    description: 'Learn to use hash tables for efficient lookups and data organization.',
    category: 'Data Structures',
    difficulty: 'Beginner',
    progress: 5,
    totalProblems: 8,
  },
  {
    id: 'recursion',
    icon: 'recursion',
    title: 'Recursion',
    description: 'Master recursive thinking and solve problems using recursive approaches.',
    category: 'Algorithms',
    difficulty: 'Intermediate',
    progress: 2,
    totalProblems: 12,
  },
  {
    id: 'dynamic-programming',
    icon: 'dp',
    title: 'Dynamic Programming',
    description: 'Learn DP patterns and solve optimization problems efficiently.',
    category: 'Algorithms',
    difficulty: 'Advanced',
    progress: 0,
    totalProblems: 20,
  },
];
