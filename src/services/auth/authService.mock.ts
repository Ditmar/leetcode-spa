import type { AuthSession, AuthUser, SignInPayload, SignUpPayload } from './authService.types';
import { AUTH_SIGN_OUT_EVENT } from './authService.constants';


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
      accessToken: `mock-token-${user.id}`,
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

    return authService.signIn({ email: payload.email, password: payload.password });
  },

  async signOut(): Promise<void> {
    _session = null;
    window.dispatchEvent(new CustomEvent(AUTH_SIGN_OUT_EVENT));
  },

  async refreshToken(): Promise<AuthSession> {
    if (!_session) {
      throw { message: 'No session', code: 'NO_SESSION', status: 401 };
    }

    _session = {
      ..._session,
      accessToken: `mock-token-refreshed-${Date.now()}`,
      expiresAt: Date.now() + 3_600_000,
    };

    return _session;
  },

  getSession(): AuthSession | null {
    if (!_session) return null;
    if (_session.expiresAt <= Date.now()) {
      _session = null;
      return null;
    }
    return _session;
  },

  isAuthenticated(): boolean {
    return authService.getSession() !== null;
  },

  needsRefresh(): boolean {
    if (!_session) return false;
    return _session.expiresAt - Date.now() < 60_000;
  },

  async hydrateFromServer(): Promise<AuthSession | null> {
    return _session;
  },
};

export default authService;