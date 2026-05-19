import { apiClient } from '../api/apiClient';

import type {
  Contest,
  ContestDetail,
  ContestFilters,
  ContestListResponse,
  ContestRequestOptions,
  LeaderboardEntry,
  LeaderboardResponse,
} from './contestsService.types';
import type { ApiError, RequestConfig } from '../api/apiClient';

function buildQueryString(filters?: ContestFilters): string {
  if (!filters) {
    return '';
  }

  const params = new URLSearchParams();

  if (filters.status) {
    params.set('status', filters.status);
  }

  if (filters.page !== undefined) {
    params.set('page', String(filters.page));
  }

  if (filters.pageSize !== undefined) {
    params.set('pageSize', String(filters.pageSize));
  }

  const query = params.toString();

  return query ? `?${query}` : '';
}

function buildRequestConfig(options?: ContestRequestOptions): RequestConfig | undefined {
  if (!options?.cookie) {
    return undefined;
  }

  return {
    headers: {
      Cookie: options.cookie,
    },
  };
}

function createApiError(status: number, code: string, message: string): ApiError {
  return {
    status,
    code,
    message,
  };
}

async function fetchContestById(
  id: number,
  options?: ContestRequestOptions
): Promise<ContestDetail> {
  const response = await apiClient.get<ContestDetail>(
    `/contests/${id}`,
    buildRequestConfig(options)
  );

  return response.data;
}

async function ensureUpcomingContest(contestId: number, error: ApiError): Promise<ContestDetail> {
  const contest = await fetchContestById(contestId);

  if (contest.status !== 'upcoming') {
    throw error;
  }

  return contest;
}

function normalizeContestListResponse(
  data: ContestListResponse | Contest[],
  meta?: ContestListResponse['meta']
): ContestListResponse {
  if (Array.isArray(data)) {
    return {
      contests: data,
      meta,
    };
  }

  return {
    contests: data.contests,
    meta: data.meta ?? meta,
  };
}

function normalizeLeaderboardResponse(
  data: LeaderboardResponse | LeaderboardEntry[],
  meta?: LeaderboardResponse['meta']
): LeaderboardResponse {
  if (Array.isArray(data)) {
    return {
      entries: data,
      meta,
    };
  }

  return {
    entries: data.entries,
    meta: data.meta ?? meta,
  };
}

export const contestsService = {
  async getContests(
    filters?: ContestFilters,
    options?: ContestRequestOptions
  ): Promise<ContestListResponse> {
    const query = buildQueryString(filters);
    const response = await apiClient.get<ContestListResponse | Contest[]>(
      `/contests${query}`,
      buildRequestConfig(options)
    );

    return normalizeContestListResponse(response.data, response.meta);
  },

  async getContestById(id: number, options?: ContestRequestOptions): Promise<ContestDetail> {
    return fetchContestById(id, options);
  },

  async getLeaderboard(
    contestId: number,
    page = 1,
    options?: ContestRequestOptions
  ): Promise<LeaderboardResponse> {
    const response = await apiClient.get<LeaderboardResponse | LeaderboardEntry[]>(
      `/contests/${contestId}/leaderboard?page=${page}`,
      buildRequestConfig(options)
    );

    return normalizeLeaderboardResponse(response.data, response.meta);
  },

  async joinContest(contestId: number): Promise<void> {
    await ensureUpcomingContest(
      contestId,
      createApiError(409, 'CONTEST_CLOSED', 'Contest is not open for registration')
    );

    await apiClient.post<null>(`/contests/${contestId}/register`, null);
  },

  async leaveContest(contestId: number): Promise<void> {
    await ensureUpcomingContest(
      contestId,
      createApiError(
        409,
        'CONTEST_NOT_UPCOMING',
        'Contest registration can only be cancelled for upcoming contests'
      )
    );

    await apiClient.delete<null>(`/contests/${contestId}/register`);
  },
};
