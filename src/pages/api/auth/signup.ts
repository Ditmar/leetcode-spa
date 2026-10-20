import {
  API_AUTH_PATHS,
  callApi,
  errorFromUpstream,
  jsonResponse,
  readJsonBody,
  rejectCrossOrigin,
} from '../../../services/auth/authBff';

import type { APIRoute } from 'astro';

/**
 * POST /api/auth/signup
 * Place at: src/pages/api/auth/signup.ts
 * Only creates the account. authService.signUp() calls login right after,
 * so cookies are set by login.ts, not here.
 */
export const POST: APIRoute = async ({ request }) => {
  const blocked = rejectCrossOrigin(request);
  if (blocked) return blocked;

  const body = await readJsonBody(request);
  if (
    !body ||
    typeof body.username !== 'string' ||
    typeof body.email !== 'string' ||
    typeof body.password !== 'string'
  ) {
    return jsonResponse(400, {
      code: 'VALIDATION_ERROR',
      message: 'Username, email and password are required',
    });
  }

  const upstream = await callApi(API_AUTH_PATHS.SIGNUP, {
    method: 'POST',
    body: { username: body.username, email: body.email, password: body.password },
    requestId: request.headers.get('x-request-id'),
  });
  if (!upstream.ok) return errorFromUpstream(upstream);

  // Do not forward whatever the API returned (it could contain tokens).
  return jsonResponse(201, { success: true });
};
