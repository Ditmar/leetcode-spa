export type Language = 'python' | 'javascript' | 'typescript' | 'java' | 'cpp';

export interface TestCaseResult {
  id: string;
  name: string;
  passed: boolean;
  expected?: string;
  received?: string;
}

export interface ExecutionResult {
  status: 'idle' | 'success' | 'error';
  runtimeMs?: number;
  memoryMb?: number;
  errorMessage?: string;
  tests: TestCaseResult[];
}

export interface CodeEditorProps {
  initialLanguage?: Language;
  initialCode?: string;
  result?: ExecutionResult;
  isRunning?: boolean;
  isSubmitting?: boolean;
  onRun?: (code: string, language: Language) => Promise<ExecutionResult> | ExecutionResult;
  onSubmit?: (code: string, language: Language) => Promise<ExecutionResult> | ExecutionResult;
  onReset?: () => void;
}
