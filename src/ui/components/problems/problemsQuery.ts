import type {
  ProblemDifficulty,
  ProblemFilters,
  ProblemStatus,
} from '../../../services/problems/problemsService.types';

/** Problems per page on the list page. */
export const PROBLEMS_PAGE_SIZE = 20;

export const DIFFICULTY_OPTIONS: ProblemDifficulty[] = ['Easy', 'Medium', 'Hard'];
export const STATUS_OPTIONS: ProblemStatus[] = ['solved', 'attempted', 'unsolved'];

/** Filters and page that live in the URL query string (`?difficulty=Easy&page=2`). */
export interface ProblemsQuery {
  search: string;
  difficulty?: ProblemDifficulty;
  status?: ProblemStatus;
  tag?: string;
  page: number;
}

export const EMPTY_PROBLEMS_QUERY: ProblemsQuery = { search: '', page: 1 };

function parseDifficulty(value: string | null): ProblemDifficulty | undefined {
  if (!value) return undefined;
  const lower = value.trim().toLowerCase();
  return DIFFICULTY_OPTIONS.find((option) => option.toLowerCase() === lower);
}

function parseStatus(value: string | null): ProblemStatus | undefined {
  if (!value) return undefined;
  const lower = value.trim().toLowerCase();
  return STATUS_OPTIONS.find((option) => option === lower);
}

function parsePage(value: string | null): number {
  if (!value || !/^\d+$/.test(value.trim())) return 1;
  const page = Number.parseInt(value, 10);
  return page >= 1 ? page : 1;
}

/**
 * Reads the query from the URL. Unknown or invalid values are ignored, so a broken link
 * still opens the page instead of showing an error.
 */
export function parseProblemsQuery(
  params: URLSearchParams,
  options: { allowStatus?: boolean } = {}
): ProblemsQuery {
  const search = (params.get('search') ?? '').trim();
  const tag = (params.get('tag') ?? '').trim();

  return {
    search,
    difficulty: parseDifficulty(params.get('difficulty')),
    status: options.allowStatus === false ? undefined : parseStatus(params.get('status')),
    tag: tag || undefined,
    page: parsePage(params.get('page')),
  };
}

/** Builds `?search=...&difficulty=...` with only the values that are set. Page 1 is omitted. */
export function buildProblemsSearch(query: ProblemsQuery): string {
  const params = new URLSearchParams();
  if (query.search.trim()) params.set('search', query.search.trim());
  if (query.difficulty) params.set('difficulty', query.difficulty);
  if (query.status) params.set('status', query.status);
  if (query.tag) params.set('tag', query.tag);
  if (query.page > 1) params.set('page', String(query.page));

  const search = params.toString();
  return search ? `?${search}` : '';
}

export function toProblemFilters(query: ProblemsQuery): ProblemFilters {
  return {
    search: query.search.trim() || undefined,
    difficulty: query.difficulty,
    status: query.status,
    tag: query.tag,
    page: query.page,
    pageSize: PROBLEMS_PAGE_SIZE,
  };
}

export function isSameProblemsQuery(a: ProblemsQuery, b: ProblemsQuery): boolean {
  return buildProblemsSearch(a) === buildProblemsSearch(b);
}

export function hasActiveFilters(query: ProblemsQuery): boolean {
  return Boolean(query.search.trim() || query.difficulty || query.status || query.tag);
}
