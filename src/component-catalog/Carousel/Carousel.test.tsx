import { fireEvent, render, screen } from '@testing-library/react';

import { Carousel } from './Carousel';

describe('Carousel', () => {
  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ];

  it('renders first slide', () => {
    render(<Carousel>{slides}</Carousel>);

    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  it('navigates to next slide', () => {
    render(<Carousel>{slides}</Carousel>);

    const nextButton = screen.getByLabelText('Next slide');

    fireEvent.click(nextButton);

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('navigates to previous slide', () => {
    render(<Carousel>{slides}</Carousel>);

    const previousButton = screen.getByLabelText('Previous slide');

    fireEvent.click(previousButton);

    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('supports keyboard navigation', () => {
    render(<Carousel>{slides}</Carousel>);

    fireEvent.keyDown(window, { key: 'ArrowRight' });

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('renders mobile stepper dots', () => {
    render(<Carousel>{slides}</Carousel>);

    expect(document.querySelector('.MuiMobileStepper-root')).toBeInTheDocument();
  });
});
