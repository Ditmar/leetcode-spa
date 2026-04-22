import { useEffect, useRef, useState } from 'react';

import { clampIndex } from './Carousel.utils';

export interface UseCarouselReturn {
  activeStep: number;
  next: () => void;
  back: () => void;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

export function useCarousel(
  length: number,
  autoPlay: boolean,
  interval: number,
): UseCarouselReturn {
  const safeLength = length > 0 ? length : 1;

  const [activeStep, setActiveStep] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => {
    if (length <= 0) return;
    setActiveStep((prev) => clampIndex(prev + 1, safeLength));
  };

  const back = () => {
    if (length <= 0) return;
    setActiveStep((prev) => clampIndex(prev - 1, safeLength));
  };

  useEffect(() => {
    if (!autoPlay || length <= 1) return;

    timerRef.current = setInterval(() => {
      next();
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, interval, length]);

  return {
    activeStep,
    next,
    back,
    setActiveStep,
  };
}