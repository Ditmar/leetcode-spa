import React from 'react';

import AlarmClockIcon from "../../assets/alarm-clock.svg";
import { useCountdownTimer } from './CountdownTimer.hook';
import { TimerWrapper, IconWrapper, TimerText } from './CountdownTimer.styles';

import type { CountdownTimerProps } from './CountdownTimer.types';

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ seconds, onComplete }) => {
  const { formattedTime } = useCountdownTimer({ initialSeconds: seconds, onComplete });

  return (
    <TimerWrapper data-testid="countdown-wrapper">
      <IconWrapper data-testid="countdown-icon">
        <img
          src={AlarmClockIcon}
          alt="Temporizador"
          role="img"
          aria-label="Temporizador"
          width="100%"
          height="100%"
        />
      </IconWrapper>
      <TimerText data-testid="countdown-text">{formattedTime}</TimerText>
    </TimerWrapper>
  );
};
