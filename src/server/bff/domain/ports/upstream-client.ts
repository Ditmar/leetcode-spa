export interface UpstreamRequest {
  method: string;
  /** Path relative to API_BASE_URL, including the query string. Example: `/courses?page=1`. */
  pathWithQuery: string;
  /** Headers from the browser. The client decides which ones are safe to forward. */
  incomingHeaders: Headers;
  body?: ArrayBuffer;
  accessToken?: string;
  requestId: string;
  /** Aborted when the browser disconnects. */
  signal?: AbortSignal;
}

/** Sends one request to the real API. Throws UpstreamTimeoutError / UpstreamUnavailableError. */
export interface UpstreamClient {
  send(request: UpstreamRequest): Promise<Response>;
}
