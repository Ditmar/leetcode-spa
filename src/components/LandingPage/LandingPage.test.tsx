import '@testing-library/jest-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';

import { LandingPage } from './LandingPage';
import { LANDING_TEXTS } from './LandingPage.constants';

const renderWithTheme = (ui: React.ReactElement) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('LandingPage Component', () => {
  it('should render the landing root with proper role and aria-label', () => {
    renderWithTheme(<LandingPage />);
    const root = screen.getByRole('region', { name: /landing page leetcode inspired/i });
    expect(root).toBeInTheDocument();
  });

  it('should render the headline texts correctly', () => {
    renderWithTheme(<LandingPage />);
    const headlineWords = LANDING_TEXTS.headlinePart1.split(' ');
    headlineWords.forEach((word) => {
      expect(screen.getByText(word)).toBeInTheDocument();
    });
    expect(screen.getByText(LANDING_TEXTS.headlinePart2)).toBeInTheDocument();
  });

  it('should render the description text', () => {
    renderWithTheme(<LandingPage />);
    expect(screen.getByText(LANDING_TEXTS.description)).toBeInTheDocument();
  });

  it('should render the avatar image', () => {
    renderWithTheme(<LandingPage />);
    const avatar = screen.getByAltText(/persona leyendo/i);
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src');
  });

  it('should render decorative ellipses', () => {
    renderWithTheme(<LandingPage />);
    const ellipses = screen.getAllByRole('img', { hidden: true });
    expect(ellipses.length).toBeGreaterThanOrEqual(2);
  });
});
