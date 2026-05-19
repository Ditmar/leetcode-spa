import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useProblemDetail } from './ProblemDetail.hook';
import {
  chipRowSx,
  codeLabelSx,
  codeLineSx,
  constraintItemSx,
  constraintsListSx,
  constraintsPaperSx,
  descriptionSx,
  difficultyChipSx,
  exampleCardSx,
  exampleTitleSx,
  panelSx,
  sectionHeaderSx,
  sectionSx,
  sectionTitleSx,
  tagChipSx,
  titleSx,
} from './ProblemDetail.styles';
import type { ProblemDetailProps } from './ProblemDetail.types';

export const ProblemDetail = ({ problem }: ProblemDetailProps) => {
  const { getDifficultyChipColor } = useProblemDetail();

  return (
    <Box component="section" aria-labelledby="problem-detail-title" sx={panelSx}>
      <Stack spacing={2.5}>
        <Stack spacing={1}>
          <Typography
            id="problem-detail-title"
            variant="h5"
            component="h1"
            sx={titleSx}
          >
            {problem.id}. {problem.title}
          </Typography>

          <Stack
            direction="row"
            component="ul"
            sx={chipRowSx}
            aria-label="Problem metadata"
          >
            <Box component="li">
              <Chip
                label={problem.difficulty}
                color={getDifficultyChipColor(problem.difficulty)}
                size="small"
                sx={difficultyChipSx}
                aria-label={`Difficulty: ${problem.difficulty}`}
              />
            </Box>

            {problem.tags.slice(0, 2).map((tag) => (
              <Box key={tag} component="li">
                <Chip label={tag} size="small" variant="outlined" sx={tagChipSx} />
              </Box>
            ))}
          </Stack>
        </Stack>

        <Typography variant="body2" sx={descriptionSx}>
          {problem.description}
        </Typography>

        <Stack spacing={1.5} sx={sectionSx}>
          <Stack sx={sectionHeaderSx}>
            <Typography variant="h6" component="h2" sx={sectionTitleSx}>
              Examples
            </Typography>
            <Divider />
          </Stack>

          {problem.examples.map((example, index) => (
            <Paper key={`${example.input}-${index}`} elevation={0} sx={exampleCardSx}>
              <Stack spacing={1}>
                <Typography variant="subtitle2" component="h3" sx={exampleTitleSx}>
                  Example {index + 1}:
                </Typography>

                <Paper component="pre" elevation={0} sx={codeLineSx}>
                  <Box component="span" sx={codeLabelSx}>
                    Input:
                  </Box>{' '}
                  {example.input}
                  {'\n'}
                  <Box component="span" sx={codeLabelSx}>
                    Output:
                  </Box>{' '}
                  {example.output}
                  {example.explanation ? (
                    <>
                      {'\n'}
                      <Box component="span" sx={codeLabelSx}>
                        Explanation:
                      </Box>{' '}
                      {example.explanation}
                    </>
                  ) : null}
                </Paper>
              </Stack>
            </Paper>
          ))}
        </Stack>

        <Stack spacing={1.5} sx={sectionSx}>
          <Stack sx={sectionHeaderSx}>
            <Typography variant="h6" component="h2" sx={sectionTitleSx}>
              Constraints
            </Typography>
            <Divider />
          </Stack>

          <Paper elevation={0} sx={constraintsPaperSx}>
            <Box component="ul" sx={constraintsListSx}>
              {problem.constraints.map((constraint) => (
                <Box key={constraint} component="li" sx={constraintItemSx}>
                  {constraint}
                </Box>
              ))}
            </Box>
          </Paper>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProblemDetail;
