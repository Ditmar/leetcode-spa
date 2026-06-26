import type { DifficultyFilter, StatusFilter } from './ProblemsPage.types';

export const ALL_DIFFICULTIES = [
  'All',
  'Easy',
  'Medium',
  'Hard',
] as const satisfies readonly DifficultyFilter[];
export const ALL_STATUSES = [
  'All',
  'Solved',
  'Attempted',
  'Unsolved',
] as const satisfies readonly StatusFilter[];

export const ALL_TAGS_SENTINEL = 'All';

export const SEARCH_DEBOUNCE_MS = 300;

export const DRAWER_SPACING_WIDTH = 36;

export const ROWS_PER_PAGE_OPTIONS = [5, 10, 25] as const;

export const DEFAULT_ROWS_PER_PAGE = 10;
