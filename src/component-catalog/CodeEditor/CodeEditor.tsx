import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Collapse,
  FormControl,
  MenuItem,
  Select,
  Skeleton,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { lazy, Suspense } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

import { SUPPORTED_LANGUAGES } from './CodeEditor.constants';
import { useCodeEditor } from './CodeEditor.hook';
import {
  CodeEditorLayout,
  CodeEditorRoot,
  EditorArea,
  OutputPanel,
  OutputToolbar,
  ResizeHandle,
  TestResultItem,
  ToolbarContainer,
} from './CodeEditor.styles';

import type { CodeEditorProps, Language } from './CodeEditor.types';

const MonacoEditor = lazy(() => import('@monaco-editor/react'));

const SubmitUploadIcon = () => (
  <SvgIcon
    viewBox="0 0 24 24"
    sx={{
      fontSize: '1.1rem',
      fill: 'none',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 2.2,
    }}
  >
    <path d="M12 15V4" />
    <path d="M7 9l5-5 5 5" />
    <path d="M5 15v4h14v-4" />
  </SvgIcon>
);

export const CodeEditor = (props: CodeEditorProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const {
    language,
    code,
    executionResult,
    isRunning,
    isSubmitting,
    isExecuting,
    fontSize,
    setCode,
    handleLanguageChange,
    handleRun,
    handleSubmit,
    handleReset,
  } = useCodeEditor(props);

  const renderEditor = () => (
    <Suspense fallback={<Skeleton variant="rectangular" height="100%" />}>
      <MonacoEditor
        height="100%"
        language={language}
        theme="vs-dark"
        value={code}
        options={{
          fontSize,
          minimap: { enabled: false },
          automaticLayout: true,
          lineNumbers: 'off',
          glyphMargin: false,
          folding: false,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 0,
          renderLineHighlight: 'none',
          overviewRulerBorder: false,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          padding: { top: 24 },
        }}
        onChange={(value) => setCode(value ?? '')}
      />
    </Suspense>
  );

  const renderOutput = () => (
    <OutputPanel role="status" aria-live="polite">
      {isExecuting && <Skeleton variant="rounded" height={120} />}

      {!isExecuting && !executionResult && (
        <>
          <TestResultItem>
            <Typography color="common.white" fontWeight={500}>
              Case 1
            </Typography>

            <Typography color="grey.100" fontFamily="monospace">
              Input: [2,7,11,15], 9
            </Typography>

            <Typography color="grey.100" fontFamily="monospace">
              Expected: [0,1]
            </Typography>
          </TestResultItem>

          <TestResultItem>
            <Typography color="common.white" fontWeight={500}>
              Case 2
            </Typography>

            <Typography color="grey.100" fontFamily="monospace">
              Input: [3,2,4], 6
            </Typography>

            <Typography color="grey.100" fontFamily="monospace">
              Expected: [1,2]
            </Typography>
          </TestResultItem>
        </>
      )}

      {!isExecuting && executionResult?.errorMessage && (
        <Alert severity="error">{executionResult.errorMessage}</Alert>
      )}

      {!isExecuting && executionResult && (
        <Stack
          direction="row"
          spacing={2}
          sx={{
            color: 'var(--nav-text)',
            fontSize: '0.82rem',
            fontWeight: 500,
          }}
        >
          <Typography variant="body2">Runtime: {executionResult.runtimeMs} ms</Typography>

          <Typography variant="body2">Memory: {executionResult.memoryMb} MB</Typography>
        </Stack>
      )}

      {!isExecuting &&
        executionResult?.tests.map((test) => (
          <TestResultItem key={test.id}>
            <Typography color={test.passed ? 'success.light' : 'error.light'} fontWeight={700}>
              {test.passed ? '✓' : '✗'} {test.name}
            </Typography>

            {!test.passed && (
              <Box>
                <Typography color="grey.100" fontFamily="monospace">
                  Expected: {test.expected}
                </Typography>

                <Typography color="grey.100" fontFamily="monospace">
                  Received: {test.received}
                </Typography>
              </Box>
            )}
          </TestResultItem>
        ))}
    </OutputPanel>
  );

  const renderOutputToolbar = () => (
    <OutputToolbar>
      <Stack
        direction="row"
        sx={(theme) => ({
          width: theme.spacing(21),
          height: theme.spacing(4.5),
          padding: 0,
          backgroundColor: 'color-mix(in srgb, var(--nav-text) 18%, transparent)',
          borderRadius: 'var(--radius-xl)',
          alignItems: 'center',
        })}
      >
        <Button
          sx={(theme) => ({
            width: theme.spacing(10.5),
            height: theme.spacing(3.625),
            minWidth: 0,
            padding: 0,
            color: 'var(--foreground)',
            backgroundColor: 'color-mix(in srgb, var(--nav-text) 26%, transparent)',
            textTransform: 'none',
            borderRadius: 'var(--radius-xl)',
            fontWeight: 700,
            fontSize: '0.82rem',
            boxShadow: 'none',
            whiteSpace: 'nowrap',

            '&:hover': {
              backgroundColor: 'color-mix(in srgb, var(--nav-text) 26%, transparent)',
              boxShadow: 'none',
            },
          })}
        >
          Testcases
        </Button>

        <Button
          sx={(theme) => ({
            width: theme.spacing(10.5),
            height: theme.spacing(3.625),
            minWidth: 0,
            padding: 0,
            color: 'var(--foreground)',
            backgroundColor: 'transparent',
            textTransform: 'none',
            borderRadius: 'var(--radius-xl)',
            fontWeight: 700,
            fontSize: '0.82rem',
            boxShadow: 'none',
            whiteSpace: 'nowrap',

            '&:hover': {
              backgroundColor: 'color-mix(in srgb, var(--nav-text) 10%, transparent)',
              boxShadow: 'none',
            },
          })}
        >
          Test Result
        </Button>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
        <Tooltip title="Run code">
          <span>
            <Button
              variant="outlined"
              disabled={isExecuting}
              onClick={() => {
                void handleRun();
              }}
              startIcon={
                isRunning ? (
                  <CircularProgress size={14} color="inherit" />
                ) : (
                  <PlayArrowOutlinedIcon sx={{ fontSize: '1.05rem' }} />
                )
              }
              aria-label="run code"
              sx={(theme) => ({
                height: theme.spacing(4),
                minWidth: {
                  xs: theme.spacing(9),
                  sm: theme.spacing(9.625),
                },
                px: 2,
                color: 'var(--nav-text)',
                backgroundColor: 'var(--nav-border)',
                border: '1px solid color-mix(in srgb, var(--nav-text) 16%, transparent)',
                textTransform: 'none',
                borderRadius: 'var(--radius-lg)',
                fontWeight: 700,
                fontSize: '0.92rem',
                boxShadow: 'none',

                '& .MuiButton-startIcon': {
                  marginRight: theme.spacing(0.75),
                },

                '&:hover': {
                  backgroundColor: 'var(--nav-border)',
                  boxShadow: 'none',
                },
              })}
            >
              Run
            </Button>
          </span>
        </Tooltip>

        <Tooltip title="Submit solution">
          <span>
            <Button
              variant="contained"
              disabled={isExecuting}
              onClick={() => {
                void handleSubmit();
              }}
              startIcon={
                isSubmitting ? <CircularProgress size={14} color="inherit" /> : <SubmitUploadIcon />
              }
              aria-label="submit code"
              sx={(theme) => ({
                height: theme.spacing(4),
                minWidth: {
                  xs: theme.spacing(10.5),
                  sm: theme.spacing(12),
                },
                px: 2,
                color: 'var(--primary-foreground)',
                backgroundColor: 'var(--nav-accent-green)',
                textTransform: 'none',
                borderRadius: 'var(--radius-lg)',
                fontWeight: 700,
                fontSize: '0.92rem',
                boxShadow: 'none',

                '& .MuiButton-startIcon': {
                  marginRight: theme.spacing(1),
                  marginLeft: 0,
                },

                '&:hover': {
                  backgroundColor: 'var(--nav-accent-green)',
                  boxShadow: 'none',
                },
              })}
            >
              Submit
            </Button>
          </span>
        </Tooltip>
      </Stack>
    </OutputToolbar>
  );

  return (
    <CodeEditorRoot elevation={0}>
      <CodeEditorLayout>
        <ToolbarContainer>
          <FormControl size="small">
            <Select
              value={language}
              IconComponent={KeyboardArrowDownRoundedIcon}
              onChange={(event) => handleLanguageChange(event.target.value as Language)}
              sx={(theme) => ({
                width: {
                  xs: '100%',
                  sm: theme.spacing(20),
                },
                height: theme.spacing(4.25),
                color: 'var(--primary-foreground)',
                backgroundColor: 'color-mix(in srgb, var(--nav-text) 20%, var(--nav-bg))',
                borderRadius: 'var(--radius-xl)',
                fontWeight: 500,
                border: '1px solid color-mix(in srgb, var(--nav-text) 26%, transparent)',

                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },

                '& .MuiSelect-select': {
                  paddingBlock: 0,
                  paddingLeft: theme.spacing(2),
                  display: 'flex',
                  alignItems: 'center',
                },

                '& .MuiSvgIcon-root': {
                  color: 'color-mix(in srgb, var(--nav-text) 10%, transparent)',
                  fontSize: '1.4rem',
                  right: theme.spacing(0.5),
                },

                '&:hover': {
                  backgroundColor: 'color-mix(in srgb, var(--nav-text) 14%, var(--nav-bg))',
                },
              })}
            >
              {SUPPORTED_LANGUAGES.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Tooltip title="Reset code">
            <span>
              <Button
                variant="text"
                disabled={isExecuting}
                onClick={handleReset}
                startIcon={<ReplayRoundedIcon />}
                aria-label="reset code"
                sx={(theme) => ({
                  height: theme.spacing(4.25),
                  minWidth: {
                    xs: theme.spacing(9),
                    sm: theme.spacing(10.75),
                  },
                  px: 2.4,
                  color: 'var(--primary-foreground)',
                  backgroundColor: 'color-mix(in srgb, var(--nav-text) 20%, var(--nav-bg))',
                  border: '1px solid color-mix(in srgb, var(--nav-text) 18%, transparent)',
                  textTransform: 'none',
                  borderRadius: 'var(--radius-xl)',
                  fontWeight: 500,
                  fontSize: '0.92rem',
                  boxShadow: 'none',

                  '& .MuiButton-startIcon': {
                    marginRight: theme.spacing(1.25),
                    marginLeft: theme.spacing(0.25),
                  },

                  '&:hover': {
                    backgroundColor: 'color-mix(in srgb, var(--nav-text) 10%, transparent)',
                    boxShadow: 'none',
                  },
                })}
              >
                Reset
              </Button>
            </span>
          </Tooltip>
        </ToolbarContainer>

        <PanelGroup direction="vertical">
          <Panel defaultSize={isMobile ? 64 : 70} minSize={40}>
            <EditorArea
              sx={{
                height: '100%',
                backgroundColor: 'var(--editor-background)',

                '& .monaco-editor': {
                  backgroundColor: 'var(--editor-background) !important',
                },

                '& .monaco-editor-background': {
                  backgroundColor: 'var(--editor-background) !important',
                },

                '& .margin': {
                  backgroundColor: 'var(--editor-background) !important',
                },

                '& .monaco-scrollable-element': {
                  backgroundColor: 'var(--editor-background) !important',
                },
              }}
            >
              {renderEditor()}
            </EditorArea>
          </Panel>

          {!isMobile && (
            <PanelResizeHandle>
              <ResizeHandle />
            </PanelResizeHandle>
          )}

          <Panel defaultSize={isMobile ? 36 : 30} minSize={20}>
            {isMobile ? (
              <Collapse
                in={true}
                timeout="auto"
                unmountOnExit={false}
                sx={{
                  height: '100%',
                }}
              >
                {renderOutputToolbar()}
                {renderOutput()}
              </Collapse>
            ) : (
              <>
                {renderOutputToolbar()}
                {renderOutput()}
              </>
            )}
          </Panel>
        </PanelGroup>
      </CodeEditorLayout>
    </CodeEditorRoot>
  );
};
