import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import MenuBadge from './Menu-Badge';
import { DEFAULT_LABEL_PRIMARY, DEFAULT_LABEL_SECONDARY } from './Menu-Badge.constraints';

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<typeof import('@mui/material')>('@mui/material');
  return {
    ...actual,
    useMediaQuery: vi.fn(() => false),
  };
});

vi.mock('./assets/dark.svg', () => ({ default: 'mocked-dark.svg' }));
vi.mock('./assets/gradient.svg', () => ({ default: 'mocked-gradient.svg' }));

describe('MenuBadge Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('It should render correctly with the dark icon and label pasted.', () => {
    render(<MenuBadge variant="primaryText" label="Inicio" />);
    expect(screen.getByText('Inicio')).toBeInTheDocument();
  });

  it('It should render correctly with the gradient icon and label passed', () => {
    render(<MenuBadge variant="secondaryText" label="Panel" />);
    expect(screen.getByText('Panel')).toBeInTheDocument();
  });

  it('use the default label if no label (primary) is passed', () => {
    render(<MenuBadge variant="primaryText" />);
    expect(screen.getByText(DEFAULT_LABEL_PRIMARY)).toBeInTheDocument();
  });

  it('use the default label if no label is passed (secondary)', () => {
    render(<MenuBadge variant="secondaryText" />);
    expect(screen.getByText(DEFAULT_LABEL_SECONDARY)).toBeInTheDocument();
  });

});
