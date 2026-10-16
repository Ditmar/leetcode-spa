import {
  RefreshFailedError,
  UpstreamTimeoutError,
  UpstreamUnavailableError,
} from '../../domain/errors';

import type { TokenRefresher } from '../../domain/ports/token-refresher';
import type { SessionTokens } from '../../domain/session-tokens';

export interface ApiTokenRefresherOptions {
  apiBaseUrl: string;
  timeoutMs: number;
  fetchFn?: typeof fetch;
}

/** Shape of `POST {API_BASE_URL}/auth/refresh` (api-leetcode AuthRefreshToken + API-028 fields). */
interface RefreshResponseBody {
  accessToken?: unknown;
  refreshToken?: unknown;
  expiresAt?: unknown;
}

function parseExpiresAt(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
}

/** Adapter: calls the real API to exchange the refresh token. */
export class ApiTokenRefresher implements TokenRefresher {
  private readonly fetchFn: typeof fetch;

  constructor(private readonly options: ApiTokenRefresherOptions) {
    this.fetchFn = options.fetchFn ?? ((...args) => globalThis.fetch(...args));
  }

  async refresh(refreshToken: string): Promise<SessionTokens> {
    const timeoutSignal = AbortSignal.timeout(this.options.timeoutMs);
    let response: Response;
    try {
      response = await this.fetchFn(`${this.options.apiBaseUrl}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ refreshToken }),
        signal: timeoutSignal,
        credentials: 'omit',
      });
    } catch (error) {
      // Network problem: we cannot tell if the session is still valid, so the cookies stay.
      if (timeoutSignal.aborted) throw new UpstreamTimeoutError(this.options.timeoutMs);
      throw new UpstreamUnavailableError(error);
    }

    // 5xx = the API is broken, not the session: do not log the user out.
    if (response.status >= 500) throw new UpstreamUnavailableError(response.status);
    // 4xx = token unknown (404), expired or revoked (401), missing (400) → session is over.
    if (!response.ok) throw new RefreshFailedError(response.status);

    const body = (await response.json().catch(() => ({}))) as RefreshResponseBody;
    if (typeof body.accessToken !== 'string' || body.accessToken.length === 0) {
      throw new RefreshFailedError(response.status);
    }

    return {
      accessToken: body.accessToken,
      refreshToken: typeof body.refreshToken === 'string' ? body.refreshToken : undefined,
      accessTokenExpiresAt: parseExpiresAt(body.expiresAt),
    };
  }
}
