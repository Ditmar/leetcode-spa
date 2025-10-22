import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { TestCard } from './TestCard';

describe('TestCard', () => {
  const description = 'Card Description';
  const logoUrl = 'https://i.postimg.cc/KckvLBVj/codigo.jpg';
  const onSelect = vi.fn();
  const title = 'Card Title';

  beforeEach(() => {
    onSelect.mockClear();
  });

  it('calls onSelect when card is clicked', async () => {
    render(
      <TestCard
        logo={logoUrl}
        title={title}
        description={description}
        onSelect={onSelect}
        data-testid="test-card"
      />
    );
    const button = screen.getByRole('button', { name: title || 'Interactive card' });
    await userEvent.click(button);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('renders logo when logo prop is a React node', () => {
    const LogoNode = <div data-testid="logo-node">LogoNode</div>;
    render(<TestCard logo={LogoNode} title={title} description={description} />);
    const node = screen.getByTestId('logo-node');
    expect(node).toBeInTheDocument();
    expect(node).toHaveTextContent('LogoNode');
  });

  it('renders logo when logo prop is a URL', () => {
    render(
      <TestCard logo={logoUrl} title={title} description={description} data-testid="test-card" />
    );
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', logoUrl);
  });

  it('renders title and description', () => {
    render(<TestCard logo={logoUrl} title={title} description={description} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
