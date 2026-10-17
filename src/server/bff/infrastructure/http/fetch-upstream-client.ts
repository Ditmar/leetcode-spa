import { UpstreamTimeoutError, UpstreamUnavailableError } from '../../domain/errors';

import type { UpstreamClient, UpstreamRequest } from '../../domain/ports/upstream-client';

/**
 * Only these browser headers reach the API. Everything else is dropped, most
 * importantly `Cookie` (the API must never see the browser cookies) and any
 * `Authorization` the browser could try to send by itself.
 */
const FORWARDED_REQUEST_HEADERS = ['accept', 'accept-language', 'content-type', 'if-none-match'];

const METHODS_WITHOUT_BODY = new Set(['GET', 'HEAD']);

export interface FetchUpstreamClientOptions {
  apiBaseUrl: string;
  timeoutMs: number;
  fetchFn?: typeof fetch;
}

/** Adapter: UpstreamClient implemented with the global `fetch`. */
export class FetchUpstreamClient implements UpstreamClient {
  private readonly fetchFn: typeof fetch;

  constructor(private readonly options: FetchUpstreamClientOptions) {
    this.fetchFn = options.fetchFn ?? ((...args) => globalThis.fetch(...args));
  }

  async send(request: UpstreamRequest): Promise<Response> {
    const headers = new Headers();
    for (const name of FORWARDED_REQUEST_HEADERS) {
      const value = request.incomingHeaders.get(name);
      if (value) headers.set(name, value);
    }
    headers.set('X-Request-Id', request.requestId);
    if (request.accessToken) headers.set('Authorization', `Bearer ${request.accessToken}`);

    const timeoutSignal = AbortSignal.timeout(this.options.timeoutMs);
    const signal = request.signal
      ? AbortSignal.any([timeoutSignal, request.signal])
      : timeoutSignal;
    const hasBody = !METHODS_WITHOUT_BODY.has(request.method) && request.body !== undefined;

    try {
      return await this.fetchFn(`${this.options.apiBaseUrl}${request.pathWithQuery}`, {
        method: request.method,
        headers,
        body: hasBody ? request.body : undefined,
        signal,
        redirect: 'manual',
        credentials: 'omit',
      });
    } catch (error) {
      if (timeoutSignal.aborted) throw new UpstreamTimeoutError(this.options.timeoutMs);
      throw new UpstreamUnavailableError(error);
    }
  }
}
