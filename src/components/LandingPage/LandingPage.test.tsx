import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import i18n from 'i18next';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { describe, it, expect } from 'vitest';

import theme from '../../style-library/theme/theme'; // tu theme principal

import { LandingPage } from './LandingPage';
import { LANDING_TEXTS } from './LandingPage.constants';

// Mock de traducciones
const resources = {
  en: {
    landing: {
      brand: 'LeetCode',
      headlinePart1: 'A New Way To',
      headlinePart2: 'Learn',
      description:
        'LeetCode Is The Best Platform To Help You Enhance Your Skills, Expand Your Knowledge And Prepare For Technical Interviews.',
    },
  },
};

i18n.init({
  lng: 'en',
  fallbackLng: 'en',
  resources,
  interpolation: { escapeValue: false },
});

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
    </ThemeProvider>
  );

describe('LandingPage Component', () => {
  it('renders the headline texts correctly', () => {
    renderWithProviders(<LandingPage />);
    const headline1 = i18n.t(LANDING_TEXTS.headlinePart1);
    const headline2 = i18n.t(LANDING_TEXTS.headlinePart2);

    headline1.split(' ').forEach((word) => {
      expect(screen.getByText(word)).toBeInTheDocument();
    });

    expect(screen.getByText(headline2)).toBeInTheDocument();
  });

  it('renders the description text', () => {
    renderWithProviders(<LandingPage />);
    const description = i18n.t(LANDING_TEXTS.description);
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('renders the avatar image', () => {
    renderWithProviders(<LandingPage />);
    const avatar = screen.getByAltText(/persona leyendo/i);
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src');
  });
});
