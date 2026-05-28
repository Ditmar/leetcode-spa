/**
 * ProblemsPage unit tests — Vitest + Testing Library.
 * Works with the real problems dataset (no mock needed).
 */

import React from 'react';
import { vi, describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ProblemsPage } from './ProblemsPage';

// ─── Setup ────────────────────────────────────────────────────────────────────

const theme = createTheme();
afterEach(cleanup);

function setup() {
  const props = { onSelectProblem: vi.fn(), onNavigateToCode: vi.fn() };
  render(
    <ThemeProvider theme={theme}>
      <ProblemsPage {...props} />
    </ThemeProvider>
  );
  return props;
}

/**
 * Opens a MUI Select and picks an option.
 * mouseDown and click must stay in separate calls — wrapping both in a single
 * act() flushes React state between them and closes the popover too early.
 */
function pick(labelRx: RegExp, option: string) {
  fireEvent.mouseDown(screen.getAllByLabelText(labelRx)[0]);
  fireEvent.click(screen.getByRole('option', { name: option }));
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('ProblemsPage', () => {
  it('renders problems on load', () => {
    setup();
    expect(screen.getByText('Two Sum')).toBeInTheDocument();
    expect(screen.getByText('Add Two Numbers')).toBeInTheDocument();
  });

  it('shows solved / total counter in header', () => {
    setup();
    // Regex avoids coupling to specific counts from the real dataset.
    expect(screen.getByLabelText(/\d+ of \d+ problems solved/i)).toBeInTheDocument();
  });

  it('filters by search after debounce', async () => {
    setup();
    fireEvent.change(screen.getAllByRole('textbox', { name: /search problems/i })[0], {
      target: { value: 'two sum' },
    });
    // waitFor retries for 1 s — enough for the 300 ms debounce with real timers.
    await waitFor(
      () => {
        expect(screen.getByText('Two Sum')).toBeInTheDocument();
        expect(screen.queryByText('Add Two Numbers')).not.toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });

  it('filters by difficulty', () => {
    setup();
    pick(/difficulty filter/i, 'Hard');
    expect(screen.getByText('Median of Two Sorted Arrays')).toBeInTheDocument();
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
  });

  it('filters by status', () => {
    setup();
    pick(/status filter/i, 'Solved');
    expect(screen.getByText('Two Sum')).toBeInTheDocument();
    expect(screen.queryByText('Add Two Numbers')).not.toBeInTheDocument();
  });

  it('applies multiple filters simultaneously', () => {
    setup();
    pick(/difficulty filter/i, 'Hard');
    pick(/status filter/i, 'Unsolved');
    expect(screen.getByText('Median of Two Sorted Arrays')).toBeInTheDocument();
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
  });

  it('shows empty state when nothing matches', async () => {
    setup();
    fireEvent.change(screen.getAllByRole('textbox', { name: /search problems/i })[0], {
      target: { value: 'xyznonexistent' },
    });
    await waitFor(
      () => expect(screen.getByText(/no problems match your filters/i)).toBeInTheDocument(),
      { timeout: 1000 }
    );
  });

  it('calls onSelectProblem when Solve is clicked', () => {
    const { onSelectProblem } = setup();
    pick(/status filter/i, 'Unsolved');
    fireEvent.click(screen.getAllByRole('button', { name: /solve/i })[0]);
    expect(onSelectProblem).toHaveBeenCalled();
  });

  it('calls onNavigateToCode when Review is clicked', () => {
    const { onNavigateToCode } = setup();
    pick(/status filter/i, 'Solved');
    fireEvent.click(screen.getAllByRole('button', { name: /review/i })[0]);
    expect(onNavigateToCode).toHaveBeenCalled();
  });

  it('resets all filters when Clear is clicked', () => {
    setup();
    pick(/difficulty filter/i, 'Hard');
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('button', { name: /clear/i })[0]);
    expect(screen.getByText('Two Sum')).toBeInTheDocument();
  });
});
