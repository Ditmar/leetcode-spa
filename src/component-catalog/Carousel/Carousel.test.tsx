import { Box } from '@mui/material';
import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import Carousel from './Carousel';

afterEach(() => {
  vi.useRealTimers();
});

describe('Carousel', () => {
  const slides = [
    <Box key={1}>Slide 1</Box>,
    <Box key={2}>Slide 2</Box>,
    <Box key={3}>Slide 3</Box>,
  ];

  test('renders slides', () => {
    render(<Carousel>{slides}</Carousel>);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  test('next button works', () => {
    render(<Carousel>{slides}</Carousel>);

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  test('back button works', () => {
    render(<Carousel>{slides}</Carousel>);

    const backButton = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backButton);

    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  test('autoplay works', () => {
    vi.useFakeTimers();

    render(
      <Carousel autoPlay interval={1000}>
        {slides}
      </Carousel>
    );

    vi.advanceTimersByTime(1000);

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });
});
