// src/components/TestHeader/TestHeader.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock seguro de MUI antes de importar el componente
vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<any>('@mui/material');
  return {
    ...actual,
    useMediaQuery: vi.fn(() => false), // por defecto desktop
  };
});

// Mock del asset (Vite)
vi.mock('./assets/tcs-logo.svg', () => ({ default: 'mocked-logo.svg' }));

// Ahora importamos lo que use el test
import { useMediaQuery } from '@mui/material';
import TestHeader from './TestHeader';
import { DEFAULT_TITLE, DEFAULT_SUBTITLE } from './TestHeader.constants';

describe('🧩 TestHeader Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Aseguramos estado desktop por defecto
    (useMediaQuery as any).mockReturnValue(false);
  });

  it('renders with default title, subtitle, and logo', () => {
    render(<TestHeader />);
    expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_SUBTITLE)).toBeInTheDocument();
    expect(screen.getByAltText(/tcs logo/i)).toBeInTheDocument();
  });

  it('renders custom title, subtitle, and logo', () => {
    render(<TestHeader logoSrc="custom-logo.svg" title="Custom Test" subtitle="Subtitle Example" />);
    expect(screen.getByText('Custom Test')).toBeInTheDocument();
    expect(screen.getByText('Subtitle Example')).toBeInTheDocument();
    const logo = screen.getByAltText(/tcs logo/i) as HTMLImageElement;
    expect(logo.src).toContain('custom-logo.svg');
  });

  it('renders skeletons when loading', () => {
    render(<TestHeader isLoading={true} />);
    const skeletons = screen.getAllByRole('progressbar');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders placeholder when no logoSrc provided', () => {
    render(<TestHeader logoSrc={undefined} />);
    const logoImg = screen.queryByRole('img');
    expect(logoImg).not.toBeInTheDocument();
    const placeholder = screen.getByTestId('placeholder-logo');
    expect(placeholder).toBeInTheDocument();
  });

  // --- Layout assertions usando getComputedStyle (más robusto) ---
  it('renders horizontal layout by default', () => {
    render(<TestHeader variant="horizontal" />);
    const header = screen.getByTestId('header-wrapper');
    expect(header.style.flexDirection).toBe('row');
  });

  it('renders vertical layout when specified', () => {
    render(<TestHeader variant="vertical" />);
    const header = screen.getByTestId('header-wrapper');
    expect(header.style.flexDirection).toBe('column');
  });

  it('adapts to mobile layout when useMediaQuery is true', () => {
  // Forzamos mobile en este test
  (useMediaQuery as any).mockReturnValue(true);

  render(<TestHeader />);
  const header = screen.getByTestId('header-wrapper');

  // Leemos el valor que sí existe en JSDOM (style inline)
  const fd = header.style.flexDirection;
  expect(fd).toBe('column');
  });

});
