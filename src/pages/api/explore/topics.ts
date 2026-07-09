import { exploreService } from '../../../services/explore/exploreService';

import type { APIRoute } from 'astro';
// Usamos rutas relativas directas para evitar conflictos con el alias @/

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get('category') || undefined;
    const difficultyParam = url.searchParams.get('difficulty');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const difficulty = difficultyParam ? (difficultyParam as any) : undefined;

    const topics = await exploreService.getTopics({ category, difficulty });

    return new Response(JSON.stringify({ data: topics }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const err = error;

    return new Response(JSON.stringify({ error: 'Internal Server Error', data: [] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
