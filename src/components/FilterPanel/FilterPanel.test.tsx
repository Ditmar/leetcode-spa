import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { FilterPanel } from './FilterPanel';

describe('FilterPanel', () => {
  it('highlights the selected filter', () => {
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

    const selectedButton = screen.getByRole('radio', { name: /All Tests/i });
    expect(selectedButton).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onSelect when a filter is clicked', async () => {
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

    const upcomingButton = screen.getByRole('radio', { name: /Upcoming/i });
    await userEvent.click(upcomingButton);

    expect(mockSelect).toHaveBeenCalledWith('upcoming');
  });
});
