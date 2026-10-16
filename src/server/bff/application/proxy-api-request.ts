import {
  BodyTooLargeError,
  RefreshFailedError,
  UpstreamTimeoutError,
  UpstreamUnavailableError,
} from '../domain/errors';

import { jsonError, toClientResponse } from './proxy-responses';

import type { BodyReader } from '../domain/ports/body-reader';
import type { RequestGuard } from '../domain/ports/request-guard';
import type { RoutePolicy } from '../domain/ports/route-policy';
import type { TokenRefresher } from '../domain/ports/token-refresher';
import type { TokenStore } from '../domain/ports/token-store';
import type { UpstreamClient, UpstreamRequest } from '../domain/ports/upstream-client';

export interface ProxyApiRequestDeps {
  guards: RequestGuard[];
  routePolicy: RoutePolicy;
  bodyReader: BodyReader;
  upstream: UpstreamClient;
  /** Should be a SingleFlightTokenRefresher so parallel requests share one refresh. */
  refresher: TokenRefresher;
  createRequestId: () => string;
}

export interface ProxyApiRequestInput {
  request: Request;
  /** API path without the `/api` prefix of the Astro route. Example: `/courses/42`. */
  path: string;
  /** Query string including `?`, or an empty string. */
  search: string;
  tokens: TokenStore;
}

const REQUEST_ID_PATTERN = /^[A-Za-z0-9._:-]{1,128}$/;

/**
 * Use case: forward one browser request to the real API.
 *
 * 1. Run the guards (CSRF) → 403.
 * 2. Check the allow-list → 404.
 * 3. Read the body with a size limit → 413.
 * 4. Send it with `Authorization: Bearer <access token from cookie>`.
 * 5. On 401 (or no access token but a refresh token), refresh ONCE, save the new
 *    cookies and repeat the request. If the refresh fails, clear the cookies → 401.
 */
export class ProxyApiRequest {
  constructor(private readonly deps: ProxyApiRequestDeps) {}

  async execute(input: ProxyApiRequestInput): Promise<Response> {
    const { request, path, search, tokens } = input;
    const requestId = this.resolveRequestId(request);

    for (const guard of this.deps.guards) {
      const result = guard.check(request);
      if (!result.allowed) return jsonError(result.status, result.code, result.message, requestId);
    }

    if (!this.deps.routePolicy.isAllowed(request.method, path)) {
      return jsonError(404, 'NOT_FOUND', 'Route not found', requestId);
    }

    try {
      const body = await this.deps.bodyReader.read(request);
      const base: Omit<UpstreamRequest, 'accessToken'> = {
        method: request.method,
        pathWithQuery: `${path}${search}`,
        incomingHeaders: request.headers,
        body,
        requestId,
        signal: request.signal,
      };

      const upstreamResponse = await this.sendWithRefresh(base, tokens);
      if (upstreamResponse instanceof Response)
        return toClientResponse(upstreamResponse, requestId);
      return jsonError(401, 'UNAUTHORIZED', 'Session expired. Please sign in again.', requestId);
    } catch (error) {
      return this.mapError(error, requestId);
    }
  }

  /** Returns the API response, or `null` when the session could not be refreshed. */
  private async sendWithRefresh(
    base: Omit<UpstreamRequest, 'accessToken'>,
    tokens: TokenStore
  ): Promise<Response | null> {
    let accessToken = tokens.readAccessToken();
    const refreshToken = tokens.readRefreshToken();
    let alreadyRefreshed = false;

    // The access cookie is gone (its Max-Age passed) but the session is still alive:
    // refresh first instead of sending a request we know will fail.
    if (!accessToken && refreshToken) {
      accessToken = await this.refresh(refreshToken, tokens);
      if (!accessToken) return null;
      alreadyRefreshed = true;
    }

    const first = await this.deps.upstream.send({ ...base, accessToken });
    if (first.status !== 401 || !refreshToken || alreadyRefreshed) return first;

    // Free the connection of the discarded 401 response.
    await first.body?.cancel().catch(() => undefined);

    const newAccessToken = await this.refresh(refreshToken, tokens);
    if (!newAccessToken) return null;

    return this.deps.upstream.send({ ...base, accessToken: newAccessToken });
  }

  private async refresh(refreshToken: string, tokens: TokenStore): Promise<string | undefined> {
    try {
      const refreshed = await this.deps.refresher.refresh(refreshToken);
      tokens.save(refreshed);
      return refreshed.accessToken;
    } catch (error) {
      if (error instanceof RefreshFailedError) {
        tokens.clear();
        return undefined;
      }
      throw error;
    }
  }

  private resolveRequestId(request: Request): string {
    const incoming = request.headers.get('X-Request-Id');
    return incoming && REQUEST_ID_PATTERN.test(incoming) ? incoming : this.deps.createRequestId();
  }

  private mapError(error: unknown, requestId: string): Response {
    if (error instanceof BodyTooLargeError) {
      return jsonError(413, 'PAYLOAD_TOO_LARGE', error.message, requestId);
    }
    if (error instanceof UpstreamTimeoutError) {
      return jsonError(504, 'UPSTREAM_TIMEOUT', 'The API took too long to answer', requestId);
    }
    if (error instanceof UpstreamUnavailableError) {
      return jsonError(502, 'UPSTREAM_UNAVAILABLE', 'The API is not available', requestId);
    }
    // eslint-disable-next-line no-console
    console.error(`[bff-proxy] unexpected error (request ${requestId})`, error);
    return jsonError(500, 'INTERNAL_SERVER_ERROR', 'Unexpected proxy error', requestId);
  }
}
