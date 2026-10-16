import { apiClient } from '../api/apiClient';

import {
  ALLOWED_LANGUAGES,
  ExecutionStatus,
  MAX_CODE_SIZE_BYTES,
  MAX_POLL_ATTEMPTS,
  MAX_POLLING_INTERVAL_MS,
  POLLING_BACKOFF_STEP_MS,
  POLLING_INTERVAL_MS,
  type AllowedLanguage,
} from './submissionsService.constants';
import { SubmissionServiceError } from './submissionsService.errors';

import type {
  ExecutionResult,
  QueuedSubmissionResponse,
  RunPayload,
  Submission,
  SubmissionFilters,
  SubmissionListResponse,
  SubmissionRequestOptions,
  SubmitPayload,
} from './submissionsService.types';

function isApiErrorLike(
  error: unknown
): error is { status: number; code?: string; message?: string } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as { status: unknown }).status === 'number'
  );
}

function handleSubmissionError(error: unknown): never {
  if (error instanceof SubmissionServiceError) {
    throw error;
  }

  if (
    (error instanceof DOMException && error.name === 'AbortError') ||
    (typeof error === 'object' &&
      error !== null &&
      'name' in error &&
      (error as { name: unknown }).name === 'AbortError')
  ) {
    throw new SubmissionServiceError(0, 'ABORTED', 'Request was aborted');
  }

  if (isApiErrorLike(error)) {
    const isAborted = error.status === 0 || error.code === 'ABORTED';
    throw new SubmissionServiceError(
      error.status,
      error.code || (isAborted ? 'ABORTED' : 'SUBMISSION_ERROR'),
      error.message || 'Submission service error'
    );
  }

  if (typeof error === 'object' && error !== null && 'response' in error) {
    const response = (
      error as {
        response?: {
          status?: number;
          data?: {
            code?: string;
            message?: string;
          };
        };
      }
    ).response;

    throw new SubmissionServiceError(
      response?.status ?? 500,
      response?.data?.code ?? 'SUBMISSION_ERROR',
      response?.data?.message ?? 'Unexpected submission service error'
    );
  }

  if (error instanceof Error) {
    throw new SubmissionServiceError(500, 'UNKNOWN_ERROR', error.message);
  }

  throw new SubmissionServiceError(500, 'UNKNOWN_ERROR', 'An unexpected error occurred');
}

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new SubmissionServiceError(0, 'ABORTED', 'Request was aborted'));
      return;
    }

    const timer = setTimeout(() => {
      if (signal) {
        signal.removeEventListener('abort', onAbort);
      }
      resolve();
    }, ms);

    const onAbort = () => {
      clearTimeout(timer);
      reject(new SubmissionServiceError(0, 'ABORTED', 'Request was aborted'));
    };

    if (signal) {
      signal.addEventListener('abort', onAbort, { once: true });
    }
  });
}

function validateLanguage(language: string): asserts language is AllowedLanguage {
  if (!ALLOWED_LANGUAGES.includes(language as AllowedLanguage)) {
    throw new SubmissionServiceError(400, 'INVALID_LANGUAGE', `Unsupported language: ${language}`);
  }
}

function sanitizeCode(code: string): string {
  if (typeof code !== 'string' || code.trim().length === 0) {
    throw new SubmissionServiceError(400, 'EMPTY_CODE', 'Code cannot be empty');
  }

  const size = new TextEncoder().encode(code).length;

  if (size > MAX_CODE_SIZE_BYTES) {
    throw new SubmissionServiceError(
      400,
      'CODE_TOO_LARGE',
      'Code exceeds maximum allowed size of 64 KB'
    );
  }

  return code;
}

function isQueuedResponse(data: unknown): data is QueuedSubmissionResponse {
  if (!data || typeof data !== 'object') {
    return false;
  }
  return 'submissionId' in data && 'status' in data;
}

function submissionToExecutionResult(submission: Submission): ExecutionResult {
  return {
    status: submission.status,
    runtime: submission.runtime,
    memory: submission.memory,
    testResults: submission.testResults,
    stderr: submission.stderr,
    stdout: submission.stdout,
  };
}

