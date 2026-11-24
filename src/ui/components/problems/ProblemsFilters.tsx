import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, TextField } from '@mui/material';

import { Input } from '../../../component-catalog/input/Input';

import { DIFFICULTY_OPTIONS, STATUS_OPTIONS } from './problemsQuery';

import type { ProblemsQuery } from './problemsQuery';
import type {
  ProblemDifficulty,
  ProblemStatus,
} from '../../../services/problems/problemsService.types';

export interface ProblemsFiltersProps {
  query: ProblemsQuery;
  /** Text in the search box. It can be ahead of `query.search` while the debounce waits. */
  searchValue: string;
  onSearchChange: (value: string) => void;
  onFilterChange: (changes: Partial<Omit<ProblemsQuery, 'page' | 'search'>>) => void;
  onClear: () => void;
  tags: string[];
  showStatus?: boolean;
  canClear?: boolean;
}

const STATUS_LABEL: Record<ProblemStatus, string> = {
  solved: 'Solved',
  attempted: 'Attempted',
  unsolved: 'Unsolved',
};

const selectSlotProps = { select: { native: true }, inputLabel: { shrink: true } } as const;

export function ProblemsFilters({
  query,
  searchValue,
  onSearchChange,
  onFilterChange,
  onClear,
  tags,
  showStatus = false,
  canClear = false,
}: ProblemsFiltersProps) {
  return (
    <Box
      component="form"
      role="search"
      aria-label="Filter problems"
      onSubmit={(event) => event.preventDefault()}
      sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}
    >
      <Input
        type="search"
        label="Search"
        placeholder="Title or number"
        size="small"
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
        startAdornment={<SearchIcon fontSize="small" />}
        sx={{ minWidth: 240, flex: '1 1 240px' }}
      />

      <TextField
        select
        label="Difficulty"
        size="small"
        value={query.difficulty ?? ''}
        onChange={(event) =>
          onFilterChange({ difficulty: (event.target.value || undefined) as ProblemDifficulty })
        }
        slotProps={selectSlotProps}
        sx={{ minWidth: 140 }}
      >
        <option value="">All</option>
        {DIFFICULTY_OPTIONS.map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficulty}
          </option>
        ))}
      </TextField>

      {showStatus && (
        <TextField
          select
          label="Status"
          size="small"
          value={query.status ?? ''}
          onChange={(event) =>
            onFilterChange({ status: (event.target.value || undefined) as ProblemStatus })
          }
          slotProps={selectSlotProps}
          sx={{ minWidth: 140 }}
        >
          <option value="">All</option>
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {STATUS_LABEL[status]}
            </option>
          ))}
        </TextField>
      )}

      <TextField
        select
        label="Tag"
        size="small"
        value={query.tag ?? ''}
        onChange={(event) => onFilterChange({ tag: event.target.value || undefined })}
        slotProps={selectSlotProps}
        sx={{ minWidth: 180 }}
      >
        <option value="">All</option>
        {/* Keep a tag from the URL selectable even if the tag list failed to load. */}
        {query.tag && !tags.includes(query.tag) && <option value={query.tag}>{query.tag}</option>}
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </TextField>

      <Button variant="text" onClick={onClear} disabled={!canClear}>
        Clear filters
      </Button>
    </Box>
  );
}
