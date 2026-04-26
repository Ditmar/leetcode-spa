import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Dialog } from './Dialog';

describe('Dialog Component', () => {
  const onCloseMock = vi.fn();

  it('debe renderizar el título correctamente', () => {
    render(
      <Dialog isOpen={true} onClose={onCloseMock} title="Título de Prueba" />
    );
    expect(screen.getByTestId('mui-dialog-title')).toHaveTextContent('Título de Prueba');
  });

  it('debe llamar a onClose cuando se hace clic en el botón de cerrar', () => {
    render(
      <Dialog isOpen={true} onClose={onCloseMock} title="Test" showCloseButton={true} />
    );
    const closeButton = screen.getByLabelText('close-dialog');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('no debe cerrar al hacer clic en el backdrop si es persistente', () => {
    render(
      <Dialog isOpen={true} onClose={onCloseMock} persistent={true} />
    );
    
    // Intentamos cerrar haciendo clic en el fondo (backdrop)
    const backdrop = screen.getByRole('presentation').firstChild as HTMLElement;
    if (backdrop) fireEvent.click(backdrop);
    
    expect(onCloseMock).not.toHaveBeenCalled();
  });
});