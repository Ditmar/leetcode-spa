import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
  adapter: node({
    mode: 'http'
  }),
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
