import { render, screen } from '../../test/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { MenuBadge } from './MenuBadge';

describe('Button', () => {
    it('renderiza con props por defecto', () => {
        render(<MenuBadge data-testid="menuBadge" label="hola" />);
        const menuBadge = screen.getByTestId('menuBadge');
        expect(menuBadge).toBeInTheDocument();
        expect(menuBadge).toHaveTextContent('hola');
        expect(menuBadge).not.toBeDisabled();
    });
});
