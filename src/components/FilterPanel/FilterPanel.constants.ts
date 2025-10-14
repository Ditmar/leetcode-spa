import type { FilterOption } from "./FilterPanel.types";

export const DEFAULT_FILTERS: FilterOption[] = [
    { label: 'All Tests', value: 'all' },
    { label: 'Submitted Tests', value: 'submitted' },
    { label: 'Upcoming Tests', value: 'upcoming' },
];
export const DEFAULT_FILTER_VARIANT = 'primary';
