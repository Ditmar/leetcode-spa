import { authRoutes } from '../../../server/bff/infrastructure/composition/auth-routes';

export const prerender = false;

/** GET /api/auth/me — current user `{ user, expiresAt }` or 401. SPA-036-A. */
export const GET = authRoutes.me;
