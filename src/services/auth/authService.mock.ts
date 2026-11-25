import { AUTH_SIGN_OUT_EVENT } from './authService.constants';

import type { AuthSession, AuthUser, SignInPayload, SignUpPayload } from './authService.types';

const MOCK_USERS: AuthUser[] = [
  {
    id: 'user-001',
    username: 'johndoe',
    email: 'john@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=john',
    role: 'user',
  },
  {
    id: 'admin-001',
    username: 'adminuser',
    email: 'admin@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=admin',
    role: 'admin',
  },
];

let _session: AuthSession | null = null;

const authService = {
  async signIn(payload: SignInPayload): Promise<AuthSession> {
    const user = MOCK_USERS.find((u) => u.email === payload.email);
    if (!user || payload.password !== '123456') {
      throw { message: 'Invalid credentials', code: 'INVALID_CREDENTIALS', status: 401 };
    }
    _session = {
      user,
      expiresAt: Date.now() + 3_600_000,
    };
    return _session;
  },

  async signUp(payload: SignUpPayload): Promise<AuthSession> {
    const newUser: AuthUser = {
      id: `user-${Date.now()}`,
      username: payload.username,
      email: payload.email,
      role: 'user',
    };
    MOCK_USERS.push(newUser);
    _session = { user: newUser, expiresAt: Date.now() + 3_600_000 };
    return _session;
  },

  async signOut(): Promise<void> {
    _session = null;
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(AUTH_SIGN_OUT_EVENT));
    }
  },

  getSession(): AuthSession | null {
    if (!_session) return null;
    return _session.expiresAt !== undefined && _session.expiresAt <= Date.now() ? null : _session;
  },

  isAuthenticated(): boolean {
    return authService.getSession() !== null;
  },

  async hydrateFromServer(): Promise<AuthSession | null> {
    return _session;
  },
};

export default authService;
