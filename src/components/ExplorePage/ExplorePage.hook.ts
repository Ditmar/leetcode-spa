import { useMemo, useState } from 'react';

import { EXPLORE_TOPICS } from './ExplorePage.constants';

import type { ExploreCategory, ExploreDifficulty } from './ExplorePage.types';

type CategoryFilter = ExploreCategory | 'All';
type DifficultyFilter = ExploreDifficulty | 'All';

export const useExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('All');

  const filteredTopics = useMemo(() => {
    return EXPLORE_TOPICS.filter((topic) => {
      const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;

      const matchesDifficulty =
        selectedDifficulty === 'All' || topic.difficulty === selectedDifficulty;

      return matchesCategory && matchesDifficulty;
    });
  }, [selectedCategory, selectedDifficulty]);

  return {
    selectedCategory,
    selectedDifficulty,
    filteredTopics,
    setSelectedCategory,
    setSelectedDifficulty,
  };
};
