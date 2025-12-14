import { createTheme } from '@mui/material/styles';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { render, screen } from '../../test/test-utils';

import { SectionNav } from './SectionNav';

import type { Theme } from '@mui/material/styles';

const sections = [
  { id: 'mcq', label: 'MCQ' },
  { id: 'programming', label: 'Programming' },
];

describe('SectionNav', () => {
  it('marks the active section based on activeSectionId (aria-current)', () => {
    render(<SectionNav sections={sections} activeSectionId="programming" onSelect={() => {}} />);
    const activeButton = screen.getByRole('button', { name: /Programming/i });
    expect(activeButton).toHaveAttribute('aria-current', 'page');
  });

  it('calls onSelect with the correct id when clicking a section', async () => {
    const onSelect = vi.fn();
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={onSelect} />);
    const programming = screen.getByRole('button', { name: /Programming/i });

    await userEvent.click(programming);

    expect(onSelect).toHaveBeenCalledWith('programming');
  });

  it('renders a custom title when the title prop is provided', () => {
    const baseTheme = createTheme();
    const themeWithShadows = {
      ...baseTheme,
      // cast via unknown to avoid strict Theme typing while remaining explicit (no `any`)
      customShadows: { z4: '0 4px 12px rgba(0,0,0,0.08)' },
    } as unknown as Theme;

    render(
      <SectionNav
        sections={sections}
        activeSectionId="mcq"
        onSelect={() => {}}
        title="Custom Title"
      />,
      { theme: themeWithShadows }
    );

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('does not render a title when no title prop is provided', () => {
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={() => {}} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Navigation');
  });

  it('applies the passed className to the root element', () => {
    render(
      <SectionNav
        sections={sections}
        activeSectionId="mcq"
        onSelect={() => {}}
        className="test-class"
      />
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('test-class');
  });

  it('defaults to vertical orientation', () => {
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={() => {}} />);
    const list = screen.getByRole('list');
    expect(list).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders the section labels', () => {
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={() => {}} />);
    expect(screen.getByText('MCQ')).toBeInTheDocument();
    expect(screen.getByText('Programming')).toBeInTheDocument();
  });

  it('updates active when activeSectionId prop changes', () => {
    const { rerender } = render(
      <SectionNav sections={sections} activeSectionId="mcq" onSelect={() => {}} />
    );

    expect(screen.getByRole('button', { name: /MCQ/i })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: /Programming/i })).not.toHaveAttribute(
      'aria-current'
    );

    rerender(<SectionNav sections={sections} activeSectionId="programming" onSelect={() => {}} />);

    expect(screen.getByRole('button', { name: /Programming/i })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('clicking a section updates aria-current even without onSelect', async () => {
    render(<SectionNav sections={sections} />);
    const programming = screen.getByRole('button', { name: /Programming/i });

    await userEvent.click(programming);

    expect(programming).toHaveAttribute('aria-current', 'page');
  });

  it('calls onSelect and marks clicked section as active', async () => {
    const onSelect = vi.fn();
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={onSelect} />);
    const programming = screen.getByRole('button', { name: /Programming/i });

    await userEvent.click(programming);

    expect(onSelect).toHaveBeenCalledWith('programming');
    expect(programming).toHaveAttribute('aria-current', 'page');
  });
});
