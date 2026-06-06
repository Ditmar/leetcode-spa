import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Box, Drawer, Fab, List, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

import { problemListTokens as T } from '../../style-library/theme/theme';

import { useProblemList } from './ProblemList.hook';
import {
  StyledContainer,
  StyledHeader,
  StyledIconWrapper,
  StyledListItemButton,
  StyledListWrapper,
  StyledMetaRow,
  StyledTextColumn,
  StyledTitleRow,
} from './ProblemList.styles';
import { formatAcceptanceRate, getDifficultyTextColor } from './ProblemList.utils';

import type { Problem, ProblemListProps } from './ProblemList.types';

const ProblemList = ({ problems, selectedProblemId, onSelectProblem }: ProblemListProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { getStatusIcon, isSelected } = useProblemList(selectedProblemId ?? -1);

  const renderProblemItem = (problem: Problem) => {
    const selected = isSelected(problem.id);
    const difficultyColor = getDifficultyTextColor(problem.difficulty);

    return (
      <StyledListItemButton
        key={problem.id}
        isSelected={selected}
        onClick={() => {
          onSelectProblem(problem.id);
          if (isMobile) setDrawerOpen(false);
        }}
        aria-current={selected ? 'true' : undefined}
        aria-label={`Problem ${problem.id}: ${problem.title}, ${problem.difficulty}, ${formatAcceptanceRate(problem.acceptanceRate)} acceptance rate`}
        data-testid={`problem-item-${problem.id}`}
      >
        {/* Status icon */}
        <StyledIconWrapper>{getStatusIcon(problem.status)}</StyledIconWrapper>

        {/* Text content */}
        <StyledTextColumn>
          {/* Title row: index number + problem name */}
          <StyledTitleRow>
            <Typography
              component="span"
              sx={{
                fontFamily: T.typography.fontFamily,
                fontSize: T.typography.problemNumber.fontSize,
                fontWeight: T.typography.problemNumber.fontWeight,
                lineHeight: T.typography.problemNumber.lineHeight,
                letterSpacing: T.typography.problemNumber.letterSpacing,
                color: T.colors.problemNumber,
                flexShrink: 0,
              }}
            >
              {problem.id}.
            </Typography>

            <Typography
              component="span"
              sx={{
                fontFamily: T.typography.fontFamily,
                fontSize: T.typography.problemTitle.fontSize,
                fontWeight: T.typography.problemTitle.fontWeight,
                lineHeight: T.typography.problemTitle.lineHeight,
                letterSpacing: T.typography.problemTitle.letterSpacing,
                color: T.colors.problemTitle,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {problem.title}
            </Typography>
          </StyledTitleRow>

          {/* Meta row: difficulty • acceptance rate */}
          <StyledMetaRow>
            <Typography
              component="span"
              sx={{
                fontFamily: T.typography.fontFamily,
                fontSize: T.typography.meta.fontSize,
                fontWeight: T.typography.meta.fontWeight,
                lineHeight: T.typography.meta.lineHeight,
                letterSpacing: T.typography.meta.letterSpacing,
                color: difficultyColor,
              }}
            >
              {problem.difficulty}
            </Typography>

            <Typography
              component="span"
              sx={{
                fontFamily: T.typography.fontFamily,
                fontSize: T.typography.meta.fontSize,
                fontWeight: T.typography.meta.fontWeight,
                lineHeight: T.typography.meta.lineHeight,
                color: T.colors.bullet,
              }}
            >
              •
            </Typography>

            <Typography
              component="span"
              sx={{
                fontFamily: T.typography.fontFamily,
                fontSize: T.typography.meta.fontSize,
                fontWeight: T.typography.meta.fontWeight,
                lineHeight: T.typography.meta.lineHeight,
                letterSpacing: T.typography.meta.letterSpacing,
                color: T.colors.acceptanceRate,
              }}
            >
              {formatAcceptanceRate(problem.acceptanceRate)}
            </Typography>
          </StyledMetaRow>
        </StyledTextColumn>
      </StyledListItemButton>
    );
  };

  // ── Shared header + list ───────────────────────────────────────────────────
  const listContent = (
    <>
      <StyledHeader>
        <Typography
          sx={{
            fontFamily: T.typography.fontFamily,
            fontSize: T.typography.header.fontSize,
            fontWeight: T.typography.header.fontWeight,
            lineHeight: T.typography.header.lineHeight,
            letterSpacing: T.typography.header.letterSpacing,
            color: T.colors.headerText,
          }}
        >
          Problems
        </Typography>
      </StyledHeader>

      <StyledListWrapper>
        <List disablePadding aria-label="Problems list">
          {problems.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: theme.spacing(20),
              }}
            >
              <Typography
                sx={{
                  fontFamily: T.typography.fontFamily,
                  fontSize: T.typography.problemNumber.fontSize,
                  color: T.colors.problemNumber,
                }}
              >
                No problems found.
              </Typography>
            </Box>
          ) : (
            problems.map(renderProblemItem)
          )}
        </List>
      </StyledListWrapper>
    </>
  );

  if (isMobile) {
    return (
      <>
        <Fab
          size="medium"
          color="primary"
          aria-label="Open problems list"
          onClick={() => setDrawerOpen(true)}
          data-testid="problem-list-fab"
          sx={{
            position: 'fixed',
            bottom: theme.spacing(3),
            left: theme.spacing(3),
            zIndex: theme.zIndex.fab,
          }}
        >
          <FormatListBulletedIcon />
        </Fab>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          data-testid="problem-list-drawer"
          PaperProps={{
            sx: {
              // Use theme.spacing to avoid hardcoded px — token is a multiplier
              width: theme.spacing(T.dimensions.drawerWidth),
              backgroundColor: T.colors.background,
              ...T.layout.hideScrollbar,
            },
          }}
        >
          {listContent}
        </Drawer>
      </>
    );
  }

  return <StyledContainer>{listContent}</StyledContainer>;
};

export { ProblemList };
