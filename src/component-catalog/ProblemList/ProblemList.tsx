import { Box, Typography, List } from '@mui/material';
import React from 'react';

import { STATUS_ICON_MAP } from './ProblemList.constants';
import {
  listContainerStyles,
  headerStyles,
  scrollableBoxStyles,
  itemButtonStyles,
  itemIconStyles,
  titleTypographyStyles,
  secondaryRowStyles,
  dotDividerStyles,
} from './ProblemList.styles';
import { getDifficultyChipColor } from './ProblemList.utils';

import type { ProblemListProps } from './ProblemList.types';

export const ProblemList: React.FC<ProblemListProps> = ({
  problems,
  selectedProblemId,
  onSelectProblem,
}) => {
  return (
    <Box sx={listContainerStyles}>
      <Box sx={headerStyles}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '16px',
            color: '#1a1a1a',
            letterSpacing: '-0.2px',
          }}
        >
          Problems
        </Typography>
      </Box>

      <Box sx={scrollableBoxStyles}>
        <List disablePadding>
          {problems.map((problem) => {
            const isSelected = selectedProblemId === problem.id;
            const StatusIcon = STATUS_ICON_MAP[problem.status] || STATUS_ICON_MAP.unsolved;

            const iconColor =
              problem.status === 'solved'
                ? '#2db55d'
                : problem.status === 'attempted'
                  ? '#feb800'
                  : '#bcc1c4';

            return (
              <Box
                key={problem.id}
                sx={itemButtonStyles(isSelected)}
                onClick={() => onSelectProblem(problem.id)}
              >
                <Box sx={itemIconStyles}>
                  <StatusIcon sx={{ color: iconColor, fontSize: '18px' }} />
                </Box>

                <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                  <Typography sx={titleTypographyStyles}>
                    {problem.idNumber}. {problem.title}
                  </Typography>

                  <Box sx={secondaryRowStyles}>
                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: getDifficultyChipColor(problem.difficulty),
                      }}
                    >
                      {problem.difficulty}
                    </Typography>

                    <Typography sx={dotDividerStyles}>•</Typography>

                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 400,
                        color: '#8a9298',
                      }}
                    >
                      {problem.acceptanceRate}%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};
