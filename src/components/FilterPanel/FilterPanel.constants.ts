import type { FilterOption } from './FilterPanel.types';

export const DEFAULT_FILTERS: FilterOption[] = [
  { label: 'All Tests', value: 'all' },
  { label: 'Submitted Tests', value: 'submitted' },
  { label: 'Upcoming Tests', value: 'upcoming' },
];
export const DEFAULT_FILTER_VARIANT = 'primary';

export const FILTER_BUTTON_SIZES = {
  large: {
    height: 48,
    paddingY: 1.25,
    paddingX: 3.5,
    fontSize: '0.9375rem',
  },
  xlarge: {
    height: 96,
    paddingY: 2.5,
    paddingX: 7,
    fontSize: '1.25rem',
  },
  xxlarge: {
    height: 144,
    paddingY: 3.75,
    paddingX: 10.5,
    fontSize: '1.5rem',
  },
} as const;
