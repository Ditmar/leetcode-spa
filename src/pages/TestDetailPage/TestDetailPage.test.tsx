import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';

import TestDetailPage from './TestDetailPage';
import * as data from './TestDetailPage.data';

describe('TestDetailPage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches and displays test data based on testId prop', async () => {
    const spy = vi.spyOn(data, 'fetchTestById');
    spy.mockResolvedValueOnce(data.MOCK_TESTS_MAP['t-1']);

    render(<TestDetailPage testId="t-1" />);

    // spinner shown while loading
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();

    // wait for title to appear and verify it contains mock data
    const title = await screen.findByTestId('test-title');
    expect(title).toHaveTextContent('Algorithms — Arrays & Strings');

    // certificate pill should be rendered
    const pill = await screen.findByTestId('certificate-pill');
    expect(pill).toBeInTheDocument();
  });

  it('shows error state when fetch fails', async () => {
    const spy = vi.spyOn(data, 'fetchTestById');
    spy.mockRejectedValueOnce(new Error('Not found'));

    render(<TestDetailPage testId="missing" />);

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent(/Not found/i);
  });

  it('calls onStart when Start button is clicked', async () => {
    const spy = vi.spyOn(data, 'fetchTestById');
    spy.mockResolvedValueOnce(data.MOCK_TESTS_MAP['t-1']);
    const onStart = vi.fn();

    render(<TestDetailPage testId="t-1" onStart={onStart} />);

    const startBtn = await screen.findByTestId('start-button');

    await userEvent.click(startBtn);
    expect(onStart).toHaveBeenCalledWith('t-1');
  });
});
