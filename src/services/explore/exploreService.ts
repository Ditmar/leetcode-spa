import { apiClient } from '../api/apiClient';

import type {
  ExploreTopic,
  FiltersMetadata,
  TopicDetail,
  TopicFilters,
  TopicProgress,
} from './exploreService.types';
import type { ApiError } from '../api/apiClient';

const DEFAULT_EXPLORE_API_PATH = '/explore';
const TOPIC_DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced'];
const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
const EXPLORE_API_PATH = normalizeExploreApiPath(env?.PUBLIC_EXPLORE_API_PATH);

function isApiError(error: unknown): error is ApiError {
  if (!error || typeof error !== 'object') return false;

  const apiError = error as Partial<ApiError>;
  return (
    typeof apiError.status === 'number' &&
    typeof apiError.code === 'string' &&
    typeof apiError.message === 'string'
  );
}

function createBadRequestError(message: string, details?: unknown): ApiError {
  return {
    status: 400,
    code: 'BAD_REQUEST',
    message,
    details,
  };
}

function normalizeExploreApiPath(path?: string): string {
  if (typeof path !== 'string') return DEFAULT_EXPLORE_API_PATH;

  const trimmedPath = path.trim();
  if (!trimmedPath || trimmedPath.includes(' ') || !trimmedPath.startsWith('/')) {
    return DEFAULT_EXPLORE_API_PATH;
  }

  return trimmedPath;
}

function buildTopicQuery(filters?: TopicFilters): string {
  validateTopicFilters(filters);

  const searchParams = new URLSearchParams();

  if (filters?.category) {
    searchParams.set('category', filters.category);
  }

  if (filters?.difficulty) {
    searchParams.set('difficulty', filters.difficulty);
  }

  const query = searchParams.toString();
  return query ? `?${query}` : '';
}

function validateTopicFilters(filters?: TopicFilters): void {
  if (!filters) return;

  if (filters.category !== undefined && typeof filters.category !== 'string') {
    throw createBadRequestError('Topic category filter must be a string', filters.category);
  }

  if (filters.difficulty !== undefined && !TOPIC_DIFFICULTIES.includes(filters.difficulty)) {
    throw createBadRequestError(
      'Topic difficulty filter must be Beginner, Intermediate, or Advanced',
      filters.difficulty
    );
  }
}

function sortFiltersMetadata(metadata: FiltersMetadata): FiltersMetadata {
  return {
    categories: [...metadata.categories].sort((a, b) => a.localeCompare(b)),
    difficulties: [...metadata.difficulties].sort((a, b) => a.localeCompare(b)),
  };
}

function buildExplorePath(path: string): string {
  const basePath = EXPLORE_API_PATH.endsWith('/')
    ? EXPLORE_API_PATH.slice(0, -1)
    : EXPLORE_API_PATH;
  const nestedPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${nestedPath}`;
}

export async function getTopics(filters?: TopicFilters): Promise<ExploreTopic[]> {
  const response = await apiClient.get<ExploreTopic[]>(
    `${buildExplorePath('/topics')}${buildTopicQuery(filters)}`
  );
  return response.data;
}

export async function getTopicById(id: number, cookies?: string): Promise<TopicDetail> {
  const response = await apiClient.get<TopicDetail>(buildExplorePath(`/topics/${id}`), {
    headers: cookies ? { Cookie: cookies } : undefined,
  });

  return response.data;
}

export async function getFiltersMetadata(): Promise<FiltersMetadata> {
  const response = await apiClient.get<FiltersMetadata>(buildExplorePath('/metadata'));
  return sortFiltersMetadata(response.data);
}

export async function updateProgress(
  topicId: number,
  problemId: number,
  completed: boolean
): Promise<TopicProgress> {
  try {
    const response = await apiClient.patch<TopicProgress>(
      buildExplorePath(`/topics/${topicId}/problems/${problemId}`),
      { completed }
    );

    return response.data;
  } catch (error) {
    if (isApiError(error)) {
      throw error;
    }

    const updateError: ApiError = {
      status: 500,
      code: 'UPDATE_PROGRESS_FAILED',
      message: 'Failed to update topic progress',
      details: error,
    };

    throw updateError;
  }
}

export const exploreService = {
  getTopics,
  getTopicById,
  getFiltersMetadata,
  updateProgress,
};

export type {
  ExploreTopic,
  FiltersMetadata,
  TopicDetail,
  TopicFilters,
  TopicProgress,
} from './exploreService.types';
