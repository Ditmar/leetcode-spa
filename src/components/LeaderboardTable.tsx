import React, { useEffect, useState } from 'react';
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
import type { User } from './LeaderboardPage/LeaderboardPage.types';
import {
  StyledTableContainer,
  StyledTable,
  StyledTableCell,
  RankBadge,
} from './LeaderboardPage/LeaderboardPage.styles';

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

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedUsers = users.slice(start, end);

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: 80 }}>Rango</StyledTableCell>
            <StyledTableCell>Usuario</StyledTableCell>
            <StyledTableCell align="right" sx={{ width: 120 }}>Puntos</StyledTableCell>
            <StyledTableCell align="right" sx={{ width: 150 }}>
              Pruebas Aprobadas
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow
              key={user.id}
              sx={{
                backgroundColor: user.isCurrentUser ? 'action.selected' : 'transparent',
                '&:hover': {
                  backgroundColor: user.isCurrentUser
                    ? 'action.hover'
                    : 'action.hover',
                },
              }}
            >
              <StyledTableCell>
                <RankBadge rank={user.rank}>
                  {user.rank}
                </RankBadge>
              </StyledTableCell>

              <StyledTableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar src={user.avatar} alt={user.fullName} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="medium">
                      {user.fullName}
                      {user.isCurrentUser && (
                        <Typography
                          component="span"
                          variant="caption"
                          color="primary"
                          sx={{ ml: 1 }}
                        >
                          (Tú)
                        </Typography>
                      )}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      @{user.username}
                    </Typography>
                  </Box>
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
              <TableCell colSpan={4}>
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
              colSpan={4}
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
