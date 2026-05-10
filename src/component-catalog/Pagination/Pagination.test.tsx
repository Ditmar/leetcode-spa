import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Pagination } from './Pagination';
import { PAGINATION_TEST_ID } from './Pagination.constants';

describe('Pagination Component', () => {
  it('renders the pagination container correctly', () => {
    render(<Pagination count={5} />);
    const container = screen.getByTestId(PAGINATION_TEST_ID);
    expect(container).toBeInTheDocument();
  });

  it('renders the correct number of pages', () => {
    render(<Pagination count={3} />);
    // Expect pages 1, 2, 3 plus Prev and Next items
    const items = screen.getAllByRole('button');
    expect(items).toHaveLength(5);
  });

  it('triggers onChange event when a page is clicked', () => {
    const handleChange = vi.fn();
    render(<Pagination count={3} onChange={handleChange} />);

    const pageTwoButton = screen.getByText('2');
    pageTwoButton.click();

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders custom previous and next texts', () => {
    render(<Pagination count={3} />);
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });
});
