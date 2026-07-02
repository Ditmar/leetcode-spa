import { useCallback, useEffect, useReducer } from 'react';

import { submissionsService } from '../../services/submissions/submissionsService';
import { ExecutionStatus } from '../../services/submissions/submissionsService.constants';

import { createSuccessResult, getCodeTemplate } from './CodeEditor.utils';

import type { CodeEditorProps, ExecutionResult, Language } from './CodeEditor.types';
import type { AllowedLanguage } from '../../services/submissions/submissionsService.constants';
import type {
  ExecutionResult as SubmissionExecutionResult,
  Submission,
} from '../../services/submissions/submissionsService.types';

interface CodeEditorState {
  language: Language;
  code: string;
  executionResult?: ExecutionResult;
  isRunning: boolean;
  isSubmitting: boolean;
  isOutputOpen: boolean;
}

type CodeEditorAction =
  | { type: 'CHANGE_LANGUAGE'; language: Language; code: string }
  | { type: 'SET_CODE'; code: string }
  | { type: 'RUN_START' }
  | { type: 'RUN_FINISH'; result: ExecutionResult }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_FINISH'; result: ExecutionResult }
  | { type: 'RESET'; language: Language; code: string }
  | { type: 'SET_OUTPUT_OPEN'; isOpen: boolean };

const getStarterCode = (
  problem: CodeEditorProps['problem'],
  language: Language,
  fallbackCode?: string
): string => {
  if (typeof problem?.starterCode === 'string') {
    return problem.starterCode;
  }

  return problem?.starterCode?.[language] ?? fallbackCode ?? getCodeTemplate(language);
};

const mapSubmissionResult = (result: SubmissionExecutionResult | Submission): ExecutionResult => ({
  status: result.status === ExecutionStatus.ACCEPTED ? 'success' : 'error',
  runtimeMs: result.runtime,
  memoryMb: result.memory,
  errorMessage: result.stderr,
  tests:
    result.testResults?.map((test, index) => ({
      id: String(index + 1),
      name: `Case ${index + 1}`,
      passed: test.passed,
      expected: test.expectedOutput,
      received: test.actualOutput,
    })) ?? [],
});

const codeEditorReducer = (state: CodeEditorState, action: CodeEditorAction): CodeEditorState => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: action.language,
        code: action.code,
      };

    case 'SET_CODE':
      return {
        ...state,
        code: action.code,
      };

    case 'RUN_START':
      return {
        ...state,
        isRunning: true,
      };

    case 'RUN_FINISH':
      return {
        ...state,
        isRunning: false,
        executionResult: action.result,
      };

    case 'SUBMIT_START':
      return {
        ...state,
        isSubmitting: true,
      };

    case 'SUBMIT_FINISH':
      return {
        ...state,
        isSubmitting: false,
        executionResult: action.result,
      };

    case 'RESET':
      return {
        ...state,
        language: action.language,
        code: action.code,
        executionResult: undefined,
      };

    case 'SET_OUTPUT_OPEN':
      return {
        ...state,
        isOutputOpen: action.isOpen,
      };

    default:
      return state;
  }
};

export const useCodeEditor = ({
  problem,
  defaultLanguage,
  initialLanguage,
  initialCode,
  result,
  onRun,
  onSubmit,
  onReset,
}: CodeEditorProps) => {
  const language = defaultLanguage ?? initialLanguage ?? 'javascript';

  const [state, dispatch] = useReducer(codeEditorReducer, {
    language,
    code: getStarterCode(problem, language, initialCode),
    executionResult: result,
    isRunning: false,
    isSubmitting: false,
    isOutputOpen: true,
  });

  const isExecuting = state.isRunning || state.isSubmitting;

  const handleLanguageChange = useCallback(
    (nextLanguage: Language) => {
      dispatch({
        type: 'CHANGE_LANGUAGE',
        language: nextLanguage,
        code: getStarterCode(problem, nextLanguage, initialCode),
      });
    },
    [problem, initialCode]
  );

  const setCode = useCallback((code: string) => {
    dispatch({
      type: 'SET_CODE',
      code,
    });
  }, []);

  const setIsOutputOpen = useCallback((isOpen: boolean) => {
    dispatch({
      type: 'SET_OUTPUT_OPEN',
      isOpen,
    });
  }, []);

  const handleRun = useCallback(async () => {
    dispatch({ type: 'RUN_START' });

    try {
      const response = onRun
        ? await onRun(state.code, state.language)
        : problem
          ? mapSubmissionResult(
              await submissionsService.run({
                problemId: problem.id,
                code: state.code,
                language: state.language as AllowedLanguage,
              })
            )
          : createSuccessResult();

      dispatch({
        type: 'RUN_FINISH',
        result: response,
      });
    } catch (error) {
      dispatch({
        type: 'RUN_FINISH',
        result: {
          status: 'error',
          errorMessage: error instanceof Error ? error.message : 'Unexpected execution error',
          tests: [],
        },
      });
    }
  }, [onRun, problem, state.code, state.language]);

  const handleSubmit = useCallback(async () => {
    dispatch({ type: 'SUBMIT_START' });

    try {
      const response = onSubmit
        ? await onSubmit(state.code, state.language)
        : problem
          ? mapSubmissionResult(
              await submissionsService.submit({
                problemId: problem.id,
                code: state.code,
                language: state.language as AllowedLanguage,
              })
            )
          : createSuccessResult();

      dispatch({
        type: 'SUBMIT_FINISH',
        result: response,
      });
    } catch (error) {
      dispatch({
        type: 'SUBMIT_FINISH',
        result: {
          status: 'error',
          errorMessage: error instanceof Error ? error.message : 'Unexpected submit error',
          tests: [],
        },
      });
    }
  }, [onSubmit, problem, state.code, state.language]);

  const handleReset = useCallback(() => {
    dispatch({
      type: 'RESET',
      language: state.language,
      code: getStarterCode(problem, state.language, initialCode),
    });

    onReset?.();
  }, [onReset, problem, initialCode, state.language]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'Enter') {
        event.preventDefault();
        void handleSubmit();
        return;
      }

      if (event.ctrlKey && event.key === 'Enter') {
        event.preventDefault();
        void handleRun();
      }
    };

    window.addEventListener('keydown', handleShortcut);

    return () => {
      window.removeEventListener('keydown', handleShortcut);
    };
  }, [handleRun, handleSubmit]);

  return {
    language: state.language,
    code: state.code,
    executionResult: state.executionResult,
    isRunning: state.isRunning,
    isSubmitting: state.isSubmitting,
    isExecuting,
    isOutputOpen: state.isOutputOpen,
    setCode,
    setIsOutputOpen,
    handleLanguageChange,
    handleRun,
    handleSubmit,
    handleReset,
  };
};
