import ClearAllIcon from '@mui/icons-material/ClearAll';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import { ALL_DIFFICULTIES, ALL_STATUSES, ALL_TAGS_SENTINEL } from './ProblemsPage.constants';
import { useProblemsPage } from './ProblemsPage.hook';
import {
  PageWrapper,
  FilterBarWrapper,
  StickyHeaderCell,
  StyledTableRow,
  StyledListItemButton,
  actionButtonSx,
  drawerContentSx,
  emptyStateSx,
  filterSelectSx,
  filterButtonSx,
  headerSx,
} from './ProblemsPage.styles';
import {
  getDifficultyChipColor,
  getStatusIconConfig,
  formatAcceptance,
} from './ProblemsPage.utils';

import type {
  DifficultyFilter,
  Problem,
  ProblemsPageProps,
  StatusFilter,
  TagFilter,
} from './ProblemsPage.types';
import type { SelectChangeEvent } from '@mui/material/Select';

function StatusIcon({ status }: { status: Problem['status'] }) {
  const { Icon, color } = getStatusIconConfig(status);
  return <Icon color={color} fontSize="small" />;
}

interface EmptyStateProps {
  onClearFilters: () => void;
}

function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <Box sx={emptyStateSx}>
      <Typography variant="h6">No problems match your filters</Typography>
      <Button variant="outlined" onClick={onClearFilters}>
        Clear Filters
      </Button>
    </Box>
  );
}

interface FilterControlsProps {
  filterState: ReturnType<typeof useProblemsPage>['filterState'];
  tagOptions: string[];
  onDifficultyChange: (v: DifficultyFilter) => void;
  onStatusChange: (v: StatusFilter) => void;
  onTagChange: (v: TagFilter) => void;
  onClearFilters: () => void;
  orientation?: 'row' | 'column';
}

