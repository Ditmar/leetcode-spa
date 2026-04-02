import { IconButton, MobileStepper } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import type { CarouselProps } from "./Carousel.types";
import { useCarousel } from "./Carousel.hook";
import {
  CarouselContainer,
  SlidesContainer,
  Slide,
} from "./Carousel.styles";

const Carousel = ({
  children,
  autoPlay = false,
  interval = 3000,
}: CarouselProps) => {
  const {
    index,
    next,
    prev,
    handleTouchStart,
    handleTouchEnd,
  } = useCarousel(children.length, autoPlay, interval);

  return (
    <CarouselContainer
      role="region"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <SlidesContainer
        sx={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {children.map((child, i) => (
          <Slide key={i}>{child}</Slide>
        ))}
      </SlidesContainer>

      <IconButton
        onClick={prev}
        sx={{ position: "absolute", left: 10, top: "50%" }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={next}
        sx={{ position: "absolute", right: 10, top: "50%" }}
      >
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

export default Carousel;