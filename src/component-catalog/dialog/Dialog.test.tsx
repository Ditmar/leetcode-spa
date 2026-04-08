import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Dialog } from './Dialog';

describe('Dialog', () => {
  it('renders when open', () => {
    const { getByTestId } = render(<Dialog open={true}>Content</Dialog>);
    expect(getByTestId('dialog')).toBeTruthy();
  });

  it('calls onClose when clicking outside (non-persistent)', () => {
    const onClose = vi.fn();
    const { getByRole } = render(
      <Dialog open={true} onClose={onClose}>
        Content
      </Dialog>
    );

    fireEvent.keyDown(getByRole('dialog'), { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('does NOT close when persistent', () => {
    const onClose = vi.fn();
    const { getByRole } = render(
      <Dialog open={true} onClose={onClose} persistent>
        Content
      </Dialog>
    );

    fireEvent.keyDown(getByRole('dialog'), { key: 'Escape' });
    expect(onClose).not.toHaveBeenCalled();
  });
});