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
  //  Validación de entrada
  if (typeof initialSeconds !== 'number' || isNaN(initialSeconds) || initialSeconds < 0) {
    throw new Error('initialSeconds debe ser un número positivo');
  }

  const [secondsRemaining, setSecondsRemaining] = useState(() => Math.max(0, initialSeconds));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (initialSeconds <= 0) {
      setSecondsRemaining(0);
      return;
    }

    setSecondsRemaining(initialSeconds);
    clearTimer();

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

    return () => {
      clearTimer();
    };
  }, [initialSeconds]);

  return {
    secondsRemaining,
    formattedTime: formatTime(secondsRemaining),
  };
};
