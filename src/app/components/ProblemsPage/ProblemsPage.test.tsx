import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ProblemsPage } from './ProblemsPage';

import type { Problem } from '../../../services/problems/problemsService.types';

const mockProblems: Problem[] = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', tags: ['array', 'hash-table'], status: 'solved' },
  { id: 2, title: 'Add Two Numbers', difficulty: 'Medium', tags: ['linked-list'] },
];

const mockMeta = {
  page: 1,
  pageSize: 20,
  total: 2,
  totalPages: 1,
};

describe('ProblemsPage', () => {
  it('renders the problems table with initial data', () => {
    render(
      <ProblemsPage initialProblems={mockProblems} initialMeta={mockMeta} initialFilters={{}} />
    );

    expect(screen.getByRole('table', { name: 'Problems' })).toBeInTheDocument();
    expect(screen.getByText('Two Sum')).toBeInTheDocument();
    expect(screen.getByText('Add Two Numbers')).toBeInTheDocument();
  });

  it('renders filter controls', () => {
    render(
      <ProblemsPage initialProblems={mockProblems} initialMeta={mockMeta} initialFilters={{}} />
    );

    expect(screen.getByLabelText('Search problems')).toBeInTheDocument();
    expect(screen.getByLabelText('Filter by difficulty')).toBeInTheDocument();
    expect(screen.getByLabelText('Filter by status')).toBeInTheDocument();
    expect(screen.getByLabelText('Filter by tag')).toBeInTheDocument();
  });

  it('shows empty state when there are no problems', () => {
    render(
      <ProblemsPage
        initialProblems={[]}
        initialMeta={{ ...mockMeta, total: 0 }}
        initialFilters={{}}
      />
    );

    expect(screen.getByText('No problems found.')).toBeInTheDocument();
  });

  it('shows pagination info', () => {
    render(
      <ProblemsPage initialProblems={mockProblems} initialMeta={mockMeta} initialFilters={{}} />
    );

    expect(screen.getByText('Page 1 of 1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Previous' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  });

  it('calls onSelectProblem when a row is clicked', async () => {
    const onSelectProblem = vi.fn();

    render(
      <ProblemsPage
        initialProblems={mockProblems}
        initialMeta={mockMeta}
        initialFilters={{}}
        onSelectProblem={onSelectProblem}
      />
    );

    screen.getByText('Two Sum').click();

    expect(onSelectProblem).toHaveBeenCalledWith(1);
  });
});
