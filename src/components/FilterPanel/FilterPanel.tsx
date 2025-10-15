import React from 'react';

import { FilterPanelContainer, FilterButton } from './FilterPanel.styles';

import type { FilterPanelProps } from './FilterPanel.types';

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  selectedValue,
  onSelect,
  panelVariant = 'primary',
}) => {
  return (
    <FilterPanelContainer
      role="radiogroup"
      aria-label="Test filters"
      data-testid="filter-panel"
      panelVariant={panelVariant}
    >
      {filters.map((filter) => {
        const isSelected = selectedValue === filter.value;
        return (
          <FilterButton
            key={filter.value}
            selected={isSelected}
            panelVariant={panelVariant}
            size="medium"
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

export default FilterPanel;
