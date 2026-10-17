import { toAuthUser } from '../../domain/auth-user';
import { AuthApiError, UpstreamTimeoutError, UpstreamUnavailableError } from '../../domain/errors';

import type { AuthUser } from '../../domain/auth-user';
import type { AuthApi, LoginResult, SignupInput } from '../../domain/ports/auth-api';

export interface FetchAuthApiOptions {
  apiBaseUrl: string;
  timeoutMs: number;
  fetchFn?: typeof fetch;
}

const DEFAULT_CODES: Record<number, string> = {
  400: 'VALIDATION_ERROR',
  401: 'INVALID_CREDENTIALS',
  404: 'NOT_FOUND',
  409: 'USER_ALREADY_EXISTS',
};

function parseExpiresAt(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
}

/**
 * Adapter: AuthApi over HTTP for api-leetcode
 * (src/auth/infrastructure/routes/auth-routes.ts).
 *
 * API today            → what the BFF needs
 * POST /auth/login     → { accessToken, refreshToken, user }  (expiresAt optional, API-028)
 * POST /auth/signup    → body uses `name`; the SPA sends `username`
 * POST /auth/logout    → { refreshToken } in the body, revokes it
 * GET  /auth/me        → user object (or `{ user }` after API-028)
 */
export class FetchAuthApi implements AuthApi {
  private readonly fetchFn: typeof fetch;

  constructor(private readonly options: FetchAuthApiOptions) {
    this.fetchFn = options.fetchFn ?? ((...args) => globalThis.fetch(...args));
  }

  async login(email: string, password: string): Promise<LoginResult> {
    const response = await this.call('POST', '/auth/login', { email, password });
    const body = await this.readJson(response);
    if (!response.ok) throw this.toError(response.status, body);

    const user = toAuthUser(body.user);
    if (typeof body.accessToken !== 'string' || typeof body.refreshToken !== 'string' || !user) {
      throw new UpstreamUnavailableError('Invalid login response from the API');
    }
    return {
      user,
      tokens: {
        accessToken: body.accessToken,
        refreshToken: body.refreshToken,
        accessTokenExpiresAt: parseExpiresAt(body.expiresAt),
      },
    };
  }

  async signup({ username, email, password }: SignupInput): Promise<void> {
    // `name` is what the API reads today; `username` is sent too for API-028.
    const response = await this.call('POST', '/auth/signup', {
      name: username,
      username,
      email,
      password,
    });
    if (!response.ok) throw this.toError(response.status, await this.readJson(response));
  }

  async logout(refreshToken: string): Promise<void> {
    const response = await this.call('POST', '/auth/logout', { refreshToken });
    // 404 = the token was already unknown/revoked: the goal (revoked) is reached.
    if (!response.ok && response.status !== 404) {
      throw this.toError(response.status, await this.readJson(response));
    }
  }

  async me(accessToken: string): Promise<AuthUser | null> {
    const response = await this.call('GET', '/auth/me', undefined, accessToken);
    if (response.status === 401 || response.status === 403) return null;
    const body = await this.readJson(response);
    if (!response.ok) throw this.toError(response.status, body);
    return toAuthUser(body.user ?? body.data ?? body) ?? null;
  }

  private async call(
    method: string,
    path: string,
    body?: unknown,
    accessToken?: string
  ): Promise<Response> {
    const headers: Record<string, string> = { Accept: 'application/json' };
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

    const timeoutSignal = AbortSignal.timeout(this.options.timeoutMs);
    try {
      const response = await this.fetchFn(`${this.options.apiBaseUrl}${path}`, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
        signal: timeoutSignal,
        credentials: 'omit',
      });
      if (response.status >= 500) throw new UpstreamUnavailableError(response.status);
      return response;
    } catch (error) {
      if (error instanceof UpstreamUnavailableError) throw error;
      if (timeoutSignal.aborted) throw new UpstreamTimeoutError(this.options.timeoutMs);
      throw new UpstreamUnavailableError(error);
    }
  }

  private async readJson(response: Response): Promise<Record<string, unknown>> {
    const raw: unknown = await response.json().catch(() => ({}));
    return typeof raw === 'object' && raw !== null ? (raw as Record<string, unknown>) : {};
  }

  /** API errors today: `{ error, message }`; after X-003: `{ code, message }`. */
  private toError(status: number, body: Record<string, unknown>): AuthApiError {
    const code =
      typeof body.code === 'string' ? body.code : (DEFAULT_CODES[status] ?? 'BAD_REQUEST');
    const message =
      typeof body.message === 'string'
        ? body.message
        : typeof body.error === 'string'
          ? body.error
          : 'Request failed';
    return new AuthApiError(status, code, message);
  }
}
