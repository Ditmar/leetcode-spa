import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { PROBLEMS, SEARCH_DEBOUNCE_MS, ALL_TAGS_SENTINEL } from './ProblemsPage.constants';

import type {
  DifficultyFilter,
  FilterState,
  Problem,
  StatusFilter,
  TagFilter,
  UseProblemsPageReturn,
} from './ProblemsPage.types';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
}

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  difficultyFilter: 'All',
  statusFilter: 'All',
  tagFilter: 'All',
};

export function useProblemsPage(): UseProblemsPageReturn {
  const [filterState, setFilterState] = useState<FilterState>(DEFAULT_FILTERS);
  const debouncedSearch = useDebounce(filterState.searchQuery, SEARCH_DEBOUNCE_MS);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const tagOptions = useMemo<string[]>(() => {
    const tags = PROBLEMS.flatMap((p: Problem) => p.tags);
    return Array.from(new Set(tags)).sort();
  }, []);

  const solvedCount = useMemo(
    () => PROBLEMS.filter((p: Problem) => p.status === 'solved').length,
    []
  );

  const filteredProblems = useMemo(() => {
    const { difficultyFilter, statusFilter, tagFilter } = filterState;
    const search = debouncedSearch.toLowerCase().trim();

    return PROBLEMS.filter((p: Problem) => {
      const matchesSearch = search === '' || p.title.toLowerCase().includes(search);

      const matchesDifficulty = difficultyFilter === 'All' || p.difficulty === difficultyFilter;

      const matchesStatus =
        statusFilter === 'All' ||
        (statusFilter === 'Solved' && p.status === 'solved') ||
        (statusFilter === 'Attempted' && p.status === 'attempted') ||
        (statusFilter === 'Unsolved' && p.status === 'unsolved');

      const matchesTag = tagFilter === ALL_TAGS_SENTINEL || p.tags.includes(tagFilter);

      return matchesSearch && matchesDifficulty && matchesStatus && matchesTag;
    });
  }, [filterState, debouncedSearch]);

  const handleSearchChange = useCallback((value: string) => {
    setFilterState((prev) => ({ ...prev, searchQuery: value }));
  }, []);

  const handleDifficultyChange = useCallback((value: DifficultyFilter) => {
    setFilterState((prev) => ({ ...prev, difficultyFilter: value }));
  }, []);

  const handleStatusChange = useCallback((value: StatusFilter) => {
    setFilterState((prev) => ({ ...prev, statusFilter: value }));
  }, []);

  const handleTagChange = useCallback((value: TagFilter) => {
    setFilterState((prev) => ({ ...prev, tagFilter: value }));
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilterState(DEFAULT_FILTERS);
  }, []);

  const handleDrawerOpen = useCallback(() => setDrawerOpen(true), []);
  const handleDrawerClose = useCallback(() => setDrawerOpen(false), []);

  return {
    filteredProblems,
    allProblems: PROBLEMS,
    solvedCount,
    totalCount: PROBLEMS.length,
    tagOptions,

    filterState,

    handleSearchChange,
    handleDifficultyChange,
    handleStatusChange,
    handleTagChange,
    handleClearFilters,

    drawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
  };
}
