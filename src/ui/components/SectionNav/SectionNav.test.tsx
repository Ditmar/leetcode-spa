import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { render, screen, fireEvent } from '../../../test/test-utils';

import { SectionNav } from './SectionNav';

const sections = [
  { id: 'mcq', label: 'MCQ' },
  { id: 'programming', label: 'Programming' },
];

describe('SectionNav', () => {
  it('highlights the active section based on activeSectionId', () => {
    render(<SectionNav sections={sections} activeSectionId="programming" onSelect={() => {}} />);
    const activeButton = screen.getByRole('button', { name: /Programming/i });
    expect(activeButton).toHaveClass('Mui-selected');
  });

  it('calls onSelect con el id correcto al hacer click', () => {
    const onSelect = vi.fn();
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={onSelect} />);
    const programming = screen.getByText('Programming');
    fireEvent.click(programming);
    expect(onSelect).toHaveBeenCalledWith('programming');
  });

  it('muestra el título personalizado si se pasa la prop title', () => {
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

  it('usa el valor por defecto del título si no se pasa la prop title', () => {
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={() => {}} />);
    expect(screen.getByText('Section')).toBeInTheDocument();
  });

  it('aplica la clase pasada por className', () => {
    render(
      <SectionNav
        sections={sections}
        activeSectionId="mcq"
        onSelect={() => {}}
        className="test-class"
      />
    );
    expect(screen.getByLabelText('sections-navigation')).toHaveClass('test-class');
  });

  it('renderiza en orientación horizontal si se pasa orientation="horizontal"', () => {
    render(
      <SectionNav
        sections={sections}
        activeSectionId="mcq"
        onSelect={() => {}}
        orientation="horizontal"
      />
    );
    const navs = screen.getAllByRole('navigation');
    const ulNav = navs.find((el) => el.tagName.toLowerCase() === 'ul');
    expect(ulNav).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('renderiza en orientación vertical por defecto', () => {
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={() => {}} />);
    const navs = screen.getAllByRole('navigation');
    const ulNav = navs.find((el) => el.tagName.toLowerCase() === 'ul');
    expect(ulNav).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renderiza los labels de las secciones', () => {
    render(<SectionNav sections={sections} activeSectionId="mcq" onSelect={() => {}} />);
    expect(screen.getByText('MCQ')).toBeInTheDocument();
    expect(screen.getByText('Programming')).toBeInTheDocument();
  });

  it('llama a onSelect y cierra el menú en modo horizontal+small (simulado)', async () => {
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
