import type { ApiError } from './apiClient.types';

export const buildUrl = (
  baseUrl: string,
  path: string,
  queryParams?: Record<string, string | number | boolean>
): string => {
  const url = new URL(path, baseUrl);
  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }
  return url.toString();
};

export const isApiError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const isAbortError = (error: unknown): error is DOMException => {
  return error instanceof DOMException && error.name === 'AbortError';
};

export const statusToCode = (status: number): string => {
  if (status === 404) return 'NOT_FOUND';
  if (status === 500) return 'INTERNAL_SERVER_ERROR';
  if (status === 400) return 'BAD_REQUEST';
  if (status === 401) return 'UNAUTHORIZED';
  if (status === 403) return 'FORBIDDEN';
  return 'UNKNOWN_ERROR';
};

export const normalizeError = (error: unknown): ApiError => {
  if (isAbortError(error)) {
    return {
      message: 'Request was aborted',
      code: statusToCode(0),
      status: 0,
    };
  }
  if (isApiError(error)) {
    return {
      message: error.message,
      code: statusToCode(500),
      status: 500,
    };
  }
  return {
    message: 'An unknown error occurred',
    code: statusToCode(0),
    status: 0,
  };
};
