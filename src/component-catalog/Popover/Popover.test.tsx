import { Button, Typography } from '@mui/material';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { Popover } from './Popover';
import { getAutoFlippedPlacement } from './Popover.utils';

describe('Popover Component', () => {
  test('opens popover when trigger is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Popover trigger={<Button>Open Popover</Button>}>
        <Typography>Popover content</Typography>
      </Popover>
    );

    await user.click(screen.getByTestId('popover-trigger'));

    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  test('closes popover when Escape key is pressed', async () => {
    const user = userEvent.setup();

    render(
      <Popover trigger={<Button>Open Popover</Button>}>
        <Typography>Popover content</Typography>
      </Popover>
    );

    await user.click(screen.getByTestId('popover-trigger'));
    expect(screen.getByText('Popover content')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });
  });

  test('closes popover on click outside', async () => {
    const user = userEvent.setup();

    render(
      <>
        <Button>Outside button</Button>
        <Popover trigger={<Button>Open Popover</Button>}>
          <Typography>Popover content</Typography>
        </Popover>
      </>
    );

    await user.click(screen.getByTestId('popover-trigger'));
    expect(screen.getByText('Popover content')).toBeInTheDocument();

    const backdrop = document.querySelector('.MuiBackdrop-root');

    expect(backdrop).toBeTruthy();

    await user.click(backdrop as Element);

    await waitFor(() => {
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });
  });

  test('renders arbitrary content inside popover body', async () => {
    const user = userEvent.setup();

    render(
      <Popover trigger={<Button>Open Popover</Button>}>
        <div>
          <Typography>Custom title</Typography>
          <Button>Custom action</Button>
        </div>
      </Popover>
    );

    await user.click(screen.getByTestId('popover-trigger'));

    expect(screen.getByText('Custom title')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /custom action/i })).toBeInTheDocument();
  });

  test('supports arrow indicator', async () => {
    const user = userEvent.setup();

    render(
      <Popover trigger={<Button>Open Popover</Button>} showArrow>
        <Typography>Popover content</Typography>
      </Popover>
    );

    await user.click(screen.getByTestId('popover-trigger'));

    expect(screen.getByTestId('popover-arrow')).toBeInTheDocument();
  });

  test('calls onOpenChange when opening and closing', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    render(
      <Popover trigger={<Button>Open Popover</Button>} onOpenChange={onOpenChange}>
        <Typography>Popover content</Typography>
      </Popover>
    );

    await user.click(screen.getByTestId('popover-trigger'));
    expect(onOpenChange).toHaveBeenCalledWith(true);

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });
  });

  test('sets aria attributes on trigger wrapper', async () => {
    const user = userEvent.setup();

    render(
      <Popover trigger={<Button>Open Popover</Button>}>
        <Typography>Popover content</Typography>
      </Popover>
    );

    const trigger = screen.getByTestId('popover-trigger');

    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  test('renders with top placement', async () => {
    const user = userEvent.setup();

    render(
      <Popover trigger={<Button>Open Popover</Button>} placement="top">
        <Typography>Popover content</Typography>
      </Popover>
    );

    await user.click(screen.getByTestId('popover-trigger'));

    const content = screen.getByTestId('popover-content');

    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute('data-placement', 'top');
  });

  test('auto-flips placement when there is not enough space', () => {
    const placement = getAutoFlippedPlacement({
      placement: 'bottom',
      anchorRect: {
        x: 100,
        y: 260,
        width: 120,
        height: 40,
        top: 260,
        right: 220,
        bottom: 300,
        left: 100,
        toJSON: () => undefined,
      },
      popoverWidth: 320,
      popoverHeight: 200,
      viewportWidth: 1024,
      viewportHeight: 300,
    });

    expect(placement).toBe('top');
  });
});
