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
    <div className="auth-modal" role="presentation">
      <div className="auth-modal__backdrop" onClick={handleClose} />
      <section
        className="auth-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        <button
          className="auth-modal__close"
          type="button"
          onClick={handleClose}
          aria-label="Close"
        >
          x
        </button>
        <p className="auth-modal__eyebrow">Protected route</p>
        <h2 id="auth-modal-title">{title}</h2>
        <p className="auth-modal__copy">
          Continue with your account to access protected practice areas and keep your progress in
          sync.
        </p>

        <div className="auth-modal__tabs" role="tablist" aria-label="Authentication mode">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'signin'}
            onClick={() => {
              setMode('signin');
              setError(null);
            }}
          >
            Sign in
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'signup'}
            onClick={() => {
              setMode('signup');
              setError(null);
            }}
          >
            Sign up
          </button>
        </div>

        <form className="auth-modal__form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <label>
              Username
              <input name="username" autoComplete="username" required />
            </label>
          )}
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
              required
            />
          </label>
          {error && <p className="auth-modal__error">{error}</p>}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Please wait...' : actionLabel}
          </button>
        </form>
      </section>
    </div>
  );
}
