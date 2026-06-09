import { apiClient } from '../api/apiClient';

import type {
  ContestDetail,
  ContestFilters,
  ContestListResponse,
  ContestRequestOptions,
  LeaderboardResponse,
} from './contestsService.types';
import type { ApiError, ApiResponse, RequestConfig } from '../api/apiClient';

type QueryParams = Record<string, string | number | undefined>;

function buildQueryString(params: QueryParams): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, String(value));
    }
  });

  const query = searchParams.toString();

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

function isContestServiceApiError(error: unknown): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    'code' in error &&
    'message' in error
  );
}

function normalizeContestStatusCheckError(error: unknown): ApiError {
  if (isContestServiceApiError(error)) {
    return error;
  }

  return createApiError(500, 'CONTEST_STATUS_CHECK_FAILED', 'Failed to validate contest status');
}

function normalizeContestListResponse(
  response: ApiResponse<ContestListResponse>
): ContestListResponse {
  return {
    contests: response.data.contests,
    meta: response.data.meta ?? response.meta,
  };
}

function normalizeLeaderboardResponse(
  response: ApiResponse<LeaderboardResponse>
): LeaderboardResponse {
  return {
    entries: response.data.entries,
    meta: response.data.meta ?? response.meta,
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

async function ensureUpcomingContest(
  contestId: number,
  error: ApiError,
  options?: ContestRequestOptions
): Promise<ContestDetail> {
  try {
    const contest = await fetchContestById(contestId, options);

    if (contest.status !== 'upcoming') {
      throw error;
    }

    return contest;
  } catch (caughtError) {
    throw normalizeContestStatusCheckError(caughtError);
  }
}

export const contestsService = {
  async getContests(
    filters?: ContestFilters,
    options?: ContestRequestOptions
  ): Promise<ContestListResponse> {
    const query = buildQueryString({
      status: filters?.status,
      page: filters?.page,
      pageSize: filters?.pageSize,
    });

    const response = await apiClient.get<ContestListResponse>(
      `/contests${query}`,
      buildRequestConfig(options)
    );

    return normalizeContestListResponse(response);
  },

  async getContestById(id: number, options?: ContestRequestOptions): Promise<ContestDetail> {
    return fetchContestById(id, options);
  },

  async getLeaderboard(
    contestId: number,
    page = 1,
    options?: ContestRequestOptions
  ): Promise<LeaderboardResponse> {
    const query = buildQueryString({ page });

    const response = await apiClient.get<LeaderboardResponse>(
      `/contests/${contestId}/leaderboard${query}`,
      buildRequestConfig(options)
    );

    return normalizeLeaderboardResponse(response);
  },

  async joinContest(contestId: number, options?: ContestRequestOptions): Promise<void> {
    await ensureUpcomingContest(
      contestId,
      createApiError(409, 'CONTEST_CLOSED', 'Contest is not open for registration'),
      options
    );

    await apiClient.post<null>(
      `/contests/${contestId}/register`,
      null,
      buildRequestConfig(options)
    );
  },

  async leaveContest(contestId: number, options?: ContestRequestOptions): Promise<void> {
    await ensureUpcomingContest(
      contestId,
      createApiError(
        409,
        'CONTEST_NOT_UPCOMING',
        'Contest registration can only be cancelled for upcoming contests'
      ),
      options
    );

    await apiClient.delete<null>(`/contests/${contestId}/register`, buildRequestConfig(options));
  },
};
