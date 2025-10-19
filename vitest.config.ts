import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

const reactPlugin = react() as unknown as Plugin;

export default defineConfig({
  plugins: [reactPlugin],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      'src/**/*.stories.{js,ts,jsx,tsx}',
      'node_modules/**',
      'dist/**',
      '.storybook/**',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'src/**/*.stories.{ts,tsx}',
        'src/**/*.types.ts',
        'src/**/*.constants.ts',
        'src/test/**',
        '**/*.config.{js,ts}',
      ],
    },
  },
});