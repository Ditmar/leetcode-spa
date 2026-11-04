import { BodyTooLargeError } from '../../domain/errors';

import type { BodyReader } from '../../domain/ports/body-reader';

const METHODS_WITHOUT_BODY = new Set(['GET', 'HEAD', 'OPTIONS']);

/**
 * Reads the body into memory (so it can be sent again after a token refresh)
 * and stops as soon as it is bigger than `maxBytes`. Checks Content-Length first
 * and also counts the real bytes, because Content-Length can lie or be missing.
 */
export class LimitedBodyReader implements BodyReader {
  constructor(private readonly maxBytes: number) {}

  async read(request: Request): Promise<ArrayBuffer | undefined> {
    if (METHODS_WITHOUT_BODY.has(request.method) || !request.body) return undefined;

    const declared = Number(request.headers.get('content-length'));
    if (Number.isFinite(declared) && declared > this.maxBytes) {
      throw new BodyTooLargeError(this.maxBytes);
    }

    const reader = request.body.getReader();
    const chunks: Uint8Array[] = [];
    let total = 0;

    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > this.maxBytes) {
        await reader.cancel().catch(() => undefined);
        throw new BodyTooLargeError(this.maxBytes);
      }
      chunks.push(value);
    }

    const body = new Uint8Array(total);
    let offset = 0;
    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.byteLength;
    }
    return body.buffer;
  }
}
