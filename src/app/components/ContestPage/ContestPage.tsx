import { useState } from 'react';
import { useAppConfig } from '../../../context/AppConfigContext';
import { contestsService } from '../../../services/contests/contestsService';
import AuthModal from '../AuthModal/AuthModal';
import type { ContestPageProps } from './ContestPage.types';
import type { ContestDetail } from '../../../services/contests/contestsService.types';

// Individual contest card with join action and auth gating
function ContestCard({
  contest,
  onAuthRequired,
}: {
  contest: ContestDetail;
  onAuthRequired: () => void;
}) {
  const { user } = useAppConfig();
  const isAuthenticated = !!user;
  const [isRegistered, setIsRegistered] = useState(contest.isRegistered ?? false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle join with optimistic update — reverts on error
  async function handleJoin() {
    if (isLoading) return;

    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }

    if (isRegistered) return;

    setIsRegistered(true);
    setIsLoading(true);

    try {
      await contestsService.joinContest(contest.id);
    } catch {
      setIsRegistered(false);
    } finally {
      setIsLoading(false);
    }
  }

  const buttonLabel = isRegistered ? 'Registered' : 'Join';
  const isDisabled = isRegistered || isLoading;

  return (
    <div className="contest-card">
      <h3 className="contest-card__title">{contest.title}</h3>
      {contest.description && <p className="contest-card__description">{contest.description}</p>}
      <p className="contest-card__meta">{contest.participantsCount ?? 0} participants</p>
      {/* Button disabled with tooltip when not authenticated */}
      <span
        className="contest-card__action"
        title={!isAuthenticated ? 'Sign in to join this contest' : undefined}
      >
        <button
          className="contest-card__btn"
          onClick={handleJoin}
          disabled={isDisabled}
          aria-disabled={isDisabled}
        >
          {buttonLabel}
        </button>
      </span>
    </div>
  );
}

// Section grouping contests by status
function ContestSection({
  title,
  contests,
  onAuthRequired,
}: {
  title: string;
  contests: ContestDetail[];
  onAuthRequired: () => void;
}) {
  if (contests.length === 0) return null;

  return (
    <section className="contest-section">
      <h2 className="contest-section__title">{title}</h2>
      <div className="contest-section__grid">
        {contests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} onAuthRequired={onAuthRequired} />
        ))}
      </div>
    </section>
  );
}

// Main page component that displays contests grouped by status
export default function ContestPage({
  activeContests,
  upcomingContests,
  pastContests,
}: ContestPageProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  function handleAuthRequired() {
    setAuthModalOpen(true);
  }

  return (
    <div className="contest-page">
      <h1 className="contest-page__heading">Contests</h1>

      <ContestSection
        title="Active Contests"
        contests={activeContests}
        onAuthRequired={handleAuthRequired}
      />
      <ContestSection
        title="Upcoming Contests"
        contests={upcomingContests}
        onAuthRequired={handleAuthRequired}
      />
      <ContestSection
        title="Past Contests"
        contests={pastContests}
        onAuthRequired={handleAuthRequired}
      />

      {/* Auth modal — opens when unauthenticated user attempts to join */}
      <AuthModal isOpen={authModalOpen} />

      <style>{`
        /* Base — 320px */
        .contest-page {
          padding: 12px;
          max-width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .contest-page__heading {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .contest-section {
          margin-bottom: 32px;
        }

        .contest-section__title {
          font-size: 1.1rem;
          margin-bottom: 12px;
        }

        .contest-section__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .contest-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 12px;
          box-sizing: border-box;
        }

        .contest-card__title {
          font-size: 1rem;
          margin-bottom: 6px;
        }

        .contest-card__description {
          font-size: 0.875rem;
          color: #666;
          margin-bottom: 8px;
        }

        .contest-card__meta {
          font-size: 0.75rem;
          color: #999;
          margin-bottom: 10px;
        }

        .contest-card__action {
          display: inline-block;
        }

        .contest-card__btn {
          padding: 6px 14px;
          border-radius: 4px;
          border: none;
          background-color: #1a73e8;
          color: white;
          cursor: pointer;
          font-size: 0.875rem;
          }

        .contest-card__btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        /* 375px — small phones */
        @media (min-width: 375px) {
          .contest-page {
            padding: 16px;
          }
        }

        /* 768px — tablets */
        @media (min-width: 768px) {
          .contest-page {
            padding: 24px;
          }

          .contest-page__heading {
            font-size: 2rem;
          }

          .contest-section__title {
            font-size: 1.25rem;
          }

          .contest-section__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* 1024px — desktop */
        @media (min-width: 1024px) {
          .contest-page {
            padding: 32px;
          }

          .contest-section__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
