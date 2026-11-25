import { AUTH_SIGN_OUT_EVENT } from '../auth/authService.constants';

import { normalizeError, statusToCode } from './apiClient.utils';

import type { ApiError, ApiResponse, RequestConfig } from './apiClient.types';

const isServer = typeof window === 'undefined';

const API_BASE_URL = isServer
  ? `${(process.env.API_BASE_URL || 'http://localhost:3000').replace(/\/$/, '')}/api`
  : '/api';
const DEFAULT_TIMEOUT_MS = 15_000;

function resolveUrl(path: string): string {
  const base = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * The browser never holds an access or refresh token (X-002, SPA-036): they live in
 * HttpOnly cookies and the Astro BFF adds `Authorization` when it forwards `/api/*`.
 * So this client does not read tokens from memory, `localStorage` or `document.cookie`.
 *
 * Server-side code that calls the API directly passes its own `Authorization` header
 * in `config.headers` (see `getServerAuthConfig` in `src/server/bff`).
 */

/**
 * A `401` that reaches the browser is final: the BFF already tried to refresh the
 * session once (SPA-036). Tell the app the user is signed out (SPA-003).
 */
function notifySessionEnded(): void {
  if (isServer) return;
  try {
    window.dispatchEvent(new CustomEvent(AUTH_SIGN_OUT_EVENT));
  } catch {
    // Old browsers without CustomEvent: the next page load shows the signed-out state.
  }
}

async function normalizeHttpError(response: Response): Promise<ApiError> {
  let body: Record<string, unknown> = {};
  try {
    const raw = await response.json();
    if (typeof raw === 'object' && raw !== null) {
      body = raw as Record<string, unknown>;
    }
  } catch {
    // body is not valid JSON — fall back to statusText
  }

  return {
    status: response.status,
    code: typeof body.code === 'string' ? body.code : statusToCode(response.status),
    message:
      typeof body.message === 'string'
        ? body.message
        : typeof body.error === 'string'
          ? body.error
          : response.statusText || 'An unexpected error occurred',
    details: body.details,
  };
}

async function request<T>(
  method: string,
  path: string,
  body?: unknown,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> {
  const url = resolveUrl(path);
  const hasBody = body !== undefined && body !== null;
  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;

  const headers: Record<string, string> = { ...config.headers };
  if (hasBody && !isFormData) headers['Content-Type'] = 'application/json';

  let requestBody: BodyInit | undefined;

  if (hasBody) {
    if (isFormData) {
      requestBody = body as FormData;
    } else {
      try {
        requestBody = JSON.stringify(body);
      } catch (error) {
        const serializationError: ApiError = {
          status: 500,
          code: statusToCode(500),
          message: error instanceof Error ? error.message : 'Failed to serialize request body',
        };

        throw serializationError;
      }
    }
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), config.timeoutMs ?? DEFAULT_TIMEOUT_MS);

  const abortFromConfig = () => controller.abort();

  if (config.signal) {
    if (config.signal.aborted) {
      controller.abort();
    } else {
      config.signal.addEventListener('abort', abortFromConfig, { once: true });
    }
  }

  const init: RequestInit = {
    method,
    headers,
    signal: controller.signal,
    ...(isServer ? {} : { credentials: config.credentials ?? 'include' }),
    ...(hasBody ? { body: requestBody } : {}),
  };

  let response: Response;
  try {
    response = await fetch(url, init);
  } catch (error) {
    throw normalizeError(error);
  } finally {
    clearTimeout(timeoutId);
    config.signal?.removeEventListener('abort', abortFromConfig);
  }

  if (!response.ok) {
    if (response.status === 401) notifySessionEnded();
    throw await normalizeHttpError(response);
  }

  if (response.status === 204 || response.status === 205) {
    return { data: undefined as T };
  }

  try {
    return (await response.json()) as ApiResponse<T>;
  } catch {
    const error: ApiError = {
      status: 500,
      code: 'PARSE_ERROR',
      message: 'Failed to parse server response as JSON',
    };
    throw error;
  }
}

export const apiClient = {
  get<T>(path: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return request<T>('GET', path, undefined, config);
  },
  post<T>(path: string, body: unknown, config?: RequestConfig): Promise<ApiResponse<T>> {
    return request<T>('POST', path, body, config);
  },
  put<T>(path: string, body: unknown, config?: RequestConfig): Promise<ApiResponse<T>> {
    return request<T>('PUT', path, body, config);
  },
  patch<T>(path: string, body: unknown, config?: RequestConfig): Promise<ApiResponse<T>> {
    return request<T>('PATCH', path, body, config);
  },
  delete<T>(path: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return request<T>('DELETE', path, undefined, config);
  },
};

export { isApiError } from './apiClient.utils';
export type { ApiResponse, ApiError, RequestConfig } from './apiClient.types';
