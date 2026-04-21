import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { Dialog } from './Dialog';

describe('Dialog Component', () => {
  const onCloseMock = vi.fn();

  beforeEach(() => {
    onCloseMock.mockClear();
  });

  it('debe renderizar el título correctamente', () => {
    render(<Dialog open={true} onClose={onCloseMock} title="Título de Prueba" />);

    expect(screen.getByTestId('mui-dialog-title')).toHaveTextContent('Título de Prueba');
  });

  it('debe llamar a onClose cuando se hace clic en el botón de cerrar', () => {
    render(<Dialog open={true} onClose={onCloseMock} title="Test" showCloseButton={true} />);

    const closeButton = screen.getByLabelText('close dialog');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('no debe cerrar si es persistente (tecla Escape)', () => {
    render(<Dialog open={true} onClose={onCloseMock} persistent={true} />);

    const dialog = screen.getByTestId('mui-dialog-container');
    fireEvent.keyDown(dialog, { key: 'Escape' });

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('debe cerrar con Escape si NO es persistente', () => {
    render(<Dialog open={true} onClose={onCloseMock} persistent={false} />);

    const dialog = screen.getByTestId('mui-dialog-container');
    fireEvent.keyDown(dialog, { key: 'Escape' });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('renderiza contenido y acciones correctamente', () => {
    render(
      <Dialog
        open={true}
        onClose={onCloseMock}
        description="Descripción de prueba"
        actions={<button>Acción</button>}
      >
        <div>Contenido</div>
      </Dialog>
    );

    expect(screen.getByTestId('mui-dialog-content')).toHaveTextContent('Descripción de prueba');
    expect(screen.getByText('Contenido')).toBeInTheDocument();
    expect(screen.getByTestId('mui-dialog-actions')).toBeInTheDocument();
  });
});
