import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton, MobileStepper } from '@mui/material';
import { useRef } from 'react';

import { DEFAULT_INTERVAL, SWIPE_THRESHOLD } from './Carousel.constants';
import { useCarousel } from './Carousel.hook';
import { CarouselContainer, SlidesContainer, Slide } from './Carousel.styles';

import type { CarouselProps } from './Carousel.types';

export default function Carousel({
  children,
  autoPlay = false,
  interval = DEFAULT_INTERVAL,
  ...props
}: CarouselProps) {
  const items = Array.isArray(children) ? children : [children];
  const length = items.length;

  const { activeStep, next, back } = useCarousel(length, autoPlay, interval);

  const startX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > SWIPE_THRESHOLD) next();
    if (diff < -SWIPE_THRESHOLD) back();
  };

  return (
    <CarouselContainer {...props}>
      <SlidesContainer
        index={activeStep}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((child, index) => (
          <Slide key={index}>{child}</Slide>
        ))}
      </SlidesContainer>

      <IconButton
        onClick={back}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 8,
          transform: 'translateY(-50%)',
          zIndex: 2,
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={next}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 8,
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
}
