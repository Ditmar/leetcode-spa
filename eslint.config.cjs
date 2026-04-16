const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const astroParser = require('astro-eslint-parser');
const astroPlugin = require('eslint-plugin-astro');

module.exports = [
  {
    ignores: ['node_modules'],
  },

  // ✅ TypeScript
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'prettier/prettier': 'off',
      'import/no-unresolved': 'off',
    },
  },

  // ✅ ASTRO (ESTO SOLUCIONA TU ERROR)
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
    },
    plugins: {
      astro: astroPlugin,
    },
    rules: {},
  },
];