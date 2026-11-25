import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';

import type { ReactNode } from 'react';

interface SafeMarkdownProps {
  content: string;
}

function parseInline(text: string): ReactNode[] {
  // Regex matches:
  // 1. inline code: `code`
  // 2. bold: **text**
  // 3. italic: *text*
  // 4. link: [label](url)
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;

    if (part.startsWith('`') && part.endsWith('`')) {
      const code = part.slice(1, -1);
      return (
        <Box
          key={index}
          component="code"
          sx={{
            px: 0.75,
            py: 0.2,
            mx: 0.25,
            borderRadius: 0.5,
            bgcolor: 'action.hover',
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.85em',
            color: 'primary.main',
          }}
        >
          {code}
        </Box>
      );
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      const bold = part.slice(2, -2);
      return (
        <Box key={index} component="strong" sx={{ fontWeight: 600 }}>
          {bold}
        </Box>
      );
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      const italic = part.slice(1, -1);
      return (
        <Box key={index} component="em">
          {italic}
        </Box>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      // Sanitize URL against javascript:
      const isSafe = /^(https?:\/\/|\/)/i.test(url.trim());
      if (isSafe) {
        return (
          <Link
            key={index}
            href={url.trim()}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'primary.main', textDecoration: 'underline' }}
          >
            {label}
          </Link>
        );
      }
      return <span key={index}>{label}</span>;
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export default function SafeMarkdown({ content }: SafeMarkdownProps) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements: ReactNode[] = [];

  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let inList = false;
  let listItems: string[] = [];
  let isOrderedList = false;

  const flushList = (key: number) => {
    if (!inList) return;
    const ListComponent = isOrderedList ? 'ol' : 'ul';
    elements.push(
      <Box
        key={`list-${key}`}
        component={ListComponent}
        sx={{
          m: 0,
          mb: 1.5,
          pl: 3,
          '& li': { mb: 0.5 },
          color: 'var(--foreground)',
        }}
      >
        {listItems.map((item, i) => (
          <li key={i}>{parseInline(item)}</li>
        ))}
      </Box>
    );
    inList = false;
    listItems = [];
    isOrderedList = false;
  };

  const flushCodeBlock = (key: number) => {
    if (!inCodeBlock) return;
    elements.push(
      <Paper
        key={`code-${key}`}
        component="pre"
        elevation={0}
        sx={{
          p: 1.5,
          my: 1.5,
          borderRadius: 'var(--radius-lg)',
          bgcolor: 'var(--muted)',
          border: 1,
          borderColor: 'var(--border)',
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.8125rem',
          lineHeight: 1.6,
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          color: 'var(--foreground)',
        }}
      >
        <code>{codeBlockContent.join('\n')}</code>
      </Paper>
    );
    inCodeBlock = false;
    codeBlockContent = [];
  };

  lines.forEach((line, index) => {
    // Code block fences ```
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        flushCodeBlock(index);
      } else {
        flushList(index);
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    // Unordered list item (- or *)
    const unorderedMatch = line.match(/^[\s]*[-*]\s+(.*)/);
    if (unorderedMatch) {
      if (!inList || isOrderedList) {
        flushList(index);
        inList = true;
        isOrderedList = false;
      }
      listItems.push(unorderedMatch[1]);
      return;
    }

    // Ordered list item (1. 2. etc)
    const orderedMatch = line.match(/^[\s]*\d+\.\s+(.*)/);
    if (orderedMatch) {
      if (!inList || !isOrderedList) {
        flushList(index);
        inList = true;
        isOrderedList = true;
      }
      listItems.push(orderedMatch[1]);
      return;
    }

    // If regular line, flush any active list
    flushList(index);

    // Empty line
    if (!line.trim()) {
      return;
    }

    // Headings
    if (line.startsWith('### ')) {
      elements.push(
        <Typography
          key={index}
          variant="subtitle1"
          component="h3"
          sx={{ mt: 2, mb: 1, fontWeight: 700, color: 'var(--foreground)' }}
        >
          {parseInline(line.slice(4))}
        </Typography>
      );
      return;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <Typography
          key={index}
          variant="h6"
          component="h2"
          sx={{ mt: 2, mb: 1, fontWeight: 700, color: 'var(--foreground)' }}
        >
          {parseInline(line.slice(3))}
        </Typography>
      );
      return;
    }

    if (line.startsWith('# ')) {
      elements.push(
        <Typography
          key={index}
          variant="h5"
          component="h1"
          sx={{ mt: 2, mb: 1, fontWeight: 700, color: 'var(--foreground)' }}
        >
          {parseInline(line.slice(2))}
        </Typography>
      );
      return;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <Box
          key={index}
          component="blockquote"
          sx={{
            my: 1.5,
            pl: 2,
            borderLeft: 3,
            borderColor: 'primary.main',
            color: 'text.secondary',
            fontStyle: 'italic',
          }}
        >
          {parseInline(line.slice(2))}
        </Box>
      );
      return;
    }

    // Standard paragraph
    elements.push(
      <Typography
        key={index}
        variant="body2"
        sx={{
          mb: 1.25,
          lineHeight: 1.65,
          color: 'var(--foreground)',
          fontSize: '0.9375rem',
        }}
      >
        {parseInline(line)}
      </Typography>
    );
  });

  // Flush any remaining list or code block
  flushList(lines.length);
  flushCodeBlock(lines.length);

  return <Box sx={{ width: '100%' }}>{elements}</Box>;
}
