import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../style-library/theme/theme';
import { StatsPanel } from './StatsPanel';
import { describe, it, expect } from 'vitest';

describe('StatsPanel', () => {
  it('renders the provided stats correctly with accessible labels', () => {
    render(
      <ThemeProvider theme={theme}>
        <StatsPanel totalTests={32} passed={12} failed={19} waiting={1} />
      </ThemeProvider>
    );

    expect(screen.getByText(/N° of tests/i)).toBeInTheDocument();
    expect(screen.getByText(/Passed/i)).toBeInTheDocument();
    expect(screen.getByText(/Failed/i)).toBeInTheDocument();
    expect(screen.getByText(/Waiting for result/i)).toBeInTheDocument();

    expect(screen.getByLabelText('stat-value-total')).toHaveTextContent('32');
    expect(screen.getByLabelText('stat-value-passed')).toHaveTextContent('12');
    expect(screen.getByLabelText('stat-value-failed')).toHaveTextContent('19');
    expect(screen.getByLabelText('stat-value-waiting')).toHaveTextContent('1');
  });
});
