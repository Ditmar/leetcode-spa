export type TopicDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface TopicFilters {
  category?: string;
  difficulty?: TopicDifficulty;
}

export interface ExploreTopic {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: TopicDifficulty;
  icon: string;
  totalProblems: number;
  progress: number;
}

export interface TopicProblem {
  id: number;
  title: string;
  difficulty: TopicDifficulty;
  completed: boolean;
}

export interface TopicDetail extends ExploreTopic {
  problems: TopicProblem[];
}

export interface TopicProgress {
  topicId: number;
  progress: number;
  totalProblems: number;
}

export interface FiltersMetadata {
  categories: string[];
  difficulties: TopicDifficulty[];
}
