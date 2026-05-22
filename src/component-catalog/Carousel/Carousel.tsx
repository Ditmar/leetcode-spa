import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { MobileStepper } from "@mui/material";
import { useEffect, useState } from "react";

import {
  CarouselContainer,
  CarouselSlide,
 CarouselTrack,
  LeftButton,
  RightButton,
} from "./Carousel.styles";
import type { CarouselProps } from "./Carousel.types";

export const Carousel = ({
  children,
  autoPlay = false,
  autoPlayInterval = 3000,
}: CarouselProps) => {
  const slides = Array.isArray(children) ? children : [children];

  const [activeStep, setActiveStep] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const maxSteps = slides.length;

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) =>
      prevStep === 0 ? maxSteps - 1 : prevStep - 1,
    );
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.changedTouches[0].screenX);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const touchEndX = event.changedTouches[0].screenX;

    if (touchStartX - touchEndX > 50) {
      handleNext();
    }

    if (touchEndX - touchStartX > 50) {
      handleBack();
    }
  };

  useEffect(() => {
    if (!autoPlay) {
      return undefined;
    }

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        handleBack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <CarouselContainer
      aria-roledescription="carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <LeftButton
        onClick={handleBack}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon />
      </LeftButton>

      <CarouselTrack>
        <CarouselSlide>
          {slides[activeStep]}
        </CarouselSlide>
      </CarouselTrack>

      <RightButton
        onClick={handleNext}
        aria-label="Next slide"
      >
        <ChevronRightIcon />
      </RightButton>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
        sx={{
          width: "100%",
          justifyContent: "center",
          background: "transparent",
          mt: 2,
        }}
      />
    </CarouselContainer>
  );
};