import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ContextMenu } from './ContextMenu';
import type { ContextMenuGroup } from './ContextMenu.types';
import { LONG_PRESS_DURATION_MS } from './ContextMenu.constants';


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
    items: [
      { id: 'delete', label: 'Delete', onClick: vi.fn() },
    ],
  },
];

function renderMenu() {
  const onClose = vi.fn();
  const utils = render(
    <ContextMenu groups={mockGroups} onClose={onClose}>
      <div>Hacé click derecho aquí</div>
    </ContextMenu>
  );
  return { ...utils, onClose };
}


describe('ContextMenu — abrir y cerrar', () => {
  it('está cerrado por defecto', () => {
    renderMenu();
    expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();
  });

  it('abre con click derecho', () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    expect(screen.getByTestId('context-menu')).toBeInTheDocument();
  });

  it('cierra al clickear un item', async () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    await userEvent.click(screen.getByTestId('context-menu-item-copy'));
    await waitFor(() =>
      expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument()
    );
  });

  it('llama a onClose al cerrar', async () => {
    const { onClose } = renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    await userEvent.click(screen.getByTestId('context-menu-item-copy'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('ContextMenu — items', () => {
  it('llama al onClick del item al seleccionarlo', async () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    await userEvent.click(screen.getByTestId('context-menu-item-copy'));
    expect(mockGroups[0].items[0].onClick).toHaveBeenCalled();
  });

  it('el item deshabilitado tiene aria-disabled', () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    expect(screen.getByTestId('context-menu-item-cut'))
      .toHaveAttribute('aria-disabled', 'true');
  });
});

describe('ContextMenu — long-press móvil', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('abre después de 500ms en touch', async () => {
  renderMenu();
  const trigger = screen.getByTestId('context-menu-trigger');
  fireEvent.pointerDown(trigger, { pointerType: 'touch', clientX: 50, clientY: 50 });
  
  await act(async () => {
    vi.advanceTimersByTime(LONG_PRESS_DURATION_MS);
  });
  
  expect(screen.getByTestId('context-menu')).toBeInTheDocument();
});

  it('no abre si soltás antes de 500ms', async () => {
    renderMenu();
    const trigger = screen.getByTestId('context-menu-trigger');
    fireEvent.pointerDown(trigger, { pointerType: 'touch', clientX: 50, clientY: 50 });
    fireEvent.pointerUp(trigger);
    vi.advanceTimersByTime(LONG_PRESS_DURATION_MS);
    expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();
  });
});

describe('ContextMenu — accesibilidad', () => {
  it('el menú tiene role=menu', () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('los items tienen role=menuitem', () => {
    renderMenu();
    fireEvent.contextMenu(screen.getByTestId('context-menu-trigger'));
    expect(screen.getAllByRole('menuitem').length).toBeGreaterThan(0);
  });
});