import { useEffect, useState, useRef } from 'react';
import { formatTime } from './CountdownTimer.constants';

interface UseCountdownTimerParams {
  initialSeconds: number;
  onComplete?: () => void;
}

interface UseCountdownTimerResult {
  secondsRemaining: number;
  formattedTime: string;
}

export const useCountdownTimer = ({
  initialSeconds,
  onComplete,
}: UseCountdownTimerParams): UseCountdownTimerResult => {
  const [secondsRemaining, setSecondsRemaining] = useState(() => Math.max(0, initialSeconds));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onCompleteRef = useRef(onComplete);

  // Actualiza la referencia del callback si cambia
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Limpieza centralizada del intervalo
  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Si el tiempo inicial es inválido, no iniciar
    if (initialSeconds <= 0) {
      setSecondsRemaining(0);
      return;
    }

    // Reinicia el estado
    setSecondsRemaining(initialSeconds);
    clearTimer();

    // Inicia el intervalo
    intervalRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearTimer();
          onCompleteRef.current?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Limpieza al desmontar
    return () => {
      clearTimer();
    };
  }, [initialSeconds]);

  return {
    secondsRemaining,
    formattedTime: formatTime(secondsRemaining),
  };
};