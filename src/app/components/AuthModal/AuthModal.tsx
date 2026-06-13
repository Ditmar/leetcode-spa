import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

import { useAuth } from '../../../services/auth/useAuth';

import type { FormEvent } from 'react';

import './AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
}

type AuthMode = 'signin' | 'signup';

function removeAuthRequiredParam() {
  const url = new URL(window.location.href);
  url.searchParams.delete('authRequired');
  window.history.replaceState({}, document.title, `${url.pathname}${url.search}${url.hash}`);
}

export default function AuthModal({ isOpen }: AuthModalProps) {
  const { signIn, signUp } = useAuth();
  const [open, setOpen] = useState(isOpen);
  const [mode, setMode] = useState<AuthMode>('signin');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  if (!open) {
    return null;
  }

  const title = mode === 'signin' ? 'Sign in required' : 'Create your account';
  const actionLabel = mode === 'signin' ? 'Sign in' : 'Sign up';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') ?? '');
    const password = String(formData.get('password') ?? '');
    const username = String(formData.get('username') ?? '');

    try {
      setIsSubmitting(true);
      setError(null);

      if (mode === 'signin') {
        await signIn({ email, password });
      } else {
        await signUp({ username, email, password });
      }

      removeAuthRequiredParam();
      setOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    removeAuthRequiredParam();
    setOpen(false);
  };

  return (
    <div className="auth-modal">
      <button
        className="auth-modal__backdrop"
        type="button"
        onClick={handleClose}
        aria-label="Close authentication dialog"
      />
      <section
        className="auth-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        aria-busy={isSubmitting}
      >
        <button
          className="auth-modal__close"
          type="button"
          onClick={handleClose}
          aria-label="Close"
        >
          <CloseIcon fontSize="small" aria-hidden="true" />
        </button>
        <p className="auth-modal__eyebrow">Protected route</p>
        <h2 id="auth-modal-title">{title}</h2>
        <p className="auth-modal__copy">
          Continue with your account to access protected practice areas and keep your progress in
          sync.
        </p>

        <div className="auth-modal__tabs" aria-label="Authentication mode">
          <button
            type="button"
            aria-pressed={mode === 'signin'}
            onClick={() => {
              setMode('signin');
              setError(null);
            }}
          >
            Sign in
          </button>
          <button
            type="button"
            aria-pressed={mode === 'signup'}
            onClick={() => {
              setMode('signup');
              setError(null);
            }}
          >
            Sign up
          </button>
        </div>

        <form className="auth-modal__form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
          {mode === 'signup' && (
            <label htmlFor="auth-username">
              Username
              <input id="auth-username" name="username" autoComplete="username" required />
            </label>
          )}
          <label htmlFor="auth-email">
            Email
            <input id="auth-email" name="email" type="email" autoComplete="email" required />
          </label>
          <label htmlFor="auth-password">
            Password
            <input
              id="auth-password"
              name="password"
              type="password"
              autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
              required
            />
          </label>
          {error && (
            <p className="auth-modal__error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Please wait...' : actionLabel}
          </button>
        </form>
      </section>
    </div>
  );
}
