import { Box, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CodeEditorRoot = styled(Paper)(() => ({
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: 'var(--nav-bg)',
  borderRadius: 0,
  boxShadow: 'none',
}));

export const CodeEditorLayout = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  backgroundColor: 'var(--nav-bg)',
}));

export const ToolbarContainer = styled(Box)(({ theme }) => ({
  height: theme.spacing(7),
  padding: theme.spacing(1.25, 2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'color-mix(in srgb, var(--nav-text) 10%, var(--nav-bg))',

  borderBottom: '1px solid color-mix(in srgb, var(--nav-text) 16%, transparent)',

  boxShadow: 'none',
}));

export const EditorArea = styled(Box)(() => ({
  flex: 1,
  minHeight: 0,
  backgroundColor: 'var(--nav-bg)',

  borderBottom: '1px solid color-mix(in srgb, var(--nav-text) 18%, transparent)',
}));

export const OutputToolbar = styled(Box)(({ theme }) => ({
  height: theme.spacing(6.5),
  padding: theme.spacing(1, 2),

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'color-mix(in srgb, var(--nav-text) 4%, var(--nav-bg))',

  borderTop: '1px solid color-mix(in srgb, var(--nav-text) 18%, transparent)',

  boxShadow: 'none',
}));

export const OutputPanel = styled(Stack)(({ theme }) => ({
  flex: 1,
  minHeight: 0,
  padding: theme.spacing(1.5, 2),
  gap: theme.spacing(1.5),
  overflow: 'auto',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  backgroundColor: 'color-mix(in srgb, var(--nav-text) 4%, var(--nav-bg))',
}));

export const TestResultItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),

  borderRadius: 'var(--radius-lg)',

  backgroundColor: 'color-mix(in srgb, var(--nav-text) 18%, var(--nav-bg))',

  color: 'var(--nav-text)',

  border: 'none',

  boxShadow: 'none',
}));

export const ResizeHandle = styled(Box)(() => ({
  height: '0',

  backgroundColor: 'color-mix(in srgb, var(--nav-text) 12%, transparent)',

  cursor: 'row-resize',

  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: 'color-mix(in srgb, var(--nav-text) 22%, transparent)',
  },
}));
