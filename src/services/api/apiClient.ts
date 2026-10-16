import { normalizeError, statusToCode } from './apiClient.utils';

import type { ApiError, ApiResponse, RequestConfig } from './apiClient.types';

const isServer = typeof window === 'undefined';

const API_BASE_URL = isServer ? process.env.API_BASE_URL || 'http://localhost:3000' : '/api';
const DEFAULT_TIMEOUT_MS = 15_000;

function resolveUrl(path: string): string {
  const base = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

let _authToken: string | null = null;

export function setAuthToken(token: string | null): void {
  _authToken = token;
}

function getCookieToken(): string | null {
  try {
    const match = document.cookie
      .split(';')
      .map((c) => c.trim())
      .find((c) => c.startsWith('auth_token='));
    return match ? decodeURIComponent(match.slice('auth_token='.length)) : null;
  } catch {
    return null;
  }
}

function getAuthToken(): string | null {
  if (_authToken) return _authToken;

  if (!isServer) {
    try {
      const fromStorage = localStorage.getItem('auth_token');
      if (fromStorage) return fromStorage;
    } catch {
      // eslint-disable-next-line no-console
      console.warn('Failed to access localStorage for auth token retrieval');
    }
    return getCookieToken();
  }

  return null;
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
  const token = getAuthToken();
  const hasBody = body !== undefined && body !== null;
  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;

  const headers: Record<string, string> = { ...config.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (hasBody && !isFormData) headers['Content-Type'] = 'application/json';

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
    ...(hasBody ? { body: isFormData ? body : JSON.stringify(body) } : {}),
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
    throw await normalizeHttpError(response);
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
