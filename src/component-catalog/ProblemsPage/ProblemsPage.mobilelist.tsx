import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

import { StyledListItemButton } from './ProblemsPage.styles';
import {
  getDifficultyChipColor,
  formatAcceptance,
  getStatusIconConfig,
} from './ProblemsPage.utils';

import type { Problem } from './ProblemsPage.types';

function StatusIcon({ status }: { status: Problem['status'] }) {
  const { Icon, color } = getStatusIconConfig(status);
  return <Icon color={color} fontSize="small" />;
}

export interface ProblemsMobileListProps {
  problems: Problem[];
  onAction: (problem: Problem) => void;
}

export function ProblemsMobileList({ problems, onAction }: ProblemsMobileListProps) {
  return (
    <List disablePadding>
      {problems.map((p, i) => (
        <React.Fragment key={p.id}>
          <StyledListItemButton isSolved={p.status === 'solved'} onClick={() => onAction(p)}>
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
                    {p.acceptance != null ? formatAcceptance(p.acceptance) : '—'}
                  </Typography>
                </Stack>
              }
            />
          </StyledListItemButton>
          {i < problems.length - 1 && <Divider component="li" sx={{ ml: 7 }} />}
        </React.Fragment>
      ))}
    </List>
  );
}
