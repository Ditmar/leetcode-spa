import { describe, it, expect } from 'vitest';

import { render, screen } from '../../test/test-utils';

import { MenuBadge } from './MenuBadge';

describe('Button', () => {
  it('renderiza con props por defecto', () => {
    render(<MenuBadge data-testid="menuBadge" label="Dashboard" />);
    const menuBadge = screen.getByTestId('menuBadge');
    expect(menuBadge).toBeInTheDocument();
    expect(menuBadge).toHaveTextContent('Dashboard');
    expect(menuBadge).not.toBeDisabled();
  });

  it('renderiza con variant="default"', () => {
    render(<MenuBadge label="Dashboard" variant="default" />);
    const text = screen.getByText('Dashboard');
    expect(text).toBeInTheDocument();
    expect(text).toHaveAttribute('data-variant', 'default');
  });

  it('renderiza con variant="color"', () => {
    render(<MenuBadge label="Dashboard" variant="color" />);
    const text = screen.getByText('Dashboard');
    expect(text).toBeInTheDocument();
    expect(text).toHaveAttribute('data-variant', 'color');
  });
});
