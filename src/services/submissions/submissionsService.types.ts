import type { AllowedLanguage, ExecutionStatus } from './submissionsService.constants';
import type { ApiResponse } from '../api/apiClient.types';

export interface TestCase {
  input: string;
  expectedOutput: string;
}

export interface RunPayload {
  problemId: number;
  language: AllowedLanguage;
  code: string;
  testCases?: TestCase[];
}

export interface SubmitPayload {
  problemId: number;
  language: AllowedLanguage;
  code: string;
}

export interface SubmissionFilters {
  page?: number;
  limit?: number;
  problemId?: number;
  language?: AllowedLanguage;
  status?: ExecutionStatus;
}

export interface TestResult {
  input: string;
  expectedOutput: string;
  actualOutput: string;
  passed: boolean;
  runtime?: number;
}

export interface ExecutionResult {
  status: ExecutionStatus;
  runtime?: number;
  memory?: number;
  testResults: TestResult[];
  stderr?: string;
  stdout?: string;
}

export interface Submission extends ExecutionResult {
  id: string;
  problemId: number;
  language: AllowedLanguage;
  code: string;
  submittedAt: string;
  totalTests: number;
  passedTests: number;
}

export interface SubmissionListResponse {
  items: Submission[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface QueuedSubmissionResponse {
  submissionId: string;
  status: ExecutionStatus.PENDING | ExecutionStatus.RUNNING;
}

export type RunResponse = ApiResponse<ExecutionResult> | ApiResponse<QueuedSubmissionResponse>;
export type SubmitResponse = ApiResponse<Submission> | ApiResponse<QueuedSubmissionResponse>;
