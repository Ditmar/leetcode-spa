/**
 * Paths the browser may reach through `/api/*`. Anything not listed here → 404.
 *
 * - Paths are relative to API_BASE_URL (the `/api` of the Astro route is removed).
 * - `:name` matches exactly one path segment.
 * - `/auth/*` is NOT here on purpose: login, signup, logout and me have their own
 *   Astro routes (SPA-036-A), and refresh is only called by the server.
 * - Admin CRUD on `/user` is NOT exposed to the browser.
 *
 * When the API adds an endpoint the SPA needs, add one line here (and a test).
 */
export interface AllowedRoute {
  methods: readonly string[];
  pattern: string;
}

export const API_ALLOW_LIST: readonly AllowedRoute[] = [
  // Courses (api-leetcode: src/course/infrastructure/routes/course-routes.ts)
  { methods: ['GET'], pattern: '/courses' },
  { methods: ['GET'], pattern: '/courses/me/courses' },
  { methods: ['GET'], pattern: '/courses/:id' },
  { methods: ['POST'], pattern: '/courses/:id/enroll' },

  // Company tests (api-leetcode: src/tests/infraestructure/routes/test-routes.ts)
  { methods: ['GET'], pattern: '/tests' },
  { methods: ['GET'], pattern: '/tests/:id' },
  { methods: ['POST'], pattern: '/tests/:id/start' },
  { methods: ['GET'], pattern: '/tests/:id/questions' },
  { methods: ['POST'], pattern: '/tests/:id/submit' },

  // Problems (SPA problemsService → API-029)
  { methods: ['GET'], pattern: '/problems' },
  { methods: ['GET'], pattern: '/problems/tags' },
  { methods: ['GET'], pattern: '/problems/stats' },
  { methods: ['GET'], pattern: '/problems/:id' },

  // Submissions (SPA submissionsService → API-031)
  { methods: ['GET', 'POST'], pattern: '/submissions' },
  { methods: ['POST'], pattern: '/submissions/run' },
  { methods: ['GET'], pattern: '/submissions/:id' },

  // Users / profile (SPA userService → API-032)
  { methods: ['GET', 'PUT', 'DELETE'], pattern: '/users/me' },
  { methods: ['GET'], pattern: '/users/me/stats' },
  { methods: ['GET', 'PUT'], pattern: '/users/me/preferences' },
  { methods: ['POST'], pattern: '/users/me/avatar' },
  { methods: ['GET'], pattern: '/users/:id' },
  { methods: ['GET'], pattern: '/users/:id/stats' },

  // Explore (SPA exploreService → API-035)
  { methods: ['GET'], pattern: '/explore/topics' },
  { methods: ['GET'], pattern: '/explore/topics/:id' },
  { methods: ['GET'], pattern: '/explore/metadata' },
  { methods: ['PATCH'], pattern: '/explore/topics/:topicId/problems/:problemId' },

  // Contests (SPA contestsService → API-037)
  { methods: ['GET'], pattern: '/contests' },
  { methods: ['GET'], pattern: '/contests/:id' },
  { methods: ['GET'], pattern: '/contests/:id/leaderboard' },
  { methods: ['POST', 'DELETE'], pattern: '/contests/:id/register' },
];
