import { describe, expect, it } from 'vitest';

import {
  MOCK_PROBLEM_CATALOG,
  filterMockProblems,
  mockProblemsService,
} from './problemsService.mock';

describe('filterMockProblems', () => {
  it('returns the first page with ADR-003 pagination meta', () => {
    const result = filterMockProblems(MOCK_PROBLEM_CATALOG, { page: 1, pageSize: 10 });

    expect(result.data).toHaveLength(10);
    expect(result.meta).toEqual({
      page: 1,
      pageSize: 10,
      total: MOCK_PROBLEM_CATALOG.length,
      totalPages: Math.ceil(MOCK_PROBLEM_CATALOG.length / 10),
    });
  });

  it('returns the rest on the last page', () => {
    const result = filterMockProblems(MOCK_PROBLEM_CATALOG, { page: 3, pageSize: 10 });
    expect(result.data).toHaveLength(MOCK_PROBLEM_CATALOG.length - 20);
  });

  it('searches by title without caring about letter case', () => {
    const result = filterMockProblems(MOCK_PROBLEM_CATALOG, { search: 'PARENTHESES' });
    expect(result.data.map((problem) => problem.title)).toEqual([
      'Valid Parentheses',
      'Generate Parentheses',
    ]);
  });

  it('searches by problem number', () => {
    const result = filterMockProblems(MOCK_PROBLEM_CATALOG, { search: '42' });
    expect(result.data.map((problem) => problem.id)).toEqual([42]);
  });

  it('combines difficulty, status and tag filters', () => {
    const result = filterMockProblems(MOCK_PROBLEM_CATALOG, {
      difficulty: 'Easy',
      status: 'solved',
      tag: 'math',
    });

    expect(result.data.map((problem) => problem.id)).toEqual([9, 70]);
    result.data.forEach((problem) => {
      expect(problem.difficulty).toBe('Easy');
      expect(problem.status).toBe('solved');
      expect(problem.tags).toContain('math');
    });
  });

  it('returns an empty page when nothing matches', () => {
    const result = filterMockProblems(MOCK_PROBLEM_CATALOG, { search: 'no such problem' });
    expect(result.data).toEqual([]);
    expect(result.meta.total).toBe(0);
    expect(result.meta.totalPages).toBe(0);
  });
});

describe('mockProblemsService', () => {
  it('returns sorted tags without duplicates', async () => {
    const tags = await mockProblemsService.getTags();
    expect(tags).toEqual([...new Set(tags)].sort((a, b) => a.localeCompare(b)));
    expect(tags).toContain('array');
  });

  it('rejects when the request is aborted', async () => {
    const controller = new AbortController();
    const request = mockProblemsService.getProblems({}, { signal: controller.signal });
    controller.abort();
    await expect(request).rejects.toMatchObject({ name: 'AbortError' });
  });
});
