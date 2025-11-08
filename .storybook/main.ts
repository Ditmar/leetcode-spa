import type { StorybookConfig } from '@storybook/react-vite';

const shouldExcludeConsoleIO = process.env.CI || process.env.SKIP_CONSOLEIO;

const config: StorybookConfig = {
  stories: shouldExcludeConsoleIO 
    ? [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '!../src/components/ConsoleIO/ConsoleIO.docs.mdx'
      ]
    : [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
      ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
};

export default config;