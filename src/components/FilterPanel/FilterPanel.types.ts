export type FilterVariant = 'primary' | 'secondary';

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterPanelProps {
  filters: FilterOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  panelVariant?: FilterVariant;
}
