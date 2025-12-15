import type { TestModel } from './TestDetailPage.types';

const MOCK_TESTS: TestModel[] = [
  {
    id: 't-1',
    name: 'Algorithms — Arrays & Strings',
    description:
      'A focused assessment covering array and string manipulation problems frequently used in interviews.',
    company: { name: 'Acme Tech', logoUrl: '' },
    categories: ['Arrays', 'Strings', 'Two Pointers'],
    difficulty: 'Medium',
    questionCount: 12,
    durationMinutes: 45,
  },
  {
    id: 't-2',
    name: 'System Design Basics',
    description: 'High-level questions around designing reliable systems.',
    company: { name: 'Globex', logoUrl: '' },
    categories: ['Design', 'Scalability'],
    difficulty: 'Hard',
    questionCount: 6,
    durationMinutes: 60,
  },
];

/**
 * Mock fetch helper — simulates an async API call with optional delay.
 */
export const fetchTestById = (id: string, delay = 350): Promise<TestModel> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const t = MOCK_TESTS.find((m) => m.id === id);
      if (!t) return reject(new Error('Test not found'));
      resolve(t);
    }, delay);
  });

export const MOCK_TESTS_MAP = MOCK_TESTS.reduce<Record<string, TestModel>>(
  (acc, t) => {
    acc[t.id] = t;
    return acc;
  },
  {} as Record<string, TestModel>
);
