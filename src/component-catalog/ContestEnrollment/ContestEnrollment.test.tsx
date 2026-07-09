import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ContestEnrollment } from './ContestEnrollment';

import type { ContestDetail } from '../../services/contests/contestsService.types';

const theme = createTheme();

const mockUpcoming: ContestDetail = {
  id: 1,
  title: 'Concurso de prueba',
  status: 'upcoming',
  startTime: new Date(Date.now() + 3_600_000).toISOString(),
  endTime: new Date(Date.now() + 7_200_000).toISOString(),
  problems: [],
  isRegistered: false,
};

const mockActive: ContestDetail = {
  ...mockUpcoming,
  id: 2,
  status: 'active',
};

const mockPast: ContestDetail = {
  ...mockUpcoming,
  id: 3,
  status: 'past',
};

function setup(contest: ContestDetail, overrides = {}) {
  const onEnroll = vi.fn().mockResolvedValue(undefined);
  const onStartContest = vi.fn();
  render(
    <ThemeProvider theme={theme}>
      <ContestEnrollment
        contest={contest}
        onEnroll={onEnroll}
        onStartContest={onStartContest}
        {...overrides}
      />
    </ThemeProvider>
  );
  return { onEnroll, onStartContest };
}

describe('ContestEnrollment', () => {
  it('muestra el título del concurso', () => {
    setup(mockUpcoming);
    expect(screen.getByText('Concurso de prueba')).toBeInTheDocument();
  });

  it('muestra chip "Próximo" para concurso upcoming', () => {
    setup(mockUpcoming);
    expect(screen.getByText('Próximo')).toBeInTheDocument();
  });

  it('muestra chip "En curso" para concurso active', () => {
    setup(mockActive);
    expect(screen.getByText('En curso')).toBeInTheDocument();
  });

  it('muestra chip "Finalizado" para concurso past', () => {
    setup(mockPast);
    expect(screen.getAllByText('Finalizado').length).toBeGreaterThan(0);
  });

  it('abre modal al hacer clic en Inscribirse', () => {
    setup(mockUpcoming);
    fireEvent.click(screen.getByText('Inscribirse'));
    expect(screen.getByText('Confirmar inscripción')).toBeInTheDocument();
  });

  it('llama onEnroll al confirmar inscripción', async () => {
    const { onEnroll } = setup(mockUpcoming);
    fireEvent.click(screen.getByText('Inscribirse'));
    fireEvent.click(screen.getByText('Confirmar'));
    await waitFor(() => expect(onEnroll).toHaveBeenCalledWith(1));
  });

  it('muestra botón "Iniciar concurso" para concurso activo', () => {
    setup(mockActive);
    expect(screen.getByText('Iniciar concurso')).toBeInTheDocument();
  });

  it('llama onStartContest al iniciar concurso', () => {
    const { onStartContest } = setup(mockActive);
    fireEvent.click(screen.getByText('Iniciar concurso'));
    expect(onStartContest).toHaveBeenCalledWith(2);
  });
});
