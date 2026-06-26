import type { ChangeEvent, MouseEvent } from 'react';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type ProblemStatus = 'solved' | 'attempted' | 'unsolved';

export interface Problem {
  id: number;
  title: string;
  difficulty: Difficulty;
  acceptance: number;
  status: ProblemStatus;
  tags: string[];
}

export type DifficultyFilter = 'All' | Difficulty;
export type StatusFilter = 'All' | 'Solved' | 'Attempted' | 'Unsolved';
export type TagFilter = 'All' | string;

export interface FilterState {
  searchQuery: string;
  difficultyFilter: DifficultyFilter;
  statusFilter: StatusFilter;
  tagFilter: TagFilter;
}

export interface ProblemsPageProps {
  onSelectProblem: (id: number) => void;
  onNavigateToCode: () => void;
  problems?: Problem[];
  isLoading?: boolean;
}

export interface UseProblemsPageOptions {
  problems: Problem[];
}

export interface UseProblemsPageReturn {
  filteredProblems: Problem[];
  paginatedProblems: Problem[];
  solvedCount: number;
  totalCount: number;
  tagOptions: string[];

  filterState: FilterState;

  handleSearchChange: (value: string) => void;
  handleDifficultyChange: (value: DifficultyFilter) => void;
  handleStatusChange: (value: StatusFilter) => void;
  handleTagChange: (value: TagFilter) => void;
  handleClearFilters: () => void;

  page: number;
  rowsPerPage: number;
  handleChangePage: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  drawerOpen: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}
