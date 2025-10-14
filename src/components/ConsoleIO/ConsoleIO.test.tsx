import { render, screen, fireEvent } from '../../test/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { ConsoleIO } from './ConsoleIO';

describe('ConsoleIO', () => {
    it('renders tabs and areas', () => {
        render(<ConsoleIO sampleValue="" customValue="c" data-testid="consoleio-root" />);

        // Verifica que el contenedor principal esté en el documento
        const root = screen.getByTestId('consoleio-root');
        expect(root).toBeInTheDocument();

        // Tabs
        const sampleTab = screen.getByTestId('tab-sample');
        const customTab = screen.getByTestId('tab-custom');
        expect(sampleTab).toBeInTheDocument();
        expect(customTab).toBeInTheDocument();

        // Áreas de texto
        const sampleArea = screen.getByTestId('input-sample');
        const customArea = screen.getByTestId('input-custom');
        expect(sampleArea).toBeInTheDocument();
        expect(customArea).toBeInTheDocument();
    });

    it('switches to custom tab when clicked and keeps value', () => {
        render(<ConsoleIO sampleValue="s" customValue="c" data-testid="consoleio-root" />);

        const customTab = screen.getByTestId('tab-custom');
        fireEvent.click(customTab);

        const customArea = screen.getByTestId('input-custom') as HTMLInputElement;
        expect(customArea).toBeInTheDocument();
        expect(customArea.value).toBe('c');
    });

    it('updates custom on change and triggers callback', () => {
        const onCustom = vi.fn();
        render(<ConsoleIO customValue="" onCustomChange={onCustom} data-testid="consoleio-root" />);

        const customTab = screen.getByTestId('tab-custom');
        fireEvent.click(customTab);

        const customArea = screen.getByTestId('input-custom') as HTMLInputElement;
        fireEvent.change(customArea, { target: { value: 'hello' } });
        expect(onCustom).toHaveBeenCalledWith('hello');
    });

    it('updates sample on change and triggers callback', () => {
        const onSample = vi.fn();
        render(<ConsoleIO sampleValue="" onSampleChange={onSample} data-testid="consoleio-root" />);

        const sampleArea = screen.getByTestId('input-sample') as HTMLInputElement;
        fireEvent.change(sampleArea, { target: { value: 'new-s' } });
        expect(onSample).toHaveBeenCalledWith('new-s');
    });
});
