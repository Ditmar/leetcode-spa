import { render, screen } from '../../test/test-utils';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
    it('renderiza con props por defecto', () => {
        render(<Button data-testid="btn">Hola</Button>);
        const btn = screen.getByTestId('btn');
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent('Hola');
        expect(btn).not.toBeDisabled();
        expect(btn).toHaveAttribute('type', 'button');
    });

    it('dispara onClick cuando está habilitado', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(<Button data-testid="btn" onClick={onClick}>Click</Button>);
        await user.click(screen.getByTestId('btn'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('no dispara onClick si está disabled', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(<Button data-testid="btn" disabled onClick={onClick}>Click</Button>);
        const btn = screen.getByTestId('btn');
        expect(btn).toBeDisabled();
        await user.click(btn);
        expect(onClick).not.toHaveBeenCalled();
    });

    it('muestra spinner y bloquea interacción en loading', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(<Button data-testid="btn" loading onClick={onClick}>Loading</Button>);
        const btn = screen.getByTestId('btn');
        expect(btn).toBeDisabled();
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
        await user.click(btn);
        expect(onClick).not.toHaveBeenCalled();
    });

    (['submit', 'reset', 'button'] as const).forEach((type) => {
        it(`soporta type="${type}"`, () => {
            render(<Button data-testid="btn" type={type}>{type}</Button>);
            expect(screen.getByTestId('btn')).toHaveAttribute('type', type);
        });
    });

    (['primary', 'secondary', 'success', 'error'] as const).forEach((variant) => {
        it(`renderiza variante "${variant}"`, () => {
            render(<Button data-testid="btn" variant={variant}>{variant}</Button>);
            expect(screen.getByTestId('btn')).toBeInTheDocument();
        });
    });

    (['small', 'medium', 'large'] as const).forEach((size) => {
        it(`renderiza size "${size}"`, () => {
            render(<Button data-testid="btn" size={size}>size</Button>);
            expect(screen.getByTestId('btn')).toBeInTheDocument();
        });
    });

    (['rounded', 'square', 'pill'] as const).forEach((shape) => {
        it(`renderiza shape "${shape}"`, () => {
            render(<Button data-testid="btn" shape={shape}>shape</Button>);
            expect(screen.getByTestId('btn')).toBeInTheDocument();
        });
    });

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
