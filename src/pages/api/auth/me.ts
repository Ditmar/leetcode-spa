import {
  API_AUTH_PATHS,
  callApi,
  errorFromUpstream,
  jsonResponse,
  parseUpstream,
} from '../../../services/auth/authBff';
import { getSession } from '../../../services/auth/session';

import type { APIRoute } from 'astro';

/**
 * GET /api/auth/me
 * Place at: src/pages/api/auth/me.ts
 * Returns { user, expiresAt } without ever exposing the token to the browser.
 */
export const GET: APIRoute = async ({ request, cookies }) => {
  const session = getSession(cookies);
  if (!session) {
    return jsonResponse(401, { code: 'UNAUTHORIZED', message: 'Not authenticated' });
  }

  const upstream = await callApi(API_AUTH_PATHS.ME, {
    accessToken: session.accessToken,
    requestId: request.headers.get('x-request-id'),
  });
  if (!upstream.ok) return errorFromUpstream(upstream);

  const payload = await parseUpstream(upstream);
  if (!payload) {
    return jsonResponse(502, {
      code: 'INVALID_UPSTREAM_RESPONSE',
      message: 'Unexpected response from the API',
    });
  }

  const user = payload.user ?? payload;
  return jsonResponse(200, { user, expiresAt: session.expiresAt });
};
