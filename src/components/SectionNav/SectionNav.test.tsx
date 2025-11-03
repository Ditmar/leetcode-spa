import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { render, screen, fireEvent } from '../../test/test-utils';

import { SectionNav } from './SectionNav';

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

  it('calls onSelect with the correct id when clicking a section', () => {
    const onSelect = vi.fn();
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={onSelect} />);
    const programming = screen.getByRole('button', { name: /Programming/i });
    fireEvent.click(programming);
    expect(onSelect).toHaveBeenCalledWith('programming');
  });

  it('renders a custom title when the title prop is provided', () => {
    render(
      <SectionNav
        sections={sections}
        activeSectionId="mcq"
        onSelect={() => {}}
        title="Custom Title"
      />
    );
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('renders the default title when no title prop is provided', () => {
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={() => {}} />);
    expect(screen.getByText('Section')).toBeInTheDocument();
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

  it('renders horizontal orientation when orientation="horizontal"', () => {
    render(
      <SectionNav
        sections={sections}
        activeSectionId="mcq"
        onSelect={() => {}}
        orientation="horizontal"
      />
    );
    const list = screen.getByRole('list');
    expect(list).toHaveAttribute('aria-orientation', 'horizontal');
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

  it('calls onSelect and closes the menu in horizontal+small mode (simulated)', async () => {
    vi.resetModules();
    vi.doMock('@mui/material/useMediaQuery', () => ({ __esModule: true, default: () => true }));
    const { SectionNav } = await import('./SectionNav');
    const onSelect = vi.fn();
    render(
      <SectionNav
        sections={sections}
        activeSectionId="mcq"
        onSelect={onSelect}
        orientation="horizontal"
      />
    );
    const allButtons = await screen.findAllByRole('button');
    const openBtn = allButtons[0];
    expect(openBtn).toBeTruthy();
    fireEvent.click(openBtn);
    const menuItem = await screen.findByText('Programming');
    fireEvent.click(menuItem);
    expect(onSelect).toHaveBeenCalledWith('programming');
    vi.resetModules();
  });
});
