import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import SafeMarkdown from '../../ui/components/common/SafeMarkdown';

import { useProblemDetail } from './ProblemDetail.hook';
import {
  chipRowSx,
  codeLabelSx,
  codeLineSx,
  constraintItemSx,
  constraintsListSx,
  constraintsPaperSx,
  difficultyChipSx,
  emptyStateSx,
  exampleCardSx,
  exampleTitleSx,
  panelSx,
  sectionHeaderSx,
  sectionSx,
  sectionTitleSx,
  tagChipSx,
  titleSx,
} from './ProblemDetail.styles';

import type { ProblemDetailProps, ProblemExample } from './ProblemDetail.types';

function normalizeExample(example: ProblemExample) {
  if (typeof example === 'object' && example !== null) {
    return {
      input: example.input ?? '',
      output: example.output ?? '',
      explanation: example.explanation,
    };
  }

  const str = String(example ?? '');
  const inputMatch = str.match(/Input:\s*([^\n]+)/i);
  const outputMatch = str.match(/Output:\s*([^\n]+)/i);
  const expMatch = str.match(/Explanation:\s*([\s\S]+)/i);

  if (inputMatch || outputMatch) {
    return {
      input: inputMatch ? inputMatch[1].trim() : '',
      output: outputMatch ? outputMatch[1].trim() : '',
      explanation: expMatch ? expMatch[1].trim() : undefined,
    };
  }

  return {
    input: str,
    output: '',
    explanation: undefined,
  };
}

export const ProblemDetail = ({ problem }: ProblemDetailProps) => {
  const { getDifficultyChipColor } = useProblemDetail();

  if (!problem) {
    return (
      <Box component="section" aria-label="Problem detail empty state" sx={panelSx}>
        <Paper elevation={0} sx={emptyStateSx}>
          <Typography variant="body2">No problem data available.</Typography>
        </Paper>
      </Box>
    );
  }

  const hasExamples = problem.examples && problem.examples.length > 0;
  const hasConstraints = problem.constraints && problem.constraints.length > 0;

  return (
    <Box component="section" aria-labelledby="problem-detail-title" sx={panelSx}>
      <Stack spacing={2.5}>
        <Stack spacing={1}>
          <Typography id="problem-detail-title" variant="h5" component="h1" sx={titleSx}>
            {problem.id}. {problem.title}
          </Typography>

          <Stack direction="row" component="ul" sx={chipRowSx} aria-label="Problem metadata">
            <Box component="li">
              <Chip
                label={problem.difficulty}
                color={getDifficultyChipColor(problem.difficulty)}
                size="small"
                sx={difficultyChipSx}
                aria-label={`Difficulty: ${problem.difficulty}`}
              />
            </Box>

            {typeof problem.acceptance === 'number' && (
              <Box component="li">
                <Chip
                  label={`Acceptance: ${problem.acceptance.toFixed(1)}%`}
                  size="small"
                  variant="outlined"
                  sx={tagChipSx}
                  aria-label={`Acceptance rate: ${problem.acceptance}%`}
                />
              </Box>
            )}

            {problem.tags?.map((tag) => (
              <Box key={tag} component="li">
                <Chip label={tag} size="small" variant="outlined" sx={tagChipSx} />
              </Box>
            ))}
          </Stack>
        </Stack>

        <Box sx={{ color: 'var(--foreground)' }}>
          <SafeMarkdown content={problem.description} />
        </Box>

        <Stack spacing={1.5} sx={sectionSx}>
          <Stack sx={sectionHeaderSx}>
            <Typography variant="h6" component="h2" sx={sectionTitleSx}>
              Examples
            </Typography>

            <Divider />
          </Stack>

          {hasExamples ? (
            problem.examples?.map((rawExample, index) => {
              const example = normalizeExample(rawExample);
              return (
                <Paper key={`example-${index}`} elevation={0} sx={exampleCardSx}>
                  <Stack spacing={1}>
                    <Typography variant="subtitle2" component="h3" sx={exampleTitleSx}>
                      Example {index + 1}:
                    </Typography>

                    <Paper component="pre" elevation={0} sx={codeLineSx}>
                      {example.input ? (
                        <>
                          <Box component="span" sx={codeLabelSx}>
                            Input:
                          </Box>{' '}
                          {example.input}
                          {'\n'}
                        </>
                      ) : null}
                      {example.output ? (
                        <>
                          <Box component="span" sx={codeLabelSx}>
                            Output:
                          </Box>{' '}
                          {example.output}
                        </>
                      ) : null}
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
              );
            })
          ) : (
            <Paper elevation={0} sx={emptyStateSx}>
              <Typography variant="body2">No examples available.</Typography>
            </Paper>
          )}
        </Stack>

        {hasConstraints ? (
          <Stack spacing={1.5} sx={sectionSx}>
            <Stack sx={sectionHeaderSx}>
              <Typography variant="h6" component="h2" sx={sectionTitleSx}>
                Constraints
              </Typography>

              <Divider />
            </Stack>

            <Paper elevation={0} sx={constraintsPaperSx}>
              <Box component="ul" sx={constraintsListSx}>
                {problem.constraints?.map((constraint) => (
                  <Box key={constraint} component="li" sx={constraintItemSx}>
                    <SafeMarkdown content={constraint} />
                  </Box>
                ))}
              </Box>
            </Paper>
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
};

export default ProblemDetail;
