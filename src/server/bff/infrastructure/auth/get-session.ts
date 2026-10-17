import { getBffContainer } from '../composition/bff-container';

import type { SessionView } from '../../domain/auth-user';
import type { CookieJar } from '../cookies/astro-cookie-token-store';

export interface GetSessionOptions {
  /** Hostname of the request (`url.hostname`). Decides the `Secure` flag if cookies are refreshed. */
  hostname?: string;
}

/**
 * Who is logged in? For the Astro middleware (SPA-007) and server-side page code:
 *
 * ```ts
 * // src/middleware.ts
 * const session = await getSession(context.cookies, { hostname: context.url.hostname });
 * context.locals.user = session?.user ?? null;
 *
 * // any .astro page
 * const session = await getSession(Astro.cookies, { hostname: Astro.url.hostname });
 * ```
 *
 * Refreshes an expired access token by itself (and saves the new cookie).
 * Returns `null` when there is no valid session. Never throws: if the API is down
 * it logs the error and returns `null`, so pages still render.
 */
export async function getSession(
  cookies: CookieJar,
  options: GetSessionOptions = {}
): Promise<SessionView | null> {
  try {
    const bff = getBffContainer();
    return await bff.getSession.execute(bff.tokenStore(cookies, options.hostname ?? ''));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[bff-auth] getSession failed', error);
    return null;
  }
}
