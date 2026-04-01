// ========================= Breadcrumb.test.tsx =========================
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';

import { Breadcrumb } from './Breadcrumb';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Breadcrumb', href: '/breadcrumb' },
];

test('renders full breadcrumb', () => {
  render(<Breadcrumb items={items} maxItems={5} />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('collapses items', () => {
  render(<Breadcrumb items={items} maxItems={2} />);
  expect(screen.getByText('...')).toBeInTheDocument();
});

test('expands on click', () => {
  render(<Breadcrumb items={items} maxItems={2} />);
  fireEvent.click(screen.getByText('...'));
  expect(screen.getByText('Components')).toBeInTheDocument();
});
