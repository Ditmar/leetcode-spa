import { useState } from 'react';

import { ContestEnrollment } from '../../../component-catalog/ContestEnrollment/ContestEnrollment';
import { useAppConfig } from '../../../context/AppConfigContext';
import { contestsService } from '../../../services/contests/contestsService';
import AuthModal from '../AuthModal/AuthModal';

import type { ContestPageProps } from './ContestPage.types';
import type { ContestDetail } from '../../../services/contests/contestsService.types';

function ContestCard({
  contest,
  onAuthRequired,
}: {
  contest: ContestDetail;
  onAuthRequired: () => void;
}) {
  const { user } = useAppConfig();
  const isAuthenticated = !!user;

  async function handleEnroll(contestId: number) {
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }
    await contestsService.joinContest(contestId);
  }

  function handleStartContest(contestId: number) {
    globalThis.location.href = `/problems?contest=${contestId}`;
  }

  return (
    <div className="contest-card">
      <h3 className="contest-card__title">{contest.title}</h3>
      {contest.description && <p className="contest-card__description">{contest.description}</p>}
      <p className="contest-card__meta">{contest.participantsCount ?? 0} participants</p>
      <ContestEnrollment
        contest={contest}
        onEnroll={handleEnroll}
        onStartContest={handleStartContest}
      />
    </div>
  );
}

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

      <AuthModal isOpen={authModalOpen} />

      <style>{`
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

        @media (min-width: 375px) {
          .contest-page {
            padding: 16px;
          }
        }

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
