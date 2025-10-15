import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { describe, it, expect, vi } from 'vitest';

import { CountdownTimer } from './CountdownTimer';

vi.useFakeTimers();

describe('CountdownTimer', () => {
  it('cuenta hacia atrás y llama onComplete', () => {
    const onComplete = vi.fn();

    render(<CountdownTimer seconds={3} onComplete={onComplete} />);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(onComplete).toHaveBeenCalled();
  });

  it('formatea correctamente el tiempo como hh:mm:ss', () => {
    render(<CountdownTimer seconds={1230} />);
    const timerText = screen.getByTestId('countdown-text');
    expect(timerText).toHaveTextContent('00:20:30');
  });

  it('limpia el intervalo al desmontar', () => {
    const clearSpy = vi.spyOn(global, 'clearInterval');
    const { unmount } = render(<CountdownTimer seconds={10} />);
    unmount();
    expect(clearSpy).toHaveBeenCalled();
    clearSpy.mockRestore();
  });
});
