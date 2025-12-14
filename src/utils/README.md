# Utils — Implement server-side rendering mechanism for API data fetching with cache and TTL support

📌 1. Description

This module implements a generic data fetching wrapper, compatible with
SSR on Astro, which includes:

-   Internal caching per endpoint
-   Configurable TTL (Time to Live) via environment variable
-   Generic typing (TypeScript)
-   Simple integration with multiple APIs
-   Scalable and reusable mechanism
-   Manual cache cleanup
-   Safe error handling

The goal is to optimize API calls in SSR, reduce network consumption, and improve overall project performance.

🛠️ 2. Technologies in the Stack Used

-   Astro SSR
-   TypeScript
-   Fetch API
-   Map for in-memory storage (NOTE: in-memory Map has no size limit;
    consider LRU or an external cache like Redis for production)
-   Environment variables (import.meta.env)
-   Vitest for unit testing

Justification for the stack:

-   Astro runs SSR code natively.
-   Map is fast and convenient for small internal caching use cases without extra dependencies.
-   However, Map is only recommended for low-cardinality workloads or short-lived SSR processes, since it does not share state across workers and can grow unbounded in memory.
-   For production workloads consider a distributed cache such as Redis or an LRU-based strategy.

📁 3. Module Structure

src/ 
└─ utils/ 
    ├── fetchWithCache.ts       → Main logic for caching + TTL
    └── fetchWithCache.test.ts  → Unit tests (Vitest)

⚙️ 4. TTL Configuration

The TTL (in milliseconds) can be defined in the .env file:

API_CACHE_TTL=5000

If not defined, the default value is 5000 ms (5 seconds).

📦 5. Using the Wrapper

Basic Example:

import { fetchWithCache } from “../utils/fetchWithCache”;

const posts = await fetchWithCache(“https://jsonplaceholder.typicode.com/posts”);

Example with options and a custom TTL:

const user = await fetchWithCache( 
    “https://api.example.com/user”, 
    { method: “GET”, headers: { Authorization: “Bearer token” }}, 
    10000 // 10-second TTL
);

🧹 6. Manually Clearing the Cache

import { clearCache } from “../utils/fetchWithCache”;

clearCache(); // Empties the entire internal cache

Primarily used for debugging or internal validation.
NOTE: Avoid calling this in production without evaluating the impact on concurrent requests.

🧪 7. Unit Testing

The module includes tests using Vitest.

fetchWithCache.test.ts validates:

✔ Caching
✔ Cache reuse
✔ Expiration based on TTL
✔ Fetch error handling
✔ Cache isolation between tests

To run them:

npm run test

🔒 8. Security Considerations

-   Errors are not cached, only successful responses.
-   Sensitive data is not stored.
-   TTL prevents the retention of obsolete information.
-   Error handling prevents accidental leaking of internal exceptions.

📈 9. Scalability

This module is designed to:

-   Integrate multiple internal and external APIs
-   Reduce server load
-   Facilitate future migrations to Redis or a distributed cache
-   Extend the wrapper with:
    -   Retries
    -   Circuit breaker
    -   Logging layer
    -   Persistent cache

✔️ 10. Conclusion

This module meets all the criteria, including:

-   SSR compatible
-   Generic wrapper
-   Per-endpoint caching
-   Configurable TTL
-   Working examples
-   Clear documentation
-   Comprehensive unit tests
-   Security and error handling

It is fully encapsulated within /src/utils.