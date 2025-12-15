import{j as n}from"./iframe-MChe8Sk-.js";import{useMDXComponents as a}from"./index-DPeJJMkp.js";import"./preload-helper-PPVm8Dsz.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"config-manager",children:"Config Manager"}),`
`,n.jsxs(e.p,{children:["Centralized configuration utility for managing application-wide settings with type-safe environment variable access, using the ",n.jsx(e.strong,{children:"Zod + JSON"})," pattern."]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"This module provides a typed configuration object validated at runtime. It follows a hierarchical loading strategy, ensuring consistency between Server-Side Rendering (SSR) and Client-Side rendering."}),`
`,n.jsx(e.h3,{id:"architecture--file-structure",children:"Architecture & File Structure"}),`
`,n.jsx(e.p,{children:"The configuration system is split into three parts for scalability:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"src/config/default.json"})}),`:
Contains the `,n.jsx(e.strong,{children:"fallback values"})," used when no environment variables are set."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "defaultCacheTTL": 300000
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"src/config/env.json"})}),`:
A mapping file that links the internal configuration keys to the actual `,n.jsx(e.strong,{children:"Vite environment variable names"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "defaultCacheTTL": "VITE_DEFAULT_CACHE_TTL"
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"src/utils/config.schema.ts"})}),`:
Defines the TypeScript types and `,n.jsx(e.strong,{children:"Zod validation rules"})," (e.g., ensuring a TTL is a positive number). This is the source of truth for the config shape."]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"basic-import",children:"Basic Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getConfig, getCachedConfig } from '../utils/config';

## In React Components (Client-Side)
Use getCachedConfig() in components to avoid re-parsing configuration on every render.

import { getCachedConfig } from '../../utils/config';

export function CacheStatusComponent() {
  const config = getCachedConfig();
  return <div>Default Cache TTL: {config.defaultCacheTTL / 1000} seconds</div>;
}

## In Server Utilities (SSR/Astro)
You can use getConfig() or getCachedConfig(). Both work in SSR environments.

import { getConfig } from '../utils/config';

export function initializeServerService() {
  const config = getConfig();
  console.log(\`Service starting with TTL: \${config.defaultCacheTTL}\`);
  // ...
}

## Required Example: fetchWithCache Utility
Here is an example of how to retrieve the defaultCacheTTL key to implement a caching mechanism in a utility function.

import { getCachedConfig } from '../utils/config';

// Simple in-memory cache (for demonstration)
const memoryCache = new Map<string, { data: any; timestamp: number }>();

/**
 * Fetches data from a URL, caching the result based on the configured TTL.
 */
export async function fetchWithCache<T>(url: string): Promise<T> {
  // 1. Retrieve the configured TTL from the Config Manager
  const { defaultCacheTTL } = getCachedConfig();

  const now = Date.now();
  const cachedEntry = memoryCache.get(url);

  // 2. Check if valid cache exists
  if (cachedEntry && (now - cachedEntry.timestamp) < defaultCacheTTL) {
    console.log(\`[CACHE HIT] Returning data for \${url}\`);
    return cachedEntry.data as T;
  }

  console.log(\`[CACHE MISS] Fetching fresh data for \${url}\`);
  const response = await fetch(url);
  const data = await response.json();

  // 3. Store new data in cache with current timestamp
  memoryCache.set(url, { data, timestamp: now });

  return data as T;
}

## Adding New Configuration Keys
To add a new configuration key (e.g., a feature flag called enableBetaFeatures), you must update three files.

Step 1: Define Default Value
Add the key and its default value to src/config/default.json:

{
  "defaultCacheTTL": 300000,
  "enableBetaFeatures": false
}

## tep 2: Map Environment Variable
Add the mapping to src/config/env.json to link it to a VITE_ variable:

{
  "defaultCacheTTL": "VITE_DEFAULT_CACHE_TTL",
  "enableBetaFeatures": "VITE_ENABLE_BETA"
}

## Step 3: Update Validation Schema
Update src/utils/config.schema.ts to include the new key and its validation rules:

import { z } from 'zod';

export const configSchema = z.object({
  defaultCacheTTL: z.number().positive(),
  // Add the new boolean config
  enableBetaFeatures: z.boolean(),
});
// ...

## import { z } from 'zod';

export const configSchema = z.object({
  defaultCacheTTL: z.number().positive(),
  // Add the new boolean config
  enableBetaFeatures: z.boolean(),
});
// ...

## Overriding with Environment Variables
You can override the default settings locally by creating a .env file in the project root.

Config Key,         Environment Variable,   Value Example
defaultCacheTTL,    VITE_DEFAULT_CACHE_TTL, 60000
enableBetaFeatures, VITE_ENABLE_BETA,        true

## Example .env content:

# Override TTL to 1 minute
VITE_DEFAULT_CACHE_TTL=60000
# Enable beta features
VITE_ENABLE_BETA=true

## Important Note: Any variable meant to be exposed to the client-side must be prefixed with VITE_.

Testing
Run the unit tests to verify configuration loading, schema validation, and environment overrides:

yarn test src/utils/config.test.ts
`})})]})}function c(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{c as default};
