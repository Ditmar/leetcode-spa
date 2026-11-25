import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SafeMarkdown from './SafeMarkdown';

describe('SafeMarkdown', () => {
  it('renders simple text paragraphs', () => {
    render(<SafeMarkdown content="This is a simple paragraph." />);
    expect(screen.getByText('This is a simple paragraph.')).toBeInTheDocument();
  });

  it('renders unordered and ordered lists', () => {
    const markdown = `- Item 1\n- Item 2\n\n1. First\n2. Second`;
    render(<SafeMarkdown content={markdown} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });

  it('renders code blocks and inline code', () => {
    const markdown =
      'Here is inline `const x = 10;` and a block:\n```js\nfunction add(a, b) {\n  return a + b;\n}\n```';
    render(<SafeMarkdown content={markdown} />);
    expect(screen.getByText('const x = 10;')).toBeInTheDocument();
    expect(screen.getByText(/function add\(a, b\)/)).toBeInTheDocument();
  });

  it('renders bold and safe links', () => {
    const markdown = 'Check **important** and [LeetCode](https://leetcode.com)';
    render(<SafeMarkdown content={markdown} />);
    expect(screen.getByText('important')).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'LeetCode' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://leetcode.com');
  });

  it('sanitizes dangerous javascript links and raw script tags', () => {
    const markdown = 'Dangerous [click me](javascript:alert(1)) and <script>alert("xss")</script>';
    render(<SafeMarkdown content={markdown} />);
    expect(screen.queryByRole('link', { name: 'click me' })).toBeNull();
    expect(screen.getByText(/click me/)).toBeInTheDocument();
    expect(screen.getByText(/<script>alert\("xss"\)<\/script>/)).toBeInTheDocument();
  });
});
