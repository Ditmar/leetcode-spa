// @vitest-environment node
import { describe, expect, it } from 'vitest';

import { AllowListRoutePolicy } from '../infrastructure/routing/allow-list-route-policy';
import { API_ALLOW_LIST } from '../infrastructure/routing/api-allow-list';

const policy = new AllowListRoutePolicy(API_ALLOW_LIST);

describe('AllowListRoutePolicy', () => {
  it.each([
    ['GET', '/problems'],
    ['GET', '/problems/two-sum'],
    ['POST', '/submissions'],
    ['GET', '/submissions/abc-123'],
    ['GET', '/problems/42'],
    ['HEAD', '/problems'],
    ['PATCH', '/explore/topics/3/problems/9'],
    ['DELETE', '/contests/5/register'],
    ['GET', '/users/me/'],
  ])('allows %s %s', (method, path) => {
    expect(policy.isAllowed(method, path)).toBe(true);
  });

  it.each([
    ['GET', '/admin'],
    ['GET', '/user'],
    ['GET', '/users/7/stats'],
    ['DELETE', '/user/1'],
    ['POST', '/auth/refresh'],
    ['POST', '/auth/login'],
    // not in the ADR-003 mapping table
    ['GET', '/courses'],
    ['POST', '/courses/1/enroll'],
    ['GET', '/tests'],
    ['POST', '/tests/7/submit'],
    // wrong method / shape / tricks
    ['DELETE', '/problems/1'],
    ['POST', '/problems/1'],
    ['GET', '/problems/1/2'],
    ['GET', '/problems/../user'],
    ['GET', '/problems/..'],
    ['GET', '/problems/%2e%2e'],
    ['GET', '/problems/a%2Fb'],
    ['GET', '//problems'],
    ['OPTIONS', '/problems'],
  ])('blocks %s %s', (method, path) => {
    expect(policy.isAllowed(method, path)).toBe(false);
  });
});
