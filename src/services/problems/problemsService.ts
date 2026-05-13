import { apiClient } from '../api/apiClient';
import type { RequestConfig } from '../api/apiClient.types';

import type {
  ProblemDetail,
  ProblemFilters,
  ProblemListResponse,
  ProblemStats,
} from './problemsService.types';

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

  params.set('page', String(filters.page ?? 1));
  params.set('pageSize', String(filters.pageSize ?? 20));

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

  return [...new Set(response.data)].sort((a, b) => a.localeCompare(b));
}

async function getStats(config?: RequestConfig): Promise<ProblemStats> {
  const response = await apiClient.get<ProblemStats>('/problems/stats', config);

  return response.data;
}

export const problemsService = {
  getProblems,
  getProblemById,
  getTags,
  getStats,
};
