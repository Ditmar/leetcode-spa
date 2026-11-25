import { AUTH_COOKIE_NAMES } from '../cookies/auth-cookie-options';

import type { RequestConfig } from '../../../../services/api/apiClient.types';
import type { CookieJar } from '../cookies/astro-cookie-token-store';

/**
 * For server code (`.astro` pages, middleware) that calls the API directly with
 * `apiClient`. The API reads `Authorization: Bearer`, not cookies, so forwarding the
 * browser `Cookie` header does nothing (SPA-003). This reads the HttpOnly access cookie
 * and builds the header instead.
 *
 * ```astro
 * const stats = await problemsService.getStats(getServerAuthConfig(Astro.cookies));
 * ```
 *
 * Returns `undefined` when there is no access cookie (signed out, or it expired:
 * pages cannot refresh, the client recovers with `GET /api/auth/me`).
 */
export function getServerAuthConfig(
  cookies: Pick<CookieJar, 'get'>,
  base: RequestConfig = {}
): RequestConfig | undefined {
  const accessToken = cookies.get(AUTH_COOKIE_NAMES.ACCESS)?.value;
  if (!accessToken) return Object.keys(base).length ? base : undefined;
  return { ...base, headers: { ...base.headers, Authorization: `Bearer ${accessToken}` } };
}
