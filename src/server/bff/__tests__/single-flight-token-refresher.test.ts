// @vitest-environment node
import { describe, expect, it, vi } from 'vitest';

import { SingleFlightTokenRefresher } from '../application/single-flight-token-refresher';
import { RefreshFailedError } from '../domain/errors';

import type { TokenRefresher } from '../domain/ports/token-refresher';
import type { SessionTokens } from '../domain/session-tokens';

function deferredRefresher() {
  let resolve!: (token: string) => void;
  const inner: TokenRefresher = {
    refresh: vi.fn(
      () => new Promise<SessionTokens>((res) => (resolve = (accessToken) => res({ accessToken })))
    ),
  };
  return { inner, resolve: (token: string) => resolve(token) };
}

describe('SingleFlightTokenRefresher', () => {
  it('shares one refresh between parallel callers with the same token', async () => {
    const { inner, resolve } = deferredRefresher();
    const refresher = new SingleFlightTokenRefresher(inner);

    const calls = [refresher.refresh('rt'), refresher.refresh('rt'), refresher.refresh('rt')];
    resolve('new-at');

    await expect(Promise.all(calls)).resolves.toEqual([
      { accessToken: 'new-at' },
      { accessToken: 'new-at' },
      { accessToken: 'new-at' },
    ]);
    expect(inner.refresh).toHaveBeenCalledTimes(1);
  });

  it('reuses a successful result during the grace period, then refreshes again', async () => {
    let now = 1_000;
    const inner: TokenRefresher = { refresh: vi.fn().mockResolvedValue({ accessToken: 'at' }) };
    const refresher = new SingleFlightTokenRefresher(inner, 5_000, () => now);

    await refresher.refresh('rt');
    now += 4_000;
    await refresher.refresh('rt');
    expect(inner.refresh).toHaveBeenCalledTimes(1);

    now += 2_000;
    await refresher.refresh('rt');
    expect(inner.refresh).toHaveBeenCalledTimes(2);
  });

  it('does not cache failures', async () => {
    const inner: TokenRefresher = {
      refresh: vi
        .fn()
        .mockRejectedValueOnce(new RefreshFailedError(401))
        .mockResolvedValueOnce({ accessToken: 'ok' }),
    };
    const refresher = new SingleFlightTokenRefresher(inner);

    await expect(refresher.refresh('rt')).rejects.toBeInstanceOf(RefreshFailedError);
    await expect(refresher.refresh('rt')).resolves.toEqual({ accessToken: 'ok' });
  });

  it('keeps different refresh tokens independent', async () => {
    const inner: TokenRefresher = { refresh: vi.fn().mockResolvedValue({ accessToken: 'x' }) };
    const refresher = new SingleFlightTokenRefresher(inner);
    await Promise.all([refresher.refresh('a'), refresher.refresh('b')]);
    expect(inner.refresh).toHaveBeenCalledTimes(2);
  });
});
