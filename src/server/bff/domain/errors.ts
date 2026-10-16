/** The API rejected the refresh token (expired, revoked, unknown) or the call failed. */
export class RefreshFailedError extends Error {
  constructor(readonly status: number) {
    super(`Token refresh failed with status ${status}`);
    this.name = 'RefreshFailedError';
  }
}

/** The request body is bigger than the configured limit. */
export class BodyTooLargeError extends Error {
  constructor(readonly limitBytes: number) {
    super(`Request body exceeds ${limitBytes} bytes`);
    this.name = 'BodyTooLargeError';
  }
}

/** The API did not answer before the configured timeout. */
export class UpstreamTimeoutError extends Error {
  constructor(readonly timeoutMs: number) {
    super(`Upstream API did not answer within ${timeoutMs} ms`);
    this.name = 'UpstreamTimeoutError';
  }
}

/** The API could not be reached (DNS, connection refused, reset...). */
export class UpstreamUnavailableError extends Error {
  constructor(cause?: unknown) {
    super('Upstream API is unavailable');
    this.name = 'UpstreamUnavailableError';
    this.cause = cause;
  }
}
