import{j as n}from"./iframe-Ch16SvJR.js";import{useMDXComponents as r}from"./index-D8ppj9Co.js";import"./preload-helper-PPVm8Dsz.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"config-manager",children:"Config Manager"}),`
`,n.jsx(e.p,{children:"Centralized configuration utility for managing application-wide settings with type-safe environment variable access."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"Provides typed access to environment variables with automatic fallbacks and validation. Works in both SSR (Astro) and client (React) environments."}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"import-paths",children:"Import Paths"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// From src/utils/
import { getConfig } from './config';

// From src/pages/
import { getConfig } from '../utils/config';

// From src/components/
import { getConfig } from '../../utils/config';
`})}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getConfig } from '../utils/config';

const config = getConfig();
console.log(config.defaultCacheTTL); // 300000
`})}),`
`,n.jsx(e.h3,{id:"in-astro-pages",children:"In Astro Pages"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-astro",children:`---
import { getConfig } from '../utils/config';
const config = getConfig();
---

<div>Cache TTL: {config.defaultCacheTTL}ms</div>
`})}),`
`,n.jsx(e.h3,{id:"in-react-components",children:"In React Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { getCachedConfig } from '../../utils/config';

export function MyComponent() {
  const config = getCachedConfig();
  return <div>{config.defaultCacheTTL}ms</div>;
}
`})}),`
`,n.jsx(e.h2,{id:"environment-variables",children:"Environment Variables"}),`
`,n.jsx(e.h3,{id:"current-variables",children:"Current Variables"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"VITE_DEFAULT_CACHE_TTL"}),": Default cache TTL in milliseconds (default: 300000)"]}),`
`]}),`
`,n.jsx(e.h3,{id:"configuration",children:"Configuration"}),`
`,n.jsxs(e.p,{children:["Create ",n.jsx(e.code,{children:".env"})," file in project root:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`VITE_DEFAULT_CACHE_TTL=600000
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Important"}),": Must be prefixed with ",n.jsx(e.code,{children:"VITE_"})]}),`
`,n.jsx(e.h3,{id:"invalid-values",children:"Invalid Values"}),`
`,n.jsxs(e.p,{children:["Invalid values log a warning in the ",n.jsx(e.strong,{children:"server terminal"})," (not browser console) and use defaults:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Terminal output:
Invalid number value: "invalid-value". Using fallback: 300000
`})}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(e.h3,{id:"getconfig",children:"getConfig()"}),`
`,n.jsx(e.p,{children:"Returns configuration object. Reads env vars on each call."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const config = getConfig();
`})}),`
`,n.jsx(e.h3,{id:"getcachedconfig",children:"getCachedConfig()"}),`
`,n.jsx(e.p,{children:"Returns cached configuration (recommended for production)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const config = getCachedConfig();
`})}),`
`,n.jsx(e.h3,{id:"buildconfigenvvars",children:"buildConfig(envVars)"}),`
`,n.jsx(e.p,{children:"For testing. Builds config from provided env vars."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const config = buildConfig({ VITE_DEFAULT_CACHE_TTL: '450000' });
`})}),`
`,n.jsx(e.h3,{id:"resetconfigcache",children:"resetConfigCache()"}),`
`,n.jsx(e.p,{children:"Resets cache (useful for testing)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`resetConfigCache();
`})}),`
`,n.jsx(e.h2,{id:"adding-new-config-keys",children:"Adding New Config Keys"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Update ",n.jsx(e.code,{children:"config.types.ts"}),":"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`export interface AppConfig {
  defaultCacheTTL: number;
  apiBaseUrl: string; // New key
}
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsxs(e.li,{children:["Update ",n.jsx(e.code,{children:"config.ts"}),":"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const DEFAULT_CONFIG: AppConfig = {
  defaultCacheTTL: 300000,
  apiBaseUrl: 'https://api.example.com',
};
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsxs(e.li,{children:["Add to ",n.jsx(e.code,{children:".env"}),":"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`VITE_API_BASE_URL=https://api.production.com
`})}),`
`,n.jsxs(e.ol,{start:"4",children:[`
`,n.jsx(e.li,{children:"Write tests:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`it('should parse API URL', () => {
  const config = buildConfig({ VITE_API_BASE_URL: 'https://test.com' });
  expect(config.apiBaseUrl).toBe('https://test.com');
});
`})}),`
`,n.jsx(e.h2,{id:"testing",children:"Testing"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn test src/utils/config.test.ts
`})}),`
`,n.jsx(e.p,{children:"Coverage includes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Default values"}),`
`,n.jsx(e.li,{children:"Env var parsing"}),`
`,n.jsx(e.li,{children:"Invalid value handling"}),`
`,n.jsx(e.li,{children:"Type validation"}),`
`,n.jsx(e.li,{children:"Cache behavior"}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"getCachedConfig()"})," in production"]}),`
`,n.jsxs(e.li,{children:["Prefix all env vars with ",n.jsx(e.code,{children:"VITE_"})]}),`
`,n.jsx(e.li,{children:"Provide defaults for optional config"}),`
`,n.jsx(e.li,{children:"Use relative paths for imports"}),`
`,n.jsx(e.li,{children:"Check server terminal for warnings (not browser console)"}),`
`]}),`
`,n.jsx(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Config not updating"}),": Restart dev server after changing ",n.jsx(e.code,{children:".env"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Import errors"}),": Use relative paths (",n.jsx(e.code,{children:"../utils/config"})," or ",n.jsx(e.code,{children:"../../utils/config"}),")"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Warnings not visible"}),": Check ",n.jsx(e.strong,{children:"server terminal"})," where ",n.jsx(e.code,{children:"yarn dev"})," runs, not browser console (F12)"]}),`
`,n.jsx(e.h2,{id:"related",children:"Related"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://vitejs.dev/guide/env-and-mode.html",rel:"nofollow",children:"Vite Environment Variables"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://docs.astro.build/en/guides/environment-variables/",rel:"nofollow",children:"Astro Environment Variables"})}),`
`]})]})}function t(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{t as default};
