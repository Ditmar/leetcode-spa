// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
// eslint.config.js
import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import ts from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/', 'eslint.config.js', 'astro.config.mjs'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { import: importPlugin, prettier: prettierPlugin },
    settings: {
      'import/resolver': {
        node: true,
        typescript: { alwaysTryTypes: true, project: ['./tsconfig.json'] },
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/no-duplicates': 'error',
      'import/extensions': ['error', 'ignorePackages', { js: 'never', mjs: 'never', jsx: 'never' }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/prefer-default-export': 'off',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'no-unused-vars': 'off',
    },
  },
  ...ts.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    },
    plugins: { '@typescript-eslint': ts, import: importPlugin, prettier: prettierPlugin },
    settings: {
      'import/resolver': {
        typescript: { alwaysTryTypes: true, project: ['./tsconfig.json'] },
        node: true,
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'import/no-unresolved': 'error',
      '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
      'import/no-duplicates': 'error',
      'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
      'no-console': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-unused-vars': 'off',
    },
  },
  ...astro.configs['flat/recommended'],
  prettier,
];