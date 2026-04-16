// eslint.config.cjs

const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: ['node_modules'],

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
      //  errores
      'prettier/prettier': 'off',
      'import/no-unresolved': 'off',

      // opcional
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];