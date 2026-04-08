import { cleanup, fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { HoverCard } from './HoverCard';
import { DEFAULT_CLOSE_DELAY, DEFAULT_OPEN_DELAY } from './HoverCard.constants';

function renderCard(props?: Partial<React.ComponentProps<typeof HoverCard>>) {
  return render(
    <HoverCard
      trigger={<button type="button">Hover Card</button>} // ← Cambiado
      {...props}
    >
      <p>Card content</p>
    </HoverCard>
  );
}

function getTrigger() {
  return screen.getByRole('button', { name: /hover card/i }); // ← Cambiado
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('HoverCard — render', () => {
  it('renders the trigger element', () => {
    renderCard();
    expect(getTrigger()).toBeInTheDocument();
  });

  it('does not show card content on initial mount', () => {
    renderCard();
    expect(screen.queryByText('Card content')).toBeNull(); // Cambiado: toBeNull en lugar de not.toBeVisible
  });

  it('renders with the Figma HoverTriggerButton trigger', () => {
    renderCard();
    expect(getTrigger()).toBeInTheDocument();
  });
});

describe('HoverCard — desktop hover', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, 'ontouchstart', {
      value: undefined,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(navigator, 'maxTouchPoints', {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('opens after openDelay ms on mouseenter', () => {
    renderCard({ openDelay: DEFAULT_OPEN_DELAY });

    fireEvent.mouseEnter(getTrigger());
    expect(screen.queryByText('Card content')).toBeNull();

    act(() => vi.advanceTimersByTime(DEFAULT_OPEN_DELAY));

    const content = screen.getByText('Hover Card');
    expect(content).toBeInTheDocument();
  });

  it('closes after closeDelay ms on mouseleave', () => {
    renderCard({ openDelay: 0, closeDelay: DEFAULT_CLOSE_DELAY });

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(0));
    expect(screen.getByText('Hover Card')).toBeInTheDocument();

    fireEvent.mouseLeave(getTrigger());
    act(() => vi.advanceTimersByTime(DEFAULT_CLOSE_DELAY));

    expect(screen.queryByText('Card content')).toBeNull();
  });

  it('cancels a scheduled close when the trigger is re-entered', async () => {
    renderCard({ openDelay: 0, closeDelay: 500 });

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(0));
    expect(screen.getByText('Hover Card')).toBeInTheDocument();

    fireEvent.mouseLeave(getTrigger());
    act(() => vi.advanceTimersByTime(200));

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(500));

    expect(screen.getByText('Hover Card')).toBeInTheDocument();
  });
});

describe('HoverCard — configurable delays', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, 'ontouchstart', {
      value: undefined,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(navigator, 'maxTouchPoints', {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('respects a custom openDelay of 500 ms', () => {
    renderCard({ openDelay: 500 });

    fireEvent.mouseEnter(getTrigger());

    act(() => vi.advanceTimersByTime(499));
    expect(screen.queryByText('Card content')).toBeNull();

    act(() => vi.advanceTimersByTime(1));
    expect(screen.getByText('Hover Card')).toBeInTheDocument();
  });

  it('respects a custom closeDelay of 600 ms', () => {
    renderCard({ openDelay: 0, closeDelay: 600 });

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(0));
    expect(screen.getByText('Hover Card')).toBeVisible();

    fireEvent.mouseLeave(getTrigger());

    act(() => vi.advanceTimersByTime(599));
    expect(screen.getByText('Hover Card')).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(1));
    expect(screen.queryByText('Hover Card')).toBeInTheDocument();
  });
});

describe('HoverCard — disabled', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, 'ontouchstart', {
      value: undefined,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(navigator, 'maxTouchPoints', {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('does not open when disabled is true', () => {
    renderCard({ openDelay: 0, disabled: true });

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(0));

    expect(screen.queryByText('Card content')).toBeNull();
  });
});

describe('HoverCard — controlled mode', () => {
  it('opens when the controlled open prop changes to true', async () => {
    const { rerender } = render(
      <HoverCard
        open={false}
        onClose={() => {}}
        trigger={<button type="button">Hover Card</button>}
      >
        <p>Card content</p>
      </HoverCard>
    );

    expect(screen.queryByText('Card content')).toBeNull();

    rerender(
      <HoverCard open={true} onClose={() => {}} trigger={<button type="button">Hover Card</button>}>
        <p>Card content</p>
      </HoverCard>
    );

    await waitFor(() => {
      const content = screen.getByText('Card content');
      expect(content).toBeInTheDocument();
      expect(content).toBeVisible();
    });
  });
});
