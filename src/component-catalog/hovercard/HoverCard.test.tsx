import { cleanup, fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { DEFAULT_CLOSE_DELAY, DEFAULT_OPEN_DELAY } from "./HoverCard.constants";
import { HoverCard } from "./HoverCard";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function renderCard(props?: Partial<React.ComponentProps<typeof HoverCard>>) {
  return render(
    <HoverCard
      trigger={<button type="button">Hover for Card</button>}
      {...props}
    >
      <p>Card content</p>
    </HoverCard>
  );
}

function getTrigger() {
  return screen.getByRole("button", { name: /hover for card/i });
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// Initial render
// ---------------------------------------------------------------------------

describe("HoverCard — initial render", () => {
  it("renders the trigger element", () => {
    renderCard();
    expect(getTrigger()).toBeInTheDocument();
  });

  it("does not show card content on mount", () => {
    renderCard();
    const content = screen.queryByText("Card content");
    if (content) {
      expect(content).not.toBeVisible();
    }
  });
});

// ---------------------------------------------------------------------------
// Desktop — open on hover
// ---------------------------------------------------------------------------

describe("HoverCard — open on hover (desktop)", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, "ontouchstart", {
      value: undefined,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(navigator, "maxTouchPoints", {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("opens after openDelay ms on mouseenter", async () => {
    renderCard({ openDelay: DEFAULT_OPEN_DELAY });

    fireEvent.mouseEnter(getTrigger());
    expect(screen.queryByText("Card content")).not.toBeVisible();

    act(() => vi.advanceTimersByTime(DEFAULT_OPEN_DELAY));

    await waitFor(() =>
      expect(screen.getByText("Card content")).toBeVisible()
    );
  });

  it("closes after closeDelay ms on mouseleave", async () => {
    renderCard({ openDelay: 0, closeDelay: DEFAULT_CLOSE_DELAY });

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(0));
    await waitFor(() => expect(screen.getByText("Card content")).toBeVisible());

    fireEvent.mouseLeave(getTrigger());
    act(() => vi.advanceTimersByTime(DEFAULT_CLOSE_DELAY));

    await waitFor(() =>
      expect(screen.queryByText("Card content")).not.toBeVisible()
    );
  });

  it("cancels a pending close when the trigger is re-entered", async () => {
    renderCard({ openDelay: 0, closeDelay: 500 });

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(0));
    await waitFor(() => expect(screen.getByText("Card content")).toBeVisible());

    fireEvent.mouseLeave(getTrigger());
    act(() => vi.advanceTimersByTime(200));

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(500));

    expect(screen.getByText("Card content")).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Desktop — open on focus
// ---------------------------------------------------------------------------

describe("HoverCard — open on focus (keyboard navigation)", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, "ontouchstart", {
      value: undefined,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(navigator, "maxTouchPoints", {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("opens on focus", async () => {
    renderCard({ openDelay: 0 });

    fireEvent.focus(getTrigger());
    act(() => vi.advanceTimersByTime(0));

    await waitFor(() => expect(screen.getByText("Card content")).toBeVisible());
  });

  it("closes on blur", async () => {
    renderCard({ openDelay: 0, closeDelay: 0 });

    fireEvent.focus(getTrigger());
    act(() => vi.advanceTimersByTime(0));
    await waitFor(() => expect(screen.getByText("Card content")).toBeVisible());

    fireEvent.blur(getTrigger());
    act(() => vi.advanceTimersByTime(0));

    await waitFor(() =>
      expect(screen.queryByText("Card content")).not.toBeVisible()
    );
  });
});

// ---------------------------------------------------------------------------
// Touch — open on tap
// ---------------------------------------------------------------------------

describe("HoverCard — open on tap (touch devices)", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, "ontouchstart", {
      value: () => {},
      writable: true,
      configurable: true,
    });
    Object.defineProperty(navigator, "maxTouchPoints", {
      value: 1,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("opens on tap (click)", async () => {
    renderCard({ openDelay: 0 });

    fireEvent.click(getTrigger());
    act(() => vi.advanceTimersByTime(0));

    await waitFor(() => expect(screen.getByText("Card content")).toBeVisible());
  });

  it("closes on second tap", async () => {
    renderCard({ openDelay: 0, closeDelay: 0 });

    fireEvent.click(getTrigger());
    act(() => vi.advanceTimersByTime(0));
    await waitFor(() => expect(screen.getByText("Card content")).toBeVisible());

    fireEvent.click(getTrigger());
    act(() => vi.advanceTimersByTime(0));

    await waitFor(() =>
      expect(screen.queryByText("Card content")).not.toBeVisible()
    );
  });

  it("does not open on hover in touch mode", () => {
    renderCard({ openDelay: 0 });

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(0));

    expect(screen.queryByText("Card content")).not.toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Close on outside click (ClickAwayListener)
// ---------------------------------------------------------------------------

describe("HoverCard — close on outside click", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, "ontouchstart", {
      value: undefined,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(navigator, "maxTouchPoints", {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("closes when clicking outside the card", async () => {
    renderCard({ openDelay: 0, closeDelay: 0 });

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(0));
    await waitFor(() => expect(screen.getByText("Card content")).toBeVisible());

    fireEvent.mouseDown(document.body);
    act(() => vi.advanceTimersByTime(0));

    await waitFor(() =>
      expect(screen.queryByText("Card content")).not.toBeVisible()
    );
  });
});

// ---------------------------------------------------------------------------
// Configurable delay
// ---------------------------------------------------------------------------

describe("HoverCard — configurable delay", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, "ontouchstart", {
      value: undefined,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(navigator, "maxTouchPoints", {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("respects a custom openDelay", async () => {
    renderCard({ openDelay: 500 });

    fireEvent.mouseEnter(getTrigger());

    act(() => vi.advanceTimersByTime(499));
    expect(screen.queryByText("Card content")).not.toBeVisible();

    act(() => vi.advanceTimersByTime(1));
    await waitFor(() => expect(screen.getByText("Card content")).toBeVisible());
  });

  it("respects a custom closeDelay", async () => {
    renderCard({ openDelay: 0, closeDelay: 600 });

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(0));
    await waitFor(() => expect(screen.getByText("Card content")).toBeVisible());

    fireEvent.mouseLeave(getTrigger());

    act(() => vi.advanceTimersByTime(599));
    expect(screen.getByText("Card content")).toBeVisible();

    act(() => vi.advanceTimersByTime(1));
    await waitFor(() =>
      expect(screen.queryByText("Card content")).not.toBeVisible()
    );
  });
});

// ---------------------------------------------------------------------------
// Disabled state
// ---------------------------------------------------------------------------

describe("HoverCard — disabled", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, "ontouchstart", {
      value: undefined,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(navigator, "maxTouchPoints", {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("does not open when disabled is true", () => {
    renderCard({ openDelay: 0, disabled: true });

    fireEvent.mouseEnter(getTrigger());
    act(() => vi.advanceTimersByTime(0));

    expect(screen.queryByText("Card content")).not.toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Controlled mode
// ---------------------------------------------------------------------------

describe("HoverCard — controlled mode", () => {
  it("reflects the controlled open state", async () => {
    const { rerender } = render(
      <HoverCard
        open={false}
        onClose={() => {}}
        trigger={<button type="button">Hover for Card</button>}
      >
        <p>Card content</p>
      </HoverCard>
    );

    expect(screen.queryByText("Card content")).not.toBeVisible();

    rerender(
      <HoverCard
        open={true}
        onClose={() => {}}
        trigger={<button type="button">Hover for Card</button>}
      >
        <p>Card content</p>
      </HoverCard>
    );

    await waitFor(() =>
      expect(screen.getByText("Card content")).toBeVisible()
    );
  });
});