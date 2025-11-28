import { Table, TableBody, TableCell, TableRow, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

import ranking_1 from '../../assets/special1.png';
import ranking_2 from '../../assets/special2.png';
import ranking_3 from '../../assets/special3.png';

import { CustomAvatar, SyneTypography } from './LeaderboardPage.styles';

import type { LeaderboardUser } from './LeaderboardPage.types';

export const LeaderboardTable: React.FC<{ users: LeaderboardUser[] }> = ({ users }) => {
  const theme = useTheme();

  return (
    <Table
      sx={{
        '& .MuiTableCell-root': {
          borderBottom: 'none',
        },
        '@media (max-width:600px)': {
          '& .MuiTableCell-root': {
            padding: '6px 4px',
          },
        },
      }}
    >
      <TableBody>
        {users.map((u, idx) => {
          const rankingImg =
            idx === 0 ? ranking_1 : idx === 1 ? ranking_2 : idx === 2 ? ranking_3 : null;

          return (
            <TableRow key={u.id} data-testid={`row-${u.username}`}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CustomAvatar src={u.avatarUrl} alt={u.fullName} />
                </Box>
              </TableCell>

              <TableCell>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    width: 'max-content',
                  }}
                >
                  <Box>
                    <Typography fontWeight={600} fontSize={11}>
                      {u.fullName}
                    </Typography>
                    <SyneTypography variant="caption">{u.username}</SyneTypography>
                  </Box>
                </Box>
              </TableCell>

              <TableCell align="center">
                {rankingImg ? (
                  <Box
                    component="img"
                    src={rankingImg}
                    alt={`rank-${idx + 1}`}
                    sx={{
                      height: theme.spacing(6),
                      width: 'auto',
                    }}
                  />
                ) : (
                  <Typography variant="body2">{u.rank ?? idx + 1}</Typography>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
