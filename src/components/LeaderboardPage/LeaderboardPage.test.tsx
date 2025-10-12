// tests/components/LeaderboardTable.test.tsx
import React from 'react';
import { render, screen } from '../../test/test-utils';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import type { User } from './LeaderboardPage.types';
import { LeaderboardTable } from '../LeaderboardTable';

const users: User[] = [
    { id: '1', rank: 1, avatar: '/a1.jpg', fullName: 'Alice', username: 'alice', points: 5000, testsPassed: 60 },
    { id: '2', rank: 2, avatar: '/a2.jpg', fullName: 'Bob', username: 'bob', points: 4000, testsPassed: 40 },
    { id: '3', rank: 3, avatar: '/a3.jpg', fullName: 'Carol', username: 'carol', points: 3000, testsPassed: 30, isCurrentUser: true },
    { id: '4', rank: 4, avatar: '/a4.jpg', fullName: 'Dave', username: 'dave', points: 2000, testsPassed: 20 },
    { id: '5', rank: 5, avatar: '/a5.jpg', fullName: 'Eve', username: 'eve', points: 1000, testsPassed: 10 },
    { id: '6', rank: 6, avatar: '/a6.jpg', fullName: 'Frank', username: 'frank', points: 900, testsPassed: 5 },
];

describe('LeaderboardTable', () => {
    it('muestra filas según el array de usuarios y resalta al usuario actual', () => {
        render(<LeaderboardTable users={users} />);
        // filas visibles por default (rowsPerPage = 5 según componente)
        expect(screen.getByText('Alice')).toBeInTheDocument();
        expect(screen.getByText('Bob')).toBeInTheDocument();
        expect(screen.getByText('Carol')).toBeInTheDocument();
        // check current user marker "(Tú)"
        expect(screen.getByText(/\(Tú\)/)).toBeInTheDocument();
    });

    it('paginación: cambia de página y muestra la siguiente fila', async () => {
        render(<LeaderboardTable users={users} />);
        // Should show page 1 content (rows 0..4)
        expect(screen.queryByText('Frank')).not.toBeInTheDocument();

        // find next button (TablePagination renders buttons with aria-labels)
        const nextBtn = screen.getByLabelText('Go to next page');
        await userEvent.click(nextBtn);

        // after clicking, Frank should be visible (page 2)
        expect(await screen.findByText('Frank')).toBeInTheDocument();
    });

    it('muestra "No hay usuarios" si el arreglo está vacío', () => {
        render(<LeaderboardTable users={[]} />);
        expect(screen.getByText(/No hay usuarios para mostrar/i)).toBeInTheDocument();
    });
});
