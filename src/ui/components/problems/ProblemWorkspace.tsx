import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SendIcon from '@mui/icons-material/Send';
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

import ProblemDetail from '../../../component-catalog/ProblemDetail/ProblemDetail';
import ClientOnlyMuiProvider from '../../../style-library/ClientOnlyMuiProvider';

import type { ProblemDetail as ProblemDetailType } from '../../../services/problems/problemsService.types';
import type { SelectChangeEvent } from '@mui/material/Select';
import type { SyntheticEvent } from 'react';

export interface ProblemWorkspaceProps {
  problem: ProblemDetailType;
  prevProblemId?: number;
  nextProblemId?: number;
}

const DEFAULT_STARTER_CODES: Record<string, string> = {
  javascript: `/**\n * @param {any} args\n * @return {any}\n */\nvar solution = function(...args) {\n    // Write your code here\n};`,
  python: `class Solution:\n    def solve(self, *args):\n        # Write your code here\n        pass`,
  java: `class Solution {\n    public void solve() {\n        // Write your code here\n    }\n}`,
  cpp: `class Solution {\npublic:\n    void solve() {\n        // Write your code here\n    }\n};`,
};

export function ProblemWorkspaceView({
  problem,
  prevProblemId,
  nextProblemId,
}: ProblemWorkspaceProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [leftTab, setLeftTab] = useState<'description' | 'submissions'>('description');
  const [mobileTab, setMobileTab] = useState<'description' | 'code' | 'submissions'>('description');
  const [language, setLanguage] = useState<string>('javascript');

  const starterCode =
    problem.starterCode || DEFAULT_STARTER_CODES[language] || DEFAULT_STARTER_CODES.javascript;

  const handleLeftTabChange = (_event: SyntheticEvent, newValue: 'description' | 'submissions') => {
    setLeftTab(newValue);
  };

  const handleMobileTabChange = (
    _event: SyntheticEvent,
    newValue: 'description' | 'code' | 'submissions'
  ) => {
    setMobileTab(newValue);
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value);
  };

  const descriptionPanel = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'var(--card)',
        borderRadius: 2,
        border: 1,
        borderColor: 'var(--border)',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'var(--border)', px: 2, bgcolor: 'var(--muted)' }}>
        <Tabs
          value={leftTab}
          onChange={handleLeftTabChange}
          aria-label="Problem information tabs"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            label="Description"
            value="description"
            id="tab-description"
            aria-controls="panel-description"
            data-testid="tab-description"
            sx={{ textTransform: 'none', fontWeight: 600 }}
          />
          <Tab
            label="Submissions"
            value="submissions"
            id="tab-submissions"
            aria-controls="panel-submissions"
            data-testid="tab-submissions"
            sx={{ textTransform: 'none', fontWeight: 600 }}
          />
        </Tabs>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: leftTab === 'description' ? 0 : 3,
        }}
        role="tabpanel"
        id={leftTab === 'description' ? 'panel-description' : 'panel-submissions'}
        aria-labelledby={leftTab === 'description' ? 'tab-description' : 'tab-submissions'}
      >
        {leftTab === 'description' ? (
          <ProblemDetail problem={problem} />
        ) : (
          <Box sx={{ textAlign: 'center', py: 6, color: 'text.secondary' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              No Submissions Yet
            </Typography>
            <Typography variant="body2">
              Submit your code to see your run and submission history here.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );

  const codePanel = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'var(--card)',
        borderRadius: 2,
        border: 1,
        borderColor: 'var(--border)',
        overflow: 'hidden',
      }}
    >
      {/* Code Area Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          borderBottom: 1,
          borderColor: 'var(--border)',
          bgcolor: 'var(--muted)',
        }}
      >
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <Select
            value={language}
            onChange={handleLanguageChange}
            data-testid="language-select"
            aria-label="Programming language selector"
            sx={{
              height: 32,
              fontSize: '0.8125rem',
              fontWeight: 500,
              bgcolor: 'var(--card)',
            }}
          >
            <MenuItem value="javascript">JavaScript</MenuItem>
            <MenuItem value="python">Python</MenuItem>
            <MenuItem value="java">Java</MenuItem>
            <MenuItem value="cpp">C++</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
          Code Editor (SPA-019)
        </Typography>
      </Box>

      {/* Code Display / Editor Workspace */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          bgcolor: 'var(--background)',
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          color: 'var(--foreground)',
        }}
      >
        <Paper
          component="pre"
          elevation={0}
          sx={{
            m: 0,
            p: 1.5,
            borderRadius: 1,
            bgcolor: 'var(--muted)',
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.85rem',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            color: 'var(--foreground)',
          }}
        >
          <code>{starterCode}</code>
        </Paper>
      </Box>

      {/* Code Bottom Action Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 1.5,
          px: 2,
          py: 1.25,
          borderTop: 1,
          borderColor: 'var(--border)',
          bgcolor: 'var(--muted)',
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          size="small"
          startIcon={<PlayArrowIcon fontSize="small" />}
          data-testid="run-code-button"
          sx={{ textTransform: 'none', fontWeight: 600 }}
        >
          Run
        </Button>
        <Button
          variant="contained"
          color="success"
          size="small"
          startIcon={<SendIcon fontSize="small" />}
          data-testid="submit-code-button"
          sx={{ textTransform: 'none', fontWeight: 600 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        p: { xs: 1.5, sm: 2, md: 3 },
        minHeight: 'calc(100vh - 120px)',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Workspace Navigation Toolbar */}
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 1.5,
          px: 2,
          py: 1,
          bgcolor: 'var(--card)',
          border: 1,
          borderColor: 'var(--border)',
          borderRadius: 2,
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            component="a"
            href="/problems"
            size="small"
            color="inherit"
            startIcon={<FormatListBulletedIcon fontSize="small" />}
            sx={{ textTransform: 'none', fontWeight: 600 }}
            data-testid="back-to-problems"
          >
            Problem List
          </Button>

          <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'var(--foreground)' }}>
            {problem.id}. {problem.title}
          </Typography>

          <Chip
            label={problem.difficulty}
            size="small"
            color={
              problem.difficulty === 'Easy'
                ? 'success'
                : problem.difficulty === 'Medium'
                  ? 'warning'
                  : 'error'
            }
            sx={{ height: 22, fontSize: '0.75rem', fontWeight: 600 }}
          />
        </Stack>

        {/* Prev / Next Problem Navigation Links */}
        <Stack direction="row" spacing={1} alignItems="center">
          {prevProblemId ? (
            <Button
              component="a"
              href={`/problems/${prevProblemId}`}
              size="small"
              color="inherit"
              variant="outlined"
              startIcon={<ArrowBackIosNewIcon sx={{ fontSize: '0.75rem !important' }} />}
              sx={{ textTransform: 'none', fontSize: '0.8125rem' }}
              data-testid="prev-problem-link"
            >
              Prev
            </Button>
          ) : (
            <Button
              disabled
              size="small"
              variant="outlined"
              startIcon={<ArrowBackIosNewIcon sx={{ fontSize: '0.75rem !important' }} />}
              sx={{ textTransform: 'none', fontSize: '0.8125rem' }}
            >
              Prev
            </Button>
          )}

          {nextProblemId ? (
            <Button
              component="a"
              href={`/problems/${nextProblemId}`}
              size="small"
              color="inherit"
              variant="outlined"
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: '0.75rem !important' }} />}
              sx={{ textTransform: 'none', fontSize: '0.8125rem' }}
              data-testid="next-problem-link"
            >
              Next
            </Button>
          ) : (
            <Button
              disabled
              size="small"
              variant="outlined"
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: '0.75rem !important' }} />}
              sx={{ textTransform: 'none', fontSize: '0.8125rem' }}
            >
              Next
            </Button>
          )}
        </Stack>
      </Paper>

      {/* Main Workspace Body */}
      {isMobile ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 500 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'var(--border)', mb: 1.5 }}>
            <Tabs
              value={mobileTab}
              onChange={handleMobileTabChange}
              aria-label="Mobile workspace view tabs"
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab
                label="Description"
                value="description"
                id="mobile-tab-description"
                aria-controls="mobile-panel-description"
                data-testid="mobile-tab-description"
                sx={{ textTransform: 'none', fontWeight: 600 }}
              />
              <Tab
                label="Code"
                value="code"
                id="mobile-tab-code"
                aria-controls="mobile-panel-code"
                data-testid="mobile-tab-code"
                sx={{ textTransform: 'none', fontWeight: 600 }}
              />
              <Tab
                label="Submissions"
                value="submissions"
                id="mobile-tab-submissions"
                aria-controls="mobile-panel-submissions"
                data-testid="mobile-tab-submissions"
                sx={{ textTransform: 'none', fontWeight: 600 }}
              />
            </Tabs>
          </Box>

          <Box sx={{ flex: 1 }}>
            {mobileTab === 'description' && descriptionPanel}
            {mobileTab === 'code' && codePanel}
            {mobileTab === 'submissions' && (
              <Box
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: 'var(--card)',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'var(--border)',
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Submissions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  No submissions recorded yet for this problem.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      ) : (
        /* Desktop Two-Pane Split Layout */
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 2,
            flex: 1,
            minHeight: 'calc(100vh - 200px)',
          }}
        >
          <Box sx={{ height: '100%', minHeight: 0 }}>{descriptionPanel}</Box>
          <Box sx={{ height: '100%', minHeight: 0 }}>{codePanel}</Box>
        </Box>
      )}
    </Box>
  );
}

export default function ProblemWorkspace(props: ProblemWorkspaceProps) {
  return (
    <ClientOnlyMuiProvider>
      <ProblemWorkspaceView {...props} />
    </ClientOnlyMuiProvider>
  );
}
