import { useMemo, useState } from 'react';

import { EXPLORE_CATEGORIES, EXPLORE_DIFFICULTIES, EXPLORE_TOPICS } from './ExplorePage.constants';

import type { ExploreCategory, ExploreDifficulty } from './ExplorePage.types';

type CategoryFilter = ExploreCategory | 'All';
type DifficultyFilter = ExploreDifficulty | 'All';

const isValidCategory = (value: CategoryFilter) => EXPLORE_CATEGORIES.includes(value);

const isValidDifficulty = (value: DifficultyFilter) => EXPLORE_DIFFICULTIES.includes(value);

export const useExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('All');

  const filteredTopics = useMemo(() => {
    const categoryIsValid = isValidCategory(selectedCategory);
    const difficultyIsValid = isValidDifficulty(selectedDifficulty);

    if (!categoryIsValid || !difficultyIsValid) {
      return [];
    }

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
