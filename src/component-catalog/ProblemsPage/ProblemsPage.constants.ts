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
