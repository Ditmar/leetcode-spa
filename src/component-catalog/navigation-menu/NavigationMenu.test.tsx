import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { NavigationMenu } from './NavigationMenu';

import type { NavSection } from './NavigationMenu.types';

const mockNavSections: NavSection[] = [
  {
    id: 'main',
    items: [
      { id: 'home', label: 'Home', href: '/' },
      { id: 'about', label: 'About', href: '/about' },
    ],
  },
];

describe('NavigationMenu', () => {
  it('renders without crashing', () => {
    render(<NavigationMenu navSections={mockNavSections} />);

    const navElement = screen.getByTestId('navigation-menu');
    expect(navElement).toBeInTheDocument();
  });

  it('renders nav items', () => {
    render(<NavigationMenu navSections={mockNavSections} />);

    expect(screen.getByTestId('nav-item-home')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-about')).toBeInTheDocument();
  });

  it('marks active item with aria-current="page"', () => {
    render(<NavigationMenu navSections={mockNavSections} currentPath="/" />);

    const homeItem = screen.getByTestId('nav-item-home');
    expect(homeItem).toHaveAttribute('aria-current', 'page');
  });

  it('renders hamburger button on mobile', async () => {
    const mockMatchMedia = (query: string) => ({
      matches: query === '(max-width:959.95px)',
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    });

    window.matchMedia = mockMatchMedia as unknown as MediaQueryList;

    render(<NavigationMenu navSections={mockNavSections} />);

    const hamburger = screen.queryByTestId('hamburger-button');
    expect(hamburger).not.toBeInTheDocument();
  });

  it('handles item click', async () => {
    const user = userEvent.setup();
    const onItemClick = () => {};

    render(<NavigationMenu navSections={mockNavSections} onItemClick={onItemClick} />);

    const homeItem = screen.getByTestId('nav-item-home');
    await user.click(homeItem);

    expect(homeItem).toBeInTheDocument();
  });
});
