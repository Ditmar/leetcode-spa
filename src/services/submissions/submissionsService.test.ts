import { beforeEach, describe, expect, it, vi } from 'vitest';

import { apiClient } from '../api/apiClient';

import { submissionsService } from './submissionsService';
import {
  ExecutionStatus,
  MAX_POLL_ATTEMPTS,
  MAX_POLLING_INTERVAL_MS,
  POLLING_BACKOFF_STEP_MS,
  POLLING_INTERVAL_MS,
} from './submissionsService.constants';

vi.mock('../api/apiClient', () => ({
  apiClient: {
    get: vi.fn(),
    post: vi.fn(),
  },
}));

describe('submissionsService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should execute run successfully', async () => {
    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        status: ExecutionStatus.ACCEPTED,
        runtime: 10,
        memory: 1000,
        testResults: [],
      },
    });

    const result = await submissionsService.run({
      problemId: 1,
      language: 'javascript',
      code: 'console.log("hello")',
    });

    expect(result.status).toBe(ExecutionStatus.ACCEPTED);
    expect(apiClient.post).toHaveBeenCalledWith(
      '/submissions/run',
      expect.objectContaining({
        code: 'console.log("hello")',
        language: 'javascript',
        problemId: 1,
      }),
      { signal: undefined }
    );
  });

  it('should submit successfully without polling', async () => {
    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        id: 'sub_1',
        status: ExecutionStatus.ACCEPTED,
        runtime: 10,
        memory: 1000,
        testResults: [],
        language: 'javascript',
        code: 'test',
        problemId: 1,
        submittedAt: new Date().toISOString(),
        totalTests: 10,
        passedTests: 10,
      },
    });

    const result = await submissionsService.submit({
      problemId: 1,
      language: 'javascript',
      code: 'console.log("hello")',
    });

    expect(result.status).toBe(ExecutionStatus.ACCEPTED);
    expect(apiClient.get).not.toHaveBeenCalled();
  });

  it('should resolve queued submission polling', async () => {
    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        submissionId: 'sub_123',
        status: ExecutionStatus.PENDING,
      },
    });

    vi.mocked(apiClient.get).mockResolvedValue({
      data: {
        id: 'sub_123',
        status: ExecutionStatus.ACCEPTED,
        runtime: 12,
        memory: 2000,
        testResults: [],
        language: 'javascript',
        code: 'test',
        problemId: 1,
        submittedAt: new Date().toISOString(),
        totalTests: 10,
        passedTests: 10,
      },
    });

    const result = await submissionsService.submit({
      problemId: 1,
      language: 'javascript',
      code: 'console.log("test")',
    });

    expect(result.status).toBe(ExecutionStatus.ACCEPTED);
    expect(apiClient.get).toHaveBeenCalledWith('/submissions/sub_123', { signal: undefined });
  });

  it('should throw timeout error when polling exceeds max attempts with backoff', async () => {
    vi.useFakeTimers();

    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        submissionId: 'sub_timeout',
        status: ExecutionStatus.PENDING,
      },
    });

    vi.mocked(apiClient.get).mockResolvedValue({
      data: {
        id: 'sub_timeout',
        status: ExecutionStatus.PENDING,
        runtime: 0,
        memory: 0,
        testResults: [],
        language: 'javascript',
        code: 'test',
        problemId: 1,
        submittedAt: new Date().toISOString(),
        totalTests: 10,
        passedTests: 0,
      },
    });

    const expectation = expect(
      submissionsService.submit({
        problemId: 1,
        language: 'javascript',
        code: 'while(true){}',
      })
    ).rejects.toMatchObject({
      code: 'EXECUTION_TIMEOUT',
      status: 408,
    });

    // Advance fake timers through all growing intervals
    let totalDelay = 0;
    for (let attempt = 0; attempt < MAX_POLL_ATTEMPTS - 1; attempt += 1) {
      totalDelay += Math.min(
        POLLING_INTERVAL_MS + attempt * POLLING_BACKOFF_STEP_MS,
        MAX_POLLING_INTERVAL_MS
      );
    }
    await vi.advanceTimersByTimeAsync(totalDelay + 1000);

    await expectation;
    vi.useRealTimers();
  });

  it('should map 401 ApiError to SubmissionServiceError with status 401', async () => {
    vi.mocked(apiClient.post).mockRejectedValue({
      status: 401,
      code: 'UNAUTHORIZED',
      message: 'Authentication token is required',
    });

    await expect(
      submissionsService.run({
        problemId: 1,
        language: 'javascript',
        code: 'return 1;',
      })
    ).rejects.toMatchObject({
      status: 401,
      code: 'UNAUTHORIZED',
      message: 'Authentication token is required',
    });
  });

  it('should map 429 ApiError to SubmissionServiceError with status 429', async () => {
    vi.mocked(apiClient.post).mockRejectedValue({
      status: 429,
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many submissions, slow down',
    });

    await expect(
      submissionsService.submit({
        problemId: 1,
        language: 'javascript',
        code: 'return 1;',
      })
    ).rejects.toMatchObject({
      status: 429,
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many submissions, slow down',
    });
  });

  it('should map aborted in-flight request to SubmissionServiceError with status 0 and code ABORTED', async () => {
    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        submissionId: 'sub_abort_flight',
        status: ExecutionStatus.PENDING,
      },
    });

    // apiClient returns this exact object when a request is aborted
    vi.mocked(apiClient.get).mockRejectedValue({
      status: 0,
      code: 'UNKNOWN_ERROR',
      message: 'Request was aborted',
    });

    await expect(
      submissionsService.submit({
        problemId: 1,
        language: 'javascript',
        code: 'return 1;',
      })
    ).rejects.toMatchObject({
      status: 0,
      code: 'ABORTED',
      message: 'Request was aborted',
    });
  });

  it('should preserve code formatting and leading spaces without trimming', async () => {
    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        status: ExecutionStatus.ACCEPTED,
        runtime: 1,
        memory: 1,
        testResults: [],
      },
    });

    const pythonIndentedCode = '    def solution():\n        return True\n';

    await submissionsService.run({
      problemId: 1,
      language: 'python',
      code: pythonIndentedCode,
    });

    expect(apiClient.post).toHaveBeenCalledWith(
      '/submissions/run',
      expect.objectContaining({
        code: pythonIndentedCode,
      }),
      expect.anything()
    );
  });

  it('should throw when code is empty without calling console.error', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(
      submissionsService.run({
        problemId: 1,
        language: 'javascript',
        code: '     \n\t  ',
      })
    ).rejects.toMatchObject({
      code: 'EMPTY_CODE',
      status: 400,
    });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });

  it('should throw when code exceeds 64KB without calling console.error', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const largeCode = 'a'.repeat(70 * 1024);

    await expect(
      submissionsService.run({
        problemId: 1,
        language: 'javascript',
        code: largeCode,
      })
    ).rejects.toMatchObject({
      code: 'CODE_TOO_LARGE',
      status: 400,
    });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });

  it('should throw on invalid language', async () => {
    await expect(
      submissionsService.run({
        problemId: 1,
        language: 'ruby' as never,
        code: 'puts "hello"',
      })
    ).rejects.toMatchObject({
      code: 'INVALID_LANGUAGE',
      status: 400,
    });
  });

  it('should stop polling immediately when signal is already aborted before polling', async () => {
    const controller = new AbortController();
    controller.abort();

    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        submissionId: 'sub_pre_aborted',
        status: ExecutionStatus.PENDING,
      },
    });

    await expect(
      submissionsService.submit(
        {
          problemId: 1,
          language: 'javascript',
          code: 'console.log("running");',
        },
        { signal: controller.signal }
      )
    ).rejects.toMatchObject({
      code: 'ABORTED',
      status: 0,
    });
  });

  it('should stop polling immediately when aborted while sleep is waiting', async () => {
    vi.useFakeTimers();
    const controller = new AbortController();

    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        submissionId: 'sub_abort_sleep',
        status: ExecutionStatus.PENDING,
      },
    });

    vi.mocked(apiClient.get).mockResolvedValue({
      data: {
        id: 'sub_abort_sleep',
        status: ExecutionStatus.PENDING,
        runtime: 0,
        memory: 0,
        testResults: [],
        language: 'javascript',
        code: 'test',
        problemId: 1,
        submittedAt: new Date().toISOString(),
        totalTests: 10,
        passedTests: 0,
      },
    });

    const promise = submissionsService.submit(
      {
        problemId: 1,
        language: 'javascript',
        code: 'console.log("running");',
      },
      { signal: controller.signal }
    );

    // Let the first poll resolve, entering sleep
    await vi.advanceTimersByTimeAsync(0);
    expect(apiClient.get).toHaveBeenCalledTimes(1);

    // Abort while sleep is waiting
    controller.abort();

    await expect(promise).rejects.toMatchObject({
      code: 'ABORTED',
      status: 0,
    });

    vi.useRealTimers();
  });

  it('should pass AbortSignal to apiClient in run and submit options', async () => {
    const controller = new AbortController();

    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        status: ExecutionStatus.ACCEPTED,
        runtime: 5,
        testResults: [],
      },
    });

    await submissionsService.run(
      {
        problemId: 1,
        language: 'javascript',
        code: 'console.log(1)',
      },
      controller.signal
    );

    expect(apiClient.post).toHaveBeenCalledWith('/submissions/run', expect.anything(), {
      signal: controller.signal,
    });

    await submissionsService.submit(
      {
        problemId: 1,
        language: 'javascript',
        code: 'console.log(2)',
      },
      { signal: controller.signal }
    );

    expect(apiClient.post).toHaveBeenCalledWith('/submissions', expect.anything(), {
      signal: controller.signal,
    });
  });

  it('should build filters correctly for getHistory', async () => {
    vi.mocked(apiClient.get).mockResolvedValue({
      data: {
        items: [],
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0,
      },
    });

    await submissionsService.getHistory({
      page: 1,
      limit: 10,
      problemId: 5,
      language: 'javascript',
      status: ExecutionStatus.ACCEPTED,
    });

    expect(apiClient.get).toHaveBeenCalledWith(
      '/submissions?page=1&limit=10&problemId=5&language=javascript&status=accepted',
      { signal: undefined }
    );
  });

  it('should get submission history with filters', async () => {
    vi.mocked(apiClient.get).mockResolvedValue({
      data: {
        items: [],
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0,
      },
    });

    const result = await submissionsService.getHistory({
      page: 1,
      language: 'javascript',
    });

    expect(result.page).toBe(1);
    expect(apiClient.get).toHaveBeenCalledWith('/submissions?page=1&language=javascript', {
      signal: undefined,
    });
  });

  it('should get submission by ID', async () => {
    vi.mocked(apiClient.get).mockResolvedValue({
      data: {
        id: 'sub_456',
        status: ExecutionStatus.ACCEPTED,
        testResults: [],
      },
    });

    const result = await submissionsService.getById('sub_456');

    expect(result.id).toBe('sub_456');
    expect(apiClient.get).toHaveBeenCalledWith('/submissions/sub_456', { signal: undefined });
  });
});
