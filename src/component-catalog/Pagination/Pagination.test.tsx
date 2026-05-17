import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Pagination from './Pagination';
import { PAGINATION_TEST_ID, PREV_BUTTON_TEXT, NEXT_BUTTON_TEXT } from './Pagination.constants';

describe('Pagination Component', () => {
  it('renders the pagination container correctly', () => {
    render(<Pagination count={5} />);
    const container = screen.getByTestId(PAGINATION_TEST_ID);
    expect(container).toBeInTheDocument();
  });

  it('renders the specific page numbers and navigation buttons', () => {
    render(<Pagination count={3} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();

    expect(screen.getByLabelText(/go to previous page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/go to next page/i)).toBeInTheDocument();
  });

  it('triggers onChange event with the correct page number when a page is clicked', () => {
    const handleChange = vi.fn();
    render(<Pagination count={3} onChange={handleChange} />);

    const pageTwoButton = screen.getByText('2');
    fireEvent.click(pageTwoButton);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.anything(), 2);
  });

  it('renders custom previous and next texts associated with the correct buttons', () => {
    render(<Pagination count={3} />);

    const prevText = screen.getByText(PREV_BUTTON_TEXT);
    const nextText = screen.getByText(NEXT_BUTTON_TEXT);

    expect(prevText).toBeInTheDocument();
    expect(nextText).toBeInTheDocument();

    const prevButton = screen.getByLabelText(/go to previous page/i);
    const nextButton = screen.getByLabelText(/go to next page/i);

    expect(prevButton).toContainElement(prevText);
    expect(nextButton).toContainElement(nextText);
  });
});
