import type { TokenRefresher } from '../domain/ports/token-refresher';
import type { SessionTokens } from '../domain/session-tokens';

interface InFlightEntry {
  promise: Promise<SessionTokens>;
  /** After the refresh succeeds, late requests with the same old token reuse the result until this time. */
  reuseUntil: number;
}

/**
 * Decorator: when many requests from the same browser get a 401 at the same time,
 * they all carry the same refresh token. Only the first one calls the API; the
 * others wait for the same promise ("single flight").
 *
 * A successful result is kept for a short grace period, so a request that
 * started with the old cookies a moment later does not trigger a second refresh
 * (important if the API starts rotating refresh tokens, see API-009).
 *
 * Note: the map lives in this Node process. With several replicas each one may
 * refresh once, which is still correct.
 */
export class SingleFlightTokenRefresher implements TokenRefresher {
  private readonly inFlight = new Map<string, InFlightEntry>();

  constructor(
    private readonly inner: TokenRefresher,
    private readonly graceMs = 10_000,
    private readonly now: () => number = Date.now
  ) {}

  refresh(refreshToken: string): Promise<SessionTokens> {
    this.evictExpired();

    const existing = this.inFlight.get(refreshToken);
    if (existing) return existing.promise;

    const entry: InFlightEntry = {
      promise: this.inner.refresh(refreshToken),
      reuseUntil: Number.POSITIVE_INFINITY,
    };
    this.inFlight.set(refreshToken, entry);

    entry.promise.then(
      () => {
        entry.reuseUntil = this.now() + this.graceMs;
      },
      () => {
        // A failed refresh must not be cached: the next request may try again.
        this.inFlight.delete(refreshToken);
      }
    );

    return entry.promise;
  }

  private evictExpired(): void {
    const now = this.now();
    for (const [key, entry] of this.inFlight) {
      if (entry.reuseUntil <= now) this.inFlight.delete(key);
    }
  }
}
