import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, test, expect, vi } from 'vitest';

import { ProblemList } from './ProblemList';

vi.mock('./ProblemList.constants', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./ProblemList.constants')>();

  const DummyIcon = ({ 'data-testid': testId }: { 'data-testid'?: string }) => (
    <span data-testid={testId}>•</span>
  );

  return {
    ...actual,
    STATUS_ICON_MAP: {
      solved: DummyIcon,
      attempted: DummyIcon,
      unsolved: DummyIcon,
    },
  };
});

// 🔴 CORRECCIÓN AQUÍ: Cambiamos '1' y '2' a números (1 y 2) para cumplir con el tipo original de Problem
const mockProblems = [
  {
    id: 1,
    idNumber: 1,
    title: 'Two Sum',
    difficulty: 'Easy' as const,
    acceptanceRate: 49.5,
    status: 'solved' as const,
  },
  {
    id: 2,
    idNumber: 2,
    title: 'Add Two Numbers',
    difficulty: 'Medium' as const,
    acceptanceRate: 41.2,
    status: 'attempted' as const,
  },
];

describe('ProblemList Component', () => {
  test('debe renderizar el encabezado "Problems" correctamente', () => {
    render(
      <ProblemList
        problems={mockProblems}
        selectedProblemId={1} // Cambiado a número también
        onSelectProblem={vi.fn()}
      />
    );

    expect(screen.getByText('Problems')).toBeInTheDocument();
  });

  test('debe listar los títulos de los problemas con su ID numérico', () => {
    render(
      <ProblemList
        problems={mockProblems}
        selectedProblemId={1} // Cambiado a número también
        onSelectProblem={vi.fn()}
      />
    );

    expect(screen.getByText('1. Two Sum')).toBeInTheDocument();
    expect(screen.getByText('2. Add Two Numbers')).toBeInTheDocument();
  });

  test('debe disparar la función onSelectProblem al hacer clic en un ítem', () => {
    const handleSelectProblem = vi.fn();

    render(
      <ProblemList
        problems={mockProblems}
        selectedProblemId={1} // Cambiado a número también
        onSelectProblem={handleSelectProblem}
      />
    );

    const problemItem = screen.getByText('2. Add Two Numbers').closest('div');
    if (problemItem) {
      fireEvent.click(problemItem);
    }

    // Al hacer clic en el segundo ítem, esperamos que devuelva el número entero 2
    expect(handleSelectProblem).toHaveBeenCalledWith(2);
  });
});
