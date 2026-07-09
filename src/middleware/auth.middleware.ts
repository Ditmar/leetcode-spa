import { apiClient } from '../services/api/apiClient';
import { AUTH_ENDPOINTS } from '../services/auth/authService.constants';

import { PROTECTED_PATHS } from './protected-routes.config';

import type { ApiError } from '../services/api/apiClient.types';
import type { AuthSession } from '../services/auth/authService.types';
import type { MiddlewareHandler } from 'astro';

const SESSION_VALIDATION_LOG_PREFIX = '[authMiddleware] Session validation failed';

function isProtectedPath(pathname: string, protectedPaths = PROTECTED_PATHS): boolean {
  return protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

function isValidAuthSession(session: unknown): session is AuthSession {
  return (
    typeof session === 'object' &&
    session !== null &&
    'user' in session &&
    typeof (session as AuthSession).user === 'object' &&
    (session as AuthSession).user !== null &&
    'accessToken' in session &&
    typeof (session as AuthSession).accessToken === 'string' &&
    'expiresAt' in session &&
    typeof (session as AuthSession).expiresAt === 'number'
  );
}

function logSessionValidationWarning(reason: string, details: Record<string, unknown>): void {
  // eslint-disable-next-line no-console
  console.warn(`${SESSION_VALIDATION_LOG_PREFIX}: ${reason}. Continuing unauthenticated.`, details);
}

function handleInvalidSessionResponse(responseData: unknown): null {
  logSessionValidationWarning('unexpected /auth/me response shape', { responseData });
  return null;
}

function isSessionApiError(error: unknown): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as ApiError).status === 'number' &&
    'code' in error &&
    typeof (error as ApiError).code === 'string' &&
    'message' in error &&
    typeof (error as ApiError).message === 'string'
  );
}

function handleSessionValidationError(error: unknown): null {
  if (isSessionApiError(error) && error.status === 401) {
    return null;
  }

  if (isSessionApiError(error)) {
    logSessionValidationWarning('API error', {
      status: error.status,
      code: error.code,
      message: error.message,
      details: error.details,
    });
    return null;
  }

  if (error instanceof Error) {
    logSessionValidationWarning('network or runtime error', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    return null;
  }

  logSessionValidationWarning('unknown error', { error });
  return null;
}

export async function validateSessionCookie(cookieHeader: string): Promise<AuthSession | null> {
  if (!cookieHeader) return null;

  try {
    const response = await apiClient.get<AuthSession>(AUTH_ENDPOINTS.ME, {
      headers: { cookie: cookieHeader },
    });

    if (!isValidAuthSession(response.data)) {
      return handleInvalidSessionResponse(response.data);
    }

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
