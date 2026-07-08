import { exploreService } from '../../../services/explore/exploreService';

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get('category') || undefined;

    const difficultyParam = url.searchParams.get('difficulty');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const difficulty = difficultyParam ? (difficultyParam as any) : undefined;

    const cookieHeader = request.headers.get('cookie') ?? '';

    const topics = await exploreService.getTopics({ category, difficulty }, cookieHeader);

    return new Response(JSON.stringify({ data: topics }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[API Error] Failed to fetch filtered topics:', error);

    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
