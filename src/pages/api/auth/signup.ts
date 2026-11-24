import { authRoutes } from '../../../server/bff/infrastructure/composition/auth-routes';

export const prerender = false;

/** POST /api/auth/signup — SPA-036-A. See src/server/bff/README.md. */
export const POST = authRoutes.signup;
