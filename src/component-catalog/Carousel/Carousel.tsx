import { Children } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton, MobileStepper } from '@mui/material';

import { useCarousel } from './Carousel.hook';
import { CarouselContainer, SlidesContainer, Slide } from './Carousel.styles';

import type { CarouselProps } from './Carousel.types';

const Carousel = ({ children, autoPlay = false, interval = 3000 }: CarouselProps) => {
  const totalSlides = Children.count(children);

  const { index, next, prev, handleTouchStart, handleTouchEnd } = useCarousel(
    totalSlides,
    autoPlay,
    interval
  );

  return (
    <CarouselContainer
      role="region"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <SlidesContainer
        sx={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {Children.map(children, (child, i) => (
          <Slide key={i}>{child}</Slide>
        ))}
      </SlidesContainer>

      {/* Botón anterior */}
      <IconButton
        aria-label="Previous slide"
        onClick={prev}
        sx={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Botón siguiente */}
      <IconButton
        aria-label="Next slide"
        onClick={next}
        sx={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <MobileStepper
        steps={totalSlides}
        position="static"
        activeStep={index}
        nextButton={null}
        backButton={null}
      />
    </CarouselContainer>
  );
};

export { Carousel };