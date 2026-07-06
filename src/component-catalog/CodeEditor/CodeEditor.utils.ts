import { DEFAULT_CODE_TEMPLATES } from './CodeEditor.constants';

import type { ExecutionResult, Language } from './CodeEditor.types';

export const getCodeTemplate = (language: Language): string => {
  return DEFAULT_CODE_TEMPLATES[language];
};

export const createSuccessResult = (): ExecutionResult => ({
  status: 'success',
  runtimeMs: 24,
  memoryMb: 12.5,
  tests: [
    {
      id: '1',
      name: 'Test case 1',
      passed: true,
      expected: 'Hello World',
      received: 'Hello World',
    },
    {
      id: '2',
      name: 'Test case 2',
      passed: true,
      expected: 'Done',
      received: 'Done',
    },
  ],
});

export const createErrorResult = (): ExecutionResult => ({
  status: 'error',
  runtimeMs: 31,
  memoryMb: 14.2,
  errorMessage: 'Runtime error: unexpected token',
  tests: [
    {
      id: '1',
      name: 'Test case 1',
      passed: false,
      expected: 'Hello World',
      received: 'Error',
    },
  ],
});
