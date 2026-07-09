import { exploreService } from '@/services/explore/exploreService';

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get('category') || undefined;
    const difficultyParam = url.searchParams.get('difficulty');
    const difficulty = difficultyParam ? (difficultyParam as any) : undefined;

    // SOLUCIÓN 1: Si el servicio solo acepta 1 argumento, pásale solo el objeto de filtros
    const topics = await exploreService.getTopics({ category, difficulty });

    // SOLUCIÓN 2: topics ya es el arreglo, no busques .data
    return new Response(JSON.stringify({ data: topics }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[API Error]', error);
    return new Response(JSON.stringify({ data: [] }), { status: 500 });
  }
};
