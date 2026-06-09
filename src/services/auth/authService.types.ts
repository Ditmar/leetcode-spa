export interface AuthUser {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  role: 'user' | 'admin';
}

export interface AuthTokens {
  accessToken: string;
  expiresAt: number;
}

export interface AuthSession {
  user: AuthUser;
  accessToken: string;
  expiresAt: number;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  username: string;
  email: string;
  password: string;
}
