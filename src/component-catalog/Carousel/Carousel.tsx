import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton, MobileStepper } from '@mui/material';
import React, { useRef } from 'react';

import { DEFAULT_INTERVAL, SWIPE_THRESHOLD } from './Carousel.constants';
import { useCarousel } from './Carousel.hook';
import { CarouselContainer, SlidesContainer, Slide } from './Carousel.styles';

import type { CarouselProps } from './Carousel.types';

export const Carousel = ({
  children,
  autoPlay = false,
  interval = DEFAULT_INTERVAL,
  ...props
}: CarouselProps) => {
  const items = React.Children.toArray(children);
  const length = items.length;

  const { activeStep, next, back } = useCarousel(length, autoPlay, interval);

  // ✅ más robusto que usar 0
  const startX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > SWIPE_THRESHOLD) next();
    if (diff < -SWIPE_THRESHOLD) back();

    // ✅ FIX IMPORTANTE
    startX.current = null;
  };

  const handleTouchCancel = () => {
    // ✅ evita valores residuales
    startX.current = null;
  };

  return (
    <CarouselContainer {...props}>
      <SlidesContainer
        index={activeStep}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel} // ✅ agregado
      >
        {items.map((child, index) => (
          <Slide key={index}>{child}</Slide>
        ))}
      </SlidesContainer>

      <IconButton
        aria-label="Previous slide"
        onClick={back}
        sx={{
          position: 'absolute',
          top: '50%',
          left: (theme) => theme.spacing(2),
          transform: 'translateY(-50%)',
          zIndex: 2,
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        aria-label="Next slide"
        onClick={next}
        sx={{
          position: 'absolute',
          top: '50%',
          right: (theme) => theme.spacing(2),
          transform: 'translateY(-50%)',
          zIndex: 2,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <MobileStepper
        steps={length}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          background: 'transparent',
          justifyContent: 'center',
        }}
      />
    </CarouselContainer>
  );
};