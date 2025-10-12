import { render, screen, fireEvent } from '../../test/test-utils';
import { describe, it, expect, vi } from 'vitest';
import ConsoleIO from './ConsoleIO';

describe('ConsoleIO', () => {
    it('renders tabs and areas', () => {
        render(<ConsoleIO sampleValue="" customValue="c" />);
        expect(screen.getByText('Sample')).toBeInTheDocument();
        expect(screen.getByText('Custom')).toBeInTheDocument();
    });

    it('switches to custom tab when clicked and keeps value', () => {
        render(<ConsoleIO sampleValue="s" customValue="c" />);
        const customTab = screen.getByText('Custom');
        fireEvent.click(customTab);
        const customArea = screen.getByLabelText('custom-input');
        expect(customArea).toBeInTheDocument();
        // value should equal passed prop
        expect((customArea as HTMLInputElement).value).toBe('c');
    });

    it('updates custom on change and triggers callback', () => {
        const onCustom = vi.fn();
        render(<ConsoleIO customValue="" onCustomChange={onCustom} />);
        fireEvent.click(screen.getByText('Custom'));
        const customArea = screen.getByLabelText('custom-input') as HTMLInputElement;
        fireEvent.change(customArea, { target: { value: 'hello' } });
        expect(onCustom).toHaveBeenCalledWith('hello');
    });

    it('updates sample on change and triggers callback', () => {
        const onSample = vi.fn();
        render(<ConsoleIO sampleValue="" onSampleChange={onSample} />);
        // sample tab is default
        const sampleArea = screen.getByLabelText('sample-input') as HTMLInputElement;
        fireEvent.change(sampleArea, { target: { value: 'new-s' } });
        expect(onSample).toHaveBeenCalledWith('new-s');
    });
});
