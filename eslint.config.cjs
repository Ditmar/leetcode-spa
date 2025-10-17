// ESLint configuration for React + TypeScript + Vite project (simplified)
const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const ts = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');
const prettier = require('eslint-config-prettier');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');

module.exports = [
  { 
    ignores: [
      'dist/',
      'node_modules/',
      'eslint.config.cjs',
      'storybook-static/',
      '.storybook/',
      'coverage/',
      '*.config.js',
      '*.config.ts',
      '*.config.mjs',
      'astro.config.mjs',
    ] 
  },
  js.configs.recommended,

  // JavaScript files
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { 
      prettier: prettierPlugin 
    },
    rules: {
      'prettier/prettier': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'no-unused-vars': 'warn',
    },
  },

  // TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { 
        ecmaVersion: 'latest', 
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        React: 'readonly',
        window: 'readonly',
        document: 'readonly',
        global: 'readonly',
        HTMLElement: 'readonly',
      }
    },
    plugins: { 
      '@typescript-eslint': ts, 
      prettier: prettierPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/quotes': [
        'error',
        'single',
        { 
          avoidEscape: true, 
          allowTemplateLiterals: false 
        },
      ],
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { 
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-undef': 'off', // TypeScript handles this
      
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  // Storybook files - more lenient rules
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },

  // Test files - more lenient rules
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', '**/test-utils.{ts,tsx}', '**/setup.{ts,tsx}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },

  prettier,
];