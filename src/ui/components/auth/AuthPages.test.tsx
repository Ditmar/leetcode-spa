import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const mocks = vi.hoisted(() => ({
  signedIn: false,
  hydrateFromServer: vi.fn(),
  signIn: vi.fn(),
  signUp: vi.fn(),
}));

vi.mock('../../../services/auth/authService', () => ({
  default: {
    hydrateFromServer: mocks.hydrateFromServer,
    isAuthenticated: () => mocks.signedIn,
    signIn: mocks.signIn,
    signUp: mocks.signUp,
    signOut: vi.fn(),
  },
}));

const SESSION = {
  user: { id: '1', username: 'johndoe', email: 'john@example.com', role: 'user' as const },
  accessToken: 'token',
  expiresAt: Date.now() + 3_600_000,
};

const replace = vi.fn();
const originalLocation = window.location;

beforeEach(() => {
  mocks.signedIn = false;
  mocks.hydrateFromServer.mockResolvedValue(null);
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: { ...originalLocation, replace },
  });
});

afterEach(() => {
  vi.clearAllMocks();
  Object.defineProperty(window, 'location', { configurable: true, value: originalLocation });
});

async function fillLogin(email: string, password: string) {
  const user = userEvent.setup();
  await user.type(await screen.findByLabelText(/email/i), email);
  await user.type(screen.getByLabelText(/password/i), password);
  await user.click(screen.getByRole('button', { name: /sign in/i }));
}

describe('LoginPage', () => {
  it('shows the server error under the password field', async () => {
    mocks.signIn.mockRejectedValue({
      message: 'Invalid email or password',
      code: 'INVALID_CREDENTIALS',
      status: 401,
    });

    render(<LoginPage />);
    await fillLogin('john@example.com', 'wrong-password');

    expect(await screen.findByText('Invalid email or password')).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('aria-invalid', 'true');
    expect(replace).not.toHaveBeenCalled();
  });

  it('validates the email format before calling the API', async () => {
    render(<LoginPage />);
    await fillLogin('not-an-email', 'whatever');

    expect(await screen.findByText('Enter a valid email address')).toBeInTheDocument();
    expect(mocks.signIn).not.toHaveBeenCalled();
  });

  it('goes to the redirect target after signing in', async () => {
    mocks.signIn.mockImplementation(async () => {
      mocks.signedIn = true;
      return SESSION;
    });

    render(<LoginPage redirectTo="/problems" />);
    await fillLogin('john@example.com', 'correct-password');

    await waitFor(() => expect(replace).toHaveBeenCalledWith('/problems'));
  });

  it('redirects away when the user is already signed in', async () => {
    mocks.signedIn = true;
    mocks.hydrateFromServer.mockResolvedValue(SESSION);

    render(<LoginPage redirectTo="/problems" />);

    await waitFor(() => expect(replace).toHaveBeenCalledWith('/problems'));
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
  });

  it('links to sign up and keeps the redirect', async () => {
    render(<LoginPage redirectTo="/problems" />);

    expect(await screen.findByRole('link', { name: /sign up/i })).toHaveAttribute(
      'href',
      '/signup?redirect=%2Fproblems'
    );
  });
});

describe('SignupPage', () => {
  it('shows an existing email under the email field', async () => {
    mocks.signUp.mockRejectedValue({
      message: 'User already exists',
      code: 'CONFLICT',
      status: 409,
    });

    render(<SignupPage />);
    const user = userEvent.setup();
    await user.type(await screen.findByLabelText(/username/i), 'johndoe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /sign up/i }));

    expect(await screen.findByText('User already exists')).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('aria-invalid', 'true');
  });

  it('rejects a username shorter than 3 characters', async () => {
    render(<SignupPage />);
    const user = userEvent.setup();
    await user.type(await screen.findByLabelText(/username/i), 'ab');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /sign up/i }));

    expect(await screen.findByText(/username must be at least 3/i)).toBeInTheDocument();
    expect(mocks.signUp).not.toHaveBeenCalled();
  });
});
