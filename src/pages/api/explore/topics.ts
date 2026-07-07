import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return Response.json({
    data: [
      {
        id: 1,
        icon: 'arrays',
        title: 'Arrays 101',
        description: 'Learn the basics of array manipulation, traversal, and common patterns.',
        category: 'Data Structures',
        difficulty: 'Beginner',
        progress: 0,
        totalProblems: 12,
      },
      {
        id: 2,
        icon: 'search',
        title: 'Binary Search',
        description: 'Understand binary search and its applications in various scenarios.',
        category: 'Algorithms',
        difficulty: 'Intermediate',
        progress: 0,
        totalProblems: 15,
      },
      {
        id: 3,
        icon: 'dp',
        title: 'Dynamic Programming',
        description: 'Learn DP patterns and solve optimization problems efficiently.',
        category: 'Algorithms',
        difficulty: 'Advanced',
        progress: 0,
        totalProblems: 20,
      },
    ],
  });
};
