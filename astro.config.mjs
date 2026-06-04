import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import dotenv from 'dotenv';

if (process.env.ENV !== 'production') {
  dotenv.config();
}

export default defineConfig({
  output: 'static',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4321,
  },
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4321,
    allowedHosts: [process.env.RAILWAY_PUBLIC_DOMAIN || 'localhost'],
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
  vite: {
    preview: {
      allowedHosts: [process.env.RAILWAY_PUBLIC_DOMAIN || 'leetcode-spa-production.up.railway.app'],
    },
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
