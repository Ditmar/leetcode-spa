import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import authService from '../../services/auth/authService';

import { AppShell, AppConfigContext } from './AppShell';

import type { AuthUser } from '../../services/auth/authService.types';

vi.spyOn(authService, 'isAuthenticated').mockImplementation(() => false);
vi.spyOn(authService, 'hydrateFromServer').mockResolvedValue(null);
const signOutSpy = vi.spyOn(authService, 'signOut').mockResolvedValue(undefined);

const renderWithAuth = (ui: React.ReactElement, userValue: AuthUser | null) => {
  return render(
    <AppConfigContext.Provider
      value={{
        user: userValue
          ? { username: userValue.username, avatarUrl: userValue.avatarUrl || '' }
          : null,
      }}
    >
      {ui}
    </AppConfigContext.Provider>
  );
};

describe('AppShell Component', () => {
  let pushStateSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.stubGlobal('location', {
      pathname: '/workspace',
      assign: vi.fn(),
    });
    pushStateSpy = vi.spyOn(window.history, 'pushState').mockImplementation(() => {});
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    pushStateSpy.mockRestore();
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
    const mockUser = { username: 'TestUser', avatarUrl: 'avatar.png' } as AuthUser;
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent');

    renderWithAuth(<AppShell currentPath="/problems/two-sum" />, mockUser);

    const avatar = screen.getByAltText('TestUser');
    fireEvent.click(avatar);

    const signOutButton = await screen.findByText('Sign Out');
    fireEvent.click(signOutButton);

    await waitFor(() => {
      expect(signOutSpy).toHaveBeenCalled();
      expect(pushStateSpy).toHaveBeenCalledWith(expect.any(Object), '', '/');
      expect(dispatchEventSpy).toHaveBeenCalledWith(expect.any(PopStateEvent));
    });
    dispatchEventSpy.mockRestore();
  });
});
