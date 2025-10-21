export type FilterVariant = 'primary' | 'secondary';

export type PanelSize = 'medium' | 'large' | 'xlarge';

export interface FilterOption<T extends string = string> {
  label: string;
  value: T;
}

export interface FilterPanelProps<T extends string = string> {
  filters: FilterOption<T>[];
  selectedValue: T;
  onSelect: (value: T) => void;
  panelVariant?: FilterVariant;
  size?: PanelSize;
}
