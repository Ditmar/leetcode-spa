import type { FilterOption, FilterVariant } from './FilterPanel.types';

export const DEFAULT_FILTERS: FilterOption[] = [
  { label: 'All Tests', value: 'all' },
  { label: 'Submitted Tests', value: 'submitted' },
  { label: 'Upcoming Tests', value: 'upcoming' },
];
export const DEFAULT_FILTER_VARIANT: FilterVariant = 'primary';

export const FILTER_BUTTON_SIZES = {
  medium: { height: 10.67, paddingX: 1.5, paddingY: 0.5, fontSize: 22.93 },
  large: { height: 12.67, paddingX: 2, paddingY: 1, fontSize: 24.93 },
  xlarge: { height: 14.67, paddingX: 2.5, paddingY: 1.25, fontSize: 26.93 },
} as const;
