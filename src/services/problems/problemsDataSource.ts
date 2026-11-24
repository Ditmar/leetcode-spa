import { problemsService } from './problemsService';
import { mockProblemsService } from './problemsService.mock';

import type { ProblemFilters, ProblemListResponse } from './problemsService.types';

export interface ProblemsDataSource {
  getProblems(
    filters?: ProblemFilters,
    config?: { signal?: AbortSignal; headers?: Record<string, string> }
  ): Promise<ProblemListResponse>;
  getTags(config?: { headers?: Record<string, string> }): Promise<string[]>;
}

/**
 * `PUBLIC_USE_MOCK_API=true` in `.env` runs the problems page with in-memory data.
 * The `PUBLIC_` prefix makes the flag readable both on the server (SSR) and in the browser.
 */
export function isMockApiEnabled(): boolean {
  const env = import.meta.env as Record<string, string | boolean | undefined>;
  return String(env.PUBLIC_USE_MOCK_API ?? '').toLowerCase() === 'true';
}

export function getProblemsDataSource(): ProblemsDataSource {
  return isMockApiEnabled() ? mockProblemsService : problemsService;
}
