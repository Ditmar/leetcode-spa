export interface TestDetailPageProps {
  /** Route or parent can pass the test id to load */
  testId?: string;

  /** Optional callback when user clicks Start - used for navigation in integrations/tests */
  onStart?: (testId: string) => void;

  /** Allows controlling loading state from parent (story/testing) */
  loading?: boolean;

  /** Allows simulating an error state from parent */
  error?: string | null;
}

export interface TestModel {
  id: string;
  name: string;
  description?: string;
  company?: {
    name: string;
    logoUrl?: string;
  } | null;
  categories?: string[];
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  questionCount: number;
  durationMinutes: number;
}
