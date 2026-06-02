import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CodeEditor } from './CodeEditor';

vi.mock('@monaco-editor/react', () => ({
  default: ({ value, onChange }: { value: string; onChange: (value?: string) => void }) => (
    <textarea
      aria-label="code editor"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  ),
}));

describe('CodeEditor', () => {
  it('changes language correctly', async () => {
    render(<CodeEditor />);

    fireEvent.mouseDown(screen.getByRole('combobox'));
    fireEvent.click(await screen.findByText('Python'));

    expect(screen.getByRole('combobox')).toHaveTextContent('Python');
  });

  it('calls run action', async () => {
    const onRun = vi.fn().mockResolvedValue({
      status: 'success',
      tests: [],
    });

    render(<CodeEditor onRun={onRun} />);

    fireEvent.click(screen.getByLabelText('run code'));

    await waitFor(() => {
      expect(onRun).toHaveBeenCalled();
    });
  });

  it('calls submit action', async () => {
    const onSubmit = vi.fn().mockResolvedValue({
      status: 'success',
      tests: [],
    });

    render(<CodeEditor onSubmit={onSubmit} />);

    fireEvent.click(screen.getByLabelText('submit code'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  it('shows execution output', () => {
    render(
      <CodeEditor
        result={{
          status: 'success',
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

    expect(screen.getByText(/Test case 1/i)).toBeInTheDocument();
  });

  it('shows error message when execution fails', () => {
    render(
      <CodeEditor
        result={{
          status: 'error',
          errorMessage: 'Compilation failed',
          tests: [],
        }}
      />
    );

    expect(screen.getByText('Compilation failed')).toBeInTheDocument();
  });

  it('shows failed test details', () => {
    render(
      <CodeEditor
        result={{
          status: 'error',
          tests: [
            {
              id: '1',
              name: 'Test case 1',
              passed: false,
              expected: '[0,1]',
              received: '[1,0]',
            },
          ],
        }}
      />
    );

    expect(screen.getByText(/✗ Test case 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Expected:/i)).toBeInTheDocument();
    expect(screen.getByText(/Received:/i)).toBeInTheDocument();
  });

  it('handles run without onRun callback', async () => {
    render(<CodeEditor />);

    fireEvent.click(screen.getByLabelText('run code'));

    await waitFor(() => {
      expect(screen.getByText(/Test case 1/i)).toBeInTheDocument();
    });
  });

  it('handles submit without onSubmit callback', async () => {
    render(<CodeEditor />);

    fireEvent.click(screen.getByLabelText('submit code'));

    await waitFor(() => {
      expect(screen.getByText(/Test case 1/i)).toBeInTheDocument();
    });
  });

  it('resets editor correctly', () => {
    const onReset = vi.fn();

    render(<CodeEditor onReset={onReset} />);

    fireEvent.click(screen.getByLabelText('reset code'));

    expect(onReset).toHaveBeenCalled();
  });
});
