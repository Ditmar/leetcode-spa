import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  ALL_TAGS_SENTINEL,
  DEFAULT_ROWS_PER_PAGE,
  SEARCH_DEBOUNCE_MS,
} from './ProblemsPage.constants';

import type {
  DifficultyFilter,
  FilterState,
  Problem,
  ProblemStatus,
  StatusFilter,
  TagFilter,
  UseProblemsPageOptions,
  UseProblemsPageReturn,
} from './ProblemsPage.types';
import type { ChangeEvent, MouseEvent } from 'react';

const STATUS_FILTER_MAP: Record<Exclude<StatusFilter, 'All'>, ProblemStatus> = {
  Solved: 'solved',
  Attempted: 'attempted',
  Unsolved: 'unsolved',
};

function matchesStatusFilter(p: Problem, statusFilter: StatusFilter): boolean {
  if (statusFilter === 'All') return true;
  return p.status === STATUS_FILTER_MAP[statusFilter];
}

function matchesTagFilter(p: Problem, tagFilter: TagFilter): boolean {
  if (tagFilter === ALL_TAGS_SENTINEL) return true;
  return p.tags.includes(tagFilter);
}

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timer.current = setTimeout(() => setDebounced(value), delay);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [value, delay]);

  return debounced;
}

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  difficultyFilter: 'All',
  statusFilter: 'All',
  tagFilter: 'All',
};

export function useProblemsPage({ problems }: UseProblemsPageOptions): UseProblemsPageReturn {
  const [filterState, setFilterState] = useState<FilterState>(DEFAULT_FILTERS);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const debouncedSearch = useDebounce(filterState.searchQuery, SEARCH_DEBOUNCE_MS);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);

  const tagOptions = useMemo<string[]>(() => {
    return Array.from(new Set(problems.flatMap((p) => p.tags))).sort();
  }, [problems]);

  const solvedCount = useMemo(
    () => problems.filter((p) => p.status === STATUS_FILTER_MAP.Solved).length,
    [problems]
  );

  const filteredProblems = useMemo(() => {
    const { difficultyFilter, statusFilter, tagFilter } = filterState;
    const search = debouncedSearch.toLowerCase().trim();

    return problems.filter(
      (p) =>
        (search === '' || p.title.toLowerCase().includes(search)) &&
        (difficultyFilter === 'All' || p.difficulty === difficultyFilter) &&
        matchesStatusFilter(p, statusFilter) &&
        matchesTagFilter(p, tagFilter)
    );
  }, [problems, filterState, debouncedSearch]);

  useEffect(() => {
    setPage(0);
  }, [
    problems,
    filterState.difficultyFilter,
    filterState.statusFilter,
    filterState.tagFilter,
    debouncedSearch,
  ]);

  const paginatedProblems = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredProblems.slice(start, start + rowsPerPage);
  }, [filteredProblems, page, rowsPerPage]);

  const handleSearchChange = useCallback(
    (v: string) => setFilterState((s) => ({ ...s, searchQuery: v })),
    []
  );
  const handleDifficultyChange = useCallback(
    (v: DifficultyFilter) => setFilterState((s) => ({ ...s, difficultyFilter: v })),
    []
  );
  const handleStatusChange = useCallback(
    (v: StatusFilter) => setFilterState((s) => ({ ...s, statusFilter: v })),
    []
  );
  const handleTagChange = useCallback(
    (v: TagFilter) => setFilterState((s) => ({ ...s, tagFilter: v })),
    []
  );
  const handleClearFilters = useCallback(() => setFilterState(DEFAULT_FILTERS), []);
  const handleDrawerOpen = useCallback(() => setDrawerOpen(true), []);
  const handleDrawerClose = useCallback(() => setDrawerOpen(false), []);

  const handleChangePage = useCallback(
    (_event: MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage),
    []
  );

  const handleChangeRowsPerPage = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  return {
    filteredProblems,
    paginatedProblems,
    solvedCount,
    totalCount: problems.length,
    tagOptions,
    filterState,
    handleSearchChange,
    handleDifficultyChange,
    handleStatusChange,
    handleTagChange,
    handleClearFilters,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    drawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
  };
}
