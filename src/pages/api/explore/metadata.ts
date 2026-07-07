import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return Response.json({
    data: {
      categories: ['Algorithms', 'Data Structures'],
      difficulties: ['Beginner', 'Intermediate', 'Advanced'],
    },
  });
};