async function pollSubmission(submissionId: string, signal?: AbortSignal): Promise<Submission> {
  for (let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt += 1) {
    if (signal?.aborted) {
      throw new SubmissionServiceError(0, 'ABORTED', 'Request was aborted');
    }

    const response = await apiClient.get<Submission>(`/submissions/${submissionId}`, { signal });
    const submission = response.data;

    const isFinished =
      submission.status !== ExecutionStatus.PENDING &&
      submission.status !== ExecutionStatus.RUNNING;

    if (isFinished) {
      return submission;
    }

    if (attempt < MAX_POLL_ATTEMPTS - 1) {
      const delay = Math.min(
        POLLING_INTERVAL_MS + attempt * POLLING_BACKOFF_STEP_MS,
        MAX_POLLING_INTERVAL_MS
      );
      await sleep(delay, signal);
    }
  }

  throw new SubmissionServiceError(408, 'EXECUTION_TIMEOUT', 'Execution polling timeout exceeded');
}

function buildQueryParams(filters?: SubmissionFilters): string {
  if (!filters) {
    return '';
  }
  const params = new URLSearchParams();
  if (filters.page !== undefined) {
    params.set('page', String(filters.page));
  }
  if (filters.limit !== undefined) {
    params.set('limit', String(filters.limit));
  }
  if (filters.problemId !== undefined) {
    params.set('problemId', String(filters.problemId));
  }
  if (filters.language !== undefined) {
    params.set('language', filters.language);
  }
  if (filters.status !== undefined) {
    params.set('status', filters.status);
  }
  const query = params.toString();
  return query ? `?${query}` : '';
}

function extractSignal(options?: SubmissionRequestOptions | AbortSignal): AbortSignal | undefined {
  if (!options) return undefined;
  if (options instanceof AbortSignal) return options;
  return options.signal;
}

export const submissionsService = {
  async run(
    payload: RunPayload,
    options?: SubmissionRequestOptions | AbortSignal
  ): Promise<ExecutionResult> {
    try {
      validateLanguage(payload.language);

      const sanitizedCode = sanitizeCode(payload.code);
      const sanitizedPayload: RunPayload = {
        ...payload,
        code: sanitizedCode,
      };

      const signal = extractSignal(options);

      const response = await apiClient.post<ExecutionResult | QueuedSubmissionResponse>(
        '/submissions/run',
        sanitizedPayload,
        { signal }
      );

      const data = response.data;

      if (isQueuedResponse(data)) {
        const submission = await pollSubmission(data.submissionId, signal);
        return submissionToExecutionResult(submission);
      }

      return data;
    } catch (error) {
      return handleSubmissionError(error);
    }
  },

  async submit(
    payload: SubmitPayload,
    options?: SubmissionRequestOptions | AbortSignal
  ): Promise<Submission> {
    try {
      validateLanguage(payload.language);

      const sanitizedCode = sanitizeCode(payload.code);
      const sanitizedPayload: SubmitPayload = {
        ...payload,
        code: sanitizedCode,
      };

      const signal = extractSignal(options);

      const response = await apiClient.post<Submission | QueuedSubmissionResponse>(
        '/submissions',
        sanitizedPayload,
        { signal }
      );

      const data = response.data;

      if (isQueuedResponse(data)) {
        return await pollSubmission(data.submissionId, signal);
      }

      return data;
    } catch (error) {
      return handleSubmissionError(error);
    }
  },

  async getHistory(
    filters?: SubmissionFilters,
    options?: SubmissionRequestOptions | AbortSignal
  ): Promise<SubmissionListResponse> {
    try {
      const query = buildQueryParams(filters);
      const signal = extractSignal(options);

      const response = await apiClient.get<SubmissionListResponse>(`/submissions${query}`, {
        signal,
      });

      return response.data;
    } catch (error) {
      return handleSubmissionError(error);
    }
  },

  async getById(id: string, options?: SubmissionRequestOptions | AbortSignal): Promise<Submission> {
    try {
      const signal = extractSignal(options);
      const response = await apiClient.get<Submission>(`/submissions/${id}`, { signal });

      return response.data;
    } catch (error) {
      return handleSubmissionError(error);
    }
  },
};
