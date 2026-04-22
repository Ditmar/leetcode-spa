import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

describe('Badge', () => {
  it('renders numeric badge content', () => {
    const { getByText } = render(
      <Badge badgeContent={8}>
        <div>target</div>
      </Badge>
    );

    expect(getByText('8').textContent).toBe('8');
  });

  it('renders max overflow using the MUI max prop', () => {
    const { getByText } = render(
      <Badge badgeContent={120} max={99}>
        <div>target</div>
      </Badge>
    );

    expect(getByText('99+').textContent).toBe('99+');
  });

  it('renders dot variant', () => {
    const { container } = render(
      <Badge variant="dot">
        <div>target</div>
      </Badge>
    );

    expect(container.querySelector('.MuiBadge-dot')).not.toBeNull();
  });

  it('renders zero when showZero is true', () => {
    const { getByText } = render(
      <Badge badgeContent={0} showZero>
        <div>target</div>
      </Badge>
    );

    expect(getByText('0').textContent).toBe('0');
  });

  it('applies the requested MUI color class', () => {
    const { container } = render(
      <Badge badgeContent={1} color="success">
        <div>target</div>
      </Badge>
    );

    expect(container.querySelector('.MuiBadge-colorSuccess')).not.toBeNull();
  });
});
