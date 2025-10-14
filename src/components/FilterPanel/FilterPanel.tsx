// FilterPanel.tsx
import React from 'react';
import { FilterPanelContainer, FilterButton } from './FilterPanel.styles';
import type { FilterPanelProps } from './FilterPanel.types';

export const FilterPanel: React.FC<FilterPanelProps> = ({
    filters,
    selectedValue,
    onSelect,
    variant = 'primary',
}) => {
    return (
        <FilterPanelContainer
            role="radiogroup"
            aria-label="Test filters"
            data-testid="filter-panel"
        >
            {filters.map((filter) => {
                const isSelected = selectedValue === filter.value;
                return (
                    <FilterButton
                        key={filter.value}
                        selected={isSelected}
                        filterVariant={variant}
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
