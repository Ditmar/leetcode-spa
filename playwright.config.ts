import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',
  timeout: 60000,
  retries: process.env.CI ? 2 : 0,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  outputDir: 'test-results',

  use: {
    baseURL: process.env.TARGET_STORYBOOK_URL ?? 'https://ditmar.github.io/leetcode-spa',

    headless: true,
    actionTimeout: 15000,
    navigationTimeout: 30000,
    viewport: {
      width: 1440,
      height: 900,
    },

    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],

        viewport: {
          width: 1440,
          height: 900,
        },
      },
    },
  ],
});
