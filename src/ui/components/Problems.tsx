import { Box, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import Pagination from '../../component-catalog/Pagination/Pagination';
import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import { ProblemsFilters } from './problems/ProblemsFilters';
import { hasActiveFilters } from './problems/problemsQuery';
import {
  ProblemsEmptyState,
  ProblemsErrorState,
  ProblemsLoadingState,
} from './problems/ProblemsStates';
import { ProblemsTable } from './problems/ProblemsTable';
import { useDebouncedValue } from './problems/useDebouncedValue';
import { useProblemsPage } from './problems/useProblemsPage';

import type { ProblemsQuery } from './problems/problemsQuery';
import type { ProblemsDataSource } from '../../services/problems/problemsDataSource';
import type { ProblemListResponse } from '../../services/problems/problemsService.types';

/** Wait time after the last key press before the search runs. */
export const SEARCH_DEBOUNCE_MS = 300;

export interface ProblemsPageProps {
  /** Filters read from the URL on the server. */
  initialQuery?: ProblemsQuery;
  /** First page loaded on the server (SSR). */
  initialData?: ProblemListResponse | null;
  /** Error message when the server could not load the first page. */
  initialError?: string | null;
  /** Options for the tag filter. */
  tags?: string[];
  /** Logged-in users can filter and see their status. */
  isAuthenticated?: boolean;
  /** Injected in tests and stories. Defaults to the API or the mock API (PUBLIC_USE_MOCK_API). */
  dataSource?: ProblemsDataSource;
}

export default function ProblemsPage({
  initialQuery,
  initialData = null,
  initialError = null,
  tags = [],
  isAuthenticated = false,
  dataSource,
}: ProblemsPageProps) {
  const { query, data, status, errorMessage, setFilters, setPage, clearFilters, retry } =
    useProblemsPage({
      initialQuery,
      initialData,
      initialError,
      allowStatus: isAuthenticated,
      dataSource,
    });

  const [searchInput, setSearchInput] = useState(query.search);
  const debouncedSearch = useDebouncedValue(searchInput, SEARCH_DEBOUNCE_MS);

  // Typing: run the search after the debounce. `replace` keeps the back button useful.
  useEffect(() => {
    if (debouncedSearch.trim() !== query.search) {
      setFilters({ search: debouncedSearch.trim() }, 'replace');
    }
    // Only react to the debounced text, not to every query change.
  }, [debouncedSearch]);

  // Back / forward or "Clear filters": show the search from the URL in the box.
  useEffect(() => {
    setSearchInput((current) => (current.trim() === query.search ? current : query.search));
  }, [query.search]);

  const problems = data?.data ?? [];
  const totalPages = data?.meta.totalPages ?? 0;
  const total = data?.meta.total ?? 0;
  const filtersActive = hasActiveFilters(query);

  const renderContent = () => {
    if (status === 'error') {
      return (
        <ProblemsErrorState
          message={errorMessage ?? 'Could not load the problems.'}
          onRetry={retry}
        />
      );
    }
    if (status === 'loading') {
      return <ProblemsLoadingState />;
    }
    if (problems.length === 0) {
      if (filtersActive) {
        return <ProblemsEmptyState actionLabel="Clear filters" onAction={clearFilters} />;
      }
      if (query.page > 1) {
        return (
          <ProblemsEmptyState actionLabel="Go to the first page" onAction={() => setPage(1)} />
        );
      }
      return <ProblemsEmptyState />;
    }
    return <ProblemsTable problems={problems} showStatus={isAuthenticated} />;
  };

  return (
    <ClientOnlyMuiProvider>
      <Box component="main" sx={{ maxWidth: 1160, mx: 'auto', px: { xs: 2, md: 4 }, py: 4 }}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" component="h1">
              Problems
            </Typography>
            {status === 'success' && (
              <Typography color="text.secondary" aria-live="polite">
                {total} {total === 1 ? 'problem' : 'problems'}
              </Typography>
            )}
          </Box>

          <ProblemsFilters
            query={query}
            searchValue={searchInput}
            onSearchChange={setSearchInput}
            onFilterChange={(changes) => setFilters(changes)}
            onClear={() => {
              setSearchInput('');
              clearFilters();
            }}
            tags={tags}
            showStatus={isAuthenticated}
            canClear={filtersActive || searchInput.trim() !== ''}
          />

          <Paper variant="outlined" sx={{ p: 2 }}>
            {renderContent()}
          </Paper>

          {status === 'success' && totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Pagination
                count={totalPages}
                page={Math.min(query.page, totalPages)}
                onChange={(_, page) => setPage(page)}
                dataTestId="problems-pagination"
              />
            </Box>
          )}
        </Stack>
      </Box>
    </ClientOnlyMuiProvider>
  );
}
