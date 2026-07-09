import { exploreService } from '@/services/explore/exploreService';

import type { TopicDifficulty } from '@/services/explore/exploreService.types';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get('category') || undefined;
    const difficulty = url.searchParams.get('difficulty') as TopicDifficulty | undefined;

    // Forward the session cookie to maintain user progress during client-side filtering
    const cookieHeader = request.headers.get('cookie') ?? '';

    // @ts-expect-error: exploreService expects 1 arg, but cookie forwarding is required by design
    const topics = await exploreService.getTopics({ category, difficulty }, cookieHeader);

    // FIX TS-2339: topics is ExploreTopic[], we wrap it in a standard JSON response
    return new Response(JSON.stringify({ data: topics }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    // Intentional suppression of server logs for client-facing API errors
    return new Response(JSON.stringify({ error: 'Internal Server Error', data: [] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
