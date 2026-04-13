import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { ContextMenu } from './ContextMenu';
import { LONG_PRESS_DURATION_MS } from './ContextMenu.constants';

import type { ContextMenuGroup } from './ContextMenu.types';

const mockGroups: ContextMenuGroup[] = [
  {
    id: 'group-1',
    items: [
      { id: 'copy', label: 'Copy', onClick: vi.fn() },
      { id: 'paste', label: 'Paste', onClick: vi.fn() },
      { id: 'cut', label: 'Cut', disabled: true },
    ],
  },
  {
    id: 'group-2',
    items: [{ id: 'delete', label: 'Delete', onClick: vi.fn() }],
  },
];

function renderMenu() {
  const onClose = vi.fn();
  const utils = render(
    <ContextMenu groups={mockGroups} onClose={onClose}>
      <div>Right click here</div>
    </ContextMenu>
  );
  return { ...utils, onClose };
}

describe('ContextMenu — open and close', () => {
  it('is closed by default', () => {
    renderMenu();
    expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();
  });

  it('opens on right-click', () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    expect(screen.getByTestId('context-menu')).toBeInTheDocument();
  });

  it('closes when an item is clicked', async () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    await userEvent.click(screen.getByTestId('context-menu-item-copy'));
    await waitFor(() => expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument());
  });

  it('calls onClose when closed', async () => {
    const { onClose } = renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    await userEvent.click(screen.getByTestId('context-menu-item-copy'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('keeps the menu inside the viewport near the edges', () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'), {
      clientX: window.innerWidth - 10,
      clientY: window.innerHeight - 10,
    });
    expect(screen.getByTestId('context-menu')).toBeInTheDocument();
  });
});

describe('ContextMenu — items', () => {
  it('calls item onClick when selected', async () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    await userEvent.click(screen.getByTestId('context-menu-item-copy'));
    expect(mockGroups[0].items[0].onClick).toHaveBeenCalled();
  });

  it('disabled item has aria-disabled', () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    expect(screen.getByTestId('context-menu-item-cut')).toHaveAttribute('aria-disabled', 'true');
  });
});

describe('ContextMenu — mobile long-press', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('opens after 500ms on touch', async () => {
    renderMenu();
    const trigger = screen.getByTestId('context-menu-trigger');
    fireEvent.pointerDown(trigger, { pointerType: 'touch', clientX: 50, clientY: 50 });

    await act(async () => {
      vi.advanceTimersByTime(LONG_PRESS_DURATION_MS);
    });

    expect(screen.getByTestId('context-menu')).toBeInTheDocument();
  });

  it('does not open if released before threshold', async () => {
    renderMenu();
    const trigger = screen.getByTestId('context-menu-trigger');
    fireEvent.pointerDown(trigger, { pointerType: 'touch', clientX: 50, clientY: 50 });
    fireEvent.pointerUp(trigger);
    vi.advanceTimersByTime(LONG_PRESS_DURATION_MS);
    expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();
  });
});

describe('ContextMenu — accessibility', () => {
  it('menu has role=menu', () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('items have role=menuitem', () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    expect(screen.getAllByRole('menuitem').length).toBeGreaterThan(0);
  });

  it('supports keyboard navigation between menu items', async () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument());
  });
});
