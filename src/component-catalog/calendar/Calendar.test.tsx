import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { Calendar } from './Calendar';

import type { UserEvent } from '@testing-library/user-event';

const REF = dayjs('2025-04-15');

const getDay = (day: number) => {
  const grid = screen.getByRole('grid');

  return within(grid)
    .getAllByRole('gridcell')
    .find((el) => el.textContent === String(day));
};

const clickDay = async (user: UserEvent, day: number) => {
  const cell = getDay(day);
  if (!cell) throw new Error(`Day ${day} not found`);
  await user.click(cell);
};

describe('Calendar — single', () => {
  it('calls onChange', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<Calendar mode="single" value={REF} onChange={onChange} />);

    await clickDay(user, 10);

    expect(onChange).toHaveBeenCalled();
  });

  it('selects day', async () => {
    const user = userEvent.setup();

    render(<Calendar mode="single" value={REF} />);

    await clickDay(user, 20);

    expect(getDay(20)).toHaveAttribute('aria-selected', 'true');
  });
});

describe('Calendar — range', () => {
  it('selects range', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<Calendar mode="range" value={{ start: null, end: null }} onChange={onChange} />);

    await clickDay(user, 10);
    await clickDay(user, 20);

    expect(onChange).toHaveBeenCalledTimes(2);
  });
});

describe('Calendar — multi', () => {
  it('adds multiple', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<Calendar mode="multi" value={[]} onChange={onChange} />);

    await clickDay(user, 5);
    await clickDay(user, 12);

    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
