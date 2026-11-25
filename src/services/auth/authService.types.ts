export interface AuthUser {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  role: 'user' | 'admin';
}

export interface AuthSession {
  user: AuthUser;
  expiresAt?: number;
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
