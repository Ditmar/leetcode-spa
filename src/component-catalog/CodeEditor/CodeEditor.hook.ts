import { useCallback, useEffect, useReducer } from 'react';

import { createSuccessResult, getCodeTemplate } from './CodeEditor.utils';

import type { CodeEditorProps, ExecutionResult, Language } from './CodeEditor.types';

interface CodeEditorState {
  language: Language;
  code: string;
  executionResult?: ExecutionResult;
  isRunning: boolean;
  isSubmitting: boolean;
  isOutputOpen: boolean;
}

type CodeEditorAction =
  | { type: 'CHANGE_LANGUAGE'; language: Language }
  | { type: 'SET_CODE'; code: string }
  | { type: 'RUN_START' }
  | { type: 'RUN_FINISH'; result: ExecutionResult }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_FINISH'; result: ExecutionResult }
  | { type: 'RESET'; language: Language }
  | { type: 'SET_OUTPUT_OPEN'; isOpen: boolean };

const codeEditorReducer = (state: CodeEditorState, action: CodeEditorAction): CodeEditorState => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: action.language,
        code: getCodeTemplate(action.language),
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
        code: getCodeTemplate(action.language),
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
  initialLanguage = 'javascript',
  initialCode,
  result,
  onRun,
  onSubmit,
  onReset,
}: CodeEditorProps) => {
  const [state, dispatch] = useReducer(codeEditorReducer, {
    language: initialLanguage,
    code: initialCode ?? getCodeTemplate(initialLanguage),
    executionResult: result,
    isRunning: false,
    isSubmitting: false,
    isOutputOpen: true,
  });

  const isExecuting = state.isRunning || state.isSubmitting;

  const handleLanguageChange = useCallback((nextLanguage: Language) => {
    dispatch({
      type: 'CHANGE_LANGUAGE',
      language: nextLanguage,
    });
  }, []);

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
      const response = await onRun?.(state.code, state.language);

      dispatch({
        type: 'RUN_FINISH',
        result: response ?? createSuccessResult(),
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
  }, [onRun, state.code, state.language]);

  const handleSubmit = useCallback(async () => {
    dispatch({ type: 'SUBMIT_START' });

    try {
      const response = await onSubmit?.(state.code, state.language);

      dispatch({
        type: 'SUBMIT_FINISH',
        result: response ?? createSuccessResult(),
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
  }, [onSubmit, state.code, state.language]);

  const handleReset = useCallback(() => {
    dispatch({
      type: 'RESET',
      language: state.language,
    });

    onReset?.();
  }, [onReset, state.language]);

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
