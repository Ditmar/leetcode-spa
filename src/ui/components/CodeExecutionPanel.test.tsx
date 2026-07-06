import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { submissionsService } from '../../services/submissions/submissionsService';
import { ExecutionStatus } from '../../services/submissions/submissionsService.constants';

import CodeExecutionPanel, { mapSubmissionResultToEditorResult } from './CodeExecutionPanel';

import type { CodeEditorProps } from '../../component-catalog/CodeEditor/CodeEditor.types';

vi.mock('../../component-catalog/CodeEditor/CodeEditor', () => ({
  CodeEditor: ({ onRun, onSubmit }: CodeEditorProps) => (
    <div>
      <button type="button" onClick={() => void onRun?.('const answer = 42;', 'typescript')}>
        Run
      </button>
      <button type="button" onClick={() => void onSubmit?.('const answer = 42;', 'python')}>
        Submit
      </button>
    </div>
  ),
}));

vi.mock('../../services/submissions/submissionsService', () => ({
  submissionsService: {
    run: vi.fn(),
    submit: vi.fn(),
  },
}));

const successfulResult = {
  status: ExecutionStatus.ACCEPTED,
  runtime: 32,
  memory: 12.5,
  stdout: 'ok',
  testResults: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      expectedOutput: '[0,1]',
      actualOutput: '[0,1]',
      passed: true,
    },
  ],
};

describe('CodeExecutionPanel', () => {
  it('runs code through submissionsService.run using sample test cases', async () => {
    vi.mocked(submissionsService.run).mockResolvedValue(successfulResult);

    render(<CodeExecutionPanel problemId={99} />);

    fireEvent.click(screen.getByRole('button', { name: 'Run' }));

    await waitFor(() => {
      expect(submissionsService.run).toHaveBeenCalledWith({
        problemId: 99,
        language: 'javascript',
        code: 'const answer = 42;',
        testCases: [
          {
            input: 'nums = [2,7,11,15], target = 9',
            expectedOutput: '[0,1]',
          },
          {
            input: 'nums = [3,2,4], target = 6',
            expectedOutput: '[1,2]',
          },
        ],
      });
    });
  });

  it('submits code through submissionsService.submit', async () => {
    vi.mocked(submissionsService.submit).mockResolvedValue({
      ...successfulResult,
      id: 'submission-1',
      problemId: 99,
      language: 'python',
      code: 'const answer = 42;',
      submittedAt: '2026-07-06T00:00:00.000Z',
      totalTests: 1,
      passedTests: 1,
    });

    render(<CodeExecutionPanel problemId={99} />);

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(submissionsService.submit).toHaveBeenCalledWith({
        problemId: 99,
        language: 'python',
        code: 'const answer = 42;',
      });
    });
  });

  it('maps pass/fail test results, runtime, memory and compile errors for CodeEditor', () => {
    const editorResult = mapSubmissionResultToEditorResult({
      status: ExecutionStatus.COMPILE_ERROR,
      runtime: 44,
      memory: 18,
      stderr: 'Compilation failed',
      testResults: [
        {
          input: '1 2',
          expectedOutput: '3',
          actualOutput: '2',
          passed: false,
        },
      ],
    });

    expect(editorResult).toEqual({
      status: 'error',
      runtimeMs: 44,
      memoryMb: 18,
      errorMessage: 'Compilation failed',
      tests: [
        {
          id: '1',
          name: 'Case 1',
          passed: false,
          expected: '3',
          received: '2',
        },
      ],
    });
  });
});
