import { Box, Button, Typography, CircularProgress } from '@mui/material';
import React from 'react';

import { AnswerOption } from '../../components/AnswerOption/AnswerOption';
import { CountdownTimer } from '../../components/CountdownTimer/CountdownTimer';

import { useTestExecution } from './TestExecutionPage.hook';

import type { TestExecutionPageProps } from './TestExecutionPage.types';

const TestExecutionPage: React.FC<TestExecutionPageProps> = ({ testId }) => {
  const {
    test,
    state,
    currentQuestion,
    isLoading,
    error,
    canGoNext,
    canGoPrevious,
    isLastQuestion,
    handleSelectOption,
    handleCodeChange,
    goNext,
    goPrevious,
    handleSubmit,
    handleTimeout,
  } = useTestExecution(testId);

  // Eliminar `timerExpired`, la lógica del estado se deriva desde el hook
  const onTimerEnd = () => {
    handleTimeout();
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error || !test || !currentQuestion) {
    return (
      <Box>
        <Typography color="error">{error ?? 'No se pudo cargar el test'}</Typography>
      </Box>
    );
  }

  const currentIndex = state.currentIndex;
  const totalQuestions = test.questions.length;

  const currentAnswer = state.answers[currentQuestion.id] ?? '';

  const handleAnswerChange = (optionId: string) => {
    handleSelectOption(currentQuestion.id, optionId);
  };

  const handleNextClick = async () => {
    if (isLastQuestion) {
      await handleSubmit();
    } else {
      goNext();
    }
  };

  return (
    <Box>
      <Typography variant="h5">{currentQuestion.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        Pregunta {currentIndex + 1} de {totalQuestions}
      </Typography>

      {/* Temporizador */}
      <Box mt={2}>
        <CountdownTimer seconds={test.totalDurationSeconds} onComplete={onTimerEnd} />
      </Box>

      <Box mt={2}>
        {/* Pregunta de opción múltiple */}
        {currentQuestion.type === 'mcq' &&
          currentQuestion.options &&
          currentQuestion.options.map((option) => (
            <AnswerOption
              key={option.id}
              label={option.label}
              selected={currentAnswer === option.id}
              onClick={() => handleAnswerChange(option.id)}
            />
          ))}

        {/* Pregunta de programación */}
        {currentQuestion.type === 'code' && (
          <Box>
            <Typography variant="h6">Editor de Código (Simulado)</Typography>
            <textarea
              placeholder="Escribe tu código aquí..."
              style={{ width: '100%', height: '150px' }}
              value={state.answers[currentQuestion.id] ?? ''}
              onChange={(e) => handleCodeChange(currentQuestion.id, e.target.value)}
            />
          </Box>
        )}
      </Box>

      <Box mt={2} display="flex" gap={2}>
        <Button variant="contained" color="primary" onClick={goPrevious} disabled={!canGoPrevious}>
          Anterior
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNextClick}
          disabled={isLastQuestion ? state.isSubmitting : !canGoNext}
        >
          {isLastQuestion ? 'Enviar Test' : 'Siguiente'}
        </Button>
      </Box>

      {/* Usar el estado centralizado para mostrar el mensaje de "Tiempo agotado" */}
      {state.status === 'expired' && (
        <Typography mt={2} color="error">
          ¡Tiempo agotado!
        </Typography>
      )}
    </Box>
  );
};

export default TestExecutionPage;
