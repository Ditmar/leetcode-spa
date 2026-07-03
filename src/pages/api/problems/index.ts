import { problemsService } from '../../../services/problems/problemsService';

import type {
  ProblemDifficulty,
  ProblemFilters,
  ProblemStatus,
} from '../../../services/problems/problemsService.types';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url, request }) => {
  const filters: ProblemFilters = {
    search: url.searchParams.get('search') ?? undefined,
    difficulty: (url.searchParams.get('difficulty') as ProblemDifficulty) ?? undefined,
    status: (url.searchParams.get('status') as ProblemStatus) ?? undefined,
    tag: url.searchParams.get('tag') ?? undefined,
    page: Number(url.searchParams.get('page') ?? '1'),
    pageSize: Number(url.searchParams.get('pageSize') ?? '20'),
  };

  try {
    const data = await problemsService.getProblems(filters, {
      headers: { cookie: request.headers.get('cookie') ?? '' },
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to fetch problems' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
