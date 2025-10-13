import { render, screen } from '../../test/test-utils';
import { describe, it, expect } from 'vitest';
import { ProfileCard } from './ProfileCard';
import type { ProfileStats } from './ProfileCard.types';

describe('ProfileCard', () => {
  const defaultProps = {
    name: 'John Doe',
    username: 'johndoe',
    role: 'Developer',
    stats: {
      courses: 10,
      points: 2500,
      ranking: 15,
    } as ProfileStats,
  };

  it('renders with all props correctly', () => {
    render(
      <ProfileCard
        {...defaultProps}
        avatarUrl="https://example.com/avatar.jpg"
        data-testid="profile"
      />
    );

    expect(screen.getByTestId('profile')).toBeInTheDocument();
    expect(screen.getByTestId('profile-name')).toHaveTextContent('John Doe');
    expect(screen.getByTestId('profile-username')).toHaveTextContent('@johndoe');
    expect(screen.getByTestId('profile-role')).toHaveTextContent('Developer');
  });

  it('renders avatar with correct alt text', () => {
    render(
      <ProfileCard
        {...defaultProps}
        avatarUrl="https://example.com/avatar.jpg"
        data-testid="profile"
      />
    );

    const avatar = screen.getByTestId('profile-avatar');
    expect(avatar).toBeInTheDocument();
    const img = avatar.querySelector('img');
    expect(img).toHaveAttribute('alt', "John Doe's avatar");
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('shows initials when no avatar URL provided', () => {
    render(
      <ProfileCard
        {...defaultProps}
        avatarUrl={undefined}
        data-testid="profile"
      />
    );

    const avatar = screen.getByTestId('profile-avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveTextContent('JD'); // John Doe initials
  });

  it('renders statistics correctly', () => {
    render(<ProfileCard {...defaultProps} data-testid="profile" />);

    const stats = screen.getByTestId('profile-stats');
    expect(stats).toBeInTheDocument();

    const courses = screen.getByTestId('profile-stat-courses');
    expect(courses).toBeInTheDocument();
    expect(courses).toHaveTextContent('10');
    expect(courses).toHaveTextContent('Courses');

    const points = screen.getByTestId('profile-stat-points');
    expect(points).toBeInTheDocument();
    expect(points).toHaveTextContent('2,500'); // formatted with locale
    expect(points).toHaveTextContent('Points');

    const ranking = screen.getByTestId('profile-stat-ranking');
    expect(ranking).toBeInTheDocument();
    expect(ranking).toHaveTextContent('15th');
    expect(ranking).toHaveTextContent('Ranking');
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

    expect(screen.getByTestId('profile')).toBeInTheDocument();
    expect(screen.getByTestId('profile-name')).toHaveTextContent('Jane Doe');
    expect(screen.getByTestId('profile-username')).toHaveTextContent('@janedoe');
    expect(screen.queryByTestId('profile-role')).not.toBeInTheDocument();
  });

  it('hides stats when showStats is false', () => {
    render(
      <ProfileCard
        {...defaultProps}
        showStats={false}
        data-testid="profile"
      />
    );

    expect(screen.getByTestId('profile')).toBeInTheDocument();
    expect(screen.queryByTestId('profile-stats')).not.toBeInTheDocument();
  });

  it('handles long names with proper truncation', () => {
    const longName = 'Alexander Christopher Montgomery III';
    render(
      <ProfileCard
        {...defaultProps}
        name={longName}
        data-testid="profile"
      />
    );

    const nameElement = screen.getByTestId('profile-name');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent(longName);
    expect(nameElement).toHaveAttribute('title', longName);
  });

  it('handles long username with proper truncation', () => {
    const longUsername = 'verylongusernamethatshouldbeproperlydisplayed';
    render(
      <ProfileCard
        {...defaultProps}
        username={longUsername}
        data-testid="profile"
      />
    );

    const usernameElement = screen.getByTestId('profile-username');
    expect(usernameElement).toBeInTheDocument();
    expect(usernameElement).toHaveTextContent(`@${longUsername}`);
    expect(usernameElement).toHaveAttribute('title', longUsername);
  });

  it.each([
    ['small' as const],
    ['medium' as const],
    ['large' as const],
  ])('renders with size="%s"', (size) => {
    render(
      <ProfileCard
        {...defaultProps}
        size={size}
        data-testid="profile"
      />
    );
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });

  it.each([
    ['default' as const],
    ['compact' as const],
    ['expanded' as const],
  ])('renders with variant="%s"', (variant) => {
    render(
      <ProfileCard
        {...defaultProps}
        variant={variant}
        data-testid="profile"
      />
    );
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });

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
      const { rerender } = render(
        <ProfileCard
          {...defaultProps}
          stats={{ ...defaultProps.stats, ranking }}
          data-testid="profile"
        />
      );

      const rankingElement = screen.getByTestId('profile-stat-ranking');
      expect(rankingElement).toHaveTextContent(expected);

      rerender(<></>); // Clean up for next iteration
    });
  });

  it('handles missing stats object gracefully', () => {
    render(
      <ProfileCard
        name="Test User"
        username="testuser"
        stats={undefined}
        data-testid="profile"
      />
    );

    const stats = screen.getByTestId('profile-stats');
    expect(stats).toBeInTheDocument();

    // Should show default values (0)
    expect(screen.getByTestId('profile-stat-courses')).toHaveTextContent('0');
    expect(screen.getByTestId('profile-stat-points')).toHaveTextContent('0');
    expect(screen.getByTestId('profile-stat-ranking')).toHaveTextContent('-');
  });

  it('handles single-word names for initials', () => {
    render(
      <ProfileCard
        name="Madonna"
        username="madonna"
        data-testid="profile"
      />
    );

    const avatar = screen.getByTestId('profile-avatar');
    expect(avatar).toHaveTextContent('M');
  });

  it('handles empty name for initials fallback', () => {
    render(
      <ProfileCard
        name=""
        username="emptyname"
        data-testid="profile"
      />
    );

    const avatar = screen.getByTestId('profile-avatar');
    expect(avatar).toHaveTextContent('?');
  });

  it('applies custom className', () => {
    render(
      <ProfileCard
        {...defaultProps}
        className="custom-class"
        data-testid="profile"
      />
    );

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

    // Check avatar alt text
    const avatar = screen.getByTestId('profile-avatar');
    const img = avatar.querySelector('img');
    expect(img).toHaveAttribute('alt', "John Doe's avatar");

    // Check that text elements are properly structured
    expect(screen.getByTestId('profile-name')).toBeInTheDocument();
    expect(screen.getByTestId('profile-username')).toBeInTheDocument();
    expect(screen.getByTestId('profile-role')).toBeInTheDocument();
  });
});