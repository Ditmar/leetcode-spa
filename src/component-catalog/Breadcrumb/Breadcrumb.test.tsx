import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';

import { Breadcrumb } from './Breadcrumb';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Breadcrumb', href: '/breadcrumb' },
];

describe('Breadcrumb', () => {
  test('renders full breadcrumb when not collapsed', () => {
    render(<Breadcrumb items={items} maxItems={5} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();
    expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
  });

  test('last item has aria-current="page"', () => {
    render(<Breadcrumb items={items} maxItems={5} />);

    const lastItem = screen.getByText('Breadcrumb');
    expect(lastItem).toHaveAttribute('aria-current', 'page');
  });
});
