import { apiClient } from '../api/apiClient';

import type { ApiError } from '../api/apiClient.types';
import type {
  Contest,
  ContestDetail,
  ContestFilters,
  ContestListResponse,
  LeaderboardResponse,
} from './contestsService.types';

/**
 * Builds query parameters from ContestFilters, omitting undefined values.
 */
function buildContestQuery(
  filters?: ContestFilters
): Record<string, string | number | boolean> | undefined {
  if (!filters) return undefined;

  const params: Record<string, string | number | boolean> = {};
  if (filters.status !== undefined) params['status'] = filters.status;
  if (filters.page !== undefined) params['page'] = filters.page;
  if (filters.pageSize !== undefined) params['pageSize'] = filters.pageSize;

  return Object.keys(params).length > 0 ? params : undefined;
}

/**
 * Appends query parameters to a path string.
 */
function withQuery(path: string, params?: Record<string, string | number | boolean>): string {
  if (!params) return path;
  const query = new URLSearchParams(
    Object.entries(params).map(([k, v]) => [k, String(v)])
  ).toString();
  return query ? `${path}?${query}` : path;
}

export const contestsService = {
  /**
   * SSR: Fetch a list of contests, optionally filtered by status, page, or pageSize.
   * Can optionally forward the user's Cookie header for authenticated requests.
   */
  async getContests(
    filters?: ContestFilters,
    cookieHeader?: string
  ): Promise<ContestListResponse> {
    const params = buildContestQuery(filters);
    const path = withQuery('/contests', params);
    const config = cookieHeader ? { headers: { Cookie: cookieHeader } } : undefined;
    const response = await apiClient.get<Contest[]>(path, config);
    return { data: response.data, meta: response.meta };
  },

  /**
   * SSR: Fetch full contest detail, including problem list.
   * Optionally forward the user's Cookie header to receive isRegistered / userRank fields.
   */
  async getContestById(id: number, cookieHeader?: string): Promise<ContestDetail> {
    const config = cookieHeader ? { headers: { Cookie: cookieHeader } } : undefined;
    const response = await apiClient.get<ContestDetail>(`/contests/${id}`, config);
    return response.data;
  },

  /**
   * SSR: Fetch paginated leaderboard for a contest.
   */
  async getLeaderboard(contestId: number, page?: number): Promise<LeaderboardResponse> {
    const params: Record<string, string | number | boolean> = {};
    if (page !== undefined) params['page'] = page;
    const path = withQuery(`/contests/${contestId}/leaderboard`, params);
    const response = await apiClient.get<LeaderboardResponse['data']>(path);
    return { data: response.data, meta: response.meta };
  },

  /**
   * Client: Register / join a contest. Requires an authenticated session.
   * Throws ApiError with code 'CONTEST_CLOSED' if contest is not upcoming.
   * Throws ApiError with code 'ALREADY_REGISTERED' if the user already joined.
   */
  async joinContest(contestId: number): Promise<void> {
    await apiClient.post(`/contests/${contestId}/register`, {});
  },

  /**
   * Client: Cancel registration for an upcoming contest. Requires an authenticated session.
   * Throws ApiError with code 'CONTEST_CLOSED' if the contest is not upcoming.
   */
  async leaveContest(contestId: number): Promise<void> {
    await apiClient.delete(`/contests/${contestId}/register`);
  },
};

export type { ApiError };
