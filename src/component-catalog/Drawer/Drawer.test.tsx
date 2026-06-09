import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Drawer } from './Drawer';

vi.mock('./Drawer.hook', () => ({
  useDrawer: vi.fn(() => ({
    isMobile: false,
  })),
}));

describe('Drawer', () => {
  it('renders title when open', () => {
    render(
      <Drawer open title="Test Drawer">
        Content
      </Drawer>
    );
    expect(screen.getByText(/test drawer/i)).toBeInTheDocument();
  });

  it('does not render content when closed', () => {
    render(
      <Drawer open={false} title="Hidden Drawer">
        Hidden Content
      </Drawer>
    );
    expect(screen.queryByText(/hidden drawer/i)).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked and drawer closes', async () => {
    const user = userEvent.setup();

    const TestDrawer = () => {
      const [open, setOpen] = React.useState(true);
      return (
        <Drawer open={open} title="Test" onClose={() => setOpen(false)}>
          Content
        </Drawer>
      );
    };

    render(<TestDrawer />);

    expect(screen.getByRole('heading', { name: /^test$/i })).toBeInTheDocument();

    await user.click(screen.getByLabelText(/close drawer/i));

    expect(screen.queryByRole('heading', { name: /^test$/i })).not.toBeInTheDocument();
  });

  it('does not show close button when showCloseButton is false', () => {
    render(
      <Drawer open title="No Close" showCloseButton={false}>
        Content
      </Drawer>
    );
    expect(screen.queryByLabelText(/close drawer/i)).not.toBeInTheDocument();
  });

  it('renders right anchor correctly', () => {
    render(<Drawer open anchor="right">Right Content</Drawer>);
    expect(screen.getByText(/right content/i)).toBeInTheDocument();
  });

  it('renders left anchor correctly', () => {
    render(<Drawer open anchor="left">Left Content</Drawer>);
    expect(screen.getByText(/left content/i)).toBeInTheDocument();
  });

  it('renders top anchor correctly', () => {
    render(<Drawer open anchor="top">Top Content</Drawer>);
    expect(screen.getByText(/top content/i)).toBeInTheDocument();
  });

  it('renders bottom anchor correctly', () => {
    render(<Drawer open anchor="bottom">Bottom Content</Drawer>);
    expect(screen.getByText(/bottom content/i)).toBeInTheDocument();
  });

  it('renders temporary variant correctly', () => {
    render(<Drawer open variant="temporary" anchor="right">Temporary</Drawer>);
    expect(screen.getByText(/temporary/i)).toBeInTheDocument();
  });

  it('renders persistent variant correctly', () => {
    render(<Drawer open variant="persistent" anchor="right">Persistent</Drawer>);
    expect(screen.getByText(/persistent/i)).toBeInTheDocument();
  });

  it('renders permanent variant correctly', () => {
    render(<Drawer open variant="permanent" anchor="right">Permanent</Drawer>);
    expect(screen.getByText(/permanent/i)).toBeInTheDocument();
  });

  it('renders SwipeableDrawer on mobile', async () => {
    const { useDrawer } = await import('./Drawer.hook');
    (useDrawer as ReturnType<typeof vi.fn>).mockReturnValue({ isMobile: true });

    render(
      <Drawer open swipeable variant="temporary" drawerAriaLabel="swipeable-drawer">
        Swipe Content
      </Drawer>
    );

    expect(screen.getByLabelText(/swipeable-drawer/i)).toBeInTheDocument();
    expect(screen.getByText(/swipe content/i)).toBeInTheDocument();
  });
});