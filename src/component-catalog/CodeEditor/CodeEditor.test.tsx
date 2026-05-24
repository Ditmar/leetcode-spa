import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CodeEditor } from './CodeEditor';

import type { ReactNode } from 'react';

vi.mock('@monaco-editor/react', () => ({
  default: ({ value, onChange }: { value: string; onChange: (value?: string) => void }) => (
    <textarea
      aria-label="code editor"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  ),
}));

vi.mock('react-resizable-panels', () => ({
  PanelGroup: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Panel: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  PanelResizeHandle: ({ children }: { children: ReactNode }) => <div>{children}</div>,
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
      runtimeMs: 20,
      memoryMb: 10,
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
      runtimeMs: 20,
      memoryMb: 10,
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

    fireEvent.click(screen.getByLabelText('reset code'));

    expect(onReset).toHaveBeenCalled();
  });
});
