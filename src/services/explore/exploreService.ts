import { apiClient } from '../api/apiClient';

import type {
  ExploreTopic,
  FiltersMetadata,
  TopicDetail,
  TopicFilters,
  TopicProgress,
} from './exploreService.types';

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

export const exploreService = {
  async getTopics(filters?: TopicFilters): Promise<ExploreTopic[]> {
    const response = await apiClient.get<ExploreTopic[]>(
      `/explore/topics${buildTopicQuery(filters)}`
    );
    return response.data;
  },

  async getTopicById(id: number, cookies?: string): Promise<TopicDetail> {
    const response = await apiClient.get<TopicDetail>(`/explore/topics/${id}`, {
      headers: cookies ? { Cookie: cookies } : undefined,
    });

    return response.data;
  },

  async getFiltersMetadata(): Promise<FiltersMetadata> {
    const response = await apiClient.get<FiltersMetadata>('/explore/metadata');
    return sortFiltersMetadata(response.data);
  },

  async updateProgress(
    topicId: number,
    problemId: number,
    completed: boolean
  ): Promise<TopicProgress> {
    const response = await apiClient.patch<TopicProgress>(
      `/explore/topics/${topicId}/problems/${problemId}`,
      { completed }
    );

    return response.data;
  },
};

export type {
  ExploreTopic,
  FiltersMetadata,
  TopicDetail,
  TopicFilters,
  TopicProgress,
} from './exploreService.types';
