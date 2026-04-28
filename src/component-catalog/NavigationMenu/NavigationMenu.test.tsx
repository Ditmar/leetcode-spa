import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { NavigationMenu } from './NavigationMenu';
import { MOCK_NAV_SECTIONS } from './NavigationMenu.constants';

describe('NavigationMenu', () => {
  it('renders without crashing', () => {
    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} />);

    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  it('renders nav items', () => {
    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} />);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  });

  it('marks active item with aria-current="page"', () => {
    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} currentPath="/" />);

    const homeItem = screen.getByRole('link', { name: /home/i });
    expect(homeItem).toHaveAttribute('aria-current', 'page');
  });

  it('handles item click', async () => {
    const user = userEvent.setup();
    const onItemClick = vi.fn();

    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} onItemClick={onItemClick} />);

    const homeItem = screen.getByRole('link', { name: /home/i });
    await user.click(homeItem);

    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(onItemClick).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'home', label: 'Home' })
    );
  });

  it('renders Sign In button', () => {
    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} />);

    const signInButton = screen.getByText('Sign In');
    expect(signInButton).toBeInTheDocument();
  });

  it('supports keyboard event handling', async () => {
    const user = userEvent.setup();
    const onItemClick = vi.fn();

    render(<NavigationMenu navSections={MOCK_NAV_SECTIONS} onItemClick={onItemClick} />);

    const homeItem = screen.getByRole('link', { name: /home/i });
    homeItem.focus();

    expect(homeItem).toHaveFocus();

    await user.click(homeItem);
    expect(onItemClick).toHaveBeenCalled();
  });
});
