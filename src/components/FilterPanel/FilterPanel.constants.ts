import type { FilterOption, FilterVariant } from './FilterPanel.types';

export const DEFAULT_FILTERS: FilterOption[] = [
  { label: 'All Tests', value: 'all' },
  { label: 'Submitted Tests', value: 'submitted' },
  { label: 'Upcoming Tests', value: 'upcoming' },
];
export const DEFAULT_FILTER_VARIANT: FilterVariant = 'primary';

export const FILTER_BUTTON_SIZES = {
  medium: { height: 4, paddingX: 1.5, paddingY: 0.5, fontSize: 14 },
  large: { height: 5, paddingX: 2, paddingY: 1, fontSize: 16 },
  xlarge: { height: 6, paddingX: 2.5, paddingY: 1.25, fontSize: 18 },
} as const;
