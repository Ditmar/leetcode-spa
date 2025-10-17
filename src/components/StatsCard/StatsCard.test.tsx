import { render, screen } from '@testing-library/react';
import { StatsCard } from './StatsCard';
import EditIcon from '@mui/icons-material/Edit';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { describe, it, expect } from 'vitest';

const renderWithTheme = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={createTheme()}>{ui}</ThemeProvider>);

describe('StatsCard', () => {
  it('renders value and label correctly', () => {
    renderWithTheme(<StatsCard icon={<EditIcon />} value="42" label="Tests Written" />);
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('Tests Written')).toBeInTheDocument();
  });

  it('renders icon correctly', () => {
    renderWithTheme(<StatsCard icon={<EditIcon data-testid="test-icon" />} value="10" label="Rank" />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});
