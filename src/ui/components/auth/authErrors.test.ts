import { describe, expect, it } from 'vitest';

import { mapAuthError } from './authErrors';

describe('mapAuthError', () => {
  it('shows wrong credentials under the password field on sign in', () => {
    const result = mapAuthError(
      { message: 'Invalid email or password', code: 'INVALID_CREDENTIALS', status: 401 },
      'signin'
    );

    expect(result).toEqual({
      fieldErrors: { password: 'Invalid email or password' },
      formError: null,
    });
  });

  it('shows an existing email under the email field on sign up', () => {
    const result = mapAuthError(
      { message: 'User already exists', code: 'CONFLICT', status: 409 },
      'signup'
    );

    expect(result.fieldErrors).toEqual({ email: 'User already exists' });
    expect(result.formError).toBeNull();
  });

  it('shows an existing username under the username field on sign up', () => {
    const result = mapAuthError(
      { message: 'Username already taken', code: 'CONFLICT', status: 409 },
      'signup'
    );

    expect(result.fieldErrors).toEqual({ username: 'Username already taken' });
  });

  it('shows a friendly message for too many attempts', () => {
    const result = mapAuthError({ message: 'Rate limit', code: 'RATE', status: 429 }, 'signin');

    expect(result.fieldErrors).toEqual({});
    expect(result.formError).toMatch(/too many attempts/i);
  });

  it('uses a form error for other server errors', () => {
    const result = mapAuthError({ message: 'Boom', code: 'SERVER', status: 500 }, 'signin');

    expect(result).toEqual({ fieldErrors: {}, formError: 'Boom' });
  });

  it('handles network failures and unknown errors', () => {
    expect(mapAuthError(new TypeError('Failed to fetch'), 'signin').formError).toMatch(
      /could not reach the server/i
    );
    expect(mapAuthError('nope', 'signin').formError).toMatch(/something went wrong/i);
  });
});
