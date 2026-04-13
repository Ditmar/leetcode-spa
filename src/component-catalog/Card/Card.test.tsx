import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

import { Card } from './Card';

describe('Card Component', () => {
  it('renders title', () => {
    render(<Card title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(<Card>Content</Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders media when provided', () => {
    render(<Card media="https://via.placeholder.com/150" />);
    const media = screen.getByRole('img');
    expect(media).toBeInTheDocument();
  });

  it('renders horizontal layout', () => {
    render(
      <Card layout="horizontal" title="Horizontal Card">
        Content
      </Card>
    );

    expect(screen.getByText('Horizontal Card')).toBeInTheDocument();
  });

  it('expands and shows hidden content', async () => {
    render(
      <Card expandable expandedContent="Hidden Content">
        Content
      </Card>
    );

    const button = screen.getByRole('button');

    // 👇 userEvent maneja act automáticamente
    await userEvent.click(button);

    // 👇 espera a que MUI Collapse renderice
    expect(await screen.findByText('Hidden Content')).toBeInTheDocument();
  });

  it('renders avatar when provided', () => {
    render(
      <Card title="User" avatar={<div data-testid="avatar">A</div>}>
        Content
      </Card>
    );

    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('renders highlighted variant', () => {
    render(<Card customVariant="highlighted" title="Hi" />);
    expect(screen.getByText('Hi')).toBeInTheDocument();
  });
});
