import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    react({
      experimentalReactChildren: true,
    })
  ],
  vite: {
    optimizeDeps: {
      include: [
        '@mui/material',
        '@mui/icons-material',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/cache'
      ],
    },
    ssr: {
      noExternal: [
        '@mui/material',
        '@mui/icons-material',
        '@mui/system',
        '@mui/base',
        '@mui/utils'
      ],
    },
  },
});
