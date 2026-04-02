import { useEffect, useRef, useState } from "react";

export const useCarousel = (
  length: number,
  autoPlay?: boolean,
  interval: number = 3000
) => {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + length) % length);
  };

  // autoplay
  useEffect(() => {
    if (!autoPlay) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(id);
  }, [autoPlay, interval, length]);

  // swipe (móvil)
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 50) prev();
    if (diff < -50) next();
  };

  return {
    index,
    next,
    prev,
    setIndex,
    handleTouchStart,
    handleTouchEnd,
  };
};