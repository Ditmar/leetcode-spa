import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { SearchBar } from './SearchBar';

const theme = createTheme();

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('SearchBar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders search bar with correct accessible labels', () => {
    renderWithTheme(<SearchBar />);

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /search content/i })).toBeInTheDocument();
  });

  it('handles input change in uncontrolled mode', async () => {
    const user = userEvent.setup();
    renderWithTheme(<SearchBar />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test query');

    expect(input).toHaveValue('test query');
  });

  it('calls onSearch on button click', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    renderWithTheme(<SearchBar onSearch={onSearch} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await user.type(input, 'search term');
    await user.click(button);

    expect(onSearch).toHaveBeenCalledWith('search term');
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('calls onSearch on Enter key press', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    renderWithTheme(<SearchBar onSearch={onSearch} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test{enter}');

    expect(onSearch).toHaveBeenCalledWith('test');
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('auto-searches when typing with autoSearch enabled', async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ delay: null });
    const onSearch = vi.fn();

    renderWithTheme(<SearchBar onSearch={onSearch} autoSearch debounceDelay={300} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    expect(onSearch).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    expect(onSearch).toHaveBeenCalledWith('test');

    vi.useRealTimers();
  });

  it('does not auto-search when autoSearch is false', async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ delay: null });
    const onSearch = vi.fn();

    renderWithTheme(<SearchBar onSearch={onSearch} autoSearch={false} debounceDelay={300} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    vi.advanceTimersByTime(300);
    expect(onSearch).not.toHaveBeenCalled();

    vi.useRealTimers();
  });

  it('renders disabled state correctly', () => {
    renderWithTheme(<SearchBar disabled />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });
});
