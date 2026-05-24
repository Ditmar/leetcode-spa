import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CodeEditor } from './CodeEditor';

describe('CodeEditor', () => {
  it('changes language correctly', async () => {
    render(<CodeEditor />);

    const select = screen.getByRole('combobox');

    fireEvent.mouseDown(select);

    const option = await screen.findByText('Python');

    fireEvent.click(option);

    expect(screen.getByRole('combobox')).toHaveTextContent('Python');
  });

  it('calls run action', async () => {
    const onRun = vi.fn().mockResolvedValue({
      status: 'success',
      runtimeMs: 20,
      memoryMb: 10,
      tests: [],
    });

    render(<CodeEditor onRun={onRun} />);

    const runButton = screen.getByLabelText('run code');

    fireEvent.click(runButton);

    expect(onRun).toHaveBeenCalled();
  });

  it('calls submit action', async () => {
    const onSubmit = vi.fn().mockResolvedValue({
      status: 'success',
      runtimeMs: 20,
      memoryMb: 10,
      tests: [],
    });

    render(<CodeEditor onSubmit={onSubmit} />);

    const submitButton = screen.getByLabelText('submit code');

    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalled();
  });

  it('shows execution output', () => {
    render(
      <CodeEditor
        result={{
          status: 'success',
          runtimeMs: 24,
          memoryMb: 12,
          tests: [
            {
              id: '1',
              name: 'Test case 1',
              passed: true,
            },
          ],
        }}
      />
    );

    expect(screen.getByText(/Runtime:/i)).toBeInTheDocument();

    expect(screen.getByText(/Memory:/i)).toBeInTheDocument();

    expect(screen.getByText(/Test case 1/i)).toBeInTheDocument();
  });

  it('resets editor correctly', () => {
    const onReset = vi.fn();

    render(<CodeEditor onReset={onReset} />);

    const resetButton = screen.getByLabelText('reset code');

    fireEvent.click(resetButton);

    expect(onReset).toHaveBeenCalled();
  });
});
