import {
  TableBody,
  TableHead,
  TableRow,
  Avatar,
  Box,
  Typography,
  Paper,
  TableFooter,
  TableCell,
  TablePagination,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import {
  StyledTableContainer,
  StyledTable,
  StyledTableCell,
  RankBadge,
} from './LeaderboardPage.styles';

import type { User } from './LeaderboardPage.types';

interface LeaderboardTableProps {
  users: User[];
}

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ users }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  useEffect(() => {
    const maxPage = Math.max(0, Math.ceil(users.length / rowsPerPage) - 1);
    if (page > maxPage) setPage(0);
  }, [users.length, rowsPerPage, page]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedUsers = users.slice(start, end);

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable aria-label="Tabla de clasificación">
        <TableHead>
          <TableRow>
            <StyledTableCell component="th" scope="col" sx={{ width: 80 }}>
              Rango
            </StyledTableCell>

            <StyledTableCell component="th" scope="col">
              Nombre
            </StyledTableCell>
            <StyledTableCell component="th" scope="col">
              Usuario
            </StyledTableCell>

            <StyledTableCell component="th" scope="col" align="right" sx={{ width: 120 }}>
              Puntos
            </StyledTableCell>
            <StyledTableCell component="th" scope="col" align="right" sx={{ width: 150 }}>
              Pruebas Aprobadas
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow
              key={user.id}
              {...(user.isCurrentUser ? { 'aria-current': 'true' } : {})}
              sx={{
                backgroundColor: user.isCurrentUser ? 'action.selected' : 'transparent',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <StyledTableCell>
                <RankBadge rank={user.rank}>{user.rank}</RankBadge>
              </StyledTableCell>

              <StyledTableCell>
                <Typography variant="subtitle1" fontWeight="medium">
                  {user.fullName}
                  {user.isCurrentUser && (
                    <Typography component="span" variant="caption" color="primary" sx={{ ml: 1 }}>
                      (Tú)
                    </Typography>
                  )}
                </Typography>
              </StyledTableCell>

              <StyledTableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar src={user.avatar} alt={user.fullName} sx={{ width: 32, height: 32 }} />
                  <Typography variant="body2" color="text.secondary">
                    @{user.username}
                  </Typography>
                </Box>
              </StyledTableCell>

              <StyledTableCell align="right">
                <Typography variant="h6" color="primary" fontWeight="bold">
                  {user.points.toLocaleString()}
                </Typography>
              </StyledTableCell>

              <StyledTableCell align="right">
                <Typography variant="body1" fontWeight="medium">
                  {user.testsPassed}
                </Typography>
              </StyledTableCell>
            </TableRow>
          ))}

          {paginatedUsers.length === 0 && (
            <TableRow>
              <TableCell colSpan={5}>
                <Box py={3} textAlign="center">
                  <Typography variant="body2" color="text.secondary">
                    No hay usuarios para mostrar.
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              colSpan={5}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Filas por página"
              showFirstButton
              showLastButton
              component="span"
            />
          </TableRow>
        </TableFooter>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default LeaderboardTable;
