import React from 'react';

import { DEFAULT_FILTER_VARIANT } from './FilterPanel.constants';
import { FilterPanelContainer, FilterButton } from './FilterPanel.styles';

import type { FilterPanelProps } from './FilterPanel.types';

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  selectedValue,
  onSelect,
  panelVariant = DEFAULT_FILTER_VARIANT,
  size = 'medium',
}) => {
  return (
    <FilterPanelContainer
      role="radiogroup"
      aria-label="Test filters"
      data-testid="filter-panel"
      panelVariant={panelVariant}
      size={size}
    >
      {filters.map((filter) => {
        const isSelected = selectedValue === filter.value;
        return (
          <FilterButton
            key={filter.value}
            selected={isSelected}
            panelVariant={panelVariant}
            size="large"
            role="radio"
            aria-checked={isSelected}
            data-testid={`filter-${filter.value}`}
            onClick={() => onSelect(filter.value)}
          >
            {filter.label}
          </FilterButton>
        );
      })}
    </FilterPanelContainer>
  );
};
