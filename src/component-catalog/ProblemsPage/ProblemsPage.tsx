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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ALL_DIFFICULTIES, ALL_STATUSES, ALL_TAGS_SENTINEL } from './ProblemsPage.constants';
import { ProblemsDesktopTable, DesktopTableSkeleton } from './ProblemsPage.desktoptable';
import { useProblemsPage } from './ProblemsPage.hook';
import { ProblemsMobileList } from './ProblemsPage.mobilelist';
import { ProblemsPagination } from './ProblemsPage.pagination';
import {
  PageWrapper,
  FilterBarWrapper,
  drawerContentSx,
  emptyStateSx,
  filterSelectSx,
  filterButtonSx,
  headerSx,
  visuallyHiddenSx,
} from './ProblemsPage.styles';

import type {
  DifficultyFilter,
  Problem,
  ProblemsPageProps,
  StatusFilter,
  TagFilter,
} from './ProblemsPage.types';
import type { SelectChangeEvent } from '@mui/material/Select';

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

function MobileListSkeleton({ rows }: { rows: number }) {
  return (
    <Stack aria-hidden="true" divider={<Divider />}>
      {Array.from({ length: rows }).map((_, i) => (
        <Stack key={i} direction="row" spacing={1.5} alignItems="center" sx={{ py: 1.5 }}>
          {/* Status icon placeholder — matches the circular icon size */}
          <Skeleton
            variant="circular"
            sx={{ width: (t) => t.spacing(2.5), height: (t) => t.spacing(2.5) }}
          />
          <Box sx={{ flex: 1 }}>
            {/* Title line — 70% of available width */}
            <Skeleton variant="text" sx={{ width: '70%' }} />
            {/* Difficulty + acceptance line — 40% of available width */}
            <Skeleton variant="text" sx={{ width: '40%' }} />
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}

function LoadingStatus() {
  return (
    <Typography role="status" aria-live="polite" sx={visuallyHiddenSx}>
      Loading problems…
    </Typography>
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
  disabled?: boolean;
}

function FilterControls({
  filterState,
  tagOptions,
  onDifficultyChange,
  onStatusChange,
  onTagChange,
  onClearFilters,
  orientation = 'row',
  disabled = false,
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
      <FormControl size="small" sx={filterSelectSx} disabled={disabled}>
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

      <FormControl size="small" sx={filterSelectSx} disabled={disabled}>
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

      <FormControl size="small" sx={filterSelectSx} disabled={disabled}>
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
        disabled={disabled}
        sx={{ ...filterButtonSx, color: 'text.secondary' }}
      >
        Clear
      </Button>
    </Stack>
  );
}

function SearchField({
  value,
  onChange,
  disabled = false,
}: {
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  return (
    <TextField
      placeholder="Search problems…"
      size="small"
      value={value}
      disabled={disabled}
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
  isLoading = false,
}: ProblemsPageProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const {
    filteredProblems,
    paginatedProblems,
    solvedCount,
    totalCount,
    tagOptions,
    filterState,
    handleSearchChange,
    handleDifficultyChange,
    handleStatusChange,
    handleTagChange,
    handleClearFilters,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    drawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
  } = useProblemsPage({ problems });

  const handleAction = (p: Problem) =>
    p.status === 'solved' ? onNavigateToCode() : onSelectProblem(p.id);

  return (
    <PageWrapper>
      <Box sx={headerSx}>
        <Typography variant="h5" fontWeight={700} component="h1">
          Problems
        </Typography>
        {isLoading ? (
          <Skeleton
            variant="rounded"
            aria-hidden="true"
            sx={{ width: (t) => t.spacing(15), height: (t) => t.spacing(4) }}
          />
        ) : (
          <Chip
            label={`${solvedCount} / ${totalCount} Solved`}
            color="primary"
            variant="outlined"
            aria-label={`${solvedCount} of ${totalCount} problems solved`}
          />
        )}
      </Box>

      {isMobile ? (
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={handleDrawerOpen}
          sx={filterButtonSx}
          aria-label="Open filters"
          disabled={isLoading}
        >
          Filters
        </Button>
      ) : (
        <FilterBarWrapper>
          <SearchField
            value={filterState.searchQuery}
            onChange={handleSearchChange}
            disabled={isLoading}
          />
          <FilterControls
            filterState={filterState}
            tagOptions={tagOptions}
            onDifficultyChange={handleDifficultyChange}
            onStatusChange={handleStatusChange}
            onTagChange={handleTagChange}
            onClearFilters={handleClearFilters}
            disabled={isLoading}
          />
        </FilterBarWrapper>
      )}

      {isMobile && (
        <Box sx={{ mb: 1.5 }}>
          <SearchField
            value={filterState.searchQuery}
            onChange={handleSearchChange}
            disabled={isLoading}
          />
        </Box>
      )}

      {/* Content */}
      {isLoading ? (
        <>
          <LoadingStatus />
          {isMobile ? (
            <MobileListSkeleton rows={rowsPerPage} />
          ) : (
            <DesktopTableSkeleton rows={rowsPerPage} />
          )}
        </>
      ) : filteredProblems.length === 0 ? (
        <EmptyState onClearFilters={handleClearFilters} />
      ) : (
        <>
          {isMobile ? (
            <ProblemsMobileList problems={paginatedProblems} onAction={handleAction} />
          ) : (
            <ProblemsDesktopTable problems={paginatedProblems} onAction={handleAction} />
          )}
          <ProblemsPagination
            count={filteredProblems.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            isMobile={isMobile}
          />
        </>
      )}

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
            disabled={isLoading}
          />
        </Box>
      </Drawer>
    </PageWrapper>
  );
}

export default ProblemsPage;
