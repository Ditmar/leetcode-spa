import { randomUUID } from 'node:crypto';

import { GetSession } from '../../application/auth/get-session';
import { Login } from '../../application/auth/login';
import { Logout } from '../../application/auth/logout';
import { Signup } from '../../application/auth/signup';
import { ProxyApiRequest } from '../../application/proxy-api-request';
import { SingleFlightTokenRefresher } from '../../application/single-flight-token-refresher';
import { FetchAuthApi } from '../auth/fetch-auth-api';
import { loadBffConfig } from '../config/bff-config';
import { AstroCookieTokenStore } from '../cookies/astro-cookie-token-store';
import { ApiTokenRefresher } from '../http/api-token-refresher';
import { FetchUpstreamClient } from '../http/fetch-upstream-client';
import { LimitedBodyReader } from '../http/limited-body-reader';
import { AllowListRoutePolicy } from '../routing/allow-list-route-policy';
import { API_ALLOW_LIST } from '../routing/api-allow-list';
import { OriginCsrfGuard } from '../security/origin-csrf-guard';

import type { TokenStore } from '../../domain/ports/token-store';
import type { BffConfig } from '../config/bff-config';
import type { CookieJar } from '../cookies/astro-cookie-token-store';
import type { AllowedRoute } from '../routing/api-allow-list';

/** Auth bodies are tiny; 16 KiB is plenty and stops abuse early. */
const AUTH_MAX_BODY_BYTES = 16 * 1024;

export interface BffContainerOptions {
  config?: BffConfig;
  allowList?: readonly AllowedRoute[];
  fetchFn?: typeof fetch;
  createRequestId?: () => string;
}

export interface BffContainer {
  config: BffConfig;
  csrfGuard: OriginCsrfGuard;
  authBodyReader: LimitedBodyReader;
  proxy: ProxyApiRequest;
  login: Login;
  signup: Signup;
  logout: Logout;
  getSession: GetSession;
  tokenStore(cookies: CookieJar, hostname: string): TokenStore;
}

/**
 * Composition root: the only place that knows the concrete classes.
 * The proxy and the auth routes share ONE SingleFlightTokenRefresher, so a refresh
 * started by /api/auth/me and one started by /api/courses are not duplicated.
 */
export function createBffContainer(options: BffContainerOptions = {}): BffContainer {
  const config = options.config ?? loadBffConfig();
  const { apiBaseUrl, upstreamTimeoutMs: timeoutMs } = config;
  const { fetchFn } = options;

  const csrfGuard = new OriginCsrfGuard(config.allowedOrigins);
  const refresher = new SingleFlightTokenRefresher(
    new ApiTokenRefresher({ apiBaseUrl, timeoutMs, fetchFn })
  );
  const authApi = new FetchAuthApi({ apiBaseUrl, timeoutMs, fetchFn });
  const login = new Login(authApi);

  return {
    config,
    csrfGuard,
    authBodyReader: new LimitedBodyReader(AUTH_MAX_BODY_BYTES),
    proxy: new ProxyApiRequest({
      guards: [csrfGuard],
      routePolicy: new AllowListRoutePolicy(options.allowList ?? API_ALLOW_LIST),
      bodyReader: new LimitedBodyReader(config.maxBodyBytes),
      upstream: new FetchUpstreamClient({ apiBaseUrl, timeoutMs, fetchFn }),
      refresher,
      createRequestId: options.createRequestId ?? randomUUID,
    }),
    login,
    signup: new Signup(authApi, login),
    logout: new Logout(authApi),
    getSession: new GetSession(authApi, refresher),
    tokenStore: (cookies, hostname) =>
      new AstroCookieTokenStore(cookies, { isProduction: config.isProduction, hostname }),
  };
}

let defaultContainer: BffContainer | undefined;

/** Lazy singleton for the real app (env variables are read on the first request). */
export function getBffContainer(): BffContainer {
  defaultContainer ??= createBffContainer();
  return defaultContainer;
}

/**
 * Returns a getter: the given options (tests) or the shared app container.
 * Built on first use so a missing API_BASE_URL does not break `astro build`.
 */
export function lazyContainer(options?: BffContainerOptions): () => BffContainer {
  if (!options) return getBffContainer;
  let built: BffContainer | undefined;
  return () => (built ??= createBffContainer(options));
}
