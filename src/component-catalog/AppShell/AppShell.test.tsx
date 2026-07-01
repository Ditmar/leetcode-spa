import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { AuthContext } from '../../services/auth/authContext';
import authService from '../../services/auth/authService';

import { AppShell } from './AppShell';

import type { AuthUser } from '../../services/auth/authService.types';

vi.mock('../../services/auth/authService', () => ({
  default: {
    signOut: vi.fn().mockResolvedValue(undefined),
  },
}));

const renderWithAuth = (ui: React.ReactElement, userValue: AuthUser | null) => {
  return render(
    <AuthContext.Provider
      value={{
        user: userValue,
        isAuthenticated: !!userValue,
        isLoading: false,
        hydrationError: null,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
      }}
    >
      {ui}
    </AuthContext.Provider>
  );
};

describe('AppShell Component', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        pathname: '/problems/two-sum',
        href: '',
        replace: vi.fn(),
      },
    });
    vi.clearAllMocks();
  });

  it('renders correctly the general layout structure with brand logo', () => {
    renderWithAuth(<AppShell currentPath="/problems/two-sum" />, null);
    expect(screen.getByText('LeetCode')).toBeInTheDocument();
  });

  it('displays the sidebar problem list on problem route', () => {
    renderWithAuth(<AppShell currentPath="/problems/two-sum" />, null);
    expect(screen.getByRole('heading', { name: 'Problems' })).toBeInTheDocument();
  });

  it('renders sign-in button when unauthenticated', () => {
    renderWithAuth(<AppShell currentPath="/problems/two-sum" />, null);
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('renders avatar when authenticated', () => {
    const mockUser = { username: 'TestUser', avatarUrl: 'avatar.png' } as AuthUser;
    renderWithAuth(<AppShell currentPath="/problems/two-sum" />, mockUser);
    expect(screen.getByAltText('TestUser')).toBeInTheDocument();
  });

  it('active link highlighted derived from path', () => {
    renderWithAuth(<AppShell currentPath="/problems" />, null);
    const problemsLink = screen.getByRole('link', { name: 'Problems' });
    expect(problemsLink).toBeInTheDocument();
  });

  it('sign-out calls service and redirects to home', async () => {
    const pushStateSpy = vi.spyOn(window.history, 'pushState').mockImplementation(() => {});
    const mockUser = { username: 'TestUser', avatarUrl: 'avatar.png' } as AuthUser;

    renderWithAuth(<AppShell currentPath="/problems/two-sum" />, mockUser);

    const avatar = screen.getByAltText('TestUser');
    fireEvent.click(avatar);

    const signOutButton = await screen.findByText('Sign Out');
    fireEvent.click(signOutButton);

    await waitFor(() => {
      expect(authService.signOut).toHaveBeenCalled();
      expect(pushStateSpy).toHaveBeenCalledWith(null, '', '/');
    });
    pushStateSpy.mockRestore();
  });
});
