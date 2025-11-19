import { useEffect, useMemo, useState } from 'react';

import { MOCK_TESTS } from './TestExecutionPage.constants';

import type {
  Question,
  TestDefinition,
  TestExecutionState,
  TestStatus,
  UseTestExecutionResult,
} from './TestExecutionPage.types';

function createInitialState(test?: TestDefinition): TestExecutionState {
  return {
    currentIndex: 0,
    answers: {},
    remainingSeconds: test?.totalDurationSeconds ?? 0,
    status: test ? ('running' as TestStatus) : ('idle' as TestStatus),
    isSubmitting: false,
    error: undefined,
  };
}

async function mockSaveAnswersToApi(
  test: TestDefinition,
  answers: Record<string, string>
): Promise<void> {
  {
    await mockSaveAnswersToApi(test, answers);
  }
}

export function useTestExecution(testId: string): UseTestExecutionResult {
  const [test, setTest] = useState<TestDefinition | undefined>(undefined);
  const [state, setState] = useState<TestExecutionState>(createInitialState());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);

    const timeout = setTimeout(() => {
      const foundTest = MOCK_TESTS[testId];

      if (!foundTest) {
        setError('Test no encontrado');
        setIsLoading(false);
        setState(createInitialState());
        return;
      }

      setTest(foundTest);
      setState(createInitialState(foundTest));
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [testId]);

  const currentQuestion: Question | undefined = useMemo(() => {
    if (!test) return undefined;
    return test.questions[state.currentIndex];
  }, [test, state.currentIndex]);

  const canGoPrevious = state.currentIndex > 0;
  const canGoNext = !!test && state.currentIndex < test.questions.length - 1;
  const isLastQuestion = !!test && state.currentIndex === test.questions.length - 1;

  const handleSelectOption = (questionId: string, optionId: string) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: optionId,
      },
    }));
  };

  const handleCodeChange = (questionId: string, code: string) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: code,
      },
    }));
  };

  const goPrevious = () => {
    if (!canGoPrevious) return;
    setState((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex - 1,
    }));
  };

  const goNext = () => {
    if (!canGoNext) return;
    setState((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex + 1,
    }));
  };

  const handleTimeout = () => {
    setState((prev) => ({
      ...prev,
      status: 'expired',
      remainingSeconds: 0,
    }));
  };

  const handleSubmit = async () => {
    if (!test) return;

    setState((prev) => ({
      ...prev,
      isSubmitting: true,
      error: undefined,
    }));

    try {
      await mockSaveAnswersToApi(test, state.answers);
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        status: 'completed',
      }));
    } catch {
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: 'No se pudieron guardar las respuestas.',
      }));
    }
  };

  return {
    test,
    isLoading,
    error,
    state,
    currentQuestion,
    canGoNext,
    canGoPrevious,
    isLastQuestion,
    handleSelectOption,
    handleCodeChange,
    goNext,
    goPrevious,
    handleSubmit,
    handleTimeout,
  };
}
