import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { FilterPanel } from './FilterPanel';

describe('FilterPanel', () => {
  it('resalta el filtro seleccionado', () => {
    render(
      <FilterPanel
        filters={[
          { label: 'All Tests', value: 'all' },
          { label: 'Upcoming', value: 'upcoming' },
        ]}
        selectedValue="all"
        onSelect={() => {}}
      />
    );

    const selectedButton = screen.getByTestId('filter-all');
    expect(selectedButton).toHaveAttribute('aria-checked', 'true');
  });

  it('dispara onSelect al hacer clic en un filtro', () => {
    const mockSelect = vi.fn();

    render(
      <FilterPanel
        filters={[
          { label: 'All Tests', value: 'all' },
          { label: 'Upcoming', value: 'upcoming' },
        ]}
        selectedValue="all"
        onSelect={mockSelect}
      />
    );

    const upcomingButton = screen.getByTestId('filter-upcoming');
    fireEvent.click(upcomingButton);

    expect(mockSelect).toHaveBeenCalledWith('upcoming');
  });
});
