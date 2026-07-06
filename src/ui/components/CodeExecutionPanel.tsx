import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { CodeEditor } from '../../component-catalog/CodeEditor/CodeEditor';
import { submissionsService } from '../../services/submissions/submissionsService';
import { ExecutionStatus } from '../../services/submissions/submissionsService.constants';

import type {
  ExecutionResult as EditorExecutionResult,
  Language,
} from '../../component-catalog/CodeEditor/CodeEditor.types';
import type { AllowedLanguage } from '../../services/submissions/submissionsService.constants';
import type {
  ExecutionResult as SubmissionExecutionResult,
  Submission,
  TestCase,
} from '../../services/submissions/submissionsService.types';

const DEFAULT_PROBLEM_ID = 1;

const DEFAULT_RUN_TEST_CASES: TestCase[] = [
  {
    input: 'nums = [2,7,11,15], target = 9',
    expectedOutput: '[0,1]',
  },
  {
    input: 'nums = [3,2,4], target = 6',
    expectedOutput: '[1,2]',
  },
];

const languageMap: Record<Language, AllowedLanguage> = {
  python: 'python',
  javascript: 'javascript',
  typescript: 'javascript',
  java: 'java',
  cpp: 'cpp',
};

const formatStatus = (status: SubmissionExecutionResult['status']): string => {
  return status
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const getErrorMessage = (result: SubmissionExecutionResult | Submission): string | undefined => {
  if (result.stderr) {
    return result.stderr;
  }

  if (result.status === ExecutionStatus.ACCEPTED) {
    return undefined;
  }

  return formatStatus(result.status);
};

export const mapSubmissionResultToEditorResult = (
  result: SubmissionExecutionResult | Submission
): EditorExecutionResult => {
  return {
    status: result.status === ExecutionStatus.ACCEPTED ? 'success' : 'error',
    runtimeMs: result.runtime,
    memoryMb: result.memory,
    errorMessage: getErrorMessage(result),
    tests: result.testResults.map((test, index) => ({
      id: `${index + 1}`,
      name: `Case ${index + 1}`,
      passed: test.passed,
      expected: test.expectedOutput,
      received: test.actualOutput,
    })),
  };
};

interface CodeExecutionPanelProps {
  problemId?: number;
  testCases?: TestCase[];
}

export default function CodeExecutionPanel({
  problemId = DEFAULT_PROBLEM_ID,
  testCases = DEFAULT_RUN_TEST_CASES,
}: CodeExecutionPanelProps) {
  const handleRun = async (code: string, language: Language): Promise<EditorExecutionResult> => {
    const result = await submissionsService.run({
      problemId,
      language: languageMap[language],
      code,
      testCases,
    });

    return mapSubmissionResultToEditorResult(result);
  };

  const handleSubmit = async (code: string, language: Language): Promise<EditorExecutionResult> => {
    const result = await submissionsService.submit({
      problemId,
      language: languageMap[language],
      code,
    });

    return mapSubmissionResultToEditorResult(result);
  };

  return (
    <Stack
      component="section"
      aria-labelledby="code-execution-title"
      sx={{
        minHeight: 'calc(100vh - 64px)',
        bgcolor: 'var(--background)',
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 3 },
          py: 1.5,
          borderBottom: 1,
          borderColor: 'var(--border)',
          bgcolor: 'var(--card)',
        }}
      >
        <Typography id="code-execution-title" variant="h6" fontWeight={700}>
          Code Execution
        </Typography>
      </Box>

      <Box sx={{ flex: 1, minHeight: 640 }}>
        <CodeEditor initialLanguage="typescript" onRun={handleRun} onSubmit={handleSubmit} />
      </Box>
    </Stack>
  );
}
