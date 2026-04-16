module.exports = [
  // ✅ Para archivos Astro
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: require('astro-eslint-parser'),
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: {
      astro: require('eslint-plugin-astro'),
    },
    rules: {},
  },

  // ✅ Para TypeScript y JS
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {},
  },
];