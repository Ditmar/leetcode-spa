interface ApiResponse<T> {
  data: T;
  meta?: {
    page?: number;
    totalPages?: number;
    total?: number;
  };
}
interface ApiError {
  status: number;
  code: string;
  message: string;
  details?: unknown;
}

interface RequestConfig {
  headers?: Record<string, string>;
  signal?: AbortSignal;
  credentials?: RequestCredentials;
  queryParams?: Record<string, string>;
}
export type { ApiResponse, ApiError, RequestConfig };
