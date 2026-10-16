// @vitest-environment node
import { describe, expect, it } from 'vitest';

import { AllowListRoutePolicy } from '../infrastructure/routing/allow-list-route-policy';
import { API_ALLOW_LIST } from '../infrastructure/routing/api-allow-list';

const policy = new AllowListRoutePolicy(API_ALLOW_LIST);

describe('AllowListRoutePolicy', () => {
  it.each([
    ['GET', '/courses'],
    ['GET', '/courses/abc-123'],
    ['POST', '/courses/abc-123/enroll'],
    ['GET', '/courses/me/courses'],
    ['POST', '/tests/7/submit'],
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
    ['DELETE', '/user/1'],
    ['POST', '/auth/refresh'],
    ['POST', '/auth/login'],
    ['DELETE', '/courses/1'],
    ['GET', '/courses/1/enroll'],
    ['GET', '/courses/1/2'],
    ['GET', '/courses/../user'],
    ['GET', '/courses/..'],
    ['GET', '/courses/%2e%2e'],
    ['GET', '/courses/a%2Fb'],
    ['GET', '//courses'],
    ['OPTIONS', '/courses'],
  ])('blocks %s %s', (method, path) => {
    expect(policy.isAllowed(method, path)).toBe(false);
  });
});
