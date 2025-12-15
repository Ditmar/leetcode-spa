import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { render, screen, fireEvent } from '../../test/test-utils';

import NavigationSidebar from './NavigationSidebar';
import { DEFAULT_NAV_ITEMS } from './NavigationSidebar.constants';

describe('NavigationSidebar', () => {
  it('highlights the item matching currentPath', () => {
    render(<NavigationSidebar items={DEFAULT_NAV_ITEMS} currentPath="/tests" />);
    const testsItem = screen.getByTestId('nav-tests');
    expect(testsItem).toBeInTheDocument();
    // selected class is applied by MUI; ensure the element exists and has the expected aria or class
    expect(testsItem).toHaveClass('Mui-selected', { exact: false });
  });

  it('calls onNavigate with route when item clicked', () => {
    const onNavigate = vi.fn();
    render(<NavigationSidebar items={DEFAULT_NAV_ITEMS} onNavigate={onNavigate} />);
    const profile = screen.getByTestId('nav-profile');
    fireEvent.click(profile);
    expect(onNavigate).toHaveBeenCalledWith('/profile');
  });

  it('renders default items when `items` prop is omitted', () => {
    render(<NavigationSidebar />);
    const dashboard = screen.getByTestId('nav-dashboard');
    expect(dashboard).toBeInTheDocument();
  });

  it('selects dashboard by default when window.location.pathname is /dashboard', () => {
    const originalLocation = window.location;
    // mock location pathname
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (window as any).location;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).location = { pathname: '/dashboard' };

    render(<NavigationSidebar />);
    const dashboard = screen.getByTestId('nav-dashboard');
    expect(dashboard).toHaveClass('Mui-selected', { exact: false });

    // restore
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).location = originalLocation;
  });

  it('updates selected item when `currentPath` prop changes', () => {
    const { rerender } = render(
      <NavigationSidebar items={DEFAULT_NAV_ITEMS} currentPath="/dashboard" />
    );
    const dashboard = screen.getByTestId('nav-dashboard');
    expect(dashboard).toHaveClass('Mui-selected', { exact: false });

    rerender(<NavigationSidebar items={DEFAULT_NAV_ITEMS} currentPath="/tests" />);
    const tests = screen.getByTestId('nav-tests');
    expect(tests).toHaveClass('Mui-selected', { exact: false });
  });

  it('keyboard Enter triggers navigation', () => {
    const onNavigate = vi.fn();
    render(<NavigationSidebar items={DEFAULT_NAV_ITEMS} onNavigate={onNavigate} />);
    const profile = screen.getByTestId('nav-profile');
    profile.focus();
    fireEvent.keyDown(profile, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onNavigate).toHaveBeenCalledWith('/profile');
  });

  it('clicking an item sets it as selected', () => {
    render(<NavigationSidebar items={DEFAULT_NAV_ITEMS} />);
    const profile = screen.getByTestId('nav-profile');
    fireEvent.click(profile);
    expect(profile).toHaveClass('Mui-selected', { exact: false });
  });
});
