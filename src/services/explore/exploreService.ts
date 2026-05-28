import { apiClient } from '../api/apiClient';

import type {
  ExploreTopic,
  FiltersMetadata,
  TopicDetail,
  TopicFilters,
  TopicProgress,
} from './exploreService.types';

const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
const EXPLORE_API_PATH = env?.PUBLIC_EXPLORE_API_PATH ?? '/explore';

function buildTopicQuery(filters?: TopicFilters): string {
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
  const response = await apiClient.patch<TopicProgress>(
    buildExplorePath(`/topics/${topicId}/problems/${problemId}`),
    { completed }
  );

  return response.data;
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
