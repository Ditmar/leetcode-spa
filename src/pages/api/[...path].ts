import { createApiProxyRoute } from '../../server/bff/infrastructure/composition/create-api-proxy-route';

/**
 * BFF proxy (SPA-036-B): every `/api/*` call that has no dedicated Astro route.
 * `/api/auth/*` routes (SPA-036-A) are more specific, so Astro matches them first.
 * See src/server/bff/README.md.
 */
export const prerender = false;

export const ALL = createApiProxyRoute();
