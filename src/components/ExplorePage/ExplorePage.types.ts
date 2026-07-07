export type ExploreDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type ExploreCategory = 'Data Structures' | 'Algorithms';
export type ExploreIcon = 'arrays' | 'linkedList' | 'search' | 'hash' | 'recursion' | 'dp';

export interface ExploreTopic {
  id: number;
  icon: ExploreIcon | string;
  title: string;
  description: string;
  category: ExploreCategory | string;
  difficulty: ExploreDifficulty;
  progress: number;
  totalProblems: number;
}

export interface ExplorePageProps {
  title?: string;
  subtitle?: string;
  isLoading?: boolean;
  initialTopics?: ExploreTopic[];
  categories?: string[];
  difficulties?: ExploreDifficulty[];
}
