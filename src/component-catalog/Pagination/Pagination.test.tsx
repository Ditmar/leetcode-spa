import { useMediaQuery } from '@mui/material';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import Pagination from './Pagination';
import { PAGINATION_TEST_ID, PREV_BUTTON_TEXT, NEXT_BUTTON_TEXT } from './Pagination.constants';

vi.mock('@mui/material', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@mui/material')>();
  return {
    ...actual,
    useMediaQuery: vi.fn(),
  };
});

describe('Pagination Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useMediaQuery).mockReturnValue(false);
  });

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

  it('calls onChange with page 1 when the first button is clicked', () => {
    const handleChange = vi.fn();
    render(<Pagination count={5} page={3} showFirstButton onChange={handleChange} />);

    const firstButton = screen.getByLabelText(/go to first page/i);
    fireEvent.click(firstButton);

    expect(handleChange).toHaveBeenCalledWith(expect.anything(), 1);
  });

  it('calls onChange with the last page when the last button is clicked', () => {
    const handleChange = vi.fn();
    render(<Pagination count={5} page={3} showLastButton onChange={handleChange} />);

    const lastButton = screen.getByLabelText(/go to last page/i);
    fireEvent.click(lastButton);

    expect(handleChange).toHaveBeenCalledWith(expect.anything(), 5);
  });

  it('calls onRowsPerPageChange when rows per page selection changes', () => {
    const handleRowsPerPageChange = vi.fn();
    render(
      <Pagination
        count={50}
        rowsPerPage={10}
        rowsPerPageOptions={[10, 20, 50]}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);

    const option20 = screen.getByRole('option', { name: '20' });
    fireEvent.click(option20);

    expect(handleRowsPerPageChange).toHaveBeenCalledTimes(1);
    expect(handleRowsPerPageChange).toHaveBeenCalledWith(expect.anything(), expect.anything());
  });

  it('disables all buttons when disabled prop is true', () => {
    const handleChange = vi.fn();
    render(<Pagination count={3} disabled onChange={handleChange} />);

    const prevButton = screen.getByLabelText(/go to previous page/i);
    expect(prevButton).toBeDisabled();

    const pageTwoButton = screen.getByText('2');
    fireEvent.click(pageTwoButton);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('reduces siblingCount on mobile viewport using useMediaQuery', () => {
    vi.mocked(useMediaQuery).mockReturnValue(true);

    render(<Pagination count={10} page={5} />);

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.queryByText('3')).not.toBeInTheDocument();
    expect(screen.queryByText('7')).not.toBeInTheDocument();
  });
});
