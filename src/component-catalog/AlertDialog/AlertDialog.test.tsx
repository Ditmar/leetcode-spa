import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import AlertDialog from './AlertDialog';

const renderAlertDialog = (props = {}) => {
  return render(
    <AlertDialog
      open
      title="Delete item"
      description="This action cannot be undone. Please confirm to continue."
      severity="warning"
      showConfirmButton
      showCancelButton
      confirmLabel="Delete"
      cancelLabel="Cancel"
      {...props}
    />
  );
};

describe('AlertDialog', () => {
  it('renders the dialog when open is true', () => {
    renderAlertDialog();

    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    expect(screen.getByText('Delete item')).toBeInTheDocument();
    expect(
      screen.getByText('This action cannot be undone. Please confirm to continue.')
    ).toBeInTheDocument();
  });

  it('does not render the dialog when open is false', () => {
    renderAlertDialog({ open: false });

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  });

  it('calls onConfirm when the confirm button is clicked', async () => {
    const user = userEvent.setup();
    const onConfirm = vi.fn();

    renderAlertDialog({ onConfirm });

    await user.click(screen.getByRole('button', { name: 'Delete' }));

    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when the cancel button is clicked', async () => {
    const user = userEvent.setup();
    const onCancel = vi.fn();

    renderAlertDialog({ onCancel });

    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('calls onAcknowledge when the acknowledge button is clicked', async () => {
    const user = userEvent.setup();
    const onAcknowledge = vi.fn();

    render(
      <AlertDialog
        open
        title="Changes saved"
        description="Your profile was updated successfully."
        severity="success"
        showAcknowledgeButton
        acknowledgeLabel="Got it"
        onAcknowledge={onAcknowledge}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Got it' }));

    expect(onAcknowledge).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape is pressed', async () => {
    const onClose = vi.fn();

    renderAlertDialog({ onClose });

    const dialog = screen.getByRole('alertdialog');

    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });
});
