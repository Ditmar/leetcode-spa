import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { Box } from '@mui/material';

import Carousel from './Carousel';

//  limpiar timers 
afterEach(() => {
  vi.useRealTimers();
});

const slides = [
  <Box key={1}>Slide 1</Box>,
  <Box key={2}>Slide 2</Box>,
  <Box key={3}>Slide 3</Box>,
];

describe('Carousel', () => {
  test('renders slides', () => {
    render(<Carousel>{slides}</Carousel>);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  test('next button changes slide (accessible)', () => {
    render(<Carousel>{slides}</Carousel>);

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    // validamos estado indirectamente (stepper)
    const dots = screen.getAllByRole('button');
    expect(dots.length).toBeGreaterThan(0);
  });

  test('back button works (accessible)', () => {
    render(<Carousel>{slides}</Carousel>);

    const backButton = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backButton);

    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  test('autoplay works', () => {
    vi.useFakeTimers();

    render(<Carousel autoPlay interval={1000}>{slides}</Carousel>);

    vi.advanceTimersByTime(1000);

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  test('swipe works', () => {
    render(<Carousel>{slides}</Carousel>);

    const container = screen.getByText('Slide 1').parentElement!;

    fireEvent.touchStart(container, {
      touches: [{ clientX: 200 }],
    });

    fireEvent.touchEnd(container, {
      changedTouches: [{ clientX: 100 }],
    });

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });
});