import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { vi, describe, it, expect, afterEach } from 'vitest';

import { ProblemsPage } from './ProblemsPage';

import type { Problem } from './ProblemsPage.types';

const FIXTURE: Problem[] = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    acceptance: 49.2,
    status: 'solved',
    tags: ['Array'],
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
    title: 'Longest Substring',
    difficulty: 'Medium',
    acceptance: 33.9,
    status: 'unsolved',
    tags: ['Sliding Window'],
  },
  {
    id: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    acceptance: 38.2,
    status: 'unsolved',
    tags: ['Binary Search'],
  },
  {
    id: 5,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    acceptance: 40.1,
    status: 'unsolved',
    tags: ['Stack'],
  },
];

const PAGINATED_FIXTURE: Problem[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Problem ${i + 1}`,
  difficulty: 'Easy' as const,
  acceptance: 50,
  status: 'unsolved' as const,
  tags: [],
}));

const theme = createTheme();
afterEach(cleanup);

function setup(overrides: Partial<{ problems: Problem[]; isLoading: boolean }> = {}) {
  const props = {
    problems: overrides.problems ?? FIXTURE,
    isLoading: overrides.isLoading ?? false,
    onSelectProblem: vi.fn(),
    onNavigateToCode: vi.fn(),
  };
  render(
    <ThemeProvider theme={theme}>
      <ProblemsPage {...props} />
    </ThemeProvider>
  );
  return props;
}

function pick(labelRx: RegExp, option: string) {
  fireEvent.mouseDown(screen.getAllByLabelText(labelRx)[0]);
  fireEvent.click(screen.getByRole('option', { name: option }));
}

describe('ProblemsPage — filtering', () => {
  it('renders all problems by default', () => {
    setup();
    FIXTURE.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument());
  });

  it('shows solved / total counter', () => {
    setup();
    expect(screen.getByLabelText('1 of 5 problems solved')).toBeInTheDocument();
  });

  it('filters by search after debounce', async () => {
    setup();
    fireEvent.change(screen.getAllByRole('textbox', { name: /search problems/i })[0], {
      target: { value: 'two sum' },
    });
    await waitFor(
      () => {
        expect(screen.getByText('Two Sum')).toBeInTheDocument();
        expect(screen.queryByText('Add Two Numbers')).not.toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });

  it('filters by difficulty', () => {
    setup();
    pick(/difficulty filter/i, 'Hard');
    expect(screen.getByText('Median of Two Sorted Arrays')).toBeInTheDocument();
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
  });

  it('filters by status', () => {
    setup();
    pick(/status filter/i, 'Solved');
    expect(screen.getByText('Two Sum')).toBeInTheDocument();
    expect(screen.queryByText('Add Two Numbers')).not.toBeInTheDocument();
  });

  it('applies multiple filters simultaneously', () => {
    setup();
    pick(/difficulty filter/i, 'Easy');
    pick(/status filter/i, 'Unsolved');
    expect(screen.getByText('Valid Parentheses')).toBeInTheDocument();
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
  });

  it('shows empty state when nothing matches', async () => {
    setup();
    fireEvent.change(screen.getAllByRole('textbox', { name: /search problems/i })[0], {
      target: { value: 'xyznonexistent' },
    });
    await waitFor(
      () => expect(screen.getByText(/no problems match your filters/i)).toBeInTheDocument(),
      { timeout: 1000 }
    );
  });

  it('calls onSelectProblem when Solve is clicked', () => {
    const { onSelectProblem } = setup();
    pick(/status filter/i, 'Unsolved');
    fireEvent.click(screen.getAllByRole('button', { name: /solve/i })[0]);
    expect(onSelectProblem).toHaveBeenCalledWith(expect.any(Number));
  });

  it('calls onNavigateToCode when Review is clicked', () => {
    const { onNavigateToCode } = setup();
    pick(/status filter/i, 'Solved');
    fireEvent.click(screen.getAllByRole('button', { name: /review/i })[0]);
    expect(onNavigateToCode).toHaveBeenCalled();
  });

  it('resets all filters when Clear is clicked', () => {
    setup();
    pick(/difficulty filter/i, 'Hard');
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('button', { name: /clear/i })[0]);
    expect(screen.getByText('Two Sum')).toBeInTheDocument();
  });

  it('accepts an external problems array (API / prop-injection scenario)', () => {
    const apiData: Problem[] = [
      {
        id: 99,
        title: 'API Problem',
        difficulty: 'Hard',
        acceptance: 10,
        status: 'unsolved',
        tags: [],
      },
    ];
    setup({ problems: apiData });
    expect(screen.getByText('API Problem')).toBeInTheDocument();
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
  });
});

describe('ProblemsPage — pagination', () => {
  it('shows only the first page (default 10 rows) when the dataset exceeds the page size', () => {
    setup({ problems: PAGINATED_FIXTURE });
    expect(screen.getByText('Problem 1')).toBeInTheDocument();
    expect(screen.getByText('Problem 10')).toBeInTheDocument();
    expect(screen.queryByText('Problem 11')).not.toBeInTheDocument();
    expect(screen.queryByText('Problem 12')).not.toBeInTheDocument();
  });

  it('renders the TablePagination control with the correct total count', () => {
    setup({ problems: PAGINATED_FIXTURE });
    expect(screen.getByText(/1–10 of 12/i)).toBeInTheDocument();
  });

  it('navigates to the next page and shows the remaining rows', () => {
    setup({ problems: PAGINATED_FIXTURE });
    fireEvent.click(screen.getByRole('button', { name: /next page/i }));
    expect(screen.getByText('Problem 11')).toBeInTheDocument();
    expect(screen.getByText('Problem 12')).toBeInTheDocument();
    expect(screen.queryByText('Problem 1')).not.toBeInTheDocument();
  });

  it('resets to the first page when a filter changes', () => {
    setup({ problems: PAGINATED_FIXTURE });
    fireEvent.click(screen.getByRole('button', { name: /next page/i }));
    expect(screen.getByText('Problem 11')).toBeInTheDocument();

    pick(/status filter/i, 'Unsolved'); // all PAGINATED_FIXTURE rows are unsolved — set stays 12, page resets

    expect(screen.getByText('Problem 1')).toBeInTheDocument();
    expect(screen.queryByText('Problem 11')).not.toBeInTheDocument();
  });
});

describe('ProblemsPage — loading state', () => {
  it('renders skeleton placeholders and hides real data while isLoading is true', () => {
    setup({ problems: FIXTURE, isLoading: true });
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(/loading problems/i);
  });

  it('disables the search field and filter controls while loading', () => {
    setup({ isLoading: true });
    expect(screen.getByRole('textbox', { name: /search problems/i })).toBeDisabled();
    expect(screen.getAllByLabelText(/difficulty filter/i)[0]).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });

  it('shows real data once isLoading becomes false', () => {
    setup({ problems: FIXTURE, isLoading: false });
    expect(screen.getByText('Two Sum')).toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});
