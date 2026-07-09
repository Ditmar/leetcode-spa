import { apiClient } from '@/services/api/apiClient'; // Importamos el cliente base

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get('category') || undefined;
    const difficulty = url.searchParams.get('difficulty') || undefined;

    const cookieHeader = request.headers.get('cookie') ?? '';

    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (difficulty) params.set('difficulty', difficulty);
    const query = params.toString() ? `?${params.toString()}` : '';

    const response = await apiClient.get(`/explore/topics${query}`, {
      headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
    });

    return new Response(JSON.stringify({ data: response.data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[Explore API Error]:', error);

    return new Response(JSON.stringify({ error: 'Internal Server Error', data: [] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
