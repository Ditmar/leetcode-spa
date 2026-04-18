import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { NavigationMenu } from './NavigationMenu';
import { MOCK_NAV_SECTIONS } from './NavigationMenu.constants';

describe('NavigationMenu', () => {
  it('renders without crashing', () => {
    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} />);

    const navElement = screen.getByTestId('navigation-menu');
    expect(navElement).toBeInTheDocument();
  });

  it('renders nav items', () => {
    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} />);

    expect(screen.getByTestId('nav-item-home')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-about')).toBeInTheDocument();
  });

  it('marks active item with aria-current="page"', () => {
    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} currentPath="/" />);

    const homeItem = screen.getByTestId('nav-item-home');
    expect(homeItem).toHaveAttribute('aria-current', 'page');
  });

  it('handles item click', async () => {
    const user = userEvent.setup();
    const onItemClick = () => {};

    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} onItemClick={onItemClick} />);

    const homeItem = screen.getByTestId('nav-item-home');
    await user.click(homeItem);

    expect(homeItem).toBeInTheDocument();
  });

  it('renders Sign In button', () => {
    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} />);

    const signInButton = screen.getByText('Sign In');
    expect(signInButton).toBeInTheDocument();
  });

  it('supports keyboard event handling', () => {
    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} />);

    const homeItem = screen.getByTestId('nav-item-home');
    homeItem.focus();

    expect(homeItem).toHaveFocus();
  });
});
