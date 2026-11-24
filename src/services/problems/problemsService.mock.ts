import type {
  Problem,
  ProblemDifficulty,
  ProblemFilters,
  ProblemListResponse,
  ProblemStatus,
} from './problemsService.types';

/**
 * In-memory problems used while the real `/api/problems` endpoint (API-029) does not exist.
 *
 * TODO(SPA-013): replace this file with the shared MSW handlers when SPA-013 is done.
 * The response shape already follows ADR-003 (`{ data, meta }` with page/pageSize/total/totalPages).
 */

const DEFAULT_PAGE_SIZE = 20;
const MAX_PAGE_SIZE = 100;

type MockProblemSeed = [number, string, ProblemDifficulty, string[], ProblemStatus?];

const SEED: MockProblemSeed[] = [
  [1, 'Two Sum', 'Easy', ['array', 'hash-table'], 'solved'],
  [2, 'Add Two Numbers', 'Medium', ['linked-list', 'math', 'recursion'], 'attempted'],
  [3, 'Longest Substring Without Repeating Characters', 'Medium', ['string', 'sliding-window']],
  [4, 'Median of Two Sorted Arrays', 'Hard', ['array', 'binary-search', 'divide-and-conquer']],
  [5, 'Longest Palindromic Substring', 'Medium', ['string', 'dynamic-programming']],
  [6, 'Zigzag Conversion', 'Medium', ['string']],
  [7, 'Reverse Integer', 'Medium', ['math'], 'solved'],
  [8, 'String to Integer (atoi)', 'Medium', ['string']],
  [9, 'Palindrome Number', 'Easy', ['math'], 'solved'],
  [10, 'Regular Expression Matching', 'Hard', ['string', 'dynamic-programming', 'recursion']],
  [11, 'Container With Most Water', 'Medium', ['array', 'two-pointers', 'greedy']],
  [13, 'Roman to Integer', 'Easy', ['math', 'string', 'hash-table']],
  [14, 'Longest Common Prefix', 'Easy', ['string'], 'attempted'],
  [15, '3Sum', 'Medium', ['array', 'two-pointers', 'sorting']],
  [17, 'Letter Combinations of a Phone Number', 'Medium', ['string', 'backtracking']],
  [19, 'Remove Nth Node From End of List', 'Medium', ['linked-list', 'two-pointers']],
  [20, 'Valid Parentheses', 'Easy', ['string', 'stack'], 'solved'],
  [21, 'Merge Two Sorted Lists', 'Easy', ['linked-list', 'recursion']],
  [22, 'Generate Parentheses', 'Medium', ['string', 'backtracking', 'dynamic-programming']],
  [23, 'Merge k Sorted Lists', 'Hard', ['linked-list', 'heap', 'divide-and-conquer']],
  [26, 'Remove Duplicates from Sorted Array', 'Easy', ['array', 'two-pointers']],
  [33, 'Search in Rotated Sorted Array', 'Medium', ['array', 'binary-search']],
  [35, 'Search Insert Position', 'Easy', ['array', 'binary-search']],
  [42, 'Trapping Rain Water', 'Hard', ['array', 'two-pointers', 'stack']],
  [70, 'Climbing Stairs', 'Easy', ['math', 'dynamic-programming'], 'solved'],
];

export const MOCK_PROBLEM_CATALOG: Problem[] = SEED.map(
  ([id, title, difficulty, tags, status]) => ({
    id,
    title,
    difficulty,
    tags,
    status: status ?? 'unsolved',
  })
);

function clampPage(value: number | undefined): number {
  return typeof value === 'number' && Number.isFinite(value) ? Math.max(1, Math.floor(value)) : 1;
}

function clampPageSize(value: number | undefined): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) return DEFAULT_PAGE_SIZE;
  return Math.min(MAX_PAGE_SIZE, Math.max(1, Math.floor(value)));
}

export function filterMockProblems(
  problems: Problem[],
  filters: ProblemFilters = {}
): ProblemListResponse {
  const search = filters.search?.trim().toLowerCase() ?? '';

  const filtered = problems.filter((problem) => {
    if (search && !problem.title.toLowerCase().includes(search) && String(problem.id) !== search) {
      return false;
    }
    if (filters.difficulty && problem.difficulty !== filters.difficulty) return false;
    if (filters.status && (problem.status ?? 'unsolved') !== filters.status) return false;
    if (filters.tag && !problem.tags.includes(filters.tag)) return false;
    return true;
  });

  const pageSize = clampPageSize(filters.pageSize);
  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const page = clampPage(filters.page);
  const start = (page - 1) * pageSize;

  return {
    data: filtered.slice(start, start + pageSize),
    meta: { page, pageSize, total, totalPages },
  };
}

function wait(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

/** Small delay so loading states are visible in development. */
const MOCK_LATENCY_MS = 250;

export const mockProblemsService = {
  async getProblems(
    filters: ProblemFilters = {},
    config?: { signal?: AbortSignal }
  ): Promise<ProblemListResponse> {
    await wait(MOCK_LATENCY_MS, config?.signal);
    return filterMockProblems(MOCK_PROBLEM_CATALOG, filters);
  },

  async getTags(): Promise<string[]> {
    const tags = new Set(MOCK_PROBLEM_CATALOG.flatMap((problem) => problem.tags));
    return [...tags].sort((a, b) => a.localeCompare(b));
  },
};
