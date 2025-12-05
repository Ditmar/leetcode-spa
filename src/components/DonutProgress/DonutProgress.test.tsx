import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DonutProgress } from './DonutProgress';
import '@testing-library/jest-dom';

const theme = createTheme();

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('DonutProgress', () => {
  it('should render with correct percentage text', () => {
    renderWithTheme(<DonutProgress percentage={50} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('should render with progressbar role and correct aria attributes', () => {
    renderWithTheme(<DonutProgress percentage={75} />);
    const progressbar = screen.getByRole('progressbar');

    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuenow', '75');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).toHaveAttribute('aria-label', 'Progress: 75%');
  });

  it('should clamp percentage values outside 0-100 range', () => {
    const { rerender } = renderWithTheme(<DonutProgress percentage={150} />);
    expect(screen.getByText('100%')).toBeInTheDocument();

    rerender(
      <ThemeProvider theme={theme}>
        <DonutProgress percentage={-50} />
      </ThemeProvider>
    );
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('should round decimal percentages', () => {
    renderWithTheme(<DonutProgress percentage={45.7} />);
    expect(screen.getByText('46%')).toBeInTheDocument();
  });

  it('should render with custom size', () => {
    renderWithTheme(<DonutProgress percentage={60} size={100} />);
    const svg = screen.getByRole('progressbar').querySelector('svg');

    expect(svg).toHaveAttribute('width', '100');
    expect(svg).toHaveAttribute('height', '100');
  });

  it('should render with default size of 38px', () => {
    renderWithTheme(<DonutProgress percentage={60} />);
    const svg = screen.getByRole('progressbar').querySelector('svg');

    expect(svg).toHaveAttribute('width', '38');
    expect(svg).toHaveAttribute('height', '38');
  });

  it('should handle zero percentage', () => {
    renderWithTheme(<DonutProgress percentage={0} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('should handle 100 percentage', () => {
    renderWithTheme(<DonutProgress percentage={100} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });
});
