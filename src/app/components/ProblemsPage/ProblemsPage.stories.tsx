import { ProblemsPage } from './ProblemsPage';

import type { Problem } from '../../../services/problems/problemsService.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProblemsPage> = {
  title: 'Components/ProblemsPage',
  component: ProblemsPage,
};

export default meta;

type Story = StoryObj<typeof ProblemsPage>;

const mockProblems: Problem[] = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', tags: ['array', 'hash-table'], status: 'solved' },
  {
    id: 2,
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    tags: ['linked-list'],
    status: 'attempted',
  },
  {
    id: 3,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    tags: ['array', 'binary-search'],
  },
];

// Shows the page with a list of problems pre-loaded (SSR simulation)
export const Default: Story = {
  args: {
    initialProblems: mockProblems,
    initialMeta: { page: 1, pageSize: 20, total: 3, totalPages: 1 },
    initialFilters: {},
  },
};

// Shows the page with multiple pages available
export const WithPagination: Story = {
  args: {
    initialProblems: mockProblems,
    initialMeta: { page: 2, pageSize: 3, total: 9, totalPages: 3 },
    initialFilters: { page: 2 },
  },
};

// Shows empty state when no problems match the filters
export const Empty: Story = {
  args: {
    initialProblems: [],
    initialMeta: { page: 1, pageSize: 20, total: 0, totalPages: 0 },
    initialFilters: { search: 'nonexistent' },
  },
};
