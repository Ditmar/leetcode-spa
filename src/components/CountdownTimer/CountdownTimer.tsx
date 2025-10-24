// src/components/CountdownTimer/CountdownTimer.tsx
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ seconds }) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Tiempo restante: {time} s</div>;
};
