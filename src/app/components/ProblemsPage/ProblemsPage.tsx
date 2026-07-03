import { useState } from 'react';

import type { ProblemsPageProps } from './ProblemsPage.types';
import type { ProblemFilters } from '../../../services/problems/problemsService.types';
import './ProblemsPage.css';

const DIFFICULTIES = ['Easy', 'Medium', 'Hard'] as const;
const STATUSES = ['solved', 'attempted', 'unsolved'] as const;

function buildQueryString(filters: ProblemFilters): string {
  const params = new URLSearchParams();

  if (filters.search) params.set('search', filters.search);
  if (filters.difficulty) params.set('difficulty', filters.difficulty);
  if (filters.status) params.set('status', filters.status);
  if (filters.tag) params.set('tag', filters.tag);

  params.set('page', String(filters.page ?? 1));

  return params.toString();
}

export function ProblemsPage({
  initialProblems,
  initialMeta,
  initialFilters,
  onSelectProblem,
}: ProblemsPageProps) {
  const [problems, setProblems] = useState(initialProblems);
  const [meta, setMeta] = useState(initialMeta);
  const [filters, setFilters] = useState<ProblemFilters>(initialFilters);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchProblems(nextFilters: ProblemFilters) {
    setIsLoading(true);
    setError(null);

    const query = buildQueryString(nextFilters);

    try {
      const response = await fetch(`/api/problems?${query}`);

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const result = await response.json();

      setProblems(result.data);
      setMeta(result.meta);
      setFilters(nextFilters);

      window.history.pushState({}, '', `/problems?${query}`);
    } catch {
      setError('Failed to load problems. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleFilterChange(partial: Partial<ProblemFilters>) {
    fetchProblems({ ...filters, ...partial, page: 1 });
  }

  function handlePageChange(page: number) {
    fetchProblems({ ...filters, page });
  }

  return (
    <section className="problems-page" aria-label="Problems list">
      <h1>Problems</h1>

      <div className="problems-page__filters">
        <input
          type="search"
          aria-label="Search problems"
          placeholder="Search problems..."
          defaultValue={filters.search ?? ''}
          onChange={(event) => handleFilterChange({ search: event.target.value || undefined })}
        />

        <select
          aria-label="Filter by difficulty"
          value={filters.difficulty ?? ''}
          onChange={(event) =>
            handleFilterChange({
              difficulty: (event.target.value || undefined) as ProblemFilters['difficulty'],
            })
          }
        >
          <option value="">All difficulties</option>
          {DIFFICULTIES.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>

        <select
          aria-label="Filter by status"
          value={filters.status ?? ''}
          onChange={(event) =>
            handleFilterChange({
              status: (event.target.value || undefined) as ProblemFilters['status'],
            })
          }
        >
          <option value="">All statuses</option>
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <input
          type="text"
          aria-label="Filter by tag"
          placeholder="Tag..."
          defaultValue={filters.tag ?? ''}
          onChange={(event) => handleFilterChange({ tag: event.target.value || undefined })}
        />
      </div>

      {error && (
        <p role="alert" className="problems-page__error">
          {error}
        </p>
      )}

      {isLoading && <p aria-live="polite">Loading problems...</p>}

      <table role="table" aria-label="Problems">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Difficulty</th>
            <th scope="col">Tags</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {problems.length === 0 ? (
            <tr>
              <td colSpan={4}>No problems found.</td>
            </tr>
          ) : (
            problems.map((problem) => (
              <tr
                key={problem.id}
                onClick={() => onSelectProblem?.(problem.id)}
                className="problems-page__row"
              >
                <td>{problem.title}</td>
                <td>{problem.difficulty}</td>
                <td>{problem.tags.join(', ')}</td>
                <td>{problem.status ?? '—'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <nav className="problems-page__pagination" aria-label="Pagination">
        <button
          type="button"
          disabled={meta.page <= 1 || isLoading}
          onClick={() => handlePageChange(meta.page - 1)}
        >
          Previous
        </button>

        <span aria-live="polite">
          Page {meta.page} of {meta.totalPages}
        </span>

        <button
          type="button"
          disabled={meta.page >= meta.totalPages || isLoading}
          onClick={() => handlePageChange(meta.page + 1)}
        >
          Next
        </button>
      </nav>
    </section>
  );
}

export default ProblemsPage;
