import { createAuthRoutes } from './create-auth-routes';

/** One shared instance for the four files in src/pages/api/auth/. */
export const authRoutes = createAuthRoutes();
