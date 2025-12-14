export type QuestionType = 'mcq' | 'code';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
}

export interface McqOption {
  id: string;
  label: string;
  value: string;
}

export interface McqQuestion extends BaseQuestion {
  type: 'mcq';
  options: McqOption[];
}

export interface CodeQuestion extends BaseQuestion {
  type: 'code';
  language: 'typescript' | 'javascript';
  starterCode?: string;
  sampleInput?: string;
  expectedOutputDescription?: string;
}

export type Question = McqQuestion | CodeQuestion;

export interface TestDefinition {
  id: string;
  title: string;
  totalDurationSeconds: number;
  questions: Question[];
}

export type TestStatus = 'idle' | 'running' | 'completed' | 'expired';

export interface TestExecutionState {
  currentIndex: number;
  answers: Record<string, string>;
  remainingSeconds: number;
  status: TestStatus;
  isSubmitting: boolean;
  error?: string;
}

export interface UseTestExecutionResult {
  test?: TestDefinition;
  isLoading: boolean;
  error?: string;
  state: TestExecutionState;
  currentQuestion?: Question;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isLastQuestion: boolean;
  handleSelectOption: (questionId: string, optionId: string) => void;
  handleCodeChange: (questionId: string, code: string) => void;
  goNext: () => void;
  goPrevious: () => void;
  handleSubmit: () => Promise<void>;
  handleTimeout: () => void;
}

export interface TestExecutionPageProps {
  /**
   * Identificador del test. En el proyecto real seguramente viene de la ruta,
   * pero aquí lo dejamos como prop para poder testearlo fácilmente.
   */
  testId: string;
  /**
   * Callback opcional cuando el test se envía correctamente.
   */
  onSubmitted?: (testId: string) => void;
}
