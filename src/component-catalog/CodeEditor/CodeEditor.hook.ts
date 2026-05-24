import { useCallback, useEffect, useState } from 'react';

import { DEFAULT_FONT_SIZE, MAX_FONT_SIZE, MIN_FONT_SIZE } from './CodeEditor.constants';
import { createSuccessResult, getCodeTemplate } from './CodeEditor.utils';

import type { CodeEditorProps, ExecutionResult, Language } from './CodeEditor.types';

export const useCodeEditor = ({
  initialLanguage = 'javascript',
  initialCode,
  result,
  onRun,
  onSubmit,
  onReset,
}: CodeEditorProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [code, setCode] = useState(initialCode ?? getCodeTemplate(initialLanguage));
  const [executionResult, setExecutionResult] = useState<ExecutionResult | undefined>(result);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isOutputOpen, setIsOutputOpen] = useState(true);

  const isExecuting = isRunning || isSubmitting;

  const handleLanguageChange = useCallback((nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setCode(getCodeTemplate(nextLanguage));
  }, []);

  const handleRun = useCallback(async () => {
    setIsRunning(true);

    try {
      const response = await onRun?.(code, language);
      setExecutionResult(response ?? createSuccessResult());
    } finally {
      setIsRunning(false);
    }
  }, [code, language, onRun]);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);

    try {
      const response = await onSubmit?.(code, language);
      setExecutionResult(response ?? createSuccessResult());
    } finally {
      setIsSubmitting(false);
    }
  }, [code, language, onSubmit]);

  const handleReset = useCallback(() => {
    setCode(getCodeTemplate(language));
    setExecutionResult(undefined);
    onReset?.();
  }, [language, onReset]);

  const increaseFontSize = () => {
    setFontSize((current) => Math.min(current + 1, MAX_FONT_SIZE));
  };

  const decreaseFontSize = () => {
    setFontSize((current) => Math.max(current - 1, MIN_FONT_SIZE));
  };

  const toggleEditorTheme = () => {
    setIsDarkTheme((current) => !current);
  };

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
    language,
    code,
    executionResult,
    isRunning,
    isSubmitting,
    isExecuting,
    fontSize,
    isDarkTheme,
    isOutputOpen,
    setCode,
    setIsOutputOpen,
    handleLanguageChange,
    handleRun,
    handleSubmit,
    handleReset,
    increaseFontSize,
    decreaseFontSize,
    toggleEditorTheme,
  };
};
