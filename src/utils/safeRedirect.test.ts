import { describe, expect, it } from 'vitest';

import { getSafeRedirect, withRedirect } from './safeRedirect';

describe('getSafeRedirect', () => {
  it('accepts internal paths and keeps the query and hash', () => {
    expect(getSafeRedirect('/problems')).toBe('/problems');
    expect(getSafeRedirect('/problems/two-sum?tab=solutions#top')).toBe(
      '/problems/two-sum?tab=solutions#top'
    );
  });

  it('ignores absolute URLs (acceptance criterion: ?redirect=https://evil.com)', () => {
    expect(getSafeRedirect('https://evil.com')).toBe('/');
    expect(getSafeRedirect('http://evil.com/path')).toBe('/');
    expect(getSafeRedirect('javascript:alert(1)')).toBe('/');
  });

  it('ignores protocol-relative URLs and look-alike paths', () => {
    expect(getSafeRedirect('//evil.com')).toBe('/');
    expect(getSafeRedirect('/\\evil.com')).toBe('/');
    expect(getSafeRedirect('/.//evil.com')).toBe('/');
  });

  it('ignores control characters', () => {
    expect(getSafeRedirect('/ok\nLocation: https://evil.com')).toBe('/');
    expect(getSafeRedirect('/ok\u0000')).toBe('/');
  });

  it('falls back when the value is missing or empty', () => {
    expect(getSafeRedirect(null)).toBe('/');
    expect(getSafeRedirect(undefined)).toBe('/');
    expect(getSafeRedirect('')).toBe('/');
  });

  it('never sends a signed-in user back to /login or /signup', () => {
    expect(getSafeRedirect('/login')).toBe('/');
    expect(getSafeRedirect('/signup/')).toBe('/');
    expect(getSafeRedirect('/login?redirect=/problems')).toBe('/');
  });

  it('uses the custom fallback', () => {
    expect(getSafeRedirect('https://evil.com', '/problems')).toBe('/problems');
  });
});

describe('withRedirect', () => {
  it('adds the encoded redirect to the link', () => {
    expect(withRedirect('/signup', '/problems?tab=a b')).toBe(
      '/signup?redirect=%2Fproblems%3Ftab%3Da%20b'
    );
  });

  it('keeps the link clean when the redirect is the default one', () => {
    expect(withRedirect('/signup', '/')).toBe('/signup');
  });
});
