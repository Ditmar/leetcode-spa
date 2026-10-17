import { jsonError } from '../../application/proxy-responses';

import { lazyContainer } from './bff-container';

import type { BffContainerOptions } from './bff-container';
import type { APIRoute } from 'astro';

/** Prefix of the Astro route that hosts the proxy (`src/pages/api/[...path].ts`). */
const PROXY_PREFIX = '/api';

export type CreateApiProxyRouteOptions = BffContainerOptions;

/** Builds the `ALL` handler of `src/pages/api/[...path].ts`. */
export function createApiProxyRoute(options?: CreateApiProxyRouteOptions): APIRoute {
  const container = lazyContainer(options);

  return async ({ request, cookies, url }) => {
    let bff;
    try {
      bff = container();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[bff-proxy] invalid configuration', error);
      return jsonError(500, 'BFF_MISCONFIGURED', 'The server is not configured correctly');
    }

    const path = url.pathname.startsWith(`${PROXY_PREFIX}/`)
      ? url.pathname.slice(PROXY_PREFIX.length)
      : url.pathname;

    return bff.proxy.execute({
      request,
      path,
      search: url.search,
      tokens: bff.tokenStore(cookies, url.hostname),
    });
  };
}
