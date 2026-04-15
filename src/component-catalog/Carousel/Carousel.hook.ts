import { useEffect, useRef, useState } from "react";
import { clampIndex } from "./Carousel.utils";

export function useCarousel(
  length: number,
  autoPlay: boolean,
  interval: number
) {
  const [activeStep, setActiveStep] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setActiveStep((prev) => clampIndex(prev + 1, length));
  };

  const back = () => {
    setActiveStep((prev) => clampIndex(prev - 1, length));
  };

  // autoplay
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