function FilterControls({
  filterState,
  tagOptions,
  onDifficultyChange,
  onStatusChange,
  onTagChange,
  onClearFilters,
  orientation = 'row',
}: FilterControlsProps) {
  const mkHandler =
    <T extends string>(fn: (v: T) => void) =>
    (e: SelectChangeEvent) =>
      fn(e.target.value as T);

  return (
    <Stack
      direction={orientation}
      spacing={1.5}
      flexWrap={orientation === 'row' ? 'wrap' : 'nowrap'}
      alignItems={orientation === 'row' ? 'center' : 'stretch'}
    >
      <FormControl size="small" sx={filterSelectSx}>
        <InputLabel id="difficulty-label">Difficulty</InputLabel>
        <Select
          labelId="difficulty-label"
          label="Difficulty"
          value={filterState.difficultyFilter}
          onChange={mkHandler<DifficultyFilter>(onDifficultyChange)}
          inputProps={{ 'aria-label': 'Difficulty filter' }}
        >
          {ALL_DIFFICULTIES.map((d) => (
            <MenuItem key={d} value={d}>
              {d}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={filterSelectSx}>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          labelId="status-label"
          label="Status"
          value={filterState.statusFilter}
          onChange={mkHandler<StatusFilter>(onStatusChange)}
          inputProps={{ 'aria-label': 'Status filter' }}
        >
          {ALL_STATUSES.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={filterSelectSx}>
        <InputLabel id="tag-label">Tag</InputLabel>
        <Select
          labelId="tag-label"
          label="Tag"
          value={filterState.tagFilter}
          onChange={mkHandler<TagFilter>(onTagChange)}
          inputProps={{ 'aria-label': 'Tag filter' }}
        >
          <MenuItem value={ALL_TAGS_SENTINEL}>All</MenuItem>
          {tagOptions.map((t) => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="text"
        size="small"
        startIcon={<ClearAllIcon />}
        onClick={onClearFilters}
        sx={{ ...filterButtonSx, color: 'text.secondary' }}
      >
        Clear
      </Button>
    </Stack>
  );
}

function SearchField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <TextField
      placeholder="Search problems…"
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      inputProps={{ 'aria-label': 'Search problems' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
    />
  );
}

export function ProblemsPage({
  onSelectProblem,
  onNavigateToCode,
  problems = [],
}: ProblemsPageProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const {
    filteredProblems,
    solvedCount,
    totalCount,
    tagOptions,
    filterState,
    handleSearchChange,
    handleDifficultyChange,
    handleStatusChange,
    handleTagChange,
    handleClearFilters,
    drawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
  } = useProblemsPage({ problems });

  const handleAction = (p: Problem) =>
    p.status === 'solved' ? onNavigateToCode() : onSelectProblem(p.id);

  const DesktopTable = (
    <TableContainer>
      <Table aria-label="Problems table">
        <TableHead>
          <TableRow>
            <StickyHeaderCell scope="col" sx={{ width: 56 }}>
              #
            </StickyHeaderCell>
            <StickyHeaderCell scope="col">Title</StickyHeaderCell>
            <StickyHeaderCell scope="col" sx={{ width: 110 }}>
              Difficulty
            </StickyHeaderCell>
            <StickyHeaderCell scope="col" sx={{ width: 110 }}>
              Acceptance
            </StickyHeaderCell>
            <StickyHeaderCell scope="col" sx={{ width: 72 }}>
              Status
            </StickyHeaderCell>
            <StickyHeaderCell scope="col" sx={{ width: 120 }}>
              Action
            </StickyHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProblems.map((p) => (
            <StyledTableRow
              key={p.id}
              isSolved={p.status === 'solved'}
              onClick={() => handleAction(p)}
            >
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
                  {formatAcceptance(p.acceptance)}
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
                    handleAction(p);
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

  const MobileList = (
    <List disablePadding>
      {filteredProblems.map((p, i) => (
        <React.Fragment key={p.id}>
          <StyledListItemButton isSolved={p.status === 'solved'} onClick={() => handleAction(p)}>
            <StatusIcon status={p.status} />
            <ListItemText
              primary={
                <Typography variant="body2" fontWeight={500}>
                  {p.id}.&nbsp;{p.title}
                </Typography>
              }
              secondary={
                <Stack direction="row" spacing={0.75} alignItems="center" mt={0.25}>
                  <Chip
                    label={p.difficulty}
                    color={getDifficultyChipColor(p.difficulty)}
                    size="small"
                    variant="outlined"
                    sx={{ height: 20, fontSize: '0.7rem' }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    •
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {formatAcceptance(p.acceptance)}
                  </Typography>
                </Stack>
              }
            />
          </StyledListItemButton>
          {i < filteredProblems.length - 1 && <Divider component="li" sx={{ ml: 7 }} />}
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <PageWrapper>
      {/* Header */}
      <Box sx={headerSx}>
        <Typography variant="h5" fontWeight={700} component="h1">
          Problems
        </Typography>
        <Chip
          label={`${solvedCount} / ${totalCount} Solved`}
          color="primary"
          variant="outlined"
          aria-label={`${solvedCount} of ${totalCount} problems solved`}
        />
      </Box>

      {/* Filter bar — desktop inline / mobile Filters button */}
      {isMobile ? (
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={handleDrawerOpen}
          sx={filterButtonSx}
          aria-label="Open filters"
        >
          Filters
        </Button>
      ) : (
        <FilterBarWrapper>
          <SearchField value={filterState.searchQuery} onChange={handleSearchChange} />
          <FilterControls
            filterState={filterState}
            tagOptions={tagOptions}
            onDifficultyChange={handleDifficultyChange}
            onStatusChange={handleStatusChange}
            onTagChange={handleTagChange}
            onClearFilters={handleClearFilters}
          />
        </FilterBarWrapper>
      )}

      {/* Mobile search (always visible on small screens) */}
      {isMobile && (
        <Box sx={{ mb: 1.5 }}>
          <SearchField value={filterState.searchQuery} onChange={handleSearchChange} />
        </Box>
      )}

      {/* Content */}
      {filteredProblems.length === 0 ? (
        <EmptyState onClearFilters={handleClearFilters} />
      ) : isMobile ? (
        MobileList
      ) : (
        DesktopTable
      )}

      {/* Mobile filter drawer
          keepMounted={false} ensures FilterControls is unmounted when closed,
          preventing duplicate aria-label elements alongside the desktop bar. */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => handleDrawerClose()}
        aria-label="Filter drawer"
        keepMounted={false}
      >
        <Box sx={drawerContentSx} role="presentation">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight={600}>
              Filters
            </Typography>
            <IconButton onClick={() => handleDrawerClose()} aria-label="Close filters" size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
          <FilterControls
            filterState={filterState}
            tagOptions={tagOptions}
            onDifficultyChange={handleDifficultyChange}
            onStatusChange={handleStatusChange}
            onTagChange={handleTagChange}
            onClearFilters={() => {
              handleClearFilters();
              handleDrawerClose();
            }}
            orientation="column"
          />
        </Box>
      </Drawer>
    </PageWrapper>
  );
}

export default ProblemsPage;
