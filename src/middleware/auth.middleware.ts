import { apiClient } from '../services/api/apiClient';
import { AUTH_ENDPOINTS } from '../services/auth/authService.constants';

import type { AuthSession } from '../services/auth/authService.types';
import type { MiddlewareHandler } from 'astro';

const protectedPaths = ['/profile', '/settings'];

function isProtectedPath(pathname: string): boolean {
  return protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export async function validateSessionCookie(cookieHeader: string): Promise<AuthSession | null> {
  if (!cookieHeader) return null;

  try {
    const response = await apiClient.get<AuthSession>(AUTH_ENDPOINTS.ME, {
      headers: { cookie: cookieHeader },
    });

    return response.data;
  } catch {
    return null;
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
