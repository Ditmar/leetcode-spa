import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<any>('@mui/material');
  return {
    ...actual,
    useMediaQuery: vi.fn(() => false), 
  };
});

vi.mock('./assets/tcs-logo.svg', () => ({ default: 'mocked-logo.svg' }));

import { useMediaQuery } from '@mui/material';
import { TestHeader } from './TestHeader';
import { DEFAULT_TITLE, DEFAULT_SUBTITLE } from './TestHeader.constants';

describe('🧩 TestHeader Component (Accesible)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useMediaQuery as any).mockReturnValue(false);
  });

  it('renders default title, subtitle, and logo', () => {
    render(<TestHeader />);

    // Accesible por roles
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /tcs logo/i })).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_TITLE)).toBeVisible();
    expect(screen.getByText(DEFAULT_SUBTITLE)).toBeVisible();
  });

  it('renders custom title, subtitle, and logo', () => {
    render(<TestHeader logoSrc="custom-logo.svg" title="Custom Test" subtitle="Subtitle Example" />);

    expect(screen.getByRole('img', { name: /tcs logo/i })).toHaveAttribute('src', expect.stringContaining('custom-logo.svg'));
    expect(screen.getByText('Custom Test')).toBeVisible();
    expect(screen.getByText('Subtitle Example')).toBeVisible();
  });

  it('renders skeletons when loading', () => {
    render(<TestHeader isLoading />);
    const skeletons = screen.getAllByRole('progressbar');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders placeholder when no logoSrc provided', () => {
    render(<TestHeader logoSrc={undefined} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.getByLabelText(/placeholder logo/i)).toBeInTheDocument();
  });


  it('renders horizontal layout by default', () => {
    render(<TestHeader variant="horizontal" />);
    const header = screen.getByRole('banner');


    const styleAttr = header.getAttribute('style') || '';
    expect(styleAttr).toContain('flex-direction: row');
  });

  it('renders vertical layout when specified', () => {
    render(<TestHeader variant="vertical" />);
    const header = screen.getByRole('banner');

    const styleAttr = header.getAttribute('style') || '';
    expect(styleAttr).toContain('flex-direction: column');
  });

  it('adapts to mobile layout when useMediaQuery is true', () => {

    (useMediaQuery as any).mockReturnValue(true);

    render(<TestHeader />);
    const header = screen.getByRole('banner');

    const styleAttr = header.getAttribute('style') || '';
    expect(styleAttr).toContain('flex-direction: column');
  });

});
