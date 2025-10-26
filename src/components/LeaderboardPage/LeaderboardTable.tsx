import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Box,
} from '@mui/material';
import React from 'react';

import ranking_1 from '../../assets/ranking_one.svg';
import ranking_3 from '../../assets/ranking_three.svg';
import ranking_2 from '../../assets/ranking_two.svg';

import { CustomAvatar, SyneTypography } from './LeaderboardPage.styles';

import type { LeaderboardUser } from './LeaderboardPage.types';

export const LeaderboardTable: React.FC<{
  users: LeaderboardUser[];
  currentUserId?: string;
}> = ({ users }) => {
  return (
    <TableContainer>
      <Table
        sx={{
          '& .MuiTableCell-root': {
            borderBottom: 'none',
          },
        }}
      >
        <TableBody>
          {users.map((u, idx) => {
            const rankingImg =
              idx === 0 ? ranking_1 : idx === 1 ? ranking_2 : idx === 2 ? ranking_3 : null;

            const row = (
              <TableRow key={u.id} data-testid={`row-${u.username}`}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CustomAvatar src={u.avatarUrl} alt={u.fullName} />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box>
                      <Typography fontWeight={600}>{u.fullName}</Typography>
                      <SyneTypography variant="caption">{u.username}</SyneTypography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ width: 120 }}>
                  {rankingImg ? (
                    <Box
                      component="img"
                      src={rankingImg}
                      alt={`rank-${idx + 1}`}
                      sx={{ height: 48, width: 'auto' }}
                    />
                  ) : (
                    <Typography variant="body2">{u.rank ?? idx + 1}</Typography>
                  )}
                </TableCell>
              </TableRow>
            );

            return row;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
