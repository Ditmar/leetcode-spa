import {
  Box,
  Chip,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { DIFFICULTY_COLOR_MAP } from '../../../pages/ProblemList/ProblemList.constants';
import { useProblemList } from '../../../pages/ProblemList/ProblemList.hook';

import type { Problem } from '../../../services/problems/problemsService.types';

export interface ProblemsTableProps {
  problems: Problem[];
  /** Show the status column (only for logged-in users). */
  showStatus?: boolean;
}

export function ProblemsTable({ problems, showStatus = false }: ProblemsTableProps) {
  const { getStatusIcon } = useProblemList(-1);

  return (
    <TableContainer>
      <Table size="small" aria-label="Problems">
        <TableHead>
          <TableRow>
            {showStatus && <TableCell sx={{ width: 64 }}>Status</TableCell>}
            <TableCell sx={{ width: 72 }}>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell sx={{ width: 120 }}>Difficulty</TableCell>
            <TableCell>Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {problems.map((problem) => (
            <TableRow key={problem.id} hover data-testid={`problem-row-${problem.id}`}>
              {showStatus && (
                <TableCell>{problem.status ? getStatusIcon(problem.status) : null}</TableCell>
              )}
              <TableCell>{problem.id}</TableCell>
              <TableCell>
                <Link href={`/problems/${problem.id}`} underline="hover" color="inherit">
                  {problem.title}
                </Link>
              </TableCell>
              <TableCell>
                <Chip
                  label={problem.difficulty}
                  color={DIFFICULTY_COLOR_MAP[problem.difficulty]}
                  size="small"
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {problem.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                  ))}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
