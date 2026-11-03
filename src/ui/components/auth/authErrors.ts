export type AuthMode = 'signin' | 'signup';

export interface AuthErrorResult {
  /** Errors that belong to one input, keyed by the field name. */
  fieldErrors: Record<string, string>;
  /** Errors that do not belong to one input (network, server). */
  formError: string | null;
}

interface ApiErrorLike {
  message?: unknown;
  status: number;
}

const GENERIC_MESSAGE = 'Something went wrong. Please try again.';
const NETWORK_MESSAGE = 'We could not reach the server. Check your connection and try again.';
const TOO_MANY_ATTEMPTS_MESSAGE = 'Too many attempts. Please wait a moment and try again.';

// authService throws plain objects ({ message, code, status }), not Error instances.
function isApiErrorLike(err: unknown): err is ApiErrorLike {
  return (
    typeof err === 'object' &&
    err !== null &&
    typeof (err as { status?: unknown }).status === 'number'
  );
}

export function mapAuthError(err: unknown, mode: AuthMode): AuthErrorResult {
  if (!isApiErrorLike(err)) {
    return {
      fieldErrors: {},
      formError: err instanceof TypeError ? NETWORK_MESSAGE : GENERIC_MESSAGE,
    };
  }

  if (err.status === 429) {
    return { fieldErrors: {}, formError: TOO_MANY_ATTEMPTS_MESSAGE };
  }

  const message =
    typeof err.message === 'string' && err.message.trim() ? err.message : GENERIC_MESSAGE;

  if (mode === 'signup' && err.status === 409) {
    const field = /user\s*name/i.test(message) ? 'username' : 'email';
    return { fieldErrors: { [field]: message }, formError: null };
  }

  if (mode === 'signin' && (err.status === 400 || err.status === 401)) {
    return { fieldErrors: { password: message }, formError: null };
  }

  return { fieldErrors: {}, formError: message };
}
