import type { ContestStatus, Difficulty } from './ContestPage.types';

export const getStatusChipColor = (status: ContestStatus): 'success' | 'primary' | 'default' => {
  switch (status) {
    case 'active':
      return 'success';
    case 'upcoming':
      return 'primary';
    case 'past':
      return 'default';
  }
};

export const getDifficultyColor = (difficulty: Difficulty): string => {
  switch (difficulty) {
    case 'Easy':
      return '#00b8a3';
    case 'Medium':
      return '#ffb800';
    case 'Hard':
      return '#ff2d55';
  }
};
