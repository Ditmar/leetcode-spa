import { jsonError } from '../../application/proxy-responses';
import {
  AuthApiError,
  BodyTooLargeError,
  UpstreamTimeoutError,
  UpstreamUnavailableError,
} from '../../domain/errors';
import { loginSchema, signupSchema } from '../auth/auth-request-schemas';

import { lazyContainer } from './bff-container';

import type { BffContainer, BffContainerOptions } from './bff-container';
import type { APIContext, APIRoute } from 'astro';
import type { z } from 'zod';

const NO_STORE = { 'Cache-Control': 'no-store' };

function json(status: number, data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...NO_STORE },
  });
}

class InvalidBodyError extends Error {
  constructor(readonly details?: unknown) {
    super('Invalid request body');
  }
}

async function readBody<S extends z.ZodType>(
  bff: BffContainer,
  request: Request,
  schema: S
): Promise<z.infer<S>> {
  const raw = await bff.authBodyReader.read(request);
  let parsed: unknown;
  try {
    parsed = JSON.parse(new TextDecoder().decode(raw ?? new ArrayBuffer(0)));
  } catch {
    throw new InvalidBodyError();
  }
  const result = schema.safeParse(parsed);
  if (!result.success) throw new InvalidBodyError(result.error.issues);
  return result.data;
}

function toErrorResponse(error: unknown): Response {
  if (error instanceof InvalidBodyError) {
    return jsonError(400, 'VALIDATION_ERROR', 'Invalid request body');
  }
  if (error instanceof AuthApiError) return jsonError(error.status, error.code, error.message);
  if (error instanceof BodyTooLargeError) {
    return jsonError(413, 'PAYLOAD_TOO_LARGE', error.message);
  }
  if (error instanceof UpstreamTimeoutError) {
    return jsonError(504, 'UPSTREAM_TIMEOUT', 'The API took too long to answer');
  }
  if (error instanceof UpstreamUnavailableError) {
    return jsonError(502, 'UPSTREAM_UNAVAILABLE', 'The API is not available');
  }
  // eslint-disable-next-line no-console
  console.error('[bff-auth] unexpected error', error);
  return jsonError(500, 'INTERNAL_SERVER_ERROR', 'Unexpected error');
}

type Handler = (bff: BffContainer, ctx: APIContext) => Promise<Response>;

/** Shared wrapper: configuration check, CSRF for writes, error mapping. */
function route(container: () => BffContainer, handler: Handler): APIRoute {
  return async (ctx) => {
    let bff: BffContainer;
    try {
      bff = container();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[bff-auth] invalid configuration', error);
      return jsonError(500, 'BFF_MISCONFIGURED', 'The server is not configured correctly');
    }

    const csrf = bff.csrfGuard.check(ctx.request);
    if (!csrf.allowed) return jsonError(csrf.status, csrf.code, csrf.message);

    try {
      return await handler(bff, ctx);
    } catch (error) {
      return toErrorResponse(error);
    }
  };
}

export interface AuthRoutes {
  login: APIRoute;
  signup: APIRoute;
  logout: APIRoute;
  me: APIRoute;
}

/**
 * Handlers for `src/pages/api/auth/*` (SPA-036-A).
 * Responses never contain tokens: only `{ user, expiresAt }`.
 */
export function createAuthRoutes(options?: BffContainerOptions): AuthRoutes {
  const container = lazyContainer(options);

  return {
    login: route(container, async (bff, { request, cookies, url }) => {
      const { email, password } = await readBody(bff, request, loginSchema);
      const session = await bff.login.execute(
        email,
        password,
        bff.tokenStore(cookies, url.hostname)
      );
      return json(200, session);
    }),

    signup: route(container, async (bff, { request, cookies, url }) => {
      const input = await readBody(bff, request, signupSchema);
      const session = await bff.signup.execute(input, bff.tokenStore(cookies, url.hostname));
      return json(201, session);
    }),

    logout: route(container, async (bff, { cookies, url }) => {
      await bff.logout.execute(bff.tokenStore(cookies, url.hostname));
      return new Response(null, { status: 204, headers: NO_STORE });
    }),

    me: route(container, async (bff, { cookies, url }) => {
      const session = await bff.getSession.execute(bff.tokenStore(cookies, url.hostname));
      return session ? json(200, session) : jsonError(401, 'UNAUTHORIZED', 'Not signed in');
    }),
  };
}
