import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { render, screen } from '../../test/test-utils';

import { Button } from './Button';

describe('Button', () => {
  it('renderiza con props por defecto', () => {
    render(<Button data-testid="btn">Hola</Button>);
    const btn = screen.getByTestId('btn');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Hola');
    expect(btn).not.toBeDisabled();
    expect(btn).toHaveAttribute('type', 'button'); // default
  });

  it('dispara onClick cuando está habilitado', async () => {
    const onClick = vi.fn();
    render(
      <Button data-testid="btn" onClick={onClick}>
        Click
      </Button>
    );
    await userEvent.click(screen.getByTestId('btn'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('no dispara onClick si está disabled', async () => {
    const onClick = vi.fn();
    render(
      <Button data-testid="btn" disabled onClick={onClick}>
        Click
      </Button>
    );
    const btn = screen.getByTestId('btn');
    expect(btn).toBeDisabled();
    await userEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('muestra spinner y bloquea interacción en loading', async () => {
    const onClick = vi.fn();
    render(
      <Button data-testid="btn" loading onClick={onClick}>
        Loading
      </Button>
    );
    const btn = screen.getByTestId('btn');
    expect(btn).toBeDisabled();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    await userEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it.each([['submit' as const], ['reset' as const], ['button' as const]])(
    'soporta type="%s"',
    async (type) => {
      render(
        <Button data-testid="btn" type={type}>
          X
        </Button>
      );
      expect(screen.getByTestId('btn')).toHaveAttribute('type', type);
    }
  );

  it.each([['primary' as const], ['secondary' as const], ['success' as const], ['error' as const]])(
    'renderiza variante "%s"',
    (variant) => {
      render(
        <Button data-testid="btn" variant={variant}>
          {variant}
        </Button>
      );
      expect(screen.getByTestId('btn')).toBeInTheDocument();
    }
  );

  it.each([['small' as const], ['medium' as const], ['large' as const]])(
    'renderiza size "%s"',
    (size) => {
      render(
        <Button data-testid="btn" size={size}>
          size
        </Button>
      );
      expect(screen.getByTestId('btn')).toBeInTheDocument();
    }
  );

  it.each([['rounded' as const], ['square' as const], ['pill' as const]])(
    'renderiza shape "%s"',
    (shape) => {
      render(
        <Button data-testid="btn" shape={shape}>
          shape
        </Button>
      );
      expect(screen.getByTestId('btn')).toBeInTheDocument();
    }
  );

  it('renderiza start y end icon', () => {
    render(
      <Button
        data-testid="btn"
        startIcon={<span data-testid="start">S</span>}
        endIcon={<span data-testid="end">E</span>}
      >
        Iconos
      </Button>
    );
    expect(screen.getByTestId('btn')).toBeInTheDocument();
    expect(screen.getByTestId('start')).toBeInTheDocument();
    expect(screen.getByTestId('end')).toBeInTheDocument();
  });
});
