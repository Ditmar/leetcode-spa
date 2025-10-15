import { describe, it, expect, vi } from 'vitest';

import { render, screen, fireEvent } from '../../test/test-utils';

import { ConsoleIO } from './ConsoleIO';

describe('ConsoleIO', () => {
  it('renders tabs and sample area initially, then custom area when tab clicked', () => {
    render(<ConsoleIO sampleValue="s" customValue="c" data-testid="consoleio-root" />);

    const root = screen.getByTestId('consoleio-root');
    expect(root).toBeInTheDocument();

    const sampleTab = screen.getByTestId('tab-sample');
    const customTab = screen.getByTestId('tab-custom');
    expect(sampleTab).toBeInTheDocument();
    expect(customTab).toBeInTheDocument();

    fireEvent.click(sampleTab);
    const sampleArea = screen.getByTestId('input-sample') as HTMLTextAreaElement;
    expect(sampleArea).toBeInTheDocument();
    expect(sampleArea.value).toBe('s');

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

    let sampleArea = screen.getByTestId('input-sample') as HTMLTextAreaElement;
    expect(sampleArea.value).toBe('s');

    fireEvent.click(customTab);
    const customArea = screen.getByTestId('input-custom') as HTMLTextAreaElement;
    expect(customArea.value).toBe('c');

    fireEvent.click(sampleTab);
    sampleArea = screen.getByTestId('input-sample') as HTMLTextAreaElement;
    expect(sampleArea.value).toBe('s');
  });
});
