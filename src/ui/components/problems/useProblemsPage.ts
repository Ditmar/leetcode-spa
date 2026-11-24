import { useCallback, useEffect, useRef, useState } from 'react';

import { getProblemsDataSource } from '../../../services/problems/problemsDataSource';

import {
  EMPTY_PROBLEMS_QUERY,
  buildProblemsSearch,
  parseProblemsQuery,
  toProblemFilters,
} from './problemsQuery';

import type { ProblemsQuery } from './problemsQuery';
import type { ProblemsDataSource } from '../../../services/problems/problemsDataSource';
import type { ProblemListResponse } from '../../../services/problems/problemsService.types';

export type ProblemsLoadStatus = 'loading' | 'success' | 'error';

/** `push` adds a browser history entry (back button works). `replace` does not (used while typing). */
export type HistoryMode = 'push' | 'replace';

export interface UseProblemsPageOptions {
  initialQuery?: ProblemsQuery;
  /** First page loaded on the server. When present, the hook does not fetch it again. */
  initialData?: ProblemListResponse | null;
  initialError?: string | null;
  /** The status filter is only allowed for logged-in users. */
  allowStatus?: boolean;
  dataSource?: ProblemsDataSource;
}

export interface UseProblemsPageReturn {
  query: ProblemsQuery;
  data: ProblemListResponse | null;
  status: ProblemsLoadStatus;
  errorMessage: string | null;
  /** Changes some filters and goes back to page 1. */
  setFilters: (changes: Partial<Omit<ProblemsQuery, 'page'>>, mode?: HistoryMode) => void;
  setPage: (page: number) => void;
  clearFilters: () => void;
  retry: () => void;
}

function getErrorMessage(error: unknown): string {
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const { message } = error as { message: unknown };
    if (typeof message === 'string' && message) return message;
  }
  return 'Could not load the problems.';
}

function isAbortError(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    (('name' in error && (error as { name: unknown }).name === 'AbortError') ||
      ('code' in error && (error as { code: unknown }).code === 'ABORTED'))
  );
}

function writeUrl(query: ProblemsQuery, mode: HistoryMode): void {
  if (typeof window === 'undefined') return;
  const url = `${window.location.pathname}${buildProblemsSearch(query)}${window.location.hash}`;
  if (url === `${window.location.pathname}${window.location.search}${window.location.hash}`) return;
  if (mode === 'push') {
    window.history.pushState(null, '', url);
  } else {
    window.history.replaceState(null, '', url);
  }
}

export function useProblemsPage({
  initialQuery = EMPTY_PROBLEMS_QUERY,
  initialData = null,
  initialError = null,
  allowStatus = false,
  dataSource,
}: UseProblemsPageOptions = {}): UseProblemsPageReturn {
  const [query, setQuery] = useState<ProblemsQuery>(initialQuery);
  const [data, setData] = useState<ProblemListResponse | null>(initialData);
  const [status, setStatus] = useState<ProblemsLoadStatus>(
    initialError ? 'error' : initialData ? 'success' : 'loading'
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(initialError);
  const [reloadToken, setReloadToken] = useState(0);

  // The server already loaded the first view, so the first effect run must not fetch again.
  const skipNextFetch = useRef(Boolean(initialData || initialError));
  const sourceRef = useRef<ProblemsDataSource>(dataSource ?? getProblemsDataSource());

  const queryKey = buildProblemsSearch(query);

  useEffect(() => {
    if (skipNextFetch.current) {
      skipNextFetch.current = false;
      return undefined;
    }

    const controller = new AbortController();
    setStatus('loading');
    setErrorMessage(null);

    sourceRef.current
      .getProblems(toProblemFilters(query), { signal: controller.signal })
      .then((response) => {
        if (controller.signal.aborted) return;
        setData(response);
        setStatus('success');
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted || isAbortError(error)) return;
        setErrorMessage(getErrorMessage(error));
        setStatus('error');
      });

    return () => controller.abort();
    // `queryKey` stands for `query`: the same filters give the same key, so there is no refetch
    // when the query object is recreated with equal values.
  }, [queryKey, reloadToken]);

  // Back / forward buttons: read the filters again from the URL.
  useEffect(() => {
    const onPopState = () => {
      setQuery(parseProblemsQuery(new URLSearchParams(window.location.search), { allowStatus }));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [allowStatus]);

  const navigate = useCallback((next: ProblemsQuery, mode: HistoryMode) => {
    writeUrl(next, mode);
    setQuery(next);
  }, []);

  const setFilters = useCallback<UseProblemsPageReturn['setFilters']>(
    (changes, mode = 'push') => {
      navigate({ ...query, ...changes, page: 1 }, mode);
    },
    [navigate, query]
  );

  const setPage = useCallback(
    (page: number) => {
      navigate({ ...query, page: Math.max(1, page) }, 'push');
    },
    [navigate, query]
  );

  const clearFilters = useCallback(() => {
    navigate(EMPTY_PROBLEMS_QUERY, 'push');
  }, [navigate]);

  const retry = useCallback(() => {
    skipNextFetch.current = false;
    setReloadToken((token) => token + 1);
  }, []);

  return { query, data, status, errorMessage, setFilters, setPage, clearFilters, retry };
}
