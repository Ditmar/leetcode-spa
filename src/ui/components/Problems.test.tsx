import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  MOCK_PROBLEM_CATALOG,
  filterMockProblems,
} from '../../services/problems/problemsService.mock';

import ProblemsPage from './Problems';
import { PROBLEMS_PAGE_SIZE, parseProblemsQuery } from './problems/problemsQuery';

import type { ProblemsDataSource } from '../../services/problems/problemsDataSource';
import type { ProblemFilters } from '../../services/problems/problemsService.types';

function createDataSource() {
  return {
    getProblems: vi.fn(async (filters: ProblemFilters = {}) =>
      filterMockProblems(MOCK_PROBLEM_CATALOG, filters)
    ),
    getTags: vi.fn(async () => ['array', 'math', 'string']),
  } satisfies ProblemsDataSource;
}

const firstPage = filterMockProblems(MOCK_PROBLEM_CATALOG, {
  page: 1,
  pageSize: PROBLEMS_PAGE_SIZE,
});

describe('ProblemsPage', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/problems');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('shows the problems loaded on the server without fetching them again', async () => {
    const dataSource = createDataSource();
    render(<ProblemsPage initialData={firstPage} dataSource={dataSource} />);

    expect(await screen.findByRole('link', { name: 'Two Sum' })).toHaveAttribute(
      'href',
      '/problems/1'
    );
    expect(screen.getAllByTestId(/^problem-row-/)).toHaveLength(PROBLEMS_PAGE_SIZE);
    expect(screen.getByText(`${MOCK_PROBLEM_CATALOG.length} problems`)).toBeInTheDocument();
    expect(dataSource.getProblems).not.toHaveBeenCalled();
  });

  it('updates the URL and the list when a filter changes', async () => {
    const user = userEvent.setup();
    const dataSource = createDataSource();
    render(<ProblemsPage initialData={firstPage} dataSource={dataSource} />);

    await user.selectOptions(await screen.findByLabelText('Difficulty'), 'Hard');

    expect(window.location.search).toBe('?difficulty=Hard');
    await waitFor(() =>
      expect(dataSource.getProblems).toHaveBeenLastCalledWith(
        expect.objectContaining({ difficulty: 'Hard', page: 1 }),
        expect.anything()
      )
    );
    expect(
      await screen.findByRole('link', { name: 'Median of Two Sorted Arrays' })
    ).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Two Sum' })).not.toBeInTheDocument();
  });

  it('loads the same result when the page is opened with filters in the URL', async () => {
    const dataSource = createDataSource();
    const initialQuery = parseProblemsQuery(new URLSearchParams('?difficulty=Easy&tag=math'));
    window.history.replaceState(null, '', '/problems?difficulty=Easy&tag=math');

    render(<ProblemsPage initialQuery={initialQuery} dataSource={dataSource} />);

    expect(await screen.findByLabelText('Difficulty')).toHaveValue('Easy');
    expect(screen.getByLabelText('Tag')).toHaveValue('math');
    await waitFor(() =>
      expect(dataSource.getProblems).toHaveBeenCalledWith(
        expect.objectContaining({ difficulty: 'Easy', tag: 'math', page: 1 }),
        expect.anything()
      )
    );
    expect(await screen.findByRole('link', { name: 'Palindrome Number' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Two Sum' })).not.toBeInTheDocument();
  });

  it('keeps the page in the URL when the user changes page', async () => {
    const user = userEvent.setup();
    const dataSource = createDataSource();
    render(<ProblemsPage initialData={firstPage} dataSource={dataSource} />);

    const pagination = await screen.findByTestId('problems-pagination');
    await user.click(within(pagination).getByRole('button', { name: /page 2/i }));

    expect(window.location.search).toBe('?page=2');
    await waitFor(() =>
      expect(dataSource.getProblems).toHaveBeenLastCalledWith(
        expect.objectContaining({ page: 2 }),
        expect.anything()
      )
    );
  });

  it('searches after the user stops typing', async () => {
    const user = userEvent.setup();
    const dataSource = createDataSource();
    render(<ProblemsPage initialData={firstPage} dataSource={dataSource} />);

    await user.type(await screen.findByLabelText('Search'), 'parentheses');

    await waitFor(() => expect(window.location.search).toBe('?search=parentheses'));
    // Debounce: one request for the whole word, not one per letter.
    expect(dataSource.getProblems).toHaveBeenCalledTimes(1);
    expect(await screen.findByRole('link', { name: 'Valid Parentheses' })).toBeInTheDocument();
  });

  it('reads the filters again when the user presses the back button', async () => {
    const dataSource = createDataSource();
    render(<ProblemsPage initialData={firstPage} dataSource={dataSource} />);
    await screen.findByRole('link', { name: 'Two Sum' });

    act(() => {
      window.history.pushState(null, '', '/problems?difficulty=Medium');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });

    expect(await screen.findByLabelText('Difficulty')).toHaveValue('Medium');
    await waitFor(() =>
      expect(dataSource.getProblems).toHaveBeenLastCalledWith(
        expect.objectContaining({ difficulty: 'Medium' }),
        expect.anything()
      )
    );
  });

  it('shows an empty state that can clear the filters', async () => {
    const user = userEvent.setup();
    const dataSource = createDataSource();
    const initialQuery = parseProblemsQuery(new URLSearchParams('?search=zzz'));
    const emptyPage = filterMockProblems(MOCK_PROBLEM_CATALOG, { search: 'zzz' });

    render(
      <ProblemsPage initialQuery={initialQuery} initialData={emptyPage} dataSource={dataSource} />
    );

    const empty = await screen.findByTestId('problems-empty');
    await user.click(within(empty).getByRole('button', { name: 'Clear filters' }));

    expect(window.location.search).toBe('');
    expect(await screen.findByRole('link', { name: 'Two Sum' })).toBeInTheDocument();
  });

  it('shows an error with a retry button', async () => {
    const user = userEvent.setup();
    const dataSource = createDataSource();
    dataSource.getProblems.mockRejectedValueOnce({
      status: 500,
      code: 'INTERNAL_ERROR',
      message: 'The server is down',
    });

    render(<ProblemsPage dataSource={dataSource} />);

    const error = await screen.findByTestId('problems-error');
    expect(error).toHaveTextContent('The server is down');

    await user.click(within(error).getByRole('button', { name: 'Try again' }));
    expect(await screen.findByRole('link', { name: 'Two Sum' })).toBeInTheDocument();
  });

  it('shows the status filter only to logged-in users', async () => {
    const { unmount } = render(
      <ProblemsPage initialData={firstPage} dataSource={createDataSource()} />
    );
    await screen.findByLabelText('Difficulty');
    expect(screen.queryByLabelText('Status')).not.toBeInTheDocument();
    unmount();

    render(
      <ProblemsPage initialData={firstPage} dataSource={createDataSource()} isAuthenticated />
    );
    expect(await screen.findByLabelText('Status')).toBeInTheDocument();
  });
});
