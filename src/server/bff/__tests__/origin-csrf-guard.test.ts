// @vitest-environment node
import { describe, expect, it } from 'vitest';

import { OriginCsrfGuard } from '../infrastructure/security/origin-csrf-guard';

const SITE = 'http://localhost:4321';

function req(method: string, headers: Record<string, string> = {}) {
  return new Request(`${SITE}/api/courses/1/enroll`, { method, headers });
}

describe('OriginCsrfGuard', () => {
  const guard = new OriginCsrfGuard(['https://leetcode-spa-production.up.railway.app']);

  it('lets safe methods pass without checks', () => {
    expect(guard.check(req('GET', { Origin: 'https://evil.example' })).allowed).toBe(true);
  });

  it.each(['POST', 'PUT', 'PATCH', 'DELETE'])('allows %s from our own origin', (method) => {
    expect(guard.check(req(method, { Origin: SITE })).allowed).toBe(true);
  });

  it.each(['POST', 'PUT', 'PATCH', 'DELETE'])(
    'returns 403 for %s from another origin',
    (method) => {
      expect(guard.check(req(method, { Origin: 'https://evil.example' }))).toMatchObject({
        allowed: false,
        status: 403,
      });
    }
  );

  it('allows an origin from the configured list', () => {
    const r = req('POST', { Origin: 'https://leetcode-spa-production.up.railway.app' });
    expect(guard.check(r).allowed).toBe(true);
  });

  it('rejects the opaque "null" origin', () => {
    expect(guard.check(req('POST', { Origin: 'null' })).allowed).toBe(false);
  });

  it('falls back to Sec-Fetch-Site when Origin is missing', () => {
    expect(guard.check(req('POST', { 'Sec-Fetch-Site': 'same-origin' })).allowed).toBe(true);
    expect(guard.check(req('POST', { 'Sec-Fetch-Site': 'cross-site' })).allowed).toBe(false);
    expect(guard.check(req('POST', { 'Sec-Fetch-Site': 'same-site' })).allowed).toBe(false);
  });

  it('blocks a write with neither Origin nor Sec-Fetch-Site', () => {
    expect(guard.check(req('POST')).allowed).toBe(false);
  });
});
