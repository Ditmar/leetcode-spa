import { ApiError } from "./apiClient.types";
const buildUrl = (baseUrl: string, path: string, queryParams?: Record<string, string>): string => {
  const url = new URL(path, baseUrl);
  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  return url.toString();
}

const isApiError = (error: unknown): boolean => {
  return typeof error === 'object' && error !== null && 'error' in error;
}

const statusToCode = (code: number): string => {
    switch (code) {
        case 400: return "BAD_REQUEST";
        case 401: return "UNAUTHORIZED";
        case 403: return "FORBIDDEN";
        case 404: return "NOT_FOUND";
        case 429: return "TOO_MANY_REQUESTS";
        case 500: return "INTERNAL_SERVER_ERROR";
        case 502: return "BAD_GATEWAY";
        case 503: return "SERVICE_UNAVAILABLE";
        case 504: return "GATEWAY_TIMEOUT";

        default: return "UNKNOWN_ERROR";
    }
}
const normalizeError = (error: unknown): ApiError => {
    if (isApiError(error)) {
        const apiError = error as { error: ApiError };
        return apiError.error;
    } else if (error instanceof Error) {
        return {
            status: 0,
            code: statusToCode(0),
            message: error.message,
        }
    } else {
        return {
            status: 0,
            code: statusToCode(0),
            message: "An unknown error occurred",
        }
    }
}

export { buildUrl, isApiError, statusToCode, normalizeError };