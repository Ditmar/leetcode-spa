import { Edit } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';

import theme from '../../style-library/theme/theme';

import { StatsCard } from './StatsCard';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('StatsCard', () => {
  it('renders value and label correctly', () => {
    renderWithTheme(
      <StatsCard icon={<Edit data-testid="test-icon" />} value="42" label="Tests Written" />
    );

    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('Tests Written')).toBeInTheDocument();
  });

  it('renders icon correctly', () => {
    renderWithTheme(
      <StatsCard icon={<Edit data-testid="test-icon" />} value="32" label="Tests Written" />
    );

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders with default icon when no icon prop provided', () => {
    renderWithTheme(<StatsCard value="100" label="Default Icon" />);

    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Default Icon')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    renderWithTheme(<StatsCard icon={<Edit />} value="32" label="Tests Written" />);

    const card = screen.getByRole('group');
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('aria-label', 'Tests Written statistic');
    expect(screen.getByText('Tests Written')).toBeInTheDocument();
    expect(screen.getByText('32')).toBeInTheDocument();
  });

  it('applies custom styles via sx prop', () => {
    const testId = 'styled-card';

    // Renderizamos el componente con un sx visible
    renderWithTheme(
      <StatsCard
        icon={<Edit />}
        value="32"
        label="Tests Written"
        sx={{
          border: '5px solid red',
          padding: '10px',
        }}
        data-testid={testId}
      />
    );

    const card = screen.getByTestId(testId);
    expect(card).toBeInTheDocument();
    expect(() => {
      renderWithTheme(
        <StatsCard
          icon={<Edit />}
          value="99"
          label="Custom Styled"
          sx={{ border: '5px solid red', padding: '10px' }}
        />
      );
    }).not.toThrow();
    expect(card).toHaveAttribute('data-testid', testId);
  });
});
