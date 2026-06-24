import { apiClient, isApiError } from '../services/api/apiClient';
import { AUTH_ENDPOINTS } from '../services/auth/authService.constants';

import { PROTECTED_PATHS } from './protected-routes.config';

import type { AuthSession } from '../services/auth/authService.types';
import type { MiddlewareHandler } from 'astro';

function isProtectedPath(pathname: string, protectedPaths = PROTECTED_PATHS): boolean {
  return protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

function handleSessionValidationError(error: unknown): null {
  if (isApiError(error) && error.status === 401) {
    return null;
  }

  // eslint-disable-next-line no-console
  console.warn('[authMiddleware] Session validation failed; continuing unauthenticated.', error);
  return null;
}

export async function validateSessionCookie(cookieHeader: string): Promise<AuthSession | null> {
  if (!cookieHeader) return null;

  try {
    const response = await apiClient.get<AuthSession>(AUTH_ENDPOINTS.ME, {
      headers: { cookie: cookieHeader },
    });

    return response.data;
  } catch (error) {
    return handleSessionValidationError(error);
  }
}

export const authMiddleware: MiddlewareHandler = async (ctx, next) => {
  const cookieHeader = ctx.request.headers.get('cookie') ?? '';
  const session = await validateSessionCookie(cookieHeader);

  ctx.locals.user = session?.user ?? null;
  ctx.locals.isAuthenticated = session !== null;

  if (isProtectedPath(ctx.url.pathname) && !ctx.locals.isAuthenticated) {
    return ctx.redirect('/?authRequired=true');
  }

  return next();
};
