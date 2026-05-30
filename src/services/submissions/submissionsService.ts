import { apiClient } from '../api/apiClient';
import {
  ALLOWED_LANGUAGES,
  ExecutionStatus,
  MAX_CODE_SIZE_BYTES,
  MAX_POLL_ATTEMPTS,
  POLLING_INTERVAL_MS,
} from './submissionsService.constants';
import type {
  ExecutionResult,
  QueuedSubmissionResponse,
  RunPayload,
  Submission,
  SubmissionFilters,
  SubmissionListResponse,
  SubmitPayload,
} from './submissionsService.types';
import type { ApiError } from '../api/apiClient.types';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function validateLanguage(language: string): void {
  if (!ALLOWED_LANGUAGES.includes(language as never)) {
    throw {
      status: 400,
      code: 'INVALID_LANGUAGE',
      message: `Unsupported language: ${language}`,
    } satisfies ApiError;
  }
}

function sanitizeCode(code: string): string {
  const sanitized = code.trim();
  const size = new TextEncoder().encode(sanitized).length;
  if (size > MAX_CODE_SIZE_BYTES) {
    throw {
      status: 400,
      code: 'CODE_TOO_LARGE',
      message: 'Code exceeds maximum allowed size of 64 KB',
    } satisfies ApiError;
  }
  return sanitized;
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

async function pollSubmission(submissionId: string): Promise<Submission> {
  for (let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt += 1) {
    const response = await apiClient.get<Submission>(`/submissions/${submissionId}`);
    const submission = response.data;
    const isFinished =
      submission.status !== ExecutionStatus.PENDING &&
      submission.status !== ExecutionStatus.RUNNING;
    
    if (isFinished) {
      return submission;
    }
    
    if (attempt < MAX_POLL_ATTEMPTS - 1) {
      await sleep(POLLING_INTERVAL_MS);
    }
  }
  throw {
    status: 408,
    code: 'EXECUTION_TIMEOUT',
    message: 'Execution polling timeout exceeded',
  } satisfies ApiError;
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

export const submissionsService = {
  async run(payload: RunPayload): Promise<ExecutionResult> {
    validateLanguage(payload.language);
    const sanitizedPayload: RunPayload = {
      ...payload,
      code: sanitizeCode(payload.code),
    };
    const response = await apiClient.post<ExecutionResult | QueuedSubmissionResponse>(
      '/submissions/run',
      sanitizedPayload
    );
    const data = response.data;
    if (isQueuedResponse(data)) {
      const submission = await pollSubmission(data.submissionId);
      return submissionToExecutionResult(submission);
    }
    return data;
  },

  async submit(payload: SubmitPayload): Promise<Submission> {
    validateLanguage(payload.language);
    const sanitizedPayload: SubmitPayload = {
      ...payload,
      code: sanitizeCode(payload.code),
    };
    const response = await apiClient.post<Submission | QueuedSubmissionResponse>(
      '/submissions',
      sanitizedPayload
    );
    const data = response.data;
    if (isQueuedResponse(data)) {
      return pollSubmission(data.submissionId);
    }
    return data;
  },

  async getHistory(filters?: SubmissionFilters): Promise<SubmissionListResponse> {
    const query = buildQueryParams(filters);
    const response = await apiClient.get<SubmissionListResponse>(`/submissions${query}`);
    return response.data;
  },

  async getById(id: string): Promise<Submission> {
    const response = await apiClient.get<Submission>(`/submissions/${id}`);
    return response.data;
  },
};