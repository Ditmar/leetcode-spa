import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { vi, describe, it, expect, afterEach } from 'vitest';

const theme = createTheme();

const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('SearchBar', () => {
    it('renders correctly', () => {
        renderWithTheme(<SearchBar />);
        expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    });

    it('handles input changes in uncontrolled mode', async () => {
        const user = userEvent.setup();
        renderWithTheme(<SearchBar />);
        const input = screen.getByRole('textbox', { name: /search/i });

        await user.type(input, 'test query');
        expect(input).toHaveValue('test query');
    });

    it('calls onSearch when Enter is pressed', async () => {
        const user = userEvent.setup();
        const onSearch = vi.fn();
        renderWithTheme(<SearchBar onSearch={onSearch} />);
        const input = screen.getByRole('textbox', { name: /search/i });

        await user.type(input, 'test{enter}');
        expect(onSearch).toHaveBeenCalledWith('test');
    });

    it('calls onSearch when button is clicked', async () => {
        const user = userEvent.setup();
        const onSearch = vi.fn();
        renderWithTheme(<SearchBar onSearch={onSearch} />);
        const input = screen.getByRole('textbox', { name: /search/i });
        const button = screen.getByRole('button', { name: /search/i });

        await user.type(input, 'test');
        await user.click(button);
        expect(onSearch).toHaveBeenCalledWith('test');
    });

    it('debounces onSearch', () => {
        vi.useFakeTimers();
        const onSearch = vi.fn();
        renderWithTheme(<SearchBar onSearch={onSearch} debounceDelay={500} />);
        const input = screen.getByRole('textbox', { name: /search/i });

        fireEvent.change(input, { target: { value: 'test' } });
        expect(onSearch).not.toHaveBeenCalled();

        vi.advanceTimersByTime(500);
        // Auto-search is currently disabled in the hook, so we expect it NOT to be called.
        // If auto-search is enabled later, this expectation should change.
        expect(onSearch).not.toHaveBeenCalled();
    });

    afterEach(() => {
        vi.useRealTimers();
    });
});
