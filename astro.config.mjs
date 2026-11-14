import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import dotenv from 'dotenv';

if (process.env.ENV !== 'production') {
  dotenv.config();
}

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4321,
    allowedHosts: [
      'leetcode-spa-production.up.railway.app',
      process.env.RAILWAY_PUBLIC_DOMAIN,
    ].filter(Boolean),
  },
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4321,
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
  vite: {
    optimizeDeps: {
      include: [
        '@mui/material',
        '@mui/icons-material',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/cache',
      ],
    },
    ssr: {
      noExternal: [
        '@mui/material',
        '@mui/icons-material',
        '@mui/system',
        '@mui/base',
        '@mui/utils',
      ],
    },
  },
});
