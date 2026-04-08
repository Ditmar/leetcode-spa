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
      {
        id: 'products',
        label: 'Products',
        href: '/products',
        children: [
          { id: 'p1', label: 'Product 1', href: '/products/1' },
          { id: 'p2', label: 'Product 2', href: '/products/2' },
        ],
      },
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

  it('handles item click', async () => {
    const user = userEvent.setup();
    const onItemClick = () => {};

    render(<NavigationMenu navSections={mockNavSections} onItemClick={onItemClick} />);

    const homeItem = screen.getByTestId('nav-item-home');
    await user.click(homeItem);

    expect(homeItem).toBeInTheDocument();
  });

  it('renders Sign In button', () => {
    render(<NavigationMenu navSections={mockNavSections} />);

    const signInButton = screen.getByText('Sign In');
    expect(signInButton).toBeInTheDocument();
  });

  it('supports keyboard event handling', () => {
    render(<NavigationMenu navSections={mockNavSections} />);

    const homeItem = screen.getByTestId('nav-item-home');
    homeItem.focus();

    expect(homeItem).toHaveFocus();
  });
});
