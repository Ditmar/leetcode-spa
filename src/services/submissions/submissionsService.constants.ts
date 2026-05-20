export const POLLING_INTERVAL_MS = 1500;

export const MAX_POLL_ATTEMPTS = 20;

export const MAX_CODE_SIZE_BYTES = 64 * 1024;

export const ALLOWED_LANGUAGES = [
  'javascript',
  'python',
  'java',
  'cpp',
] as const;

export type AllowedLanguage = (typeof ALLOWED_LANGUAGES)[number];

export enum ExecutionStatus {
  ACCEPTED = 'accepted',
  WRONG_ANSWER = 'wrong_answer',
  TIME_LIMIT_EXCEEDED = 'time_limit_exceeded',
  RUNTIME_ERROR = 'runtime_error',
  COMPILE_ERROR = 'compile_error',
  PENDING = 'pending',
  RUNNING = 'running',
}