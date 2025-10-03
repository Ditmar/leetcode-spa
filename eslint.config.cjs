// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

const js = require('@eslint/js');
const astro = require('eslint-plugin-astro');
const tsParser = require('@typescript-eslint/parser');
const ts = require('@typescript-eslint/eslint-plugin');
const importPlugin = require('eslint-plugin-import');
const prettierPlugin = require('eslint-plugin-prettier');
const prettier = require('eslint-config-prettier');

module.exports = [
  { ignores: ['dist/', '.astro/', 'node_modules/', 'eslint.config.cjs', 'astro.config.mjs'] },
  js.configs.recommended,

  // Reglas "Airbnb-like" para JS (sin formato; Prettier se encarga del estilo)
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
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/prefer-default-export': 'off',

      // Calidad general (no de formato)
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'no-unused-vars': 'off', // lo maneja TS en archivos TS
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
      '@typescript-eslint/quotes': [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: false },
      ],
      'import/no-duplicates': 'error',
      'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
      "no-console": "error",
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Preferir reglas de TS sobre las base
      'no-unused-vars': 'off',
      // '@typescript-eslint/no-shadow': 'error', // activar si lo necesitás
      // Ajustes comunes de Airbnb (opcionales)
      // 'no-plusplus': 'off',
      // 'no-underscore-dangle': 'off',
      // 'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['acc', 'e', 'ctx', 'req', 'res', 'state'] }],
    },
  },
  ...astro.configs['flat/recommended'],
  prettier,
];
