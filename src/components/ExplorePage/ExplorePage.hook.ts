import { useEffect, useMemo, useState } from 'react';

import { exploreService } from '../../services/explore/exploreService';

import { EXPLORE_DIFFICULTIES } from './ExplorePage.constants';

import type { ExploreTopic, TopicDifficulty } from '../../services/explore/exploreService.types';

type CategoryFilter = string | 'All';
type DifficultyFilter = TopicDifficulty | 'All';

const PAGE_SIZE = 6;

const isValidDifficulty = (value: DifficultyFilter) => EXPLORE_DIFFICULTIES.includes(value);

const getInitialSearchParam = (name: string) => {
  if (typeof window === 'undefined') {
    return '';
  }

  return new URLSearchParams(window.location.search).get(name) ?? '';
};

const getInitialDifficulty = (): DifficultyFilter => {
  const difficulty = getInitialSearchParam('difficulty') as DifficultyFilter;

  return isValidDifficulty(difficulty) ? difficulty : 'All';
};

const getInitialPage = () => {
  const page = Number(getInitialSearchParam('page'));

  return Number.isInteger(page) && page > 0 ? page : 1;
};

export const useExplorePage = () => {
  const [selectedCategory, setSelectedCategoryState] = useState<CategoryFilter>(
    () => getInitialSearchParam('category') || 'All'
  );
  const [selectedDifficulty, setSelectedDifficultyState] =
    useState<DifficultyFilter>(getInitialDifficulty);
  const [searchQuery, setSearchQueryState] = useState(() => getInitialSearchParam('q'));
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [topics, setTopics] = useState<ExploreTopic[]>([]);
  const [isLoadingTopics, setIsLoadingTopics] = useState(true);
  const [topicsError, setTopicsError] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if (selectedCategory === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', selectedCategory);
    }

    if (selectedDifficulty === 'All') {
      searchParams.delete('difficulty');
    } else {
      searchParams.set('difficulty', selectedDifficulty);
    }

    if (searchQuery.trim()) {
      searchParams.set('q', searchQuery.trim());
    } else {
      searchParams.delete('q');
    }

    if (currentPage > 1) {
      searchParams.set('page', String(currentPage));
    } else {
      searchParams.delete('page');
    }

    const nextQuery = searchParams.toString();
    const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ''}`;

    window.history.replaceState(null, '', nextUrl);
  }, [selectedCategory, selectedDifficulty, searchQuery, currentPage]);

  useEffect(() => {
    const loadTopics = async () => {
      setIsLoadingTopics(true);
      setTopicsError(null);

      try {
        const topicsResponse = await exploreService.getTopics({
          category: selectedCategory === 'All' ? undefined : selectedCategory,
          difficulty: selectedDifficulty === 'All' ? undefined : selectedDifficulty,
        });

        setTopics(topicsResponse);
      } catch {
        setTopics([]);
        setTopicsError('Unable to load explore topics.');
      } finally {
        setIsLoadingTopics(false);
      }
    };

    void loadTopics();
  }, [selectedCategory, selectedDifficulty]);

  const filteredTopics = useMemo(() => {
    const difficultyIsValid = isValidDifficulty(selectedDifficulty);

    if (!difficultyIsValid) {
      return [];
    }

    const normalizedSearchQuery = searchQuery.trim().toLowerCase();

    return topics.filter((topic) => {
      if (!normalizedSearchQuery) {
        return true;
      }

      return (
        topic.title.toLowerCase().includes(normalizedSearchQuery) ||
        topic.description.toLowerCase().includes(normalizedSearchQuery) ||
        topic.category.toLowerCase().includes(normalizedSearchQuery)
      );
    });
  }, [topics, selectedDifficulty, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredTopics.length / PAGE_SIZE));

  const paginatedTopics = useMemo(() => {
    const firstTopicIndex = (currentPage - 1) * PAGE_SIZE;

    return filteredTopics.slice(firstTopicIndex, firstTopicIndex + PAGE_SIZE);
  }, [filteredTopics, currentPage]);

  const setSelectedCategory = (category: CategoryFilter) => {
    setSelectedCategoryState(category);
    setCurrentPage(1);
  };

  const setSelectedDifficulty = (difficulty: DifficultyFilter) => {
    setSelectedDifficultyState(difficulty);
    setCurrentPage(1);
  };

  const setSearchQuery = (query: string) => {
    setSearchQueryState(query);
    setCurrentPage(1);
  };

  return {
    selectedCategory,
    selectedDifficulty,
    searchQuery,
    filteredTopics,
    paginatedTopics,
    currentPage,
    totalPages,
    isLoadingTopics,
    topicsError,
    setSelectedCategory,
    setSelectedDifficulty,
    setSearchQuery,
    setCurrentPage,
  };
};
