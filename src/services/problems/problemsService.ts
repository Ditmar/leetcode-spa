import { apiClient } from '../api/apiClient';

import type {
  ProblemDetail,
  ProblemFilters,
  ProblemListResponse,
  ProblemStats,
} from './problemsService.types';
import type { RequestConfig } from '../api/apiClient.types';

const MIN_PAGE_SIZE = 1;
const MAX_PAGE_SIZE = 100;

function buildQueryString(filters: ProblemFilters = {}): string {
  const params = new URLSearchParams();

  if (filters.search) {
    params.set('search', filters.search);
  }

  if (filters.difficulty) {
    params.set('difficulty', filters.difficulty);
  }

  if (filters.status) {
    params.set('status', filters.status);
  }

  if (filters.tag) {
    params.set('tag', filters.tag);
  }

  const page = typeof filters.page === 'number' && !Number.isNaN(filters.page) ? filters.page : 1;

  const pageSize =
    typeof filters.pageSize === 'number' && !Number.isNaN(filters.pageSize) ? filters.pageSize : 20;

  params.set('page', String(Math.max(1, page)));

  params.set('pageSize', String(Math.min(MAX_PAGE_SIZE, Math.max(MIN_PAGE_SIZE, pageSize))));

  return params.toString();
}

async function getProblems(
  filters: ProblemFilters = {},
  config?: RequestConfig
): Promise<ProblemListResponse> {
  const query = buildQueryString(filters);

  const response = await apiClient.get<ProblemListResponse>(`/problems?${query}`, config);

  return response.data;
}

async function getProblemById(id: number, config?: RequestConfig): Promise<ProblemDetail> {
  const response = await apiClient.get<ProblemDetail>(`/problems/${id}`, config);

  return response.data;
}

async function getTags(config?: RequestConfig): Promise<string[]> {
  const response = await apiClient.get<string[]>('/problems/tags', config);

  if (!Array.isArray(response.data)) {
    throw new Error('Invalid tags response');
  }

  return [...new Set(response.data)].sort((a, b) => a.localeCompare(b));
}

async function getStats(cookiesOrConfig?: string | RequestConfig): Promise<ProblemStats> {
  const config: RequestConfig | undefined =
    typeof cookiesOrConfig === 'string'
      ? { headers: { cookie: cookiesOrConfig } }
      : cookiesOrConfig;

  try {
    const response = await apiClient.get<ProblemStats>('/problems/stats', config);

    return response.data;
  } catch {
    throw new Error('Failed to fetch problem stats');
  }
}

export const problemsService = {
  getProblems,
  getProblemById,
  getTags,
  getStats,
};
