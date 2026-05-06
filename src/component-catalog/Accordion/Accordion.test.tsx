import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { Accordion } from './Accordion';

import type { AccordionItem } from './Accordion.types';

const mockItems: AccordionItem[] = [
  { id: '1', summary: 'Summary 1', details: 'Details 1' },
  { id: '2', summary: 'Summary 2', details: 'Details 2', defaultExpanded: true },
  { id: '3', summary: 'Summary 3', details: 'Details 3', disabled: true },
];

describe('Accordion', () => {
  it('renders all summaries', () => {
    render(<Accordion items={mockItems} />);
    expect(screen.getByText('Summary 1')).toBeInTheDocument();
    expect(screen.getByText('Summary 2')).toBeInTheDocument();
    expect(screen.getByText('Summary 3')).toBeInTheDocument();
  });

  it('respects defaultExpanded', () => {
    render(<Accordion items={mockItems} />);
    const summary1 = screen.getByTestId('accordion-summary-1');
    const summary2 = screen.getByTestId('accordion-summary-2');
    expect(summary2).toHaveAttribute('aria-expanded', 'true');
    expect(summary1).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles expansion on click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} variant="multiple" />);
    const summary1 = screen.getByTestId('accordion-summary-1');
    expect(summary1).toHaveAttribute('aria-expanded', 'false');
    await user.click(summary1);
    expect(summary1).toHaveAttribute('aria-expanded', 'true');
    await user.click(summary1);
    expect(summary1).toHaveAttribute('aria-expanded', 'false');
  });

  it('single variant expands only one at a time', async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} variant="single" />);
    const summary1 = screen.getByTestId('accordion-summary-1');
    const summary2 = screen.getByTestId('accordion-summary-2');
    await user.click(summary1);
    expect(summary1).toHaveAttribute('aria-expanded', 'true');
    expect(summary2).toHaveAttribute('aria-expanded', 'false');
    await user.click(summary2);
    expect(summary1).toHaveAttribute('aria-expanded', 'false');
    expect(summary2).toHaveAttribute('aria-expanded', 'true');
  });

  it('disabled item does not expand', async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);
    const summary3 = screen.getByTestId('accordion-summary-3');
    expect(summary3).toHaveAttribute('aria-expanded', 'false');
    await user.click(summary3);
    expect(summary3).toHaveAttribute('aria-expanded', 'false');
  });

  it('controlled mode works', async () => {
    const user = userEvent.setup();
    const onExpandedChange = vi.fn();
    render(<Accordion items={mockItems} expandedIds={['1']} onExpandedChange={onExpandedChange} />);
    const summary1 = screen.getByTestId('accordion-summary-1');
    expect(summary1).toHaveAttribute('aria-expanded', 'true');
    await user.click(summary1);
    expect(onExpandedChange).toHaveBeenCalledWith([]);
  });

  it('has accessible ARIA attributes', () => {
    render(<Accordion items={mockItems} />);
    const summary = screen.getByRole('button', { name: 'Summary 1' });
    expect(summary).toHaveAttribute('aria-expanded', 'false');
  });
});
