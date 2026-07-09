import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { StickyHeaderCell, StyledTableRow, actionButtonSx } from './ProblemsPage.styles';
import {
  getDifficultyChipColor,
  formatAcceptance,
  getStatusIconConfig,
} from './ProblemsPage.utils';

import type { Problem } from './ProblemsPage.types';
import type { Theme } from '@mui/material/styles';

interface ColumnDef {
  label: string;
  /** Width as a theme.spacing multiplier, or null to fill remaining space. */
  spacing: number | null;
}

const TABLE_COLUMNS: ColumnDef[] = [
  { label: '#', spacing: 7 }, // 7 × 8px = 56px
  { label: 'Title', spacing: null }, // flexible
  { label: 'Difficulty', spacing: 13.75 }, // 13.75 × 8px ≈ 110px
  { label: 'Acceptance', spacing: 13.75 }, // 13.75 × 8px ≈ 110px
  { label: 'Status', spacing: 9 }, // 9 × 8px = 72px
  { label: 'Action', spacing: 15 }, // 15 × 8px = 120px
];

function colWidth(spacing: number | null) {
  if (spacing === null) return undefined;
  return { width: (t: Theme) => t.spacing(spacing) };
}

function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        {TABLE_COLUMNS.map((col) => (
          <StickyHeaderCell key={col.label} scope="col" sx={colWidth(col.spacing)}>
            {col.label}
          </StickyHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function StatusIcon({ status }: { status: Problem['status'] }) {
  const { Icon, color } = getStatusIconConfig(status);
  return <Icon color={color} fontSize="small" />;
}

export interface ProblemsDesktopTableProps {
  problems: Problem[];
  onAction: (problem: Problem) => void;
}

export function ProblemsDesktopTable({ problems, onAction }: ProblemsDesktopTableProps) {
  return (
    <TableContainer>
      <Table aria-label="Problems table">
        <TableHeader />
        <TableBody>
          {problems.map((p) => (
            <StyledTableRow key={p.id} isSolved={p.status === 'solved'} onClick={() => onAction(p)}>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {p.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" fontWeight={500}>
                  {p.title}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={p.difficulty}
                  color={getDifficultyChipColor(p.difficulty)}
                  size="small"
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {p.acceptance != null ? formatAcceptance(p.acceptance) : '—'}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <StatusIcon status={p.status} />
              </TableCell>
              <TableCell>
                <Button
                  variant={p.status === 'solved' ? 'outlined' : 'contained'}
                  size="small"
                  sx={actionButtonSx}
                  onClick={(e) => {
                    e.stopPropagation();
                    onAction(p);
                  }}
                >
                  {p.status === 'solved' ? 'Review' : 'Solve'}
                </Button>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

interface SkeletonCell {
  variant: 'text' | 'rounded' | 'circular';
  w: number | string;
  h?: number;
  align?: 'center';
}

const SKELETON_CELLS: SkeletonCell[] = [
  { variant: 'text', w: 2.5 }, // id
  { variant: 'text', w: '60%' }, // title
  { variant: 'rounded', w: 8, h: 3 }, // difficulty chip
  { variant: 'text', w: 6.25 }, // acceptance
  { variant: 'circular', w: 2.5, h: 2.5, align: 'center' }, // status icon
  { variant: 'rounded', w: 9, h: 4 }, // action button
];

function skeletonSx(cell: SkeletonCell) {
  return {
    width: typeof cell.w === 'string' ? cell.w : (t: Theme) => t.spacing(cell.w as number),
    height: cell.h !== undefined ? (t: Theme) => t.spacing(cell.h as number) : undefined,
    ...(cell.align === 'center' ? { mx: 'auto' } : {}),
  };
}

export interface DesktopTableSkeletonProps {
  rows: number;
}

export function DesktopTableSkeleton({ rows }: DesktopTableSkeletonProps) {
  return (
    <TableContainer>
      <Table aria-hidden="true">
        <TableHeader />
        <TableBody>
          {Array.from({ length: rows }).map((_, i) => (
            <TableRow key={i}>
              {SKELETON_CELLS.map((cell, j) => (
                <TableCell key={j} align={cell.align}>
                  <Skeleton variant={cell.variant} sx={skeletonSx(cell)} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
