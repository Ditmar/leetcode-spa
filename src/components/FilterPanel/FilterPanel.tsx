import React, { useState, useEffect, useRef, useCallback } from 'react';

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
  const [activeFilter, setActiveFilter] = useState<string | undefined>(selectedValue);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const pressedTimeouts = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    setActiveFilter(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    return () => {
      pressedTimeouts.current.forEach((t) => clearTimeout(t));
      pressedTimeouts.current = [];
    };
  }, []);

  const handleSelect = useCallback(
    (value: string) => {
      setActiveFilter(value);
      onSelect(value);
    },
    [onSelect]
  );

  const addPressedVisual = useCallback((index: number) => {
    const btn = buttonRefs.current[index];
    if (!btn) return;
    btn.classList.add('pressed');
    const t = setTimeout(() => {
      btn.classList.remove('pressed');
    }, 120);
    pressedTimeouts.current.push(t);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const currentIndex = filters.findIndex((f) => f.value === activeFilter);
      let nextIndex = currentIndex;

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % filters.length;
        event.preventDefault();
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        nextIndex = (currentIndex - 1 + filters.length) % filters.length;
        event.preventDefault();
      } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const ci = currentIndex >= 0 ? currentIndex : 0;
        const currentValue = filters[ci]?.value;
        if (currentValue) {
          handleSelect(currentValue);
          buttonRefs.current[ci]?.focus();
          addPressedVisual(ci);
        }
        return;
      }
      if (nextIndex !== currentIndex && buttonRefs.current[nextIndex]) {
        const nextValue = filters[nextIndex].value;
        setActiveFilter(nextValue);
        buttonRefs.current[nextIndex]?.focus();
      }
    },
    [activeFilter, filters, handleSelect, addPressedVisual]
  );

  const setButtonRef = useCallback(
    (index: number) => (el: HTMLButtonElement | null) => {
      buttonRefs.current[index] = el;
    },
    []
  );
  return (
    <FilterPanelContainer
      role="radiogroup"
      aria-label="Test filters"
      data-testid="filter-panel"
      panelVariant={panelVariant}
      size={size}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {filters.map((filter, index) => {
        const isSelected = activeFilter === filter.value;
        return (
          <FilterButton
            key={filter.value}
            ref={setButtonRef(index)}
            selected={isSelected}
            panelVariant={panelVariant}
            size="medium"
            position={index === 0 ? 'first' : index === filters.length - 1 ? 'last' : 'middle'}
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
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
