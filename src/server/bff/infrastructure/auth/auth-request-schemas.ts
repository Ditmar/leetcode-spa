import { z } from 'zod';

/** Body of POST /api/auth/login (SPA SignInPayload). */
export const loginSchema = z.object({
  email: z.string().trim().email().max(254),
  password: z.string().min(1).max(256),
});

/** Body of POST /api/auth/signup (SPA SignUpPayload). */
export const signupSchema = z.object({
  username: z.string().trim().min(1).max(64),
  email: z.string().trim().email().max(254),
  password: z.string().min(1).max(256),
});
