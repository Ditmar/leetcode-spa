import {
  API_AUTH_PATHS,
  callApi,
  jsonResponse,
  rejectCrossOrigin,
} from '../../../services/auth/authBff';
import { clearAuthCookies, getAccessToken, getRefreshToken } from '../../../services/auth/cookies';

import type { APIRoute } from 'astro';

/**
 * POST /api/auth/logout
 * Place at: src/pages/api/auth/logout.ts
 * Revokes the refresh token in the API and ALWAYS clears both cookies,
 * even if the API call fails.
 */
export const POST: APIRoute = async ({ request, cookies }) => {
  const blocked = rejectCrossOrigin(request);
  if (blocked) return blocked;

  const accessToken = getAccessToken(cookies);
  const refreshToken = getRefreshToken(cookies);

  if (accessToken || refreshToken) {
    const upstream = await callApi(API_AUTH_PATHS.LOGOUT, {
      method: 'POST',
      body: { refreshToken },
      accessToken,
      requestId: request.headers.get('x-request-id'),
    });
    if (!upstream.ok) {
      // eslint-disable-next-line no-console
      console.error(`[auth/logout] API logout failed with status ${upstream.status}`);
    }
  }

  clearAuthCookies(cookies);
  return jsonResponse(200, { success: true });
};
