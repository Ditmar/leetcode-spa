import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import Carousel from './Carousel';

describe('Carousel', () => {
  it('renders children correctly', () => {
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );

    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('navigates to next slide when clicking next button', () => {
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[1]; // segundo botón → next

    fireEvent.click(nextButton);

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('auto plays slides', () => {
    vi.useFakeTimers();

    render(
      <Carousel autoPlay interval={1000}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );

    vi.advanceTimersByTime(1000);

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('handles swipe gesture', () => {
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );

    const carousel = screen.getByRole('region');

    fireEvent.touchStart(carousel, {
      touches: [{ clientX: 100 }],
    });

    fireEvent.touchEnd(carousel, {
      changedTouches: [{ clientX: 0 }],
    });

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });
});
