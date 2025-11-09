import { describe, it, expect } from 'vitest';

import { render, screen } from '../../test/test-utils';

import { ProfileCard } from './ProfileCard';

import type { ProfileStatsProps } from './ProfileCard.types';

describe('ProfileCard', () => {
  const defaultProps = {
    name: 'John Doe',
    username: 'johndoe',
    role: 'Developer',
    stats: {
      courses: 10,
      points: 2500,
      ranking: 15,
    } as ProfileStatsProps,
  };

  it('renders with all props correctly', () => {
    render(
      <ProfileCard
        {...defaultProps}
        avatarUrl="https://example.com/avatar.jpg"
        data-testid="profile"
      />
    );

    const article = screen.getByRole('article', { name: /profile card for john doe/i });
    expect(article).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /john doe/i })).toBeInTheDocument();
    expect(screen.getByText(/@johndoe/i)).toBeInTheDocument();
    expect(screen.getByText(/developer/i)).toBeInTheDocument();
  });

  it('renders avatar with correct alt text', () => {
    render(
      <ProfileCard
        {...defaultProps}
        avatarUrl="https://example.com/avatar.jpg"
        data-testid="profile"
      />
    );

    const avatar = screen.getByRole('img', { name: /john doe's avatar/i });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('shows initials when no avatar URL provided', () => {
    render(<ProfileCard {...defaultProps} avatarUrl={undefined} data-testid="profile" />);

    const avatar = screen.getByTestId('profile-avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveTextContent('JD');
  });

  it('renders statistics correctly', () => {
    render(<ProfileCard {...defaultProps} data-testid="profile" />);

    const statsRegion = screen.getByRole('region', { name: /user statistics/i });
    expect(statsRegion).toBeInTheDocument();

    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText(/courses/i)).toBeInTheDocument();

    expect(screen.getByText('2,500')).toBeInTheDocument();
    expect(screen.getByText(/points/i)).toBeInTheDocument();

    expect(screen.getByText('15th')).toBeInTheDocument();
    expect(screen.getByText(/ranking/i)).toBeInTheDocument();
  });

  it('handles missing role gracefully', () => {
    render(
      <ProfileCard
        name="Jane Doe"
        username="janedoe"
        role={undefined}
        stats={defaultProps.stats}
        data-testid="profile"
      />
    );

    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /jane doe/i })).toBeInTheDocument();
    expect(screen.getByText(/@janedoe/i)).toBeInTheDocument();
    expect(screen.queryByText(/developer/i)).not.toBeInTheDocument();
  });

  it('hides stats when showStats is false', () => {
    render(<ProfileCard {...defaultProps} showStats={false} data-testid="profile" />);

    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.queryByRole('region', { name: /user statistics/i })).not.toBeInTheDocument();
  });

  it('handles long names with proper truncation', () => {
    const longName = 'Alexander Christopher Montgomery III';
    render(<ProfileCard {...defaultProps} name={longName} data-testid="profile" />);

    const nameElement = screen.getByRole('heading', { name: new RegExp(longName, 'i') });
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveAttribute('title', longName);
  });

  it('handles long username with proper truncation', () => {
    const longUsername = 'verylongusernamethatshouldbeproperlydisplayed';
    render(<ProfileCard {...defaultProps} username={longUsername} data-testid="profile" />);

    const usernameElement = screen.getByText(`@${longUsername}`);
    expect(usernameElement).toBeInTheDocument();
    expect(usernameElement).toHaveAttribute('title', longUsername);
  });

  it.each([['small' as const], ['medium' as const], ['large' as const]])(
    'renders with size="%s"',
    (size) => {
      render(<ProfileCard {...defaultProps} size={size} data-testid="profile" />);
      expect(screen.getByRole('article')).toBeInTheDocument();
    }
  );

  it.each([['default' as const], ['compact' as const], ['expanded' as const]])(
    'renders with variant="%s"',
    (variant) => {
      render(<ProfileCard {...defaultProps} variant={variant} data-testid="profile" />);
      expect(screen.getByRole('article')).toBeInTheDocument();
    }
  );

  it('formats ranking correctly for special positions', () => {
    const testCases = [
      { ranking: 1, expected: '1st' },
      { ranking: 2, expected: '2nd' },
      { ranking: 3, expected: '3rd' },
      { ranking: 4, expected: '4th' },
      { ranking: 11, expected: '11th' },
      { ranking: 21, expected: '21st' },
      { ranking: 22, expected: '22nd' },
      { ranking: 23, expected: '23rd' },
      { ranking: 0, expected: '-' },
    ];

    testCases.forEach(({ ranking, expected }) => {
      const { unmount } = render(
        <ProfileCard
          {...defaultProps}
          stats={{ ...defaultProps.stats, ranking }}
          data-testid="profile"
        />
      );

      expect(screen.getByText(expected)).toBeInTheDocument();
      unmount();
    });
  });

  it('handles missing stats object gracefully with default values', () => {
    render(
      <ProfileCard name="Test User" username="testuser" stats={undefined} data-testid="profile" />
    );

    const statsRegion = screen.getByRole('region', { name: /user statistics/i });
    expect(statsRegion).toBeInTheDocument();

    const coursesElement = screen.getByTestId('profile-stat-courses');
    expect(coursesElement).toHaveTextContent('0');
    expect(coursesElement).toHaveTextContent('Courses');

    const pointsElement = screen.getByTestId('profile-stat-points');
    expect(pointsElement).toHaveTextContent('0');
    expect(pointsElement).toHaveTextContent('Points');

    const rankingElement = screen.getByTestId('profile-stat-ranking');
    expect(rankingElement).toHaveTextContent('-');
    expect(rankingElement).toHaveTextContent('Ranking');
  });

  it('handles single-word names for initials', () => {
    render(<ProfileCard name="Madonna" username="madonna" data-testid="profile" />);

    const avatar = screen.getByTestId('profile-avatar');
    expect(avatar).toHaveTextContent('M');
  });

  it('applies custom className', () => {
    render(<ProfileCard {...defaultProps} className="custom-class" data-testid="profile" />);

    const card = screen.getByTestId('profile');
    expect(card).toHaveClass('custom-class');
  });

  it('is accessible with proper ARIA attributes', () => {
    render(
      <ProfileCard
        {...defaultProps}
        avatarUrl="https://example.com/avatar.jpg"
        data-testid="profile"
      />
    );

    const article = screen.getByRole('article', { name: /profile card for john doe/i });
    expect(article).toBeInTheDocument();

    const avatar = screen.getByRole('img', { name: /john doe's avatar/i });
    expect(avatar).toBeInTheDocument();

    const statsRegion = screen.getByRole('region', { name: /user statistics/i });
    expect(statsRegion).toBeInTheDocument();
  });

  // New tests for prop validation

  it('throws error when name is missing', () => {
    expect(() => {
      render(<ProfileCard name="" username="testuser" data-testid="profile" />);
    }).toThrow('ProfileCard: "name" and "username" are required props and cannot be empty.');
  });

  it('throws error when username is missing', () => {
    expect(() => {
      render(<ProfileCard name="Test User" username="" data-testid="profile" />);
    }).toThrow('ProfileCard: "name" and "username" are required props and cannot be empty.');
  });

  it('throws error when both name and username are missing', () => {
    expect(() => {
      render(<ProfileCard name="" username="" data-testid="profile" />);
    }).toThrow('ProfileCard: "name" and "username" are required props and cannot be empty.');
  });

  it('handles undefined stats prop with default values', () => {
    const { container } = render(
      <ProfileCard
        name="User Without Stats"
        username="nostats"
        stats={undefined}
        data-testid="profile"
      />
    );

    expect(container).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /user statistics/i })).toBeInTheDocument();
  });

  it('handles partial stats object correctly', () => {
    const partialStats = {
      courses: 5,
      points: 0,
      ranking: 0,
    } as ProfileStatsProps;

    render(
      <ProfileCard
        name="Partial Stats User"
        username="partialstats"
        stats={partialStats}
        data-testid="profile"
      />
    );

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
  });
});
