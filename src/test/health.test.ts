import { describe, expect, it } from 'vitest';

import { GET } from '../pages/health';

describe('GET /health', () => {
  it('responde 200 con status ok', async () => {
    const response = await (GET as () => Response | Promise<Response>)();

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: 'ok' });
  });
});
