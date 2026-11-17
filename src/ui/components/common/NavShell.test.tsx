import { beforeEach, describe, expect, it, vi } from 'vitest';

import authService from '../../../services/auth/authService';

import { handleSignOut } from './NavShell';

vi.mock('../../../services/auth/authService', () => ({
  default: {
    getSession: vi.fn(),
    hydrateFromServer: vi.fn(),
    signOut: vi.fn(),
  },
}));

describe('handleSignOut', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(authService.getSession).mockReturnValue(null);
    vi.mocked(authService.hydrateFromServer).mockResolvedValue(null);
    vi.mocked(authService.signOut).mockResolvedValue(undefined);
  });

  it('restores the session before signing out when no session exists', async () => {
    const order: string[] = [];
    const reloadPage = vi.fn(() => order.push('reload'));

    vi.mocked(authService.hydrateFromServer).mockImplementation(async () => {
      order.push('hydrateFromServer');
      return null;
    });

    vi.mocked(authService.signOut).mockImplementation(async () => {
      order.push('signOut');
    });

    await handleSignOut(reloadPage);

    expect(order).toEqual(['hydrateFromServer', 'signOut', 'reload']);

    expect(authService.hydrateFromServer).toHaveBeenCalledTimes(1);
    expect(authService.signOut).toHaveBeenCalledTimes(1);
    expect(reloadPage).toHaveBeenCalledTimes(1);
  });

  it('does not restore the session when one already exists', async () => {
    const order: string[] = [];
    const reloadPage = vi.fn(() => order.push('reload'));

    vi.mocked(authService.getSession).mockReturnValue(
      {} as NonNullable<ReturnType<typeof authService.getSession>>
    );

    vi.mocked(authService.signOut).mockImplementation(async () => {
      order.push('signOut');
    });

    await handleSignOut(reloadPage);

    expect(authService.hydrateFromServer).not.toHaveBeenCalled();
    expect(authService.signOut).toHaveBeenCalledTimes(1);
    expect(order).toEqual(['signOut', 'reload']);
    expect(reloadPage).toHaveBeenCalledTimes(1);
  });
});
