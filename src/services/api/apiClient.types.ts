export interface ApiResponse<T> {
  data: T;
  meta?: {
    totalCount?: number;
    pageCount?: number;
    currentPage?: number;
    perPage?: number;
  };
}
export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: unknown;
}
export interface RequestConfig {
  headers?: Record<string, string>;
  signal?: AbortSignal;
  credentials?: RequestCredentials;
}
