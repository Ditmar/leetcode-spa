import { beforeEach, describe, expect, it, vi } from 'vitest';

import { apiClient } from '../api/apiClient';

import { submissionsService } from './submissionsService';
import {
  ExecutionStatus,
  POLLING_INTERVAL_MS,
  MAX_POLL_ATTEMPTS,
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
    expect(apiClient.get).toHaveBeenCalled();
  });

  it('should throw timeout error when polling exceeds max attempts', async () => {
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
    });

    const totalPollingTimeMs = POLLING_INTERVAL_MS * MAX_POLL_ATTEMPTS;
    await vi.advanceTimersByTimeAsync(totalPollingTimeMs);

    await expectation;
    vi.useRealTimers();
  });

  it('should build filters correctly', async () => {
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
      '/submissions?page=1&limit=10&problemId=5&language=javascript&status=accepted'
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
    expect(apiClient.get).toHaveBeenCalledWith('/submissions?page=1&language=javascript');
  });

  it('should throw when code exceeds 64KB', async () => {
    const largeCode = 'a'.repeat(70 * 1024);

    await expect(
      submissionsService.run({
        problemId: 1,
        language: 'javascript',
        code: largeCode,
      })
    ).rejects.toMatchObject({
      code: 'CODE_TOO_LARGE',
    });
  });

  it('should throw when code is empty', async () => {
    await expect(
      submissionsService.run({
        problemId: 1,
        language: 'javascript',
        code: '     ',
      })
    ).rejects.toMatchObject({
      code: 'EMPTY_CODE',
    });
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
    });
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

  it('should trim code before sending', async () => {
    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        status: ExecutionStatus.ACCEPTED,
        runtime: 1,
        memory: 1,
        testResults: [],
      },
    });

    await submissionsService.run({
      problemId: 1,
      language: 'javascript',
      code: '   console.log("hi");   ',
    });

    expect(apiClient.post).toHaveBeenCalledWith(
      '/submissions/run',
      expect.objectContaining({
        code: 'console.log("hi");',
      })
    );
  });
});
