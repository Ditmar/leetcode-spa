import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

describe('Badge', () => {
  it('renders default standalone badge', () => {
    const { getByText } = render(
      <Badge display="standalone" badgeContent="Default" tone="default" />
    );

    expect(getByText('Default').textContent).toBe('Default');
  });

  it('renders numeric attached badge', () => {
    const { getByText } = render(
      <Badge display="attached" badgeContent={8}>
        <div>target</div>
      </Badge>
    );

    expect(getByText('8').textContent).toBe('8');
  });

  it('renders max overflow', () => {
    const { getByText } = render(
      <Badge display="attached" badgeContent={120} max={99}>
        <div>target</div>
      </Badge>
    );

    expect(getByText('99+').textContent).toBe('99+');
  });

  it('renders dot variant', () => {
    const { container } = render(
      <Badge display="attached" variant="dot">
        <div>target</div>
      </Badge>
    );

    const dot = container.querySelector('.MuiBadge-dot');
    expect(dot).not.toBeNull();
  });

  it('renders zero when showZero is true', () => {
    const { getByText } = render(
      <Badge display="attached" badgeContent={0} showZero>
        <div>target</div>
      </Badge>
    );

    expect(getByText('0').textContent).toBe('0');
  });

  it('renders attached badge with color', () => {
    const { container } = render(
      <Badge display="attached" badgeContent={1} color="success">
        <div>target</div>
      </Badge>
    );

    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).not.toBeNull();
  });

  it('applies accessibility attributes in standalone mode', () => {
    const { getByRole } = render(
      <Badge display="standalone" badgeContent="Accessible" tone="default" />
    );

    expect(getByRole('status')).toBeTruthy();
  });

  it('uses resolved content in attached mode for max overflow', () => {
    const { getByText } = render(
      <Badge display="attached" badgeContent={120} max={99}>
        <div>target</div>
      </Badge>
    );

    expect(getByText('99+').textContent).toBe('99+');
  });

  it('does not render standalone badge when invisible is true', () => {
    const { container } = render(<Badge display="standalone" badgeContent="Hidden" invisible />);

    expect(container.firstChild).toBeNull();
  });

  it('does not render standalone zero badge when showZero is false', () => {
    const { container } = render(<Badge display="standalone" badgeContent={0} />);

    expect(container.firstChild).toBeNull();
  });

  it('does not render standalone badge when badgeContent is empty', () => {
    const { container } = render(<Badge display="standalone" badgeContent="" />);

    expect(container.firstChild).toBeNull();
  });

  it('renders standalone dot badge', () => {
    const { container } = render(<Badge display="standalone" variant="dot" />);

    expect(container.firstChild).not.toBeNull();
  });
});
