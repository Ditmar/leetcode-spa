import { randomUUID } from 'node:crypto';

import { ProxyApiRequest } from '../../application/proxy-api-request';
import { jsonError } from '../../application/proxy-responses';
import { SingleFlightTokenRefresher } from '../../application/single-flight-token-refresher';
import { loadBffConfig } from '../config/bff-config';
import { AstroCookieTokenStore } from '../cookies/astro-cookie-token-store';
import { ApiTokenRefresher } from '../http/api-token-refresher';
import { FetchUpstreamClient } from '../http/fetch-upstream-client';
import { LimitedBodyReader } from '../http/limited-body-reader';
import { AllowListRoutePolicy } from '../routing/allow-list-route-policy';
import { API_ALLOW_LIST } from '../routing/api-allow-list';
import { OriginCsrfGuard } from '../security/origin-csrf-guard';

import type { BffConfig } from '../config/bff-config';
import type { AllowedRoute } from '../routing/api-allow-list';
import type { APIRoute } from 'astro';

/** Prefix of the Astro route that hosts the proxy (`src/pages/api/[...path].ts`). */
const PROXY_PREFIX = '/api';

export interface CreateApiProxyRouteOptions {
  config?: BffConfig;
  allowList?: readonly AllowedRoute[];
  fetchFn?: typeof fetch;
  createRequestId?: () => string;
}

/**
 * Composition root: the only place that knows the concrete classes.
 * Everything else depends on the ports in `domain/ports`.
 *
 * Built lazily (first request) so a missing API_BASE_URL fails at runtime with a
 * clear message instead of breaking `astro build`.
 */
export function createApiProxyRoute(options: CreateApiProxyRouteOptions = {}): APIRoute {
  let built: { useCase: ProxyApiRequest; config: BffConfig } | undefined;

  const build = () => {
    const config = options.config ?? loadBffConfig();
    const { apiBaseUrl, upstreamTimeoutMs: timeoutMs } = config;
    const { fetchFn } = options;

    const useCase = new ProxyApiRequest({
      guards: [new OriginCsrfGuard(config.allowedOrigins)],
      routePolicy: new AllowListRoutePolicy(options.allowList ?? API_ALLOW_LIST),
      bodyReader: new LimitedBodyReader(config.maxBodyBytes),
      upstream: new FetchUpstreamClient({ apiBaseUrl, timeoutMs, fetchFn }),
      refresher: new SingleFlightTokenRefresher(
        new ApiTokenRefresher({ apiBaseUrl, timeoutMs, fetchFn })
      ),
      createRequestId: options.createRequestId ?? randomUUID,
    });
    return { useCase, config };
  };

  return async ({ request, cookies, url }) => {
    try {
      built ??= build();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[bff-proxy] invalid configuration', error);
      return jsonError(500, 'BFF_MISCONFIGURED', 'The server is not configured correctly');
    }

    const path = url.pathname.startsWith(`${PROXY_PREFIX}/`)
      ? url.pathname.slice(PROXY_PREFIX.length)
      : url.pathname;

    const tokens = new AstroCookieTokenStore(cookies, {
      isProduction: built.config.isProduction,
      hostname: url.hostname,
    });

    return built.useCase.execute({ request, path, search: url.search, tokens });
  };
}
