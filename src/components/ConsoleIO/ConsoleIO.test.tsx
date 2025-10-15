import { describe, it, expect, vi } from 'vitest';

import { render, screen, fireEvent } from '../../test/test-utils';

import { ConsoleIO } from './ConsoleIO';

describe('ConsoleIO', () => {
  it('renders tabs and sample area initially, then custom area when tab clicked', () => {
    render(<ConsoleIO sampleValue="s" customValue="c" data-testid="consoleio-root" />);

    // Verifica contenedor principal
    const root = screen.getByTestId('consoleio-root');
    expect(root).toBeInTheDocument();

    // Verifica tabs
    const sampleTab = screen.getByTestId('tab-sample');
    const customTab = screen.getByTestId('tab-custom');
    expect(sampleTab).toBeInTheDocument();
    expect(customTab).toBeInTheDocument();

    // Verifica que la pestaña sample se renderice por defecto
    fireEvent.click(sampleTab);
    const sampleArea = screen.getByTestId('input-sample') as HTMLTextAreaElement;
    expect(sampleArea).toBeInTheDocument();
    expect(sampleArea.value).toBe('s');

    // Cambia a la pestaña custom y verifica que aparezca
    fireEvent.click(customTab);
    const customArea = screen.getByTestId('input-custom') as HTMLTextAreaElement;
    expect(customArea).toBeInTheDocument();
    expect(customArea.value).toBe('c');
  });

  it('updates sample on change and triggers onSampleChange callback', () => {
    const onSample = vi.fn();
    render(<ConsoleIO sampleValue="" onSampleChange={onSample} data-testid="consoleio-root" />);

    const sampleArea = screen.getByTestId('input-sample') as HTMLTextAreaElement;
    fireEvent.change(sampleArea, { target: { value: 'new-s' } });
    expect(onSample).toHaveBeenCalledWith('new-s');
  });

  it('updates custom on change and triggers onCustomChange callback', () => {
    const onCustom = vi.fn();
    render(<ConsoleIO customValue="" onCustomChange={onCustom} data-testid="consoleio-root" />);

    // Cambia a la pestaña custom antes de escribir
    const customTab = screen.getByTestId('tab-custom');
    fireEvent.click(customTab);

    const customArea = screen.getByTestId('input-custom') as HTMLTextAreaElement;
    fireEvent.change(customArea, { target: { value: 'hello' } });
    expect(onCustom).toHaveBeenCalledWith('hello');
  });

  it('switches between tabs and keeps values', () => {
    render(<ConsoleIO sampleValue="s" customValue="c" data-testid="consoleio-root" />);

    const sampleTab = screen.getByTestId('tab-sample');
    const customTab = screen.getByTestId('tab-custom');

    // Por defecto, sample
    let sampleArea = screen.getByTestId('input-sample') as HTMLTextAreaElement;
    expect(sampleArea.value).toBe('s');

    // Cambia a custom
    fireEvent.click(customTab);
    const customArea = screen.getByTestId('input-custom') as HTMLTextAreaElement;
    expect(customArea.value).toBe('c');

    // Vuelve a sample y verifica que sigue con el valor inicial
    fireEvent.click(sampleTab);
    sampleArea = screen.getByTestId('input-sample') as HTMLTextAreaElement;
    expect(sampleArea.value).toBe('s');
  });
});
