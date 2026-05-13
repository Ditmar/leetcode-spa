import {
  render,
  screen,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import {
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { Drawer } from './Drawer';

describe('Drawer', () => {
  it('renders title correctly', () => {
    render(
      <Drawer
        open
        title="Test Drawer"
      >
        Content
      </Drawer>
    );

    expect(
      screen.getByText(
        /test drawer/i
      )
    ).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user =
      userEvent.setup();

    const onClose = vi.fn();

    render(
      <Drawer
        open
        title="Test"
        onClose={onClose}
      >
        Content
      </Drawer>
    );

    const button =
      screen.getByLabelText(
        /close drawer/i
      );

    await user.click(button);

    expect(
      onClose
    ).toHaveBeenCalled();
  });

  it('renders bottom drawer correctly', () => {
    render(
      <Drawer
        open
        anchor="bottom"
      >
        Content
      </Drawer>
    );

    expect(
      screen.getByText(
        /content/i
      )
    ).toBeInTheDocument();
  });

  it('renders right drawer correctly', () => {
    render(
      <Drawer
        open
        anchor="right"
      >
        Content
      </Drawer>
    );

    expect(
      screen.getByText(
        /content/i
      )
    ).toBeInTheDocument();
  });
});