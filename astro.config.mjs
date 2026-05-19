import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@config': path.resolve(__dirname, 'src/utils/config.ts'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@components': path.resolve(__dirname, 'src/component-catalog'),
      },
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
