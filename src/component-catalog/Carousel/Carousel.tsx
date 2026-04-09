import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton, MobileStepper } from '@mui/material';

import { useCarousel } from './Carousel.hook';
import { CarouselContainer, SlidesContainer, Slide } from './Carousel.styles';

import type { CarouselProps } from './Carousel.types';
const Carousel = ({ children, autoPlay = false, interval = 3000 }: CarouselProps) => {
  const { index, next, prev } = useCarousel(children.length, autoPlay, interval);

  return (
    <CarouselContainer role="region" aria-label="carousel">
      <SlidesContainer
        sx={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {children.map((child: React.ReactNode, i: number) => (
          <Slide key={i}>{child}</Slide>
        ))}
      </SlidesContainer>

      <IconButton onClick={prev}>
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton onClick={next}>
        <ArrowForwardIosIcon />
      </IconButton>

      <MobileStepper
        steps={children.length}
        position="static"
        activeStep={index}
        nextButton={null}
        backButton={null}
      />
    </CarouselContainer>
  );
};
;
export default Carousel;