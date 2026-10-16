export type GuardResult =
  | { allowed: true }
  | { allowed: false; status: number; code: string; message: string };

/** A check that runs before the request is proxied (CSRF, rate limit...). */
export interface RequestGuard {
  check(request: Request): GuardResult;
}
