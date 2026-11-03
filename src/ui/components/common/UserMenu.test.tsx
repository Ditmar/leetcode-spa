import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import UserMenu from './UserMenu';

const signedInUser = {
  id: '1',
  username: 'jhoel',
  email: 'jhoel@example.com',
  role: 'user' as const,
};

describe('UserMenu', () => {
  it('shows Sign in and Sign up when there is no user', () => {
    render(<UserMenu user={null} />);
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Sign up' })).toBeTruthy();
    expect(screen.queryByTestId('user-menu-trigger')).toBeNull();
  });

  it('shows the avatar instead of the sign in buttons when there is a user', () => {
    render(<UserMenu user={signedInUser} />);
    expect(screen.getByTestId('user-menu-trigger')).toBeTruthy();
    expect(screen.queryByRole('link', { name: 'Sign in' })).toBeNull();
  });

  it('opens the dropdown with Profile, My submissions and Sign out', async () => {
    const actor = userEvent.setup();
    render(<UserMenu user={signedInUser} />);
    await actor.click(screen.getByTestId('user-menu-trigger'));
    expect(screen.getByRole('menuitem', { name: 'Profile' })).toBeTruthy();
    expect(screen.getByRole('menuitem', { name: 'My submissions' })).toBeTruthy();
    expect(screen.getByRole('menuitem', { name: 'Sign out' })).toBeTruthy();
  });

  it('calls onSignOut when Sign out is clicked', async () => {
    const actor = userEvent.setup();
    const onSignOut = vi.fn();
    render(<UserMenu user={signedInUser} onSignOut={onSignOut} />);
    await actor.click(screen.getByTestId('user-menu-trigger'));
    await actor.click(screen.getByRole('menuitem', { name: 'Sign out' }));
    expect(onSignOut).toHaveBeenCalledTimes(1);
  });
});
