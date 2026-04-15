import { Box } from '@mui/material';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import Carousel from './Carousel';

const slides = [<Box key={1}>Slide 1</Box>, <Box key={2}>Slide 2</Box>, <Box key={3}>Slide 3</Box>];

describe('Carousel', () => {
  test('renders slides', () => {
    render(<Carousel>{slides}</Carousel>);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  test('next button changes slide', () => {
    render(<Carousel>{slides}</Carousel>);

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]);

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  test('back button works', () => {
    render(<Carousel>{slides}</Carousel>);

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);

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

    vi.useRealTimers();
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
