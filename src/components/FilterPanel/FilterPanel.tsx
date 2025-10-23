import React, { useState, useEffect } from 'react';

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
  const [activeFilter, setActiveFilter] = useState(selectedValue);

  useEffect(() => {
    setActiveFilter(selectedValue);
  }, [selectedValue]);

  const handleSelect = (value: string) => {
    setActiveFilter(value);
    onSelect(value);
  };
  return (
    <FilterPanelContainer
      role="radiogroup"
      aria-label="Test filters"
      data-testid="filter-panel"
      panelVariant={panelVariant}
      size={size}
    >
      {filters.map((filter, index) => {
        const isSelected = activeFilter === filter.value;

        return (
          <FilterButton
            key={filter.value}
            selected={isSelected}
            panelVariant={panelVariant}
            size="large"
            role="radio"
            position={index === 0 ? 'first' : index === filters.length - 1 ? 'last' : 'middle'}
            aria-checked={isSelected}
            data-testid={`filter-${filter.value}`}
            onClick={() => handleSelect(filter.value)}
          >
            {filter.label}
          </FilterButton>
        );
      })}
    </FilterPanelContainer>
  );
};
