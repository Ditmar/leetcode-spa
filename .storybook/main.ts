import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
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

// Excluir ConsoleIO manualmente
// Handle both array and function forms of PresetValue<StoriesEntry[]>
if (Array.isArray(config.stories)) {
  config.stories = config.stories.filter(pattern =>
    typeof pattern === 'string' && !pattern.includes('ConsoleIO')
  );
} else if (typeof config.stories === 'function') {
  const originalStories = config.stories;
  config.stories = async (entry, options) => {
    const resolved = await (originalStories as any)(entry, options);
    return (Array.isArray(resolved) ? resolved : []).filter(pattern =>
      typeof pattern === 'string' && !pattern.includes('ConsoleIO')
    );
  };
}

export default config;