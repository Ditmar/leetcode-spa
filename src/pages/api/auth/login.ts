import {
  API_AUTH_PATHS,
  callApi,
  errorFromUpstream,
  isLoginPayload,
  jsonResponse,
  parseUpstream,
  readJsonBody,
  rejectCrossOrigin,
  resolveExpiresAt,
} from '../../../services/auth/authBff';
import { setAuthCookies } from '../../../services/auth/cookies';

import type { APIRoute } from 'astro';

/**
 * POST /api/auth/login
 * Place at: src/pages/api/auth/login.ts
 * The tokens go to HttpOnly cookies; the browser only receives { user, expiresAt }.
 */
export const POST: APIRoute = async ({ request, cookies }) => {
  const blocked = rejectCrossOrigin(request);
  if (blocked) return blocked;

  const body = await readJsonBody(request);
  if (!body || typeof body.email !== 'string' || typeof body.password !== 'string') {
    return jsonResponse(400, {
      code: 'VALIDATION_ERROR',
      message: 'Email and password are required',
    });
  }

  const upstream = await callApi(API_AUTH_PATHS.LOGIN, {
    method: 'POST',
    body: { email: body.email, password: body.password },
    requestId: request.headers.get('x-request-id'),
  });
  if (!upstream.ok) return errorFromUpstream(upstream);

  const payload = await parseUpstream(upstream);
  if (!isLoginPayload(payload)) {
    return jsonResponse(502, {
      code: 'INVALID_UPSTREAM_RESPONSE',
      message: 'Unexpected response from the API',
    });
  }

  setAuthCookies(cookies, {
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
  });

  return jsonResponse(200, {
    user: payload.user,
    expiresAt: resolveExpiresAt(payload.accessToken),
  });
};
