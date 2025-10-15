import React from 'react';

import { useCountdownTimer } from './CountdownTimer.hook';
import { AlarmClockIcon } from './CountdownTimer.icons';
import { TimerWrapper, IconWrapper, TimerText } from './CountdownTimer.styles';

import type { CountdownTimerProps } from './CountdownTimer.types';

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ seconds, onComplete }) => {
  const { formattedTime } = useCountdownTimer({ initialSeconds: seconds, onComplete });

  return (
    <TimerWrapper data-testid="countdown-wrapper">
      <IconWrapper data-testid="countdown-icon">
        <AlarmClockIcon role="img" aria-label="Temporizador" />
      </IconWrapper>
      <TimerText data-testid="countdown-text">{formattedTime}</TimerText>
    </TimerWrapper>
  );
};
