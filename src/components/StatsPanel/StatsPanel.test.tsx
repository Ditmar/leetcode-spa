import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { StatsPanel } from './StatsPanel';

describe('StatsPanel', () => {
  it('renders the provided stats correctly with accessible labels', () => {
    render(<StatsPanel totalTests={32} passed={12} failed={19} waiting={1} />);

    expect(screen.getByText(/Number of tests/i)).toBeInTheDocument();
    expect(screen.getByText(/Passed/i)).toBeInTheDocument();
    expect(screen.getByText(/Failed/i)).toBeInTheDocument();
    expect(screen.getByText(/Waiting for result/i)).toBeInTheDocument();

    expect(screen.getByLabelText('stat-value-total')).toHaveTextContent('32');
    expect(screen.getByLabelText('stat-value-passed')).toHaveTextContent('12');
    expect(screen.getByLabelText('stat-value-failed')).toHaveTextContent('19');
    expect(screen.getByLabelText('stat-value-waiting')).toHaveTextContent('1');
  });
});
