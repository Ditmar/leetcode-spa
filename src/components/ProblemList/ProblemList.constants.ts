import type { Problem, ProblemStatus, ProblemDifficulty } from './ProblemList.types';

export const STATUS_COLOR_MAP: Record<ProblemStatus, 'success' | 'warning' | 'disabled'> = {
  solved: 'success',
  attempted: 'warning',
  unsolved: 'disabled',
} as const;

export const DIFFICULTY_COLOR_MAP: Record<ProblemDifficulty, 'success' | 'warning' | 'error'> = {
  Easy: 'success',
  Medium: 'warning',
  Hard: 'error',
} as const;

export const MOCK_PROBLEMS: Problem[] = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy' as ProblemDifficulty,
    acceptanceRate: 49.2,
    status: 'solved' as ProblemStatus,
  },
  {
    id: 2,
    title: 'Add Two Numbers',
    difficulty: 'Medium' as ProblemDifficulty,
    acceptanceRate: 41.8,
    status: 'attempted' as ProblemStatus,
  },
  {
    id: 3,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium' as ProblemDifficulty,
    acceptanceRate: 33.9,
    status: 'unsolved' as ProblemStatus,
  },
  {
    id: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard' as ProblemDifficulty,
    acceptanceRate: 38.2,
    status: 'unsolved' as ProblemStatus,
  },
  {
    id: 5,
    title: 'Valid Parentheses',
    difficulty: 'Easy' as ProblemDifficulty,
    acceptanceRate: 40.1,
    status: 'unsolved' as ProblemStatus,
  },
  {
    id: 6,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy' as ProblemDifficulty,
    acceptanceRate: 62.3,
    status: 'unsolved' as ProblemStatus,
  },
];
