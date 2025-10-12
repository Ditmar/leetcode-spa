import React from 'react';
import { useCountdownTimer } from './CountdownTimer.hook';
import type { CountdownTimerProps } from './CountdownTimer.types';
import { TimerWrapper, TimerText, IconWrapper } from './CountdownTimer.styles';
import { AlarmClockIcon } from './CountdownTimer.icons';

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ seconds, onComplete }) => {
  const { formattedTime } = useCountdownTimer({ initialSeconds: seconds, onComplete });

  return (
    <TimerWrapper>
      <IconWrapper>
        <AlarmClockIcon />
      </IconWrapper>
      <TimerText>{formattedTime}</TimerText>
    </TimerWrapper>
  );
};


