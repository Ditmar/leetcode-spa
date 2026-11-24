import { describe, expect, it } from 'vitest';

import {
  PROBLEMS_PAGE_SIZE,
  buildProblemsSearch,
  hasActiveFilters,
  parseProblemsQuery,
  toProblemFilters,
} from './problemsQuery';

const parse = (search: string, allowStatus = true) =>
  parseProblemsQuery(new URLSearchParams(search), { allowStatus });

describe('parseProblemsQuery', () => {
  it('returns the defaults for an empty URL', () => {
    expect(parse('')).toEqual({
      search: '',
      difficulty: undefined,
      status: undefined,
      tag: undefined,
      page: 1,
    });
  });

  it('reads every filter and the page', () => {
    expect(parse('?search=two&difficulty=Easy&status=solved&tag=array&page=2')).toEqual({
      search: 'two',
      difficulty: 'Easy',
      status: 'solved',
      tag: 'array',
      page: 2,
    });
  });

  it('accepts the difficulty in any letter case', () => {
    expect(parse('?difficulty=hard').difficulty).toBe('Hard');
  });

  it('ignores unknown difficulty and status values', () => {
    const query = parse('?difficulty=impossible&status=done');
    expect(query.difficulty).toBeUndefined();
    expect(query.status).toBeUndefined();
  });

  it.each(['0', '-3', 'abc', '2.5', ''])('uses page 1 when page is "%s"', (page) => {
    expect(parse(`?page=${page}`).page).toBe(1);
  });

  it('ignores the status filter for anonymous users', () => {
    expect(parse('?status=solved', false).status).toBeUndefined();
  });
});

describe('buildProblemsSearch', () => {
  it('returns an empty string when nothing is set', () => {
    expect(buildProblemsSearch({ search: '', page: 1 })).toBe('');
  });

  it('omits page 1 and keeps other pages', () => {
    expect(buildProblemsSearch({ search: '', difficulty: 'Easy', page: 1 })).toBe(
      '?difficulty=Easy'
    );
    expect(buildProblemsSearch({ search: '', difficulty: 'Easy', page: 2 })).toBe(
      '?difficulty=Easy&page=2'
    );
  });

  it('gives the same query back after parsing (shareable links)', () => {
    const query = parse('?search=sum&difficulty=Medium&tag=array&page=3');
    expect(parse(buildProblemsSearch(query))).toEqual(query);
  });
});

describe('toProblemFilters', () => {
  it('maps the query to service filters with the page size', () => {
    expect(toProblemFilters({ search: '  ', difficulty: 'Hard', page: 2 })).toEqual({
      search: undefined,
      difficulty: 'Hard',
      status: undefined,
      tag: undefined,
      page: 2,
      pageSize: PROBLEMS_PAGE_SIZE,
    });
  });
});

describe('hasActiveFilters', () => {
  it('is false for the page alone and true for any filter', () => {
    expect(hasActiveFilters({ search: '', page: 4 })).toBe(false);
    expect(hasActiveFilters({ search: 'x', page: 1 })).toBe(true);
    expect(hasActiveFilters({ search: '', tag: 'array', page: 1 })).toBe(true);
  });
});